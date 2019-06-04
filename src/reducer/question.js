const defaultState = {
  problems: [{answer:1}, {answer:2}]
}

export default function(state = defaultState, action){
  if(action.type==="REPLY"){
    if(action.response===state.problems[0].answer){
      return {problems: state.problems.slice(1)}   // 先頭を取り除く
    }
  }
  return state
}
