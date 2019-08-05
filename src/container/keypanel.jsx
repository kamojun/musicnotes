import { connect } from 'react-redux'
import KeyCircle from '../component/keypanel.jsx'

// クリックされたら、REPLYというアクションを送るようにしたもの
function mapDispatchToProps(dispatch) {
  return { onClick: e => dispatch({ type: "REPLY", response: e.target.dataset.midi }) }
}

export default connect(null, mapDispatchToProps)(KeyCircle) // こうすると、propsにはdispatchのみ入る。なぜだか。
