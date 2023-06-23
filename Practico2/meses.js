const readlineSync = require('readline-sync');
let numeroMes = readlineSync.question("Ingresa un numero:\n");

if(numeroMes == 1){
    console.log("La cantidad de dias del mes de Enero es 31")
} else if(numeroMes == 2){
    console.log("La cantidad de dias del mes de Febrero es 28")
} else if(numeroMes == 3){
    console.log("La cantidad de dias del mes de Marzo es 31")
} else if(numeroMes == 4){
    console.log("La cantidad de dias del mes de Abril es 30")
} else if(numeroMes == 5){
    console.log("La cantidad de dias del mes de Mayo es 31")
} else if(numeroMes == 6){
    console.log("La cantidad de dias del mes de Junio es 30")
} else if(numeroMes == 7){
    console.log("La cantidad de dias del mes de Julio es 31")
} else if(numeroMes == 8){
    console.log("La cantidad de dias del mes de Agosto es 31")
} else if(numeroMes === 9){
    console.log("La cantidad de dias del mes de Septiembre es 30")
} else if(numeroMes == 10){
    console.log("La cantidad de dias del mes de Octubre es 31")
} else if(numeroMes == 11){
    console.log("La cantidad de dias del mes de Noviembre es 30")
} else if(numeroMes == 12){
    console.log("La cantidad de dias del mes de Diciembre es 31")
}