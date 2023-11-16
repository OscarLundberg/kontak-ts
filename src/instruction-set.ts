
      export type Output = "string" | "bool" | "void" | "float" | "integer" | "table" | "integer?" | "string?" | "float?" | "start: integer?, end: integer?";
      export class InstructionSet<T extends {[key in Output]: any}> { 
      constructor(private kontakt: { execCommandRawAsync<K extends Output>(a1:string, a2:K, args:any):Promise<ReturnType<T[K]>>}){}
      
      /**
       * @summary Returns the title of the multi script in the specified multi script slot.
       */ 
      getMultiScriptName(multiScriptIdx:number){ return this.kontakt.execCommandRawAsync("get_multi_script_name", "string", {multiScriptIdx}) }

      /**
       * @summary Returns the complete multi script contained in the specified multi script slot.
       */ 
      getMultiScriptSource(multiScriptIdx:number){ return this.kontakt.execCommandRawAsync("get_multi_script_source", "string", {multiScriptIdx}) }

      /**
       * @summary Returns true if the specified multi script slot is bypassed.
       */ 
      isMultiScriptBypassed(multiScriptIdx:number){ return this.kontakt.execCommandRawAsync("is_multi_script_bypassed", "bool", {multiScriptIdx}) }

      /**
       * @summary Returns true if the specified multi script slot is protected with a password.
       */ 
      isMultiScriptProtected(multiScriptIdx:number){ return this.kontakt.execCommandRawAsync("is_multi_script_protected", "bool", {multiScriptIdx}) }

      /**
       * @summary Sets the name of the multi.
       */ 
      setMultiName(name:string){ return this.kontakt.execCommandRawAsync("set_multi_name", "void", {name}) }

      /**
       * @summary Bypasses the specified script.
       */ 
      setMultiScriptBypassed(scriptIdx:number, bypass:boolean){ return this.kontakt.execCommandRawAsync("set_multi_script_bypassed", "void", {scriptIdx, bypass}) }

      /**
       * @summary Sets the name of the script.This will be displayed in the script slot header or the script tab if visible in performance view.
       */ 
      setMultiScriptName(scriptIdx:number, name:string){ return this.kontakt.execCommandRawAsync("set_multi_script_name", "void", {scriptIdx, name}) }

      /**
       * @summary Sets the multi script source by passing an absolute filepath as argument.
       */ 
      setMultiScriptSource(scriptIdx:number, source:string){ return this.kontakt.execCommandRawAsync("set_multi_script_source", "void", {scriptIdx, source}) }

      /**
       * @summary Save options can be defined by passing a table with one or more of the following entries:mode: save_modes (default: “patch”)absolute_paths: boolean (default: false)compress_samples: boolean (default: false)samples_sub_dir: stringIndividual entries of this table can be omitted. In that case the default value is used.
       */ 
      saveMulti(filename:string, options:Record<string, any>){ return this.kontakt.execCommandRawAsync("save_multi", "void", {filename, options}) }

      /**
       * @summary Loads the specified multi. The whole instrument rack is reset beforehand.
       */ 
      loadMulti(filename:string){ return this.kontakt.execCommandRawAsync("load_multi", "void", {filename}) }

      /**
       * @summary Returns the specified aux send level of the specified instrument.
       */ 
      getInstrumentAuxLevel(instrumentIdx:number, auxIndex:number){ return this.kontakt.execCommandRawAsync("get_instrument_aux_level", "float", {instrumentIdx, auxIndex}) }

      /**
       * @summary Returns the MIDI channel of the specified instrument.
       */ 
      getInstrumentMidiChannel(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_midi_channel", "integer", {instrumentIdx}) }

      /**
       * @summary Returns the mute state of the specified instrument.
       */ 
      getInstrumentMute(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_mute", "bool", {instrumentIdx}) }

      /**
       * @summary Returns the name of the specified instrument.
       */ 
      getInstrumentName(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_name", "string", {instrumentIdx}) }

      /**
       * @summary Returns specified instrument’s options as a table with the following entries:Instrumentkey_switch: integer (default: nil) key_range_from: integer (default: 0)key_range_to: integer (default: 127) velocity_range_from: integer (default: 0)velocity_range_to: integer (default: 127)midi_transpose: integer (default: 0)wallpaper: string (default: nil)Voice Handlingvoice_stealing_mode: voice_stealing_modes (default: “oldest”)voice_stealing_fadeout: integer (default: 10)time_machine_voice_limit: integer (default: 8)time_machine_voice_limit_hq: integer (default: 4)time_machine_use_legacy: boolean (default: false)DFDdfd_buffersize: integer (default: 60)background_loading: boolean (default: true)Controllercc_64_mode: cc64_modes (default: “pedal_and_cc”) use_cc_120_123: boolean (default: true) use_cc_7_10: boolean (default: true)cc_7_range: integer (default: 0)Snapshotsshow_factory_snapshots: boolean (default: true)Infoinfo_icon: integer (default: 28)info: string (default: "(null)")info_author: string (default: “Kontakt”)info_url: string (default: “(null)”)Individual entries of this table can be omitted. In that case the default value is used.
       */ 
      getInstrumentOptions(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_options", "table", {instrumentIdx}) }

      /**
       * @summary Returns the audio output channel of the specified instrument.
       */ 
      getInstrumentOutputChannel(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_output_channel", "integer", {instrumentIdx}) }

      /**
       * @summary Returns the output panorama of the specified instrument.
       */ 
      getInstrumentPan(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_pan", "float", {instrumentIdx}) }

      /**
       * @summary Returns the maximum polyphony of the specified instrument.
       */ 
      getInstrumentPolyphony(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_polyphony", "integer", {instrumentIdx}) }

      /**
       * @summary Returns the filename of the script linked to the specified script slot in the specified instrument.
       */ 
      getInstrumentScriptLinkedFilename(instrumentIdx:number, scriptIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_script_linked_filename", "string", {instrumentIdx, scriptIdx}) }

      /**
       * @summary Returns the title of the script in the specified script slot in the specified instrument.
       */ 
      getInstrumentScriptName(instrumentIdx:number, scriptIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_script_name", "string", {instrumentIdx, scriptIdx}) }

      /**
       * @summary Returns the complete script contained in the specified script slot in the specified instrument.
       */ 
      getInstrumentScriptSource(instrumentIdx:number, scriptIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_script_source", "string", {instrumentIdx, scriptIdx}) }

      /**
       * @summary Returns the solo state of the specified instrument.
       */ 
      getInstrumentSolo(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_solo", "bool", {instrumentIdx}) }

      /**
       * @summary Returns the tuning of the specified instrument in semitones.
       */ 
      getInstrumentTune(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_tune", "float", {instrumentIdx}) }

      /**
       * @summary Returns the output volume of the specified instrument in dB.
       */ 
      getInstrumentVolume(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_instrument_volume", "float", {instrumentIdx}) }

      /**
       * @summary Returns all voice groups of the specified instrument as a table with a maximum of 128 entries.
       */ 
      getVoiceGroups(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_voice_groups", "table", {instrumentIdx}) }

      /**
       * @summary Returns true if the specified script slot in the specified instrument is bypassed.
       */ 
      isInstrumentScriptBypassed(instrumentIdx:number, scriptIdx:number){ return this.kontakt.execCommandRawAsync("is_instrument_script_bypassed", "bool", {instrumentIdx, scriptIdx}) }

      /**
       * @summary Returns true if the script at the specified script slot of the specified instrument index is linked to a file in the resource container.
       */ 
      isInstrumentScriptLinked(instrumentIdx:number, scriptIdx:number){ return this.kontakt.execCommandRawAsync("is_instrument_script_linked", "bool", {instrumentIdx, scriptIdx}) }

      /**
       * @summary Returns true if the specified script slot in the specified instrument is protected with a password.
       */ 
      isInstrumentScriptProtected(instrumentIdx:number, scriptIdx:number){ return this.kontakt.execCommandRawAsync("is_instrument_script_protected", "bool", {instrumentIdx, scriptIdx}) }

      /**
       * @summary Resets the whole instrument at the specified instrument index to the default state.
       */ 
      resetInstrument(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("reset_instrument", "void", {instrumentIdx}) }

      /**
       * @summary Sets the level of the specified aux index for the specified instrument in dB. Range is -math.huge … 12.0.
       */ 
      setInstrumentAuxLevel(instrumentIdx:number, auxIndex:number, level:number){ return this.kontakt.execCommandRawAsync("set_instrument_aux_level", "void", {instrumentIdx, auxIndex, level}) }

      /**
       * @summary Sets the MIDI channel for the specified instrument. 0 is Omni, 1 … 64 is channels 1-16 across ports A-D.
       */ 
      setInstrumentMidiChannel(instrumentIdx:number, channel:number){ return this.kontakt.execCommandRawAsync("set_instrument_midi_channel", "void", {instrumentIdx, channel}) }

      /**
       * @summary Mutes the specified instrument.
       */ 
      setInstrumentMute(instrumentIdx:number, value:boolean){ return this.kontakt.execCommandRawAsync("set_instrument_mute", "void", {instrumentIdx, value}) }

      /**
       * @summary Sets the name of the specified instrument.
       */ 
      setInstrumentName(instrumentIdx:number, name:string){ return this.kontakt.execCommandRawAsync("set_instrument_name", "void", {instrumentIdx, name}) }

      /**
       * @summary Specified instrument’s options can be set by passing a table with one or more of the following entries:Instrumentkey_switch: integer (default: nil) key_range_from: integer (default: 0)key_range_to: integer (default: 127) velocity_range_from: integer (default: 0)velocity_range_to: integer (default: 127)midi_transpose: integer (default: 0)wallpaper: string (default: nil)Voice Handlingvoice_stealing_mode: voice_stealing_modes (default: “oldest”)voice_stealing_fadeout: integer (default: 10)time_machine_voice_limit: integer (default: 8)time_machine_voice_limit_hq: integer (default: 4)time_machine_use_legacy: boolean (default: false)DFDdfd_buffersize: integer (default: 60)background_loading: boolean (default: true)Controllercc_64_mode: cc64_modes (default: “pedal_and_cc”) use_cc_120_123: boolean (default: true) use_cc_7_10: boolean (default: true)cc_7_range: integer (default: 0)Snapshotsshow_factory_snapshots: boolean (default: true)Infoinfo_icon: integer (default: 28)info: string (default: “(null)”)info_author: string (default: “Kontakt”)info_url: string (default: “(null)”)Individual entries of this table can be omitted. In that case the default value is used.
       */ 
      setInstrumentOptions(instrumentIdx:number, options:Record<string, any>){ return this.kontakt.execCommandRawAsync("set_instrument_options", "void", {instrumentIdx, options}) }

      /**
       * @summary Sets the audio output for the specified instrument. Make sure to check how many outputs are available before setting!
       */ 
      setInstrumentOutputChannel(instrumentIdx:number, channel:number){ return this.kontakt.execCommandRawAsync("set_instrument_output_channel", "void", {instrumentIdx, channel}) }

      /**
       * @summary Sets the output panorama of the specified instrument. Range is -100.0 … 100.0.
       */ 
      setInstrumentPan(instrumentIdx:number, percent:number){ return this.kontakt.execCommandRawAsync("set_instrument_pan", "void", {instrumentIdx, percent}) }

      /**
       * @summary Sets the maximum polyphony for the specified instrument. Minimum value is 1.
       */ 
      setInstrumentPolyphony(instrumentIdx:number, voices:number){ return this.kontakt.execCommandRawAsync("set_instrument_polyphony", "void", {instrumentIdx, voices}) }

      /**
       * @summary Bypasses the specified script of the specified instrument.
       */ 
      setInstrumentScriptBypassed(instrumentIdx:number, scriptIdx:number, bypass:boolean){ return this.kontakt.execCommandRawAsync("set_instrument_script_bypassed", "void", {instrumentIdx, scriptIdx, bypass}) }

      /**
       * @summary Sets the filename of the script packed inside the resource container and linked to a script slot.
       */ 
      setInstrumentScriptLinkedFilename(instrumentIdx:number, scriptIdx:number, filename:string){ return this.kontakt.execCommandRawAsync("set_instrument_script_linked_filename", "void", {instrumentIdx, scriptIdx, filename}) }

      /**
       * @summary Sets the name of the script. This will be displayed in the script slot header or the script tab if visible in performance view.
       */ 
      setInstrumentScriptName(instrumentIdx:number, scriptIdx:number, name:string){ return this.kontakt.execCommandRawAsync("set_instrument_script_name", "void", {instrumentIdx, scriptIdx, name}) }

      /**
       * @summary Sets the script source by passing an absolute filepath as argument.
       */ 
      setInstrumentScriptSource(instrumentIdx:number, scriptIdx:number, source:string){ return this.kontakt.execCommandRawAsync("set_instrument_script_source", "void", {instrumentIdx, scriptIdx, source}) }

      /**
       * @summary Soloes the specified instrument.
       */ 
      setInstrumentSolo(instrumentIdx:number, value:boolean){ return this.kontakt.execCommandRawAsync("set_instrument_solo", "void", {instrumentIdx, value}) }

      /**
       * @summary Sets the output tuning of the specified instrument in semitones. Range is -36.0 … 36.0.
       */ 
      setInstrumentTune(instrumentIdx:number, semitones:number){ return this.kontakt.execCommandRawAsync("set_instrument_tune", "void", {instrumentIdx, semitones}) }

      /**
       * @summary Sets the output volume of the specified instrument in dB. Range is -math.huge … 12.0.
       */ 
      setInstrumentVolume(instrumentIdx:number, level:number){ return this.kontakt.execCommandRawAsync("set_instrument_volume", "void", {instrumentIdx, level}) }

      /**
       * @summary Sets voice groups of the specified instrument as a table with a maximum of 128 entries, matching the total number of possible voice groups. Nil table entries will set voice group to default values. Voice group parameters are defined in a sub-table:mode: voice_group_modes (default: “oldest”)name: string (default: ’’)voices: integer (default: 1)fade_time: integer (default: 10)prefer_released: boolean (default: true)exclusive_group: integer (default: nil)Individual entries of this table can be omitted. In that case the default value is used.
       */ 
      setVoiceGroups(instrumentIdx:number, voiceGroups:Record<string, any>){ return this.kontakt.execCommandRawAsync("set_voice_groups", "void", {instrumentIdx, voiceGroups}) }

      /**
       * @summary Inserts a new instrument at given or next available instrument index. Returns the index of the new instrument. Pass this index to functions taking instrument_idx as an argument.
       */ 
      addInstrument(instrumentIdx?:number){ return this.kontakt.execCommandRawAsync("add_instrument", "integer", {instrumentIdx}) }

      /**
       * @summary Inserts a new instrument bank at given or next available instrument slot. Returns the instrument slot of the new instrument bank.
       */ 
      addInstrumentBank(instrumentSlot?:number){ return this.kontakt.execCommandRawAsync("add_instrument_bank", "integer", {instrumentSlot}) }

      /**
       * @summary Removes the instrument at the specified instrument index from the multi.
       */ 
      removeInstrument(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("remove_instrument", "void", {instrumentIdx}) }

      /**
       * @summary Removes the instrument bank at the specified instrument slot from the multi.
       */ 
      removeInstrumentBank(instrumentSlot:number){ return this.kontakt.execCommandRawAsync("remove_instrument_bank", "void", {instrumentSlot}) }

      /**
       * @summary Loads an instrument to the specified slot index. If that slot is already occupied, next available slot is used. Returns the slot index of the new instrument. Note: contrary to most other functions, the slot index here can also refer to a slot within an instrument bank!
       */ 
      loadInstrument(filename:string, instrumentIdx?:number){ return this.kontakt.execCommandRawAsync("load_instrument", "integer", {filename, instrumentIdx}) }

      /**
       * @summary Loads the specified snapshot in the specified instrument index.
       */ 
      loadSnapshot(instrumentIdx:number, filename:string){ return this.kontakt.execCommandRawAsync("load_snapshot", "void", {instrumentIdx, filename}) }

      /**
       * @summary Save options can be defined by passing a table with one or more of the following entries:mode: save_modes (default: “patch”)absolute_paths: boolean (default: false)compress_samples: boolean (default: false)samples_sub_dir: stringIndividual entries of this table can be omitted. In that case the default value is used.
       */ 
      saveInstrument(instrumentIdx:number, filename:string, options:Record<string, any>){ return this.kontakt.execCommandRawAsync("save_instrument", "void", {instrumentIdx, filename, options}) }

      /**
       * @summary Saves the state of the instrument at the specified insturment index as a snapshot at the specified absolute path.
       */ 
      saveSnapshot(instrumentIdx:number, filename:string){ return this.kontakt.execCommandRawAsync("save_snapshot", "void", {instrumentIdx, filename}) }

      /**
       * @summary Returns the name of the specified group.
       */ 
      getGroupName(instrumentIdx:number, groupIdx:number){ return this.kontakt.execCommandRawAsync("get_group_name", "string", {instrumentIdx, groupIdx}) }

      /**
       * @summary Returns the amplifier panorama of the specified group.
       */ 
      getGroupPan(instrumentIdx:number, groupIdx:number){ return this.kontakt.execCommandRawAsync("get_group_pan", "float", {instrumentIdx, groupIdx}) }

      /**
       * @summary Returns the playback mode of the specified group’s Source module. See group_playback_modes.
       */ 
      getGroupPlaybackMode(instrumentIdx:number, groupIdx:number){ return this.kontakt.execCommandRawAsync("get_group_playback_mode", "string", {instrumentIdx, groupIdx}) }

      /**
       * @summary Returns specified group’s start options as a table with a maximum of 4 sub-tables:A certain group start option condition can be defined by passing a table. This table has different entries based on condition type:Start On Keymode: “key”key_min: integer (default: 24)key_max: integer (default: 24)next: group_start_operators (default: “and”)Start On Controllermode: “controller”controller: (default: 1)cc_min: (default: 0)cc_max: (default: 64)next: group_start_operators (default: “and”)Cycle Round Robinmode: “round_robin”position: integer (default: 1)next: group_start_operators (default: “and”)Cycle Randommode: “random”next: group_start_operators (default: “and”)Slice Triggermode: “slice_trigger”zone: integer (default: nil)slice: integer (default: nil)internal: boolean (default: false)next: group_start_operators (default: “and”)Individual entries of this table can be omitted. In that case the default value is used. See also: group_start_conditions
       */ 
      getGroupStartOptions(instrumentIdx:number, groupIdx:number){ return this.kontakt.execCommandRawAsync("get_group_start_options", "table", {instrumentIdx, groupIdx}) }

      /**
       * @summary Returns the tuning of the specified group in semitones.
       */ 
      getGroupTune(instrumentIdx:number, groupIdx:number){ return this.kontakt.execCommandRawAsync("get_group_tune", "float", {instrumentIdx, groupIdx}) }

      /**
       * @summary Returns the amplifier volume of the specified group in dB.
       */ 
      getGroupVolume(instrumentIdx:number, groupIdx:number){ return this.kontakt.execCommandRawAsync("get_group_volume", "float", {instrumentIdx, groupIdx}) }

      /**
       * @summary Returns the total number of groups in the specified instrument.
       */ 
      getNumGroups(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_num_groups", "integer", {instrumentIdx}) }

      /**
       * @summary Returns the voice group assigned to a group. If no voice group is assigned, the returned value is nil.
       */ 
      getVoiceGroup(instrumentIdx:number, groupIdx:number){ return this.kontakt.execCommandRawAsync("get_voice_group", "integer?", {instrumentIdx, groupIdx}) }

      /**
       * @summary Sets the name of the specified group.
       */ 
      setGroupName(instrumentIdx:number, groupIdx:number, name:string){ return this.kontakt.execCommandRawAsync("set_group_name", "void", {instrumentIdx, groupIdx, name}) }

      /**
       * @summary Sets the amplifier panorama of the specified group. Range is -100.0 … 100.0.
       */ 
      setGroupPan(instrumentIdx:number, groupIdx:number, pan:number){ return this.kontakt.execCommandRawAsync("set_group_pan", "void", {instrumentIdx, groupIdx, pan}) }

      /**
       * @summary Sets the playback mode of the specified group’s Source module. See group_playback_modes.
       */ 
      setGroupPlaybackMode(instrumentIdx:number, groupIdx:number, mode:string){ return this.kontakt.execCommandRawAsync("set_group_playback_mode", "void", {instrumentIdx, groupIdx, mode}) }

      /**
       * @summary Start On Keymode: “key”key_min: integer (default: 24)key_max: integer (default: 24)next: group_start_operators (default: “and”)Start On Controllermode: “controller”controller: (default: 1)cc_min: (default: 0)cc_max: (default: 64)next: group_start_operators (default: “and”)Cycle Round Robinmode: “round_robin”position: integer (default: 1)next: group_start_operators (default: “and”)Cycle Randommode: “random”next: group_start_operators (default: “and”)Slice Triggermode: “slice_trigger”zone: integer (default: nil)slice: integer (default: nil)internal: boolean (default: false)next: group_start_operators (default: “and”)Individual entries of this table can be omitted. In that case the default value is used. See also: group_start_conditions
       */ 
      setGroupStartOptions(instrumentIdx:number, groupIdx:number, options:Record<string, any>){ return this.kontakt.execCommandRawAsync("set_group_start_options", "void", {instrumentIdx, groupIdx, options}) }

      /**
       * @summary Sets the tuning of the specified group in semitones. Range is -36.0 … 36.0.
       */ 
      setGroupTune(instrumentIdx:number, groupIdx:number, tune:number){ return this.kontakt.execCommandRawAsync("set_group_tune", "void", {instrumentIdx, groupIdx, tune}) }

      /**
       * @summary Sets the amplifier volume of the specified group in dB. Range is -math.huge … 12.0.
       */ 
      setGroupVolume(instrumentIdx:number, groupIdx:number, volume:number){ return this.kontakt.execCommandRawAsync("set_group_volume", "void", {instrumentIdx, groupIdx, volume}) }

      /**
       * @summary Assign a voice group to a group. In order to reset the assignment pass nil.
       */ 
      setVoiceGroup(instrumentIdx:number, groupIdx:number, voiceGroup:number){ return this.kontakt.execCommandRawAsync("set_voice_group", "void", {instrumentIdx, groupIdx, voiceGroup}) }

      /**
       * @summary Returns the index of the new group. Pass this index to functions taking group_idx as an argument.
       */ 
      addGroup(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("add_group", "integer", {instrumentIdx}) }

      /**
       * @summary Removes the specified group from the specified instrument.
       */ 
      removeGroup(instrumentIdx:number, groupIdx:number){ return this.kontakt.execCommandRawAsync("remove_group", "bool", {instrumentIdx, groupIdx}) }

      /**
       * @summary Options table currently has a single entry:replace_zones: boolean (default: false)
       */ 
      loadGroup(instrumentIdx:number, groupIdx:number, filename:string, options:Record<string, any>){ return this.kontakt.execCommandRawAsync("load_group", "void", {instrumentIdx, groupIdx, filename, options}) }

      /**
       * @summary Save options can be defined by passing a table with one or more of the following entries:mode: save_modes (default: “patch”)absolute_paths: boolean (default: false)compress_samples: boolean (default: false)samples_sub_dir: stringIndividual entries of this table can be omitted. In that case the default value is used.
       */ 
      saveGroup(instrumentIdx:number, groupIdx:number, filename:string, options:Record<string, any>){ return this.kontakt.execCommandRawAsync("save_group", "void", {instrumentIdx, groupIdx, filename, options}) }

      /**
       * @summary Returns the total number of zones in the specified instrument.
       */ 
      getNumZones(instrumentIdx:number){ return this.kontakt.execCommandRawAsync("get_num_zones", "integer", {instrumentIdx}) }

      /**
       * @summary Returns the loop count of the specified zone’s loop.
       */ 
      getSampleLoopCount(instrumentIdx:number, zoneIdx:number, loopIdx:number){ return this.kontakt.execCommandRawAsync("get_sample_loop_count", "integer", {instrumentIdx, zoneIdx, loopIdx}) }

      /**
       * @summary Returns the loop length of the specified zone’s loop.
       */ 
      getSampleLoopLength(instrumentIdx:number, zoneIdx:number, loopIdx:number){ return this.kontakt.execCommandRawAsync("get_sample_loop_length", "integer", {instrumentIdx, zoneIdx, loopIdx}) }

      /**
       * @summary Returns the loop mode of the specified zone’s loop. See sample_loop_modes.
       */ 
      getSampleLoopMode(instrumentIdx:number, zoneIdx:number, loopIdx:number){ return this.kontakt.execCommandRawAsync("get_sample_loop_mode", "string", {instrumentIdx, zoneIdx, loopIdx}) }

      /**
       * @summary Returns the loop start of the specified zone’s loop.
       */ 
      getSampleLoopStart(instrumentIdx:number, zoneIdx:number, loopIdx:number){ return this.kontakt.execCommandRawAsync("get_sample_loop_start", "integer", {instrumentIdx, zoneIdx, loopIdx}) }

      /**
       * @summary Returns the loop tuning of the specified zone’s loop in semitones.
       */ 
      getSampleLoopTune(instrumentIdx:number, zoneIdx:number, loopIdx:number){ return this.kontakt.execCommandRawAsync("get_sample_loop_tune", "float", {instrumentIdx, zoneIdx, loopIdx}) }

      /**
       * @summary Returns the loop crossfade time of the specified zone’s loop.
       */ 
      getSampleLoopXfade(instrumentIdx:number, zoneIdx:number, loopIdx:number){ return this.kontakt.execCommandRawAsync("get_sample_loop_xfade", "integer", {instrumentIdx, zoneIdx, loopIdx}) }

      /**
       * @summary Returns a table containing the complete zone geometry (key and velocity ranges, root key, zone crossfades, etc.). See set_zone_geometry.
       */ 
      getZoneGeometry(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_geometry", "table", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the BPM of the specified zone.
       */ 
      getZoneGridBpm(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_grid_bpm", "float", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the grid mode of the specified zone. See zone_grid_modes.
       */ 
      getZoneGridMode(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_grid_mode", "string", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the index of the group which contains the specified zone.
       */ 
      getZoneGroup(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_group", "integer", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the high key of the specified zone.
       */ 
      getZoneHighKey(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_high_key", "integer", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the high key crossfade span of the specified zone.
       */ 
      getZoneHighKeyFade(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_high_key_fade", "integer", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the high velocity of the specified zone.
       */ 
      getZoneHighVelocity(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_high_velocity", "integer", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the high velocity crossfade span of the specified zone.
       */ 
      getZoneHighVelocityFade(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_high_velocity_fade", "integer", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the low key of the specified zone.
       */ 
      getZoneLowKey(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_low_key", "integer", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the low key crossfade span of the specified zone.
       */ 
      getZoneLowKeyFade(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_low_key_fade", "integer", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the low velocity of the specified zone.
       */ 
      getZoneLowVelocity(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_low_velocity", "float", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the low velocity crossfade span of the specified zone.
       */ 
      getZoneLowVelocityFade(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_low_velocity_fade", "float", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the panorama offset of the specified zone.
       */ 
      getZonePan(instrumentIdx:number, groupIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_pan", "float", {instrumentIdx, groupIdx}) }

      /**
       * @summary Returns the root key of the specified zone.
       */ 
      getZoneRootKey(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_root_key", "integer", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the absolute file path of the sample loaded in the specified zone.
       */ 
      getZoneSample(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_sample", "string?", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the number of audio channels in the sample loaded in the specified zone.
       */ 
      getZoneSampleChannels(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_sample_channels", "integer?", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the sample end position for the specified zone.
       */ 
      getZoneSampleEnd(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_sample_end", "integer", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the length of the sample loaded in the specified zone.
       */ 
      getZoneSampleFrames(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_sample_frames", "integer?", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the sample start position for the specified zone.
       */ 
      getZoneSampleStart(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_sample_start", "integer", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the sample start modulation range for the specified zone.
       */ 
      getZoneSampleStartModRange(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_sample_start_mod_range", "integer", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the tuning offset of the specified zone in semitones.
       */ 
      getZoneTune(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_tune", "float", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Returns the volume offset of the specified zone in dB.
       */ 
      getZoneVolume(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("get_zone_volume", "float", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Sets the loop count of the specified zone’s loop.
       */ 
      setSampleLoopCount(instrumentIdx:number, zoneIdx:number, loopIdx:number, count:number){ return this.kontakt.execCommandRawAsync("set_sample_loop_count", "void", {instrumentIdx, zoneIdx, loopIdx, count}) }

      /**
       * @summary Sets the length for the specified zone’s loop in sample frames.
       */ 
      setSampleLoopLength(instrumentIdx:number, zoneIdx:number, loopIdx:number, frames:number){ return this.kontakt.execCommandRawAsync("set_sample_loop_length", "void", {instrumentIdx, zoneIdx, loopIdx, frames}) }

      /**
       * @summary Sets the playback mode for the specified zone’s loop.See sample_loop_modes.
       */ 
      setSampleLoopMode(instrumentIdx:number, zoneIdx:number, loopIdx:number, mode:string){ return this.kontakt.execCommandRawAsync("set_sample_loop_mode", "void", {instrumentIdx, zoneIdx, loopIdx, mode}) }

      /**
       * @summary Sets the start of the specified zone’s loop.
       */ 
      setSampleLoopStart(instrumentIdx:number, zoneIdx:number, loopIdx:number, frame:number){ return this.kontakt.execCommandRawAsync("set_sample_loop_start", "void", {instrumentIdx, zoneIdx, loopIdx, frame}) }

      /**
       * @summary Sets the tuning of the specified zone’s loop in semitones. Range is -12.0 … 12.0.
       */ 
      setSampleLoopTune(instrumentIdx:number, zoneIdx:number, loopIdx:number, tune:number){ return this.kontakt.execCommandRawAsync("set_sample_loop_tune", "void", {instrumentIdx, zoneIdx, loopIdx, tune}) }

      /**
       * @summary Sets the length of the specified zone’s loop xfade in sample frames.
       */ 
      setSampleLoopXfade(instrumentIdx:number, zoneIdx:number, loopIdx:number, frames:number){ return this.kontakt.execCommandRawAsync("set_sample_loop_xfade", "void", {instrumentIdx, zoneIdx, loopIdx, frames}) }

      /**
       * @summary Applies geometry to the specified zone. This consists of a table of the following properties which specify the boundaries of the zone.Geometry:root_key (default: 36, range: 0 … 127)low_key (default: 0, range: 0 ... high_key)high_key (default: 127, range: low_key ...127)low_key_fade (default: 0, range: 0 ... span)high_key_fade (default: 0, range: 0 ... span)low_velocity (default: 1, range: 0 ... high_velocity)high_velocity (default: 127, range: low_velocity ... 127)low_velocity_fade (default: 0, range: 0 ... span)high_velocity_fade (default: 0, range: 0 ... span)span is defined as: high_key / velocity + 1 - low_key / velocity - opposite_fade_value. So if setting low_key_fade, use the value of high_key_fade as opposite_fade_value
       */ 
      setZoneGeometry(instrumentIdx:number, zoneIdx:number, geometry:Record<string, any>){ return this.kontakt.execCommandRawAsync("set_zone_geometry", "void", {instrumentIdx, zoneIdx, geometry}) }

      /**
       * @summary Sets the grid of the specified zone. See zone_grid_modes.
       */ 
      setZoneGrid(instrumentIdx:number, zoneIdx:number, mode:string, bpm:number){ return this.kontakt.execCommandRawAsync("set_zone_grid", "void", {instrumentIdx, zoneIdx, mode, bpm}) }

      /**
       * @summary See set_zone_geometry.
       */ 
      setZoneHighKey(instrumentIdx:number, zoneIdx:number, key:number){ return this.kontakt.execCommandRawAsync("set_zone_high_key", "void", {instrumentIdx, zoneIdx, key}) }

      /**
       * @summary See set_zone_geometry.
       */ 
      setZoneHighKeyFade(instrumentIdx:number, zoneIdx:number, keyFade:number){ return this.kontakt.execCommandRawAsync("set_zone_high_key_fade", "void", {instrumentIdx, zoneIdx, keyFade}) }

      /**
       * @summary See set_zone_geometry.
       */ 
      setZoneHighVelocity(instrumentIdx:number, zoneIdx:number, velocity:number){ return this.kontakt.execCommandRawAsync("set_zone_high_velocity", "void", {instrumentIdx, zoneIdx, velocity}) }

      /**
       * @summary See set_zone_geometry.
       */ 
      setZoneHighVelocityFade(instrumentIdx:number, zoneIdx:number, velocityFade:number){ return this.kontakt.execCommandRawAsync("set_zone_high_velocity_fade", "void", {instrumentIdx, zoneIdx, velocityFade}) }

      /**
       * @summary See set_zone_geometry.
       */ 
      setZoneLowKey(instrumentIdx:number, zoneIdx:number, key:number){ return this.kontakt.execCommandRawAsync("set_zone_low_key", "void", {instrumentIdx, zoneIdx, key}) }

      /**
       * @summary See set_zone_geometry.
       */ 
      setZoneLowKeyFade(instrumentIdx:number, zoneIdx:number, keyFade:number){ return this.kontakt.execCommandRawAsync("set_zone_low_key_fade", "void", {instrumentIdx, zoneIdx, keyFade}) }

      /**
       * @summary See set_zone_geometry.
       */ 
      setZoneLowVelocity(instrumentIdx:number, zoneIdx:number, velocity:number){ return this.kontakt.execCommandRawAsync("set_zone_low_velocity", "void", {instrumentIdx, zoneIdx, velocity}) }

      /**
       * @summary See set_zone_geometry.
       */ 
      setZoneLowVelocityFade(instrumentIdx:number, zoneIdx:number, velocityFade:number){ return this.kontakt.execCommandRawAsync("set_zone_low_velocity_fade", "void", {instrumentIdx, zoneIdx, velocityFade}) }

      /**
       * @summary Sets the panorama offset of the specified zone. Range is -100.0 … 100.0.
       */ 
      setZonePan(instrumentIdx:number, zoneIdx:number, pan:number){ return this.kontakt.execCommandRawAsync("set_zone_pan", "void", {instrumentIdx, zoneIdx, pan}) }

      /**
       * @summary See set_zone_geometry.
       */ 
      setZoneRootKey(instrumentIdx:number, zoneIdx:number, key:number){ return this.kontakt.execCommandRawAsync("set_zone_root_key", "void", {instrumentIdx, zoneIdx, key}) }

      /**
       * @summary Sets the absolute path of the sample to be loaded in the specified zone.
       */ 
      setZoneSample(instrumentIdx:number, zoneIdx:number, filename:string){ return this.kontakt.execCommandRawAsync("set_zone_sample", "void", {instrumentIdx, zoneIdx, filename}) }

      /**
       * @summary Sets the sample end of the sample loaded in the specified zone, in sample frames.
       */ 
      setZoneSampleEnd(instrumentIdx:number, zoneIdx:number, frame:number){ return this.kontakt.execCommandRawAsync("set_zone_sample_end", "void", {instrumentIdx, zoneIdx, frame}) }

      /**
       * @summary Sets the sample start of the sample loaded in the specified zone, in sample frames.
       */ 
      setZoneSampleStart(instrumentIdx:number, zoneIdx:number, frame:number){ return this.kontakt.execCommandRawAsync("set_zone_sample_start", "void", {instrumentIdx, zoneIdx, frame}) }

      /**
       * @summary Sets the sample start modulation range of the sample loaded in the specified zone, in sample frames.
       */ 
      setZoneSampleStartModRange(instrumentIdx:number, zoneIdx:number, frame:number){ return this.kontakt.execCommandRawAsync("set_zone_sample_start_mod_range", "void", {instrumentIdx, zoneIdx, frame}) }

      /**
       * @summary Sets the tuning offset of the specified zone in semitones. Range is -36.0 … 36.0.
       */ 
      setZoneTune(instrumentIdx:number, zoneIdx:number, tune:number){ return this.kontakt.execCommandRawAsync("set_zone_tune", "void", {instrumentIdx, zoneIdx, tune}) }

      /**
       * @summary Sets the volume offset of the specified zone in dB. Range is -36.0 … 36.0.
       */ 
      setZoneVolume(instrumentIdx:number, zoneIdx:number, volume:number){ return this.kontakt.execCommandRawAsync("set_zone_volume", "void", {instrumentIdx, zoneIdx, volume}) }

      /**
       * @summary The returned index refers the added zone. Pass this index to functions taking zone_idx as an argument.
       */ 
      addZone(instrumentIdx:number, groupIdx:number, filename:string){ return this.kontakt.execCommandRawAsync("add_zone", "integer", {instrumentIdx, groupIdx, filename}) }

      /**
       * @summary Removes the specified zone index from the instrument at the specified instrument index.
       */ 
      removeZone(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("remove_zone", "void", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Sets the loop points to the values stored in the sample metadata, if it exists.
       */ 
      restoreLoopsFromSample(instrumentIdx:number, zoneIdx:number){ return this.kontakt.execCommandRawAsync("restore_loops_from_sample", "void", {instrumentIdx, zoneIdx}) }

      /**
       * @summary Loads a source preset file (.NKP) to the specified group of an instrument.
       */ 
      loadSourcePreset(filename:string, instrumentIdx:number, groupIdx:number){ return this.kontakt.execCommandRawAsync("load_source_preset", "integer", {filename, instrumentIdx, groupIdx}) }

      /**
       * @summary Loads an effect preset file (.NKP) to the specified location based on the following arguments:instrument_or_output: if generic argument is output_fx, this is one of output channels in the Output panel (0 … 127), else it’s an instrument indexgroup: only valid when generic argument is group_fx, else set to -1slot: index of the slot to which the effect preset should be loadedgeneric: use one of FX chain location constants (group_fx, send_fx, etc.)
       */ 
      loadFxPreset(filename:string, instrumentOrOutputIdx:number, groupIdx:number, generic:number){ return this.kontakt.execCommandRawAsync("load_fx_preset", "integer", {filename, instrumentOrOutputIdx, groupIdx, generic}) }

      /**
       * @summary Loads a multi script preset file (.NKP) to the specified multi script slot.
       */ 
      loadMultiScriptPreset(filename:string, instrumentIdx:number, multiScriptIdx:number){ return this.kontakt.execCommandRawAsync("load_multi_script_preset", "integer", {filename, instrumentIdx, multiScriptIdx}) }

      /**
       * @summary Loads a script preset file (.NKP) to the specified script slot of an instrument.
       */ 
      loadScriptPreset(filename:string, instrumentIdx:number, scriptIdx:number){ return this.kontakt.execCommandRawAsync("load_script_preset", "integer", {filename, instrumentIdx, scriptIdx}) }

      /**
       * @summary Loads a complete effect chain preset file (.NKP) to the specified location based on the following arguments:instrument: instrument indexgroup: only valid when generic argument is group_fx, else set to -1generic: use one of FX chain location constants, except output_fx
       */ 
      loadFxChainPreset(filename:string, instrumentIdx:number, groupIdx:number, generic:number){ return this.kontakt.execCommandRawAsync("load_fx_chain_preset", "integer", {filename, instrumentIdx, groupIdx, generic}) }

      /**
       * @summary Creates or updates resource container.
       */ 
      createResourceContainer(instrumentIdx:number, filename:string){ return this.kontakt.execCommandRawAsync("create_resource_container", "void", {instrumentIdx, filename}) }

      /**
       * @summary Extracts information from an instrument on disk. The returned table contains the fields: file, format, version, library, num_instruments, num_groups, num_zones.
       */ 
      getFileInfo(filename:string){ return this.kontakt.execCommandRawAsync("get_file_info", "table", {filename}) }

      /**
       * @summary Runs one of available purge actions for the specified instrument. See instrument_purge_modes.
       */ 
      instrumentPurge(instrumentIdx:number, mode:string){ return this.kontakt.execCommandRawAsync("instrument_purge", "void", {instrumentIdx, mode}) }

      /**
       * @summary Decodes an NCW sample back to uncompressed WAV format.
       */ 
      ncwDecode(source:string, target:string){ return this.kontakt.execCommandRawAsync("ncw_decode", "void", {source, target}) }

      /**
       * @summary Encodes a WAV or AIFF sample to losslessly compressed NCW format.
       */ 
      ncwEncode(source:string, target:string){ return this.kontakt.execCommandRawAsync("ncw_encode", "void", {source, target}) }

      /**
       * @summary Analyzes file and returns the detected MIDI pitch or nil if detection fails.
       */ 
      detectPitch(file:string){ return this.kontakt.execCommandRawAsync("detect_pitch", "float?", {file}) }

      /**
       * @summary Analyzes file and returns the detected peak level or nil if detection fails.
       */ 
      detectPeak(file:string){ return this.kontakt.execCommandRawAsync("detect_peak", "float?", {file}) }

      /**
       * @summary Analyzes file and returns the detected RMS level or nil if detection fails.
       */ 
      detectRms(file:string){ return this.kontakt.execCommandRawAsync("detect_rms", "float?", {file}) }

      /**
       * @summary Analyzes file and returns the detected RMS level or nil if detection fails.
       */ 
      detectRms2(file:string, frameSize:number, hopSize:number){ return this.kontakt.execCommandRawAsync("detect_rms", "float?", {file, frameSize, hopSize}) }

      /**
       * @summary Analyzes file and returns the detected loudness level or nil if the detection fails.
       */ 
      detectLoudness(file:string){ return this.kontakt.execCommandRawAsync("detect_loudness", "float?", {file}) }

      /**
       * @summary Analyzes file and returns the detected loudness level or nil if the detection fails.
       */ 
      detectLoudness2(file:string, frameSize:number, hopSize:number){ return this.kontakt.execCommandRawAsync("detect_loudness", "float?", {file, frameSize, hopSize}) }

      /**
       * @summary Analyzes file and returns the detected loop points or nil if detection fails.
       */ 
      findLoop(file:string){ return this.kontakt.execCommandRawAsync("find_loop", "start: integer?, end: integer?", {file}) }

      /**
       * @summary Analyzes file and returns the detected loop points or nil if detection fails.
       */ 
      findLoop2(file:string, minStart:number, maxEnd:number, minLength:number){ return this.kontakt.execCommandRawAsync("find_loop", "start: integer?, end: integer?", {file, minStart, maxEnd, minLength}) }

      /**
       * @summary Returns the sample type of file. Returns one of the following types or nil if detection fails:druminstrument
       */ 
      detectSampleType(file:string){ return this.kontakt.execCommandRawAsync("detect_sample_type", "string", {file}) }

      /**
       * @summary Returns the drum type of file. Returns one of the following types or nil if detection failed.kicksnarehihat_closedhihat_opentomcymbalclapshakerpercussion_drumpercussion_other
       */ 
      detectDrumType(file:string){ return this.kontakt.execCommandRawAsync("detect_drum_type", "string", {file}) }

      /**
       * @summary Returns the instrument type of file. Return one of the following types or nil if detection fails.bassbowed_stringbrassfluteguitarkeyboardmalletorganplucked_stringreedsynthvocal
       */ 
      detectInstrumentType(file:string){ return this.kontakt.execCommandRawAsync("detect_instrument_type", "string", {file}) }
    }