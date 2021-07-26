var lista=[]

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
var lista=ejecutarObtenerLista();
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

function ingresarDato(dato){

lista.push(parseInt(dato));
return lista;
}

function datos(){
    var lista2=document.getElementById("lista2")
    var datonuevo=lista2.value
    var ingresarDat=ingresarDato(datonuevo);
    console.log(ingresarDat)
    clearinput();
    return ingresarDat
}

function calcularUnoPorUno(){
    
    if(lista.length>0){
    var sumaLista=lista.reduce(function(inicio=0,siguiente){
        return inicio+siguiente;
        });
        const promedio=sumaLista/lista.length;
console.log(promedio);

} else{
    alert("ingresa un numero")
}

return promedio;
}

function clearinput(){
    var lista2=document.getElementById("lista2")
 
    lista2.value='';
    lista2.focus();
}

function checkboxAble(){
    var buttonCalcInUnoAuno= document.getElementById("buttonCalcInUnoAuno");
    var buttonInUnoAuno=document.getElementById("buttonInUnoAuno");
    var checkboxUnoPoruno = document.getElementById("checkboxUnoPoruno");
    var lista2= document.getElementById("lista2");
    checkboxUnoPoruno.onchange= function() {
        buttonInUnoAuno.disabled = !this.checked;
        buttonCalcInUnoAuno.disabled= !this.checked;
        lista2.disabled= !this.checked;
    };
}