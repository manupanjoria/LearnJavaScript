let a = Promise.any([
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("1 sec");
        }, 1000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(() => {
         reject("2nd sec");
        },2000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("4 sec");
        },4000)
    })
])
a.then((item)=>{
    console.log(item);
}).catch((error)=>{
    console.log(error);
})