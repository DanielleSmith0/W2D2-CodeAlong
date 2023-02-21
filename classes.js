

class Dog {
    constructor(name,breed, age){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.hypoAllergenic = false;
    }
    updateHypo(){
        this.hypoAllergenic = true;
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am a ${this.breed} and I am ${this.age} years old.`);
    }
//adding in method.
}

//We can set permenant value to be initial value. We don't need to specify it in constructor, hence why boolean isn't in ().


const dog1 = new Dog("Buddy", "golden retriever", 5);
const dog2 = new Dog("Alaska", "Cockapoo", 3);

dog2.updateHypo();

// console.log(dog1);
// console.log(dog2);

dog1.greeting();

class Puppy extends Dog {
    constructor(name, breed, age, color){
        super(name);
        this.color = color;
        this.trainingLevel = 0;
    }

    updateTraining(num){
        this.trainingLevel += num;
    }
}

const puppers = new Puppy("Kevin", "Yorkshire Terrior", .6, "brown/black");
const bubs = new Puppy("Wanda", "Irish Setter", "1", "golden/brown");

puppers.updateHypo();

bubs.updateTraining(1);

console.log(puppers);
puppers.greeting();

console.log(bubs);
bubs.greeting();