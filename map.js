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

//so we can use map instead of for loop becuase it is also
//doing the same thing
//map will just create a new array 
obj_json.map(x=> {
    console.log(x.name)
    console.log(x.age)
    console.log(x.city)
})

//now if you want to increase age +10 years for
//each then 
//you can do this in map easily
var update_json = []
obj_json.map(x=> {

    update_json.push({
        "name" : x.name,
        "age": x.age + 10,
        "city": x.city
    })

})

console.log("Updated Json : "+JSON.stringify(update_json))