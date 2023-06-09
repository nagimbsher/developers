// 🌟 Exercise 6 : Challenges
//1- Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}


//2- What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)


//1- Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

// 3-Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

class Animal {
    constructor(name, type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal{
    noise = "ohh uhh";
    constructor(name,color){
        super(name,"Mammal", color);
    }
    sound (noise){
        return `this animal is a ${this.type}.It'sname is ${this.name}, it's color is ${this.color}
        and the sound it makes is ${noise};`
    }
}


const farmerCow = new Mammal("adam","white");
console.log("farmerCow:",farmerCow);
