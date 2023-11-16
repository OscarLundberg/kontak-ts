local json = require("json")

local timeout = 0
local prevCommandId = ""
local JOB_FILE = os.getenv("KONTAK_TS_JOB_FILE")

while true do
  ::continue::
  if timeout > 1000000 then os.exit(10) end

  local nextInstruction = JOB_FILE

  local file = io.open(nextInstruction, "r")
  if (not file) then error("No such file") end
  io.input(file)
  local instruction = io.read()
  if instruction == nil then 
    goto continue
  end

  local instruction = json.decode(instruction)

  if string.find(instruction["command"], "KILL") then
    os.exit(0)
  end

  if instruction["output_file"] == prevCommandId then
    goto continue
  end

 
  local args = instruction["args"]
  local output;
  if string.find(instruction["command"], "PRELOAD_CONSTANTS") then
    output = {}
    for k,v in pairs(args) do
      output[v] = Kontakt[v];
    end
  else
    output = Kontakt[instruction["command"]](table.unpack(args))
  end
  local resultPath = instruction["output_file"]
  file = io.open(resultPath, "w")
  if (not file) then error("No such file") end

  local output_json = json.encode(output);

  io.output(file)
  io.write(output_json)
  io.flush()
  io.close()
  prevCommandId = instruction["output_file"]

  timeout = timeout + 1
end
