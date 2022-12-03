
let myArray = [1,2,3,3,4,6];
let obj = new Set(myArray);
obj.add(90)
obj.delete(90);
// console.log(obj);

// var obj1 = {name:"manu"}
// obj.add(obj1);
// console.log(obj);

for(let a of obj){
    console.log(a);
}

obj.forEach((element)=>{
    console.log(element);
})