let a = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
        reject("error");
    },2000)    
})

a.then((item)=>{
    console.log("1st output",item);
    return item*100;
}).then((item2)=>{
    console.log("2nd output",item2);
    return item2*100;
}).then((item2)=>{
    console.log("3rdoutput", item2);
})
.catch((error)=>{
    console.log(error);
})

//---------------------------------------------------------------------
// REMEMBER TO CALL THE API WE NEED TO RESOLVE TWO PROMISES
let data = fetch("https://jsonplaceholder.typicode.com/users");
data.then((user)=>{
    return user.json();
}).then((user2)=>{
    console.log(user2);
}).catch((error)=>{
    console.log("failed");
})
