Array.prototype.mymap = function(cb){
    let tempo = [];
    for(let i = 0; i < this.length; i++){
        tempo.push(cb(this[i],i,this));
    }
    return tempo;
}

const nums = [1,2,3,0,6,8];

let a = nums.mymap((ele,ind,arr)=>{
    return ele+ind;
})
console.log(a);

//at line 1 => mymap function adding methods to array

