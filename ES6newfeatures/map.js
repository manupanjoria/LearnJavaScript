let myMap = new Map([["a1","manu"],["a2","pan"]]);
// console.log(myMap);
myMap.set("a3","pan");
for(let [key,value] of myMap){
    console.log(`keys ${key} and ${value}`);
}

myMap.forEach((key,value)=>{
    console.log(key,value);
})