import React from 'react'
import { connect } from 'react-redux'
import Notes from '../component/notes.jsx'

// コンポーネントの初期化にはpropsを渡すが、そのpropsとして、redux storeのstate
// を渡しますよ、ということ。この場合だとそうなるが
// 実際はstateをそのまま渡さなくても、いくらか加工して渡せる
function mapStateToProps({ question: { problems } }) {
  const max_to_show = 4
  const to_show_num = ((problems.length + max_to_show - 1) % max_to_show) + 1   // 0 % 5 = 5にしたい
  const blank_num = max_to_show - to_show_num
  const { modulation, clef } = problems.length === 0 ?
    { modulation: "C", clef: "G" } :
    problems[0].problem  // 先頭のclef, modulationを使う
  // debugger;
  return {
    notes: [...[...Array(blank_num)].map(_ => null), ...problems.slice(0, to_show_num).map(p => p.problem)],
    modulation, clef,
  }
  //return {midi:problems.length > 0 ? problems[0].problem : null}
}

export default connect(mapStateToProps)(Notes);
