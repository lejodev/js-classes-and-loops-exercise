class Dog {
    constructor(name, breed, color, age, adoptionStatus) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.adoptionStatus = adoptionStatus;
    }

    set setAdoptionStatus(status) {
        this.adoptionStatus = status;
    }

    get getAdoptionStatus() {
        return `Estado es: ${this.adoptionStatus}`;
    }

}

var dogsArr = [];

do {
    var name = prompt("name").toLowerCase();
    var breed = prompt("breed").toLowerCase();
    var color = prompt("color").toLowerCase();
    var age = prompt("age").toLowerCase();
    var status = prompt("status").toLowerCase();
    dogsArr.push(new Dog(name, breed, color, age, status));
    var input = prompt("Do you want to add another dog?").toLowerCase();
} while (input !== "no");

// all Dog list
console.log("all Dog list");
console.log(dogsArr);

// Get all dogs name
var allDogsName = dogsArr.map(function(dog) {
    return dog.name    
});
console.log("All names")
console.log(allDogsName);

// All available dogs to be adopted
var availableDogs = dogsArr.filter(function(dog) {
    return dog.adoptionStatus === "available";
}).map(function(available) {
    return available.name;
})
console.log("Available to be adopted");
console.log(availableDogs);

// All adoptions in process
var adoptionInProcess = dogsArr.filter(function(dog) {
    return dog.adoptionStatus === "process"
}).map(function(process) {
    return process.name;
});
console.log("In process");
console.log(adoptionInProcess);

// Get adopted dogs
var adoptedDogs = dogsArr.filter(function(dog) {
    return dog.adoptionStatus === "adopted";
}).map(function (adoptedDog) {
    return adoptedDog.name;
});
console.log("Adopted");
console.log(adoptedDogs);