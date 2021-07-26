function obtenerLista(lista){
    const cadenaSinEspacios=lista.trim()
var arrayCadenas= cadenaSinEspacios.split(",")

return arrayCadenas;
}

function ejecutarObtenerLista(){
const lista=document.getElementById("lista")
const listaValue=lista.value;
var arrayCadenas=obtenerLista(listaValue)
var listaFinal=[]
for (var i=0; i < arrayCadenas.length; i++) {
    listaFinal.push(parseInt(arrayCadenas[i]));
 }
 console.log(listaFinal);
 return listaFinal;
}

function promedio(){
lista=ejecutarObtenerLista();
const suma=lista.reduce(function(inicio=0,siguiente){
return inicio+siguiente;
});
const promedio=suma/lista.length
console.log(promedio)
return promedio;
}

function clearTextarea(){
    var clear=document.getElementById("lista")
    clear.innerHTML='';
}
