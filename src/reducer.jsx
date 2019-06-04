const initialState = {
  ans: "レ"
}

// actionを受け取って何かする
// export default function reducer(state = initialState, action) {
//   switch(action.type) {
//     case 'CORRECT':
//       return { ans: "正解しました" }
//     default:
//       return state
//   }
// }

// ↑なんか違う。CORRECTかどうかは、ここで判断するのが良いか?
