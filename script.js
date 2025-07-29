const person = require("./modules/names.js")
const hobbies = require("./modules/hobbies.js")

/*
//PARTE 1 E 2 DELL'ESERCIZIO
const persona = person("Paolo", "Paoletti");
const hobby = hobbies("Videogiochi", "Nuoto", "Mangiare"); 
console.log(persona);
console.log(hobby);
*/

//PARTE 3 DELL'ESERCIZIO

const getSubjectInfo = () => {
    return{
        fullName: person("Paolo", "Paoletti"),
        hobbies: hobbies("Videogiochi", "Nuoto", "Mangiare")
    };
}

console.log(getSubjectInfo());