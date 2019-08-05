import React from 'react';

// クリックされた時に何をするかは知らないキーボード
export default function KeyBoard({ onClick, keyNums }) {
  const mag = 3.7;
  const whitesizes = {
    width: 12 * mag,
    height: 40 * mag,
  }
  const blacksizes = {
    offset: 8 * mag,
    width: 8 * mag,
    height: 26 * mag,
    whiteWidth: whitesizes.width,
  }
  const keysize = {
    width: whitesizes.width * 7 * keyNums.length,
    height: whitesizes.height,
  }
  return (<div style={{ display: "inline-block", width: "100%" }}>
    <svg {...keysize}>
      {keyNums.map((octaveMidi, j) =>
        <g key={j} onClick={onClick}>
          <WhiteKeys x={keysize.width * j} {...{ octaveMidi, ...whitesizes }} />
          <BlackKeys x={keysize.width * j} {...{ octaveMidi, ...blacksizes }} />
        </g>
      )}
    </svg>
  </div>)
}

function PianoKey(props) {
  const { midi, color, ...others } = props;
  return (
    <g>
      {/* 黒鍵をおくときに、下に白い長方形を置いて、透かしても下の白鍵の境界が見えないようにする。 */}
      {color !== "black" ? null : <rect
        {...others}
        y="0" fill='white'
      />}
      <rect
        {...others}
        className="pianokey"
        data-midi={midi}
        y="0" fill={color === "white" ? "none" : "black"} stroke="black" strokeWidth="1"
      />
    </g>
  )
}
function WhiteKeys({ x, width, height, octaveMidi }) {
  const whiteKeyMidi = [0, 2, 4, 5, 7, 9, 11]
  const position = [0, 1, 2, 3, 4, 5, 6]
  return (
    <g>
      {position.map((p, i) => <PianoKey key={i} color="white" midi={whiteKeyMidi[i] + octaveMidi} {...{ width, height }} x={x + p * width} />)}
    </g>
  )
}
function BlackKeys({ x, width, height, octaveMidi, offset, whiteWidth }) {
  const blackKeyMIDI = [1, 3, 6, 8, 10]
  const position = [0, 1, 3, 4, 5]
  return (
    <g>
      {position.map((p, i) => <PianoKey key={i} color="black" midi={blackKeyMIDI[i] + octaveMidi} {...{ width, height }} x={x + p * whiteWidth + offset} />)}
    </g>
  )
}
