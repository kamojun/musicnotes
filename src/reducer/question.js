function createProblems(num){
  return [...Array(num).keys()].map(i=>({answer: i+1}))
}

// ↓の引数の解説
// この関数は実際はfunction()と引数なしで呼び出される。
// すると、かっこのすぐ内側の '='をみて、function({})として呼び直される(?)
// するとさらにfunction({})はfunction({problems=[], started=false})
// となってもう一度呼び直される。ということかな。どうしても変な書き方になる
// まあここまでしなくても良い気もしなくもない。
export default function({problems=[], started=false, finished=null} = {}, action){return(
  action.type==="START" ?
    {problems: createProblems(7), started:true, finished:false} :
  action.type==="RESET" || action.type==="STOP" ?
    {problems: [], started:false, finished:null} :
  action.type==="REPLY" && started ?
    {
      problems: +action.response===problems[0].answer ? problems.slice(1) : problems,
      // started: problems.length===1 ? false : true    // 最後の問題が回答された場合は、終了する ... 終了する時、タイマー止めたいのだがどうするのか
      started,
      finished: problems.length===1 ? true : false
    } :
  {problems, started, finished}
)}

// const defaultState = {problems:[], started:false}
// export default function(state = {problems:[], started:false}, action){return(
//   action.type==="START" ?
//     {problems: createProblems(7), started:true} :
//   action.type==="RESET" ?
//     {problems: [], started:false} :
//   action.type==="REPLY" && started ?
//     {
//       problems: +action.response===problems[0].answer ? problems.slice(1) : problems,
//       started: problems.length===1 ? false : true    // 最後の問題が回答された場合は、終了する
//     } :
//   state
// )}
