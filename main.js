// Fundaments of Javascript
// Arrays and Objects
// Functions returns
// Async is coding
// foreach, map, filter, find, indexOf,

// var arr = [1, "sazzad", true, null, undefined, { name: "sazzad"}, function(){}, [1, 2], 1.5, NaN];
var obj = {
    name: "sazzad",
    age: 42,
    isMarried: true,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    },
    hobbies: ["coding", "reading", "gaming"],
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}
console.log(obj.name); // Accessing property
console.log(obj.address.city); // Accessing nested property
obj.greet(); // Calling a method
console.log(obj.hobbies[1]); // Accessing array within object
Object.freeze(obj); // Freezing the object to prevent further modifications
obj.age = 43; // Updating a property
console.log(obj["age"]); // Accessing property using bracket notation
