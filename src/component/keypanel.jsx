import React from 'react';

// クリックされた時に何をするかは知らないキーボード
export default function KeyPanel({onClick}){
  const mag = 3
  const radius = 10*mag
  const interval = {x: 30*mag, y:25*mag}
  const margin = 5*mag
  const width = interval.x*3+radius*2+margin*2
  const height = interval.y+radius*2+margin*2
  const fontSize = 10*mag
  return(<div style={{display: "inline-block", width:"100%"}}>
    <svg {...{width, height}}>
      <g transform={`translate(${margin},${margin})`} onClick={onClick}>
        {[[5,"F"],[7,"G"],[9,"A"],[11,"B"]].map(([midi, name],i) => <PanelKey fontSize={fontSize} key={i} midi={midi} r={radius} y={radius} x={radius+i*interval.x}>{name}</PanelKey>)}
        {[[0,"C"],[2,"D"],[4,"E"]].map(([midi,name],i) => <PanelKey fontSize={fontSize} key={i} midi={midi} r={radius} y={radius+interval.y} x={radius+(i+0.5)*interval.x}>{name}</PanelKey>)}
      </g>
    </svg>
  </div>)
}

function PanelKey(props){
  const {midi, x, y, fontSize, children, ...others} = props;
  return(
    <g transform={`translate(${x}, ${y})`}>
      <text
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={fontSize}
        fontFamily="Verdana"
      >{children}</text>
      <circle
        {...others}
        className="pianokey"
        data-midi={midi}
        fill="none"
        stroke="black" strokeWidth="1"
      />
    </g>
  )
}
