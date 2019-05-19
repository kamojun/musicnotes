import React from 'react';

export default function KeyBoard(props){
  const width = 50;
  const height = 200;
  const offset = 27;
  const blackWidth = 40;
  const blackHeight = 130;
  return(<div>
    <svg height={height} width={width*7}>
      <g onClick={click}>
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

function click(e){
  console.log(e.target.dataset.num);
}
