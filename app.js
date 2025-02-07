async function display() {
    let fact = await require("./fact.js");
    console.log("Fact is ",fact)
}

display();

let fact = require("./fact");
console.log("fact is",fact);