
const person = {
    first: "Benjamin",
    last: "Cook",
    age: 30
};

//dot notation
// console.log(person.first);
//Or
//bracket notation
// console.log(person["last"]);

const meal = {
    appetizer: "chips and salsa",
    entree: "carne asada",
    dessert: "flan",
    drink: "horchata"
};

let {dessert} = meal;

//equal to let desert = meal.desert;

//Practice changing names

const meal2 = {
    appetizer: "ceviche",
    entree: "nachos",
    dessert: "ice cream",
    drink: "cerveza"
};

let {appetizer, entree, drink} = meal;

//selecting multiple at once and without having to individually write 3 lines of code:
//let appetizer = meal.appetizer;
//let entree = meal.entree;
//let drink = meal.drink;

console.log(entree + " with " + drink);

//update value of drink

let newFav = "Dr.P";

meal.drink = newFav;

//Remember, when you update a child, it doesn't update the parents, but updating the parent does update the child.

//Rename and destructure

const {drink: drink2, appetizer: app2, dessert: des2, entree: entree2} = meal2;

//loop over meal2
//if the key is our dessert, update the value to be churros and print to console else print the value.

for (let key in meal2){
    if(key === "dessert"){
        meal2[key] = "churros";
        console.log(meal2[key]);
    }else{
        console.log(key);
    }
}

//key is equivelant to i

//new object

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  }

  teams.teamSix = ["Mickey", "Matt", "Timmy, "Jimmy"];

  console.log(teamSix);

  delete 