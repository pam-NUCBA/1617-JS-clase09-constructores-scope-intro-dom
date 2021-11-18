//*https://www.w3schools.com/js/js_scope.asp

const funcioncita = () => {
  const hola = "soy hola desde dentro de la funcion";
  return hola;
};

const hola = "soy hola desde fuera de la funcion!";
console.log(hola);
console.log(funcioncita());

//esto va a tirar error
const nombre = () => {
    //esta variable jamás es leída!
    const myName = 'yo soy Pam'
}

console.log(myName)