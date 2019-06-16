function createProblems(num){
  return [...Array(num).keys()].map(i=>({problem: i+1, answer:`0,${i+1}`}))
}

const defaultState = {
  problems: [],
  timerOn: false,
  hasJustFinished: false,   // 一度回答を完結した場合
  numCycle: 0,
}

// ↓の引数の解説
// この関数は実際はfunction()と引数なしで呼び出される。
// すると、かっこのすぐ内側の '='をみて、function({})として呼び直される(?)
// するとさらにfunction({})はfunction({problems=[], started=false})
// となってもう一度呼び直される。ということかな。どうしても変な書き方になる
// まあここまでしなくても良い気もしなくもない。
export default function({problems, timerOn, hasJustFinished, numCycle} = defaultState, action){return(
  action.type==="START" ?   // 開始するとき
    {problems: createProblems(7), timerOn:true, hasJustFinished:false, numCycle} :
  action.type==="RESET" || action.type==="STOP" ?   // questionとしてはこの２つは区別しない
    {problems: [], timerOn:false, hasJustFinished:false, numCycle:numCycle+1} :
  action.type==="REPLY" && timerOn && action.response===problems[0].answer ?   // 正答した時
    {
      problems: problems.slice(1),
      timerOn,
      hasJustFinished: problems.length===1 ? true : false,
      numCycle
    } :
  {problems, timerOn, hasJustFinished, numCycle}   // 誤答した時など
)}
