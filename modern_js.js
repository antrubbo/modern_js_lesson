let guitars = ["Fender", "Gibson", "Gretch", "Suhr"];

let gtrMkr1 = {
    company: "Fender",
    models: ["Stratocaster", "Telecaster", "Jazzmaster", "Jaguar"],
    makesMandolins: false,
    founded: 1946,
    originated: "Fullerton, CA",
    notablePlayer: "Jimi Hendrix"
};

let gtrMkr2 = {
    company: "Gibson",
    models: ["Les Paul", "335", "J45", "L5", "SG", "Explorer"],
    makesMandolins: true,
    founded: 1902,
    originated: "Kalamazoo, MI",
    notablePlayer: "Slash"
};

// How could you use destructuring to create three new variables from the above array?

// How could you use destructuring to create three new variables that represent each key-value pair in the above object(s)?

/*-----------------------------------------------------------------------------*/

// How can you apply destructuring to the following function?

function makesMandos(manufacturer){
    let result = "";
    if(manufacturer.makesMandolins){
        result = `${manufacturer.company} was founded in ${manufacturer.founded} and produces guitars, basses, and even mandolins.`;
    } else {
        result = `${manufacturer.company} was founded in ${manufacturer.founded} and only produces guitars and basses.`;
    }
    return result;
}

// console.log(makesMandos(gtrMkr2))

/*--------------------------------------------------------------------------------*/

/* How can you use object shorthand to construct an object using all of the following variables 
(representing the obvious levels of talent in The Beatles) */

let awful = "Ringo Starr";
let genius = "George Harrison";
let prolific = "John Lennon";
let allStar = "Paul McCartney";

// const beatlesTalent = 

// console.log(beatlesTalent)

/*---------------------------------------------------------------------------------*/

/* The function below expects that sometimes name will not be provided. 
How can you update the bestBeatle() function so that it uses default parameters? */

function bestBeatle(name) {
    let result = "";
    if (name) {
        result = `${name} is obviously the best Beatle!`;
    } else {
        result = "Paul McCartney is obviously the best Beatle!";
    }
    return result;
}

// console.log(bestBeatle("John"))
// console.log(bestBeatle())

/*----------------------------------------------------------------------------------*/

//  How could we convert this to arrow function syntax?

function bestGtrCompany(gtrCompany) {
    let result = "";
    if (gtrCompany.company) {
        result = `${gtrCompany.company} is obviously the best company making guitars today!`;
    } else {
        result = "Fender is obviously the best company making guitars today!";
    }
    return result;
}

// What if I wanted to give the parameter a default value?
  
// console.log(bestGtrCompany("Ibanez"))
// console.log(bestGtrCompany())

/*-------------------------------------------------------------------------------------*/

// SPREAD and REST Syntax ******************

/* Create destructured variables using "rest" syntax for the 
guitars in the 'guitars 'array */


/* Create an array using "spread" of all of the guitars in 'moreGuitars' and 'guitars' */

const moreGuitars = ["Ibanez", "Jackson", "Nash", "Charvel", "Danelectro"];
// let allGtrs = 

// console.log(allgtrs)