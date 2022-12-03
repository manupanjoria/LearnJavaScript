let arr = [1,2,3,4,5,6,7];
let y = arr[Symbol.iterator]();
y.next();
console.log("heloo");
console.log(y.next().value);

// not just array we can do it with string and objects too...
//iterators m humara paas control hota hai ,like how to iterate over the array...
// hum koi le skte hai...like in between code execute krna hai then fr value leni hai

//with string..

let str = "software";
let itr = str[Symbol.iterator]();
console.log(itr.next());