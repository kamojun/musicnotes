import React from 'react';

// svg自体の大きさ、子要素の原点、子要素のonClickを指定する
const OnClickSVG = ({ width, height, origin, onClick, children }) => (
  <div style={{ display: "inline-block", width: "100%" }}>
    <svg {...{ width, height }}>
      <g transform={`translate(${origin.x}, ${origin.y})`} onClick={onClick}>
        {children}
      </g>
    </svg>
  </div>
)

const [width, height] = [300, 220]
const origin = { x: 150, y: 110 }
const [fontsize, radius] = [30, 30]
const KeyCircle = ({ onClick }) => (
  <OnClickSVG {...{ width, height, origin }} onClick={onClick}>
    {[[0, "C"], [2, "D"], [4, "E"], [5, "F"], [7, "G"], [9, "A"], [11, "B"]].map(([midi, name], i) =>
      <PanelKey
        fontSize={fontsize} key={i}
        midi={midi} r={radius}
        y="-80" x="0" arg={360 * i / 7}
      >{name}</PanelKey>
    )}
  </OnClickSVG>
)

// クリックされた時に何をするかは知らないキーボード
const KeyPanel = ({ onClick }) => {
  const mag = 3
  const radius = 10 * mag
  const interval = { x: 30 * mag, y: 25 * mag }
  const origin = { x: 5 * mag, y: 5 * mag }
  const width = interval.x * 3 + radius * 2 + padding * 2
  const height = interval.y + radius * 2 + padding * 2
  const fontSize = 10 * mag
  return (
    <OnClickSVG {...{ width, height, origin, onClick }}>
      {[[5, "F"], [7, "G"], [9, "A"], [11, "B"]].map(([midi, name], i) =>
        <PanelKey fontSize={fontSize} key={i} midi={midi} r={radius} y={radius} x={radius + i * interval.x}>{name}</PanelKey>)
      }
      {[[0, "C"], [2, "D"], [4, "E"]].map(([midi, name], i) =>
        <PanelKey fontSize={fontSize} key={i} midi={midi} r={radius} y={radius + interval.y} x={radius + (i + 0.5) * interval.x}>{name}</PanelKey>)
      }
    </OnClickSVG>
  )
}

function PanelKey(props) {
  const { midi, x, y, arg, fontSize, children, ...others } = props;
  const transform = `rotate(${arg || 0}) translate(${x || 0}, ${y || 0})`
  return (
    <g transform={transform}>
      <text
        transform={`rotate(${-arg || 0})`}
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

export default KeyCircle