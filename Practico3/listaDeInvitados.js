let lista = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];

for (let i = 0; i < lista.length; i++){
    if((lista[i] === "Jose") || (lista[i] === "Sofia")){
        rechazados.push(lista[i]);
    } else{
        admitidos.push(lista[i]);
    }
}
console.log("La lista de invitados de admitidos es " + admitidos.join(", "))
console.log("La lista de invitados de rechazados es " + rechazados.join(", "))

// EJERCICIO EXTRA:

let rechazadosOrdenados = rechazados.sort();
let admitidosOrdenados = admitidos.sort();

console.log("La lista ordenada de invitados rechazados es " + rechazadosOrdenados.join(", "))
console.log("La lista ordenada de invitados admitidos es " + admitidosOrdenados.join(", "))
