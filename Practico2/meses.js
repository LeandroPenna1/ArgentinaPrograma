const readlineSync = require('readline-sync');
let numeroMes = readlineSync.question("Ingresa un numero:\n");

switch(numeroMes) {
    case "1": 
       mes = "Enero";
       dias = "31";
    break;
    case "2": 
       mes = "Febrero";
       dias = "28";
    break;
    case "3":
        mes = "Marzo";
        dias = "31";
    break;
    case "4": 
         mes = "Abril";
       dias = "30";
    break;
    case "5": 
        mes = "Mayo";
        dias = "31";
    break;
    case "6": 
         mes = "Junio";
         dias = "30";
    break;
    case "7": 
         mes = "Julio";
         dias = "31";
    break;
    case "8": 
         mes = "Agosto";
         dias = "31";
    break;
    case "9": 
         mes = "Septiembre";
         dias = "30";
    break;
    case "10": 
         mes = "Octubre";
         dias = "31";
    break;
    case "11": 
         mes = "Noviembre";
         dias = "30";
    break;
    case "12": 
         mes = "Diciembre";
         dias = "31";
    break;
    default:
        console.log("Los meses son 12");
    break;
    }
    console.log("La cantidad de dias del mes de " + mes + " es "+ dias + " dias")
