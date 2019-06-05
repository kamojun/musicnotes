import React from 'react';
import { connect } from 'react-redux'

function KeyBoard(props){
  const width = 50;
  const height = 200;
  const offset = 27;
  const blackWidth = 40;
  const blackHeight = 130;
  return(<div>
    <svg height={height} width={width*7}>
      <g onClick={(e) => props.dispatch({type: "REPLY", response: e.target.dataset.num})}>
        {[...Array(7).keys()].map(i=>
        <rect data-num={i+1} className="whiteKey" key={i} x={i*width} y="0" width={width} height={height}
          fill="none" stroke="black" strokeWidth="1"/>
        )}
        {[0,1,3,4,5].map(i=>
          <rect data-num={i+1.5} className="blackKey" key={i} x={offset+i*width} y="0" width={blackWidth} height={blackHeight}
          fill="black"/>
        )}
      </g>
    </svg>
  </div>)
}

export default connect()(KeyBoard) // こうすると、propsにはdispatchのみ入る。なぜだか。
