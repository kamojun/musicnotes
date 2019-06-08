const defaultState = {
  start_time: null,
  elapsed_time: null,
}

export default function(state = defaultState, action){
  return(
    action.type==="START" ?
      {...state, start_time: Date.now(), elapsed_time: null} :
    action.type==="STOP" ?
      {...state, elapsed_time: Date.now()-state.start_time, start_time: null} :
    action.type==="RESET" ?
      {start_time: null, elapsed_time: null} : state
  )
}
