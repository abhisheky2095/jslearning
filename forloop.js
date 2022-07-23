/**
 * Using for loop in jvascript on list of json objects
 */
 'use strict';

var obj_json = [
    {
        "name": "John",
        "age": 30,
        "city": "New York"
    },{
        "name": "Mike",
        "age": 23,
        "city": "Los Angeles"
    },{
        "name": "Jane",
        "age": 43,
        "city": "Chicago"
    }
]

/**
 * Ist Use case - printing the item inside
 * each json object
 */
obj_json.forEach(function(item){
    console.log(item.name + " is " + item.age + 
    " years old and lives in " + item.city);
});

console.log("--------------------------------");

/**
 * 2nd Use case - Adding extra property to 
 * each json object
 */
obj_json.forEach(function(item){
    item.country = "USA";
    console.log(item.name + " is " + item.age + 
    " years old and lives in " + item.city + 
    " and is from " + item.country);
});


console.log("-----------------------------------");

/**
 * 3rd Use case - Editing existing use case
 * it will have the country info from the 2nd use case becuse 
 * we are modifying the existing object
 */
obj_json.forEach(function(item){
    item.age = item.age + 5;
    console.log(item.name + " is " + item.age + 
    " years old and lives in " + item.city +
    " and is from " + item.country);
})

