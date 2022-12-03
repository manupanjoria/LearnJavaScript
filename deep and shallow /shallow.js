//shallow copy...
// let person = {
//     fname: "tttt",
//     lname: "rrr",
//     address : {
//         state : "himachal",
//         city : "shimla"
//     }
// }

// let copy1 = Object.assign({},person);
// copy1.fname = "aaa";

// copy1.state = "delhi";


// console.log(copy1);

let person = {
    firstName: 'John',
    lastName: 'Doe', 
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
copiedPerson.address.city = 'Mountain View'; // connected

console.log(copiedPerson);
