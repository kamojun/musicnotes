const defaultState = {
  problems: [1,2,3,4,5,6,7].map(i=>({answer: i}))
}

export default function(state = defaultState, action){
  if(action.type==="REPLY"){
    if(+action.response===state.problems[0].answer){
      console.log("CORRECT!!")
      return {problems: state.problems.slice(1)}   // 先頭を取り除く
    }
  }
  return state
}
