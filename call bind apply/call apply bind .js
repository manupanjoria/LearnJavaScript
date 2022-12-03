let name = {
    fname:"rrr",
    lname:"ppp",
}

// function borrowing happens in call...
//  here call m target pass krdete hai for refrence..
//  that object we need to call  
let fullname = function(state,place){
    console.log(this.fname+" " +this.lname+ " "+ state+" "+ place);
}

let name2 = {
    fname:"lll",
    lname:"zzz"

}

fullname.call(name2,"himachal","hills"); // did a call method use here 
fullname.apply(name2,["himachal", "hills"]); // did a apply method used here

// bind return the copy of the method which can be called later...a
// here what is happening is bind the fullname with name2 object a
// return a copy which can be called later..
let printmyname = fullname.bind(name2,"uttar pardesh","mathura");
printmyname();

