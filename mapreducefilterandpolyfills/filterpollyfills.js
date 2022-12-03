// Array.prototype.myfilter = function(cb){
//     let arr = [];
//     for(let i = 0; i < this.length; i++){
//         if(cb(this[i],i,this)){
//             arr.push(this[i]);              
//         }
//     }
//     return arr;
// }


// let arr = [1,2,3,4,5];

// let a = arr.myfilter((e)=>{
//     return e>4;
// })
// console.log(a);



Array.prototype.myfilter = function(cb){
    let arr = [];
    for(let i = 0; i < this.length; i++){
        if(cb(this[i],i,this)){
            arr.push(this[i]);
        }
    }
    return arr;
}

let arr = [1,2,3,4,5];
 let a = arr.myfilter((e)=>{
    return e >= 3;
 })
 console.log(a);
