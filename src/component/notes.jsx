import React from 'react';

function GCref(props){return(
  <g id="GCref" {...props}>
    <g transform="translate(-80,2) scale(1.1,1.25)">
      <path style={{fill:"#000000"}} d="M366.789,307.317c0-47.676-38.65-86.326-86.333-86.326c-1.966,0-3.872,0.194-5.787,0.344
        c-1.84-14.581-3.619-28.75-5.287-42.12c20.249-14.611,40.594-28.698,55.863-43.742C379.823,81.719,364.075,0,298.918,0
        c-65.157,0-66.518,71.131-64.081,89.862c1.301,9.915,4.793,39.906,8.232,65.172c-1.346,1.032-2.49,1.877-3.334,2.43
        c-56.252,36.751-96.114,81.442-94.476,144.155c1.331,51.713,50.487,101.81,115.644,101.81c4.995,0.135,9.862-0.224,14.67-0.807
        c0.613,4.77,1.167,8.936,1.623,12.21c5.697,40.722-8.958,66.787-27.689,72.485c-18.738,5.705-35.838-0.816-39.091-7.328
        c-3.268-6.52,4.067-4.898,13.84-7.335c9.773-2.438,16.293-17.916,17.1-26.066c2.101-21.034-17.13-38.277-38.276-38.277
        c-21.146,0-35.66,17.303-38.284,38.277c-1.623,13.033,1.63,23.628,7.335,33.401c16.286,23.62,43.167,35.838,73.3,30.941
        c37.312-6.05,58.674-38.127,55.376-76.553c-0.568-6.67-2.034-19.643-4.067-36.646C337.628,383.518,366.789,344.749,366.789,307.317
        z M259.273,93.937c-4.883-50.502,28.78-77.374,51.586-63.526c32.452,19.702-14.424,74.952-46.748,106.013
        C261.853,117.67,260.126,102.723,259.273,93.937z M220.182,376.542c-40.722-21.983-44.789-85.51-20.361-130.314
        c10.723-19.65,29.199-36.504,49.627-52.251c1.077,6.243,2.654,17.564,4.531,32.063c-32.975,12.965-53.231,49.021-43.742,83.214
        c7.754,27.92,34.403,33.341,39.57,26.739c2.984-3.813-7.582-6.259-14.14-25.924c-4.71-14.132-3.267-30.44,9.766-41.02
        c4-3.253,8.375-5.84,12.966-7.791c5.024,40.893,10.826,90.251,14.97,123.779C256.843,387.848,238.12,386.232,220.182,376.542z
         M319.548,360.257c-4.943,6.684-13.878,13.444-25.109,18.416c-4.15-33.872-9.72-77.853-15.246-121.498
        c11.523,0.165,23.501,4.172,34.658,12.681C344.799,293.469,333.396,341.526,319.548,360.257z"/>
    </g>
  </g>
)}
function FCref(props){return(
  <g transform="translate(0,90) scale(0.7,0.65)">
  	<path class="st0" d="M176.014,0l-2.823,0.01C89.091,1.164,20.78,63.557,15.904,118.564c-3.125,35.072,4.693,63.941,22.568,83.494
  		c16.307,17.803,39.765,26.836,69.727,26.836c31.095,0,61.603-29.77,61.603-60.106c0-30.803-25.076-55.869-55.888-55.869
  		c-16.569,0-27.575,7.323-34.858,12.179c-2.853,1.892-5.796,3.854-7.121,3.854c-0.446,0-1.477-1.184-2.458-5.635
  		c-3.399-15.335,1.902-33.644,14.212-48.98c10.399-12.978,34.858-34.726,81.876-34.726c65.67,0,101.833,52.894,101.833,148.952
  		c0,192.852-165.703,271.845-216.483,291.459c-10.398,4.016-13.778,12.716-12.492,19.553C39.828,507.002,45.947,512,53.686,512
  		c2.448,0,5.037-0.496,7.657-1.477l5.807-2.165C262.916,435.82,362.19,326.247,362.19,182.648C362.19,57.164,265.688,0,176.014,0z"
  		/>
  	<path class="st0" d="M455.486,126.84c22.771,0,41.282-18.522,41.282-41.292c0-22.76-18.512-41.271-41.282-41.271
  		c-22.759,0-41.281,18.511-41.281,41.271C414.205,108.318,432.726,126.84,455.486,126.84z"/>
  	<path class="st0" d="M455.486,211.365c-22.759,0-41.281,18.522-41.281,41.282c0,22.77,18.522,41.281,41.281,41.281
  		c22.771,0,41.282-18.511,41.282-41.281C496.768,229.887,478.256,211.365,455.486,211.365z"/>
  </g>
)}
function Lines(props){return(
  <g>
    <g id="lines" transform="translate(50,-3)">
      <rect y="100" height="6" width="2000"/>
      <rect y="200" height="6" width="2000"/>
      <rect y="300" height="6" width="2000"/>
      <rect y="400" height="6" width="2000"/>
      <rect y="500" height="6" width="2000"/>
    </g>
  </g>
)}
function GCrefWithLines({children}){return(
  <div id="Notes">
    <svg viewBox="0 0 2100 1400" width="300" height="200">
      <g transform="translate(0,300)">
        <GCref transform="translate(50)"/>
        <Lines />
        {children}
      </g>
    </svg>
  </div>
)}
function FCrefWithLines({children}){return(
  <div>
    <svg viewBox="0 0 1000 1000" width="300" height="130">
      <g transform="translate(0,350)">
        <FCref transform="translate(50)"/>
        <Lines />
        {children}
      </g>
    </svg>
  </div>
)}
const QuarterNote = ({up}) => (
  <g transform={up ? "rotate(180)" : "translate(60)"}>
    <circle
      transform="rotate(-30) scale(65,48)"
      r="1" fill="black"/>
    <rect
      height="350"
      width="13"
      x="-60"
      y="00"
    />
  </g>
)
const QuarterNoteDown = (props) => (
  <g {...props}>
    <QuarterNote up={false}/>
  </g>
)
const QuarterNoteUp = (props) => (
  <g {...props}>
    <QuarterNote up={true}/>
  </g>
)
function ShortLine({height, width, xdiv=0}){return(
  <g transform={`translate(${xdiv},${height})`}>
    <rect x="-150"y="-3" height="6" width={width}/>
  </g>
)}
const floormax = h => Math.max(0, Math.floor(h))
function WrittenNote({midi, x}){
  if(midi===null){
    return null
  }
  else{
    const [height_of_0, key_space, octave_space] = [2350, -50, -350]
    const key = midi % 12
    const octave = Math.floor(midi/12)
    const height = height_of_0 + [0,0,1,1,2,3,3,4,4,5,5,6][key]*key_space + octave*octave_space
    const shortlines_up = [...Array(floormax((100-height)/100)).keys()].map(i => -100*i)
    const shortlines_down = [...Array(floormax((height-500)/100)).keys()].map(i => 600+100*i)
    return(
      <g transform={`translate(${x})`}>
        {shortlines_up.map((h,i) => <ShortLine height={h} key={i} width="300" xdiv="60"/>)}
        {shortlines_down.map((h,i) => <ShortLine height={h} key={i} width="300"/>)}
        {height>=400 ?
          <QuarterNoteUp transform={`translate(0,${height})`}/> :
          <QuarterNoteDown transform={`translate(0,${height})`}/>
        }
      </g>
    )
  }
}
export default function Notes({midis}){return(
  <GCrefWithLines>
    {midis.map((midi,i) => <WrittenNote key={i} x={550+i*300} {...{midi}} />)}
  </GCrefWithLines>
)}