export class Constants {
   constructor(private kontakt: {preloadedConstants:Record<string, any>}){
  }

  /**
   * @internal 
   **/  
  list(){ return ["max_num_multi_scripts","cc64_modes","instrument_purge_modes","max_num_instrument_aux","max_num_instruments","max_num_scripts","max_num_voice_groups","save_modes","voice_stealing_modes","group_playback_modes","group_start_conditions","group_start_operators","max_num_group_start_criteria","max_num_groups","voice_group_modes","max_num_sample_loops","max_num_zones","sample_loop_modes","zone_grid_modes","bus_fx","group_fx","insert_fx","main_fx","output_fx","send_fx","desktop_path","documents_path","factory_path","macos","ni_content_path","non_player_content_base_path","snapshot_path","windows","colored_output","edit_instrument","script_executed_from_instrument","script_file","script_path","version"]  }
  
    /**
     * @summary 
     * As of KONTAKT 7.5, this constant returns 5.
     **/
    get MAX_NUM_MULTI_SCRIPTS(){ return this.kontakt.preloadedConstants["max_num_multi_scripts"] as number }
  

    /**
     * @summary 
     * - `midi_exclusive`
	* - `pedal_and_cc`
	* - `pedal_exclusive`
     **/
    get CC64_MODES(){ return this.kontakt.preloadedConstants["cc64_modes"] as Record<string, any> }
  

    /**
     * @summary 
     * - `all_samples`
	* - `reload_all_samples`
	* - `reset_markers`
	* - `update_sample_pool`
     **/
    get INSTRUMENT_PURGE_MODES(){ return this.kontakt.preloadedConstants["instrument_purge_modes"] as Record<string, any> }
  

    /**
     * @summary 
     * As of KONTAKT 7.5, this constant returns 4.
     **/
    get MAX_NUM_INSTRUMENT_AUX(){ return this.kontakt.preloadedConstants["max_num_instrument_aux"] as number }
  

    /**
     * @summary 
     * As of KONTAKT 7.5, this constant returns 64.
     **/
    get MAX_NUM_INSTRUMENTS(){ return this.kontakt.preloadedConstants["max_num_instruments"] as number }
  

    /**
     * @summary 
     * As of KONTAKT 7.5, this constant returns 5.
     **/
    get MAX_NUM_SCRIPTS(){ return this.kontakt.preloadedConstants["max_num_scripts"] as number }
  

    /**
     * @summary 
     * As of KONTAKT 7.5, this constant returns 128.
     **/
    get MAX_NUM_VOICE_GROUPS(){ return this.kontakt.preloadedConstants["max_num_voice_groups"] as number }
  

    /**
     * @summary 
     * - `monolith`
	* - `patch`
	* - `samples`
     **/
    get SAVE_MODES(){ return this.kontakt.preloadedConstants["save_modes"] as Record<string, any> }
  

    /**
     * @summary 
     * - `any`
	* - `highest`
	* - `lowest`
	* - `newest`
	* - `oldest`
     **/
    get VOICE_STEALING_MODES(){ return this.kontakt.preloadedConstants["voice_stealing_modes"] as Record<string, any> }
  

    /**
     * @summary 
     * - `beat_machine`
	* - `dfd`
	* - `mpc60_machine`
	* - `s1200_machine`
	* - `sampler`
	* - `time_machine_1`
	* - `time_machine_2`
	* - `time_machine_pro`
	* - `tone_machine`
	* - `wavetable`
     **/
    get GROUP_PLAYBACK_MODES(){ return this.kontakt.preloadedConstants["group_playback_modes"] as Record<string, any> }
  

    /**
     * @summary 
     * - `controller`
	* - `key`
	* - `random`
	* - `round_robin`
	* - `slice_trigger`
     **/
    get GROUP_START_CONDITIONS(){ return this.kontakt.preloadedConstants["group_start_conditions"] as Record<string, any> }
  

    /**
     * @summary 
     * - `and`
	* - `and_not`
	* - `or`
     **/
    get GROUP_START_OPERATORS(){ return this.kontakt.preloadedConstants["group_start_operators"] as Record<string, any> }
  

    /**
     * @summary 
     * As of KONTAKT 7.5, this constant returns 4.
     **/
    get MAX_NUM_GROUP_START_CRITERIA(){ return this.kontakt.preloadedConstants["max_num_group_start_criteria"] as number }
  

    /**
     * @summary 
     * As of KONTAKT 7.5, this constant returns 4096.
     **/
    get MAX_NUM_GROUPS(){ return this.kontakt.preloadedConstants["max_num_groups"] as number }
  

    /**
     * @summary 
     * - `any`
	* - `highest`
	* - `lowest`
	* - `newest`
	* - `oldest`
     **/
    get VOICE_GROUP_MODES(){ return this.kontakt.preloadedConstants["voice_group_modes"] as Record<string, any> }
  

    /**
     * @summary 
     * As of KONTAKT 7.5, this constant returns 8.
     **/
    get MAX_NUM_SAMPLE_LOOPS(){ return this.kontakt.preloadedConstants["max_num_sample_loops"] as number }
  

