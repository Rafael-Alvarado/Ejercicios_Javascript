console.log('var,let y const');

// Var:

// var edad = 55;
// //esto sobreescribe la variable
// var edad = 60;

// console.log(edad);

// Let:

// let edad = 55;
// //esto genera error
// let edad = 60;

// console.log(edad);

// let edad = 55;
// //por lo que se escribe de esta manera
// edad = 60;

// console.log(edad);

// for(var i=0; i<=5; i++){
//     console.log(i);
//     //esto contara efectivamente la variable incrementada pero si hacemos uso de la misma variable fuera del ciclo esta estara inicializada en 6 como se ve mas abajo
// }
// console.log(i);

// for(let i=0; i<=5; i++){
//     console.log(i);
//     //esto es completamente distinto con let ya que esta variable vive unicamente dentro de un ambiente a continuacion dira que la variable no esta inicializada
// }
// // console.log(i);

// //ahora si se declara fuera estaria funcional ya que este seria un ambiente global

// let i = 50;

// console.log(i);

// con el if pasa lo mismo 

// let numero = 60;

// if(true){
//     let numero = 55;
//     console.log('Dentro del if '+numero);
// }
// console.log('Fuera del if '+numero);

// Const:

// const numero;
// // Esto dara error ya que es necesario inizializar la constante si o si
// console.log(numero);

// const numero = 44;
// // Esta constante no generara error ya que si esta definida
// console.log(numero);

// const numero = 44;
// const numero = 44;
// // Esto generara un error ya que esta no se puede redeclarar la variable 
// console.log(numero);

// // tambien la palabra reservada cons puede almacenar arreglos como por ejemplo:
// const numeros = [55,60,30];
// //si imprimimos estos numeros en consola imprimira dicho arreglo
// console.log(numeros);

// esta variable no puede editarse como se menciona anteriormente pero podemos añadi nuevos valores de la siguiente manera

// const numeros = [55,60,30];
// numeros.push(10);
// console.log(numeros);
