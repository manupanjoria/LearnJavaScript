let arr = [2,3,1,4,1];
let sum = arr.reduce((acc,val,ind,sarr)=>{
    return acc+val;
},0)

console.log(sum);