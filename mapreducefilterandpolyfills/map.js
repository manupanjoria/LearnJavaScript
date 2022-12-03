const nums = [1,2,3,4,5,9];

var a = nums.map((ele,ind,arr)=>{
    return ele*2;
})
console.log(a);

//takes three arguements [elements, values, array]