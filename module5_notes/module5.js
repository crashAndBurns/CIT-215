// JavaScript Objects Data Structure
// JS Obects are not technically objects like in OOP.
// they are more like python dictionaries.

// most objects are collections of data that represent a noun
// objects have names
// car.name car.weight car.color

// objects can have methods too
// car.honk();

const car = {type:"Fiat", model:"500", color:"white"};

// name value pairs are also called key value pairs

// create an empty Object and then add properties
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = "50";
person.eyes = "Blue";
person.fullName = function () {
    return(this.person.firstName + " " + this.person.lastname);
};

console.log(person);

// two ways of accessing object properites
// objectName.propteryName;
// objectName["protpertyName"];

// deleting properties
delete person.age;

// stringify method
// data file format JSON
// you can get a string representation that turns it into JSON
// JSON.stringify(object);

const myChar = {
    name: "Stanislauv",
    maxHp: 58,
    curHp: 57,
    level: 8,
    xp: 125061,
    stats: {
        strength: 18,
        dexterity: 11,
        constitution: 15,
        intelligence: 11,
        wisdom: 10,
        charisma: 12
    },
    applyDamage: function(dmg) {
        this.curHp = Math.max(0, this.curHp - dmg);
    }
};

for (let key in myChar) {
    if (typeof(myChar.key) === 'object') {
        console.log(key + ":");
        for (let innerKey in myChar[key]) {
            console.log("   " + innerKey + ": " + myChar[key][innerKey]);
        } 
    } else {
        console.log(key + ": " + myChar[key]);
    }
}

console.log("HP: " + myChar.curHp);
myChar.applyDamage(10);
console.log("new HP: " + myChar.curHp);

// Functions are not allowed to be stored as strings in JSON
console.log(JSON.stringify(myChar));