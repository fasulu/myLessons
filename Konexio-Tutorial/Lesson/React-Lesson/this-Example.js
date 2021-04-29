// This is the examples and how to use 'this' keyword

var myObject = {
    keyOne: function () {
        console.log(this);
    },
    keyTwo: () => {
        console.log(this);
    }
}

myObject.keyOne();

myObject.keyTwo();



class Person {
    eatNormal() {
        console.log(this);
    }

    eatNew = () => {
        console.log(this);
    }
}

const onePerson = new Person()

const myObjPerson = {
    normal: onePerson.eatNormal,
    new: onePerson.eatNew
}

console.log("onePerson.eatNormal");
onePerson.eatNormal()

console.log("onePerson.eatNew");
onePerson.eatNew()

console.log("myObjPerson.normal");
myObjPerson.normal()

console.log("myObjPerson.new");
myObjPerson.new()
