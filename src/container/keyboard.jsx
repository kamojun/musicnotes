import { connect } from 'react-redux'
import KeyBoard from '../component/keyboard.jsx'

// クリックされたら、REPLYというアクションを送るようにしたもの
function mapDispatchToProps(dispatch) {
  return { onClick: e=>dispatch({type: "REPLY", response: e.target.dataset.midi})}
}

export default connect(null, mapDispatchToProps)(KeyBoard) // こうすると、propsにはdispatchのみ入る。なぜだか。
