const defaultState = {
  index: 0
}

export default (state = defaultState, action) => {
  return (
    action.type === "SWITCH_UI" ? { index: +action.selection } : state
  )
}
