import React from 'react';

// クリックされた時に何をするかは知らないキーボード
export default function KeyBoard({onClick, keyNums}){
  const mag = 1.5;
  const sizes = {
    width: 12*mag,
    height: 40*mag,
    offset: 8*mag,
    blackWidth: 8*mag,
    blackHeight: 26*mag,
  }
  return(<div id={'keyboard'}>
    <svg height={sizes.height} width={sizes.width*7*keyNums.length}>
      {keyNums.map((i,j)=>
        <_keys id={i} key={j} x={sizes.width*7*j} onClick={onClick} {...sizes}/>
      )}
    </svg>
  </div>)
}

function _keys({id, x, width, height, offset, blackWidth, blackHeight, onClick}){return(
  <g onClick={onClick}>
    {[...Array(7).keys()].map(i=>
    <rect data-num={[id,i+1]} className="whiteKey" key={i} x={x+i*width} y="0" width={width} height={height}
      fill="none" stroke="black" strokeWidth="1"/>
    )}
    {[0,1,3,4,5].map(i=>
      <rect data-num={[id,i+1.5]} className="blackKey" key={i} x={x+offset+i*width} y="0" width={blackWidth} height={blackHeight}
      fill="black"/>
    )}
  </g>
)}
