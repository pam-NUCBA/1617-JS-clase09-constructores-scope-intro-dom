//* hay constructores de todo tipo, aunque por lo general, los vamos a usar para objetos y date

/*
new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object
*/

//*poder podemos, pero... usemos constructores para objetos y dates nomás

const hoy = new Date();
console.log(hoy);

//no hagan esto...
const nombre = new String("Pam");
console.log(nombre);
