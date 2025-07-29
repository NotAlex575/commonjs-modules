const person = require("./modules/names.js")
const hobbies = require("./modules/hobbies.js")

const persona = person("Paolo", "Paoletti");
const hobby = hobbies("Videogiochi", "Nuoto", "Mangiare"); 
console.log(persona);
console.log(hobby)