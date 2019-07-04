import React from 'react'
import {connect} from 'react-redux'
import Notes from '../component/notes.jsx'

// コンポーネントの初期化にはpropsを渡すが、そのpropsとして、redux storeのstate
// を渡しますよ、ということ。この場合だとそうなるが
// 実際はstateをそのまま渡さなくても、いくらか加工して渡せる
function mapStateToProps({question:{problems}}) {
  const to_show_num = ((problems.length+4) % 5)+1   // 0 % 5 = 5にしたい
  const blank_num = 5 - to_show_num
  return {midis:[...[...Array(blank_num)].map(_=>null),...problems.slice(0,to_show_num).map(p => p.problem)]}
  //return {midi:problems.length > 0 ? problems[0].problem : null}
}

export default connect(mapStateToProps)(Notes);
