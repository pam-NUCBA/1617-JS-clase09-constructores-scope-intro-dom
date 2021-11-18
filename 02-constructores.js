//* ok, pero qué es un constructor? De acuerdo a mozilla: "El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase"

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor

//*básicamente este es un molde de perro VACÍO. Sabemos qué debe tener, pero no tiene todavía un valor. Basicamente le decimos qué keys queremos, pero no tenemos los valores!
//siempre que sea constructor, arrancar en mayuscula
function Perro(orejas, patitas, cola, color, darLaPata, correr) {
  this.orejas = orejas; //ese this es del objeto que vamos a crear. El orejas solo es el valor que le vamos a pasar
  this.patas = patitas;
  this.cola = cola;
  this.color = color;
  this.darPata = darLaPata;
  this.correr = correr;
}

//*new crea una instancia nueva. UN OBJETO del tipo que le esté pasando. Siempre que sea instancia, arrancar con minuscula
const pochi = new Perro(2, 4, 1, "negra y naranja", true, false);
console.log(pochi, typeof pochi); //creó un nuevo objeto llamado pochi, construido con el molde de Perro

const pipi = new Perro(2, 4, 1, "negrita", false, true);
console.log(pipi);
//puedo agregarle algo como haría en un objeto
pipi.robarZapatos = true;
console.log(pipi);
