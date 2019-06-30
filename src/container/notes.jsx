import React from 'react'
import {connect} from 'react-redux'
import Notes from '../component/notes.jsx'

// コンポーネントの初期化にはpropsを渡すが、そのpropsとして、redux storeのstate
// を渡しますよ、ということ。この場合だとそうなるが
// 実際はstateをそのまま渡さなくても、いくらか加工して渡せる
function mapStateToProps({question:{problems}}) {
  return {note:problems.length > 0 ? problems[0].problem : null}
}

export default connect(mapStateToProps)(Notes);
