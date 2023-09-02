let arr = [1, 2, 3, "hello", "hi", "bye", "how are you?", false, true, undefined, "also"];

let obj = arr.reduce((acc, elem, idx) => {
  return acc[idx] = acc[elem];
}, {})

console.log(obj);