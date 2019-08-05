import { connect } from 'react-redux'
import UISelector from '../component/uiselector.jsx'

// クリックされたら、REPLYというアクションを送るようにしたもの
function mapDispatchToProps(dispatch) {
  return { onClick: e => dispatch({ type: "SWITCH_UI", selection: e.target.value }) }
}

function mapStateToProps({ ui: { index } }) {
  return { index }
}

export default connect(mapStateToProps, mapDispatchToProps)(UISelector) // こうすると、propsにはdispatchのみ入る。なぜだか。
