// "use strict";
function getUsers(){
    return new Promise((resolve)=>{
        const data = JSON.stringify(require("./task.json"))
        const d = JSON.parse(data)
        resolve(d);
        reject(error);
    })
}

// const hhjj = require("./task1")

// userData.then((usersData)=>{
//     return usersData.json();
// }).then((userDatas)=>{
//     console.log(userDatas);
// }).catch((error)=>{
//     console.log("can not fetch");
// });

getUsers().then((users)=>console.log(users)).catch((errorData)=>{
    console.log("can not fetch",errorData);
})
// 
// hhjj();