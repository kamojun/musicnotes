import React from 'react'
import {connect} from 'react-redux'

function Problem({problems}){return(
  <div>
    <p>{problems[0].answer}</p>
  </div>
)}

// コンポーネントの初期化にはpropsを渡すが、そのpropsとして、redux storeのstate
// を渡しますよ、ということ。この場合だとそうなるが
// 実際はstateをそのまま渡さなくても、いくらか加工して渡せる
function mapStateToProps(state) {
  return state
}

// state以外にも、別に関数を作ってある種のpropsとして渡すことができる。
// つまりprops.handleClickという関数を、store.dispatchを用いて作っている。
function mapDispatchToProps(dispatch) {
  return {
    handleClick: () =>{
       dispatch({ type: 'CORRECT' })
     }    // これで、propsにhandleClickが追加されるのかな
  }
}
// export default connect(mapStateToProps, mapDispatchToProps)(Question);
// export default connect()(Problem);
export default connect(mapStateToProps)(Problem);

// export default Fquestion