    /**
     * @summary 
     * As of KONTAKT 7.5, this constant returns 98304.
     **/
    get MAX_NUM_ZONES(){ return this.kontakt.preloadedConstants["max_num_zones"] as number }
  

    /**
     * @summary 
     * - `off`
	* - `until_end`
	* - `until_end_alt`
	* - `until_release`
	* - `until_release_alt`
     **/
    get SAMPLE_LOOP_MODES(){ return this.kontakt.preloadedConstants["sample_loop_modes"] as Record<string, any> }
  

    /**
     * @summary 
     * - `auto`
	* - `fixed`
	* - `none`
     **/
    get ZONE_GRID_MODES(){ return this.kontakt.preloadedConstants["zone_grid_modes"] as Record<string, any> }
  

    /**
     * @summary 
     * Points a preset loading function to the first instrument bus FX chain. To reach other instrument buses, add a constant from 1 to 15.
     **/
    get BUS_FX(){ return this.kontakt.preloadedConstants["bus_fx"] as number }
  

    /**
     * @summary 
     * Points a preset loading function to the group FX chain.
     **/
    get GROUP_FX(){ return this.kontakt.preloadedConstants["group_fx"] as number }
  

    /**
     * @summary 
     * Points a preset loading function to the insert FX chain.
     **/
    get INSERT_FX(){ return this.kontakt.preloadedConstants["insert_fx"] as number }
  

    /**
     * @summary 
     * Points a preset loading function to the main FX chain.
     **/
    get MAIN_FX(){ return this.kontakt.preloadedConstants["main_fx"] as number }
  

    /**
     * @summary 
     * Points a preset loading function to the output FX chain. Does not apply to load_fx_chain_preset().
     **/
    get OUTPUT_FX(){ return this.kontakt.preloadedConstants["output_fx"] as number }
  

    /**
     * @summary 
     * Points a preset loading function to the send FX chain.
     **/
    get SEND_FX(){ return this.kontakt.preloadedConstants["send_fx"] as number }
  

    /**
     * @summary 
     * Returns the absolute path to operating system’s Desktop folder.
     **/
    get DESKTOP_PATH(){ return this.kontakt.preloadedConstants["desktop_path"] as string }
  

    /**
     * @summary 
     * Returns the absolute path to operating system’s Documents folder.
     **/
    get DOCUMENTS_PATH(){ return this.kontakt.preloadedConstants["documents_path"] as string }
  

    /**
     * @summary 
     * Returns the KONTAKT factory data path (contains wavetables, NKP presets, and so on).
     **/
    get FACTORY_PATH(){ return this.kontakt.preloadedConstants["factory_path"] as string }
  

    /**
     * @summary 
     * Returns true if the system running the Lua script is macOS.
     **/
    get MACOS(){ return this.kontakt.preloadedConstants["macos"] as boolean }
  

    /**
     * @summary 
     * Returns the absolute path to NI Content folder.
     **/
    get NI_CONTENT_PATH(){ return this.kontakt.preloadedConstants["ni_content_path"] as string }
  

    /**
     * @summary 
     * Returns the non-Player content base path (which is optionally set in KONTAKT’s Options > Loading pane).
     **/
    get NON_PLAYER_CONTENT_BASE_PATH(){ return this.kontakt.preloadedConstants["non_player_content_base_path"] as string }
  

    /**
     * @summary 
     * Returns the User Content data path, which contains snapshots saved by the user.
     **/
    get SNAPSHOT_PATH(){ return this.kontakt.preloadedConstants["snapshot_path"] as string }
  

    /**
     * @summary 
     * Returns true if the system running the Lua script is Windows.
     **/
    get WINDOWS(){ return this.kontakt.preloadedConstants["windows"] as boolean }
  

    /**
     * @summary 
     * Controls if terminal output is colored or not.
     **/
    get COLORED_OUTPUT(){ return this.kontakt.preloadedConstants["colored_output"] as boolean }
  

    /**
     * @summary 
     * Index of the currently edited instrument.
     **/
    get EDIT_INSTRUMENT(){ return this.kontakt.preloadedConstants["edit_instrument"] as number }
  

    /**
     * @summary 
     * Index of the instrument slot from which the script was loaded. nil is multi.
     **/
    get SCRIPT_EXECUTED_FROM_INSTRUMENT(){ return this.kontakt.preloadedConstants["script_executed_from_instrument"] as number }
  

    /**
     * @summary 
     * Returns filename of the currently running Lua script, including the extension.
     **/
    get SCRIPT_FILE(){ return this.kontakt.preloadedConstants["script_file"] as string }
  

    /**
     * @summary 
     * Returns the absolute path to the folder containing the currently running Lua script.
     **/
    get SCRIPT_PATH(){ return this.kontakt.preloadedConstants["script_path"] as string }
  

    /**
     * @summary 
     * Returns the current version of the running instance of KONTAKT.
     **/
    get VERSION(){ return this.kontakt.preloadedConstants["version"] as string }
  
  }