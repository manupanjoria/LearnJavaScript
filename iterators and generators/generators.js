function *generator(){
  console.log("1st line");
  yield "stop one"
  console.log("2nd line");
   yield 
  console.log("3rd line");

}

let a = generator();
console.log(a.next().value)
console.log(a.next().value)


// agr yield m koi value nhi hogi toh undefined ATA hai
