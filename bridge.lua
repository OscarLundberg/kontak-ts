local json = require("json")

local timeout = 0
local prevCommandId = ""
local JOB_FILE = os.getenv("KONTAK_TS_JOB_FILE")

local function log(msg)
  local logfile = JOB_FILE .. ".log"
  local logfilehandle = io.open(logfile, "a")

  if (not logfilehandle) then error("No such file") end;
  io.output(logfilehandle)
  io.write(os.date("%X") .. " " .. msg .. "\n")
end

log("Called with JOB_ID " .. JOB_FILE)

while true do
  ::continue::
  if timeout > 1000000 then os.exit(10) end

  local nextInstruction = JOB_FILE

  log("[New command]")
  log("Opening file " .. nextInstruction)
  local file = io.open(nextInstruction, "r")
  if (not file) then error("No such file") end
  io.input(file)
  local instruction = io.read()
  local instruction = json.decode(instruction)

  if string.find(instruction["command"], "KILL") then
    log("Received exit command")
    os.exit(0)
  end

  if instruction["output_file"] == prevCommandId then
    goto continue
  end

  log(instruction["command"])

  local args = instruction["args"]
  local output = Kontakt[instruction["command"]](table.unpack(args))
  local resultPath = instruction["output_file"]

  log("[Output]")
  log("Opening file " .. resultPath)

  file = io.open(resultPath, "w")
  if (not file) then error("No such file") end
  io.output(file)
  io.write(json.encode(output))
  prevCommandId = instruction["output_file"]

  timeout = timeout + 1
end
