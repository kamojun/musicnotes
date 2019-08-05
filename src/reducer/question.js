function createProblems() {
  // return [...Array(num).keys()].map(i=>({problem: i+1, answer:`0,${i+1}`}))
  // return [...Array(num)].map(_ => GetRandom(NoteNums)).map(i => ({problem: i, answer:`${i}`}))
  return [...Permutation(Midis)].map(midi => ({ problem: midiToNote(midi), answer: `${midi % 12}` }))   // 問題はmidi, answerはkey
}

// const NoteNums = [-6,-5,-4,-3,-6,-5,-4,-3,1,2,3,4,5,6,7,11,12,13,14,15,16,17,21,22,23,14,15,16,17,21,22,23]
const octave = [...Array(12).keys()]
const Midis = [
  53, 54, 55, 56, 57, 58, 59,
  ...octave.map(i => i + 60), ...octave.map(i => i + 72),
  84, 85, 86, 87, 88
]
const getKeyNameAndAccidental = midi => (
  [0, 2, 4, 5, 7, 9, 11].includes(midi % 12) ?
    {
      keyName: "C_D_EF_G_A_B"[midi % 12],
      accidental: 0,
    } :
    ((accidental) => ({
      keyName: "C_D_EF_G_A_B"[midi % 12 - accidental],
      accidental,
    }))(Math.round(Math.random()) * 2 - 1)   // 1, -1をランダムに与える
)
const midiToNote = midi => ({
  octave: Math.floor(midi / 12) - 1,
  // keyName: "CCDDEFFGGAAB"[midi % 12],
  // accidental: 0,
  ...getKeyNameAndAccidental(midi),
  modulation: "C",
  clef: "G",
})
function GetRandom(arr) {
  const len = arr.length
  const index = Math.max(0, Math.min(len, Math.floor(len * Math.random())))
  console.log(index, arr[index])
  return arr[index]
}

function* Permutation(arr, last = null) {
  const len = arr.length
  if (len > 0) {
    const index = Math.max(0, Math.min(len, Math.floor(len * Math.random())))
    const now = arr[index]
    if (last === now) {
      yield* Permutation(arr, last)
    }
    else {
      yield now
      yield* Permutation([...arr.slice(0, index), ...arr.slice(index + 1)], now)
    }
  }
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
export default function ({ problems, timerOn, hasJustFinished, numCycle, } = defaultState, action) {
  return (
    action.type === "START" ?   // 開始するとき
      { problems: createProblems(), timerOn: true, hasJustFinished: false, numCycle, } :
      action.type === "RESET" || action.type === "STOP" ?   // questionとしてはこの２つは区別しない
        { problems: [], timerOn: false, hasJustFinished: false, numCycle: numCycle + 1, } :
        action.type === "REPLY" && timerOn && action.response === problems[0].answer ?   // 正答した時
          {
            problems: problems.slice(1),
            timerOn,
            hasJustFinished: problems.length === 1 ? true : false,
            numCycle
          } :
          { problems, timerOn, hasJustFinished, numCycle, }   // 誤答した時など
  )
}
