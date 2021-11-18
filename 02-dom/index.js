//*alert corta la ejecucion del sitio hasta que lo aceptemos! no carga el html hasta que lo sacamos

alert(this); //[object Window]
alert(document); //[object HTMLDocument]
alert(document.baseURI); //http://127.0.0.1:5501/02-dom/index.html
alert(document.children); //[object HTMLCollection]
alert(document.contentType); //text/html
alert(document.title); //Hola DOM!
alert("uf, cuántos alertas che");

console.log("hola!"); //esto nos lo pone en la consola en la pestaña donde ejecuta el html! y hasta nod dice qué línea de qué archivo es la que lo generó
