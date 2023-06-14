let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

tamañoDeCita = cita.length;
console.log("El tamaño de cita es " + tamañoDeCita)

indice = cita.indexOf(substring);
console.log("El indice de substring es " + indice)

citaRevisada = cita.indexOf(substring[substring.length - 1])
console.log(citaRevisada)