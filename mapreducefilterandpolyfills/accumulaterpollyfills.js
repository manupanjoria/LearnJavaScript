
Array.prototype.myreduce = function(cb,initial_value){
    var b = initial_value;
    for(let i = 0; i < this.length; i++){
        b = b?cb(b,this[i],i,this):this[i];
    }
    return b;
}

let arr = [1,2,3,4,8,9,0];
let a = arr.myreduce((acc,ele,ind,arr)=>{
    return acc+ele;
},0)

console.log(a);
  