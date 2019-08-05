import React from 'react';

const UISelector = ({ childlist, children, onClick, index }) => (
  <div>
    {childlist.map((child, i) =>
      <label key={i}>
        <input type="radio" name="ui" onClick={onClick} value={i} defaultChecked={i === index} />
        {child}
      </label>)}
    <div style={{ margin: 10 }}>
      {children[index]}
    </div>
  </div>
)

export default UISelector
