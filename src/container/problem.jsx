import React from 'react'
import {connect} from 'react-redux'
import Timer from './timer2.jsx'

function Problem({problems, hasJustFinished, numCycle}){return(
  <div>
    <span>{problems.length > 0 ? problems[0].problem : numCycle > 0 ? "もう一回!" : "ここに問題"}</span>
    <Timer defaultText="初期値"/>
  </div>
)}

// コンポーネントの初期化にはpropsを渡すが、そのpropsとして、redux storeのstate
// を渡しますよ、ということ。この場合だとそうなるが
// 実際はstateをそのまま渡さなくても、いくらか加工して渡せる
function mapStateToProps({question}) {
  return question
}

export default connect(mapStateToProps)(Problem);

// export default Fquestion
