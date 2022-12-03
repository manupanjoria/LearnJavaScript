let a = Promise.allSettled([
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("1 sec");
        }, 1000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(() => {
         reject("2nd dec");
        },2000);
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("4 sec");
        },4000)
    })
])
a.then((item)=>{
    console.log(item);
})

