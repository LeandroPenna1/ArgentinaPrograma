const readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingresa un numero:\n");

if(numero < 0){
    console.log("El numero es negativo.")
}else if(numero > 0){
    console.log("El numero es positivo.")
}else{
    console.log("El numero es 0.")
}