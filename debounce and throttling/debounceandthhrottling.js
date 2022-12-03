
let count = 0;
function work(){
console.log("network request",count++);
}

function debounce(work,delay){
    let id;
    return function optworkfn(){
        clearTimeout(id);
        id = setTimeout(()=>{
            work();
        },delay)
    }
}


function throttling(work,delay){
    let flag = true;
    return function optworkfn(){
        if(flag === true){
            work();
            flag = false;

            setTimeout(()=>{
                flag = true;
            },delay)
        }
    }
}

let optfn = throttling(work,400)
let input = document.querySelector("input")
.addEventListener("keydown",optfn);

function debounce(){
    let timerid;
     function optworkfn(){
        setTimeout(()=>{
            work();
        },300)
    }
    return optworkfn;

}

function throttling(){
    flag = true;
    return function optworkfn(){
        if(flag === true){
           flag = false;

            setTimeout(()=>{
                flag = true;
            },300)
        }
    }
}