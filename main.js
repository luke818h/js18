//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(firstName, prop){
// Only change code below this line
for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === firstName) {
        if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";
// Only change code above this line
}
// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Sherlock", "number"));
console.log(lookUpProfile("bob", "number"));

/*
firstName to contacts[i].firstName


1. you need a loop to pick each objects in the array contacts
    1.1  in the loop you need to
         1.1.1  check if the objects picked has the firstName property equal to the firstName parameter
                  1.1.1.1 you need to check if it has a property prop
                                  return the value of prop in the object
                 1.1.1.2  return no such property if  1.1.1.1 is false
2.  when your loop is done looking through  contacts return no such contact

*/
