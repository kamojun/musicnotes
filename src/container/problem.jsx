import React from 'react'
import {connect} from 'react-redux'

function Problem({problems, finished}){return(
  <div>
    <p>{problems.length > 0 ? problems[0].answer : finished ? "もう一回!" : "ここに問題"}</p>
  </div>
)}

// コンポーネントの初期化にはpropsを渡すが、そのpropsとして、redux storeのstate
// を渡しますよ、ということ。この場合だとそうなるが
// 実際はstateをそのまま渡さなくても、いくらか加工して渡せる
function mapStateToProps({question:{problems, finished}}) {
  if(finished){
    document.getElementById('timerbutton').click();   // problem containerの方で、問題が終了したということをtimer containerに伝えたい。
  }
  return {problems, finished}
}

export default connect(mapStateToProps)(Problem);

// export default Fquestion
