var colombia=[{pais:'Colombia',}];
var mexico=[{pais:'Mexico',}];
var argentina=[{pais:'Argentina',}];

// function validaPais(){
//     var pais= document.getElementById("pais")
//     var valuePais=pais.value
//     var paisValido="Pais valido";
//     if(valuePais.toLowerCase()!="argentina" && valuePais.toLowerCase()!="colombia" && valuePais.toLowerCase()!="mexico" && valuePais.toLowerCase()!="méxico")
//     {
//         paisValido="pais no valido";
        
//     }
//     console.log(paisValido)
//     return paisValido
// }

function usarPais(){
    var pais= document.getElementById("pais")
    var valuePais=pais.value
    if(valuePais.toLowerCase()==="colombia"){
        console.log(colombia)
        return colombia;
    }else if(valuePais.toLowerCase()==="argentina"){
        console.log(argentina)
        return argentina;
    }else{
        return mexico;
    }

}
// function ingresarPais(){
    // var paisValidado=usarPais();
    // var usaPais=usarPais();
    // if(paisValidado==="Pais valido"){
    //     usaPais=usarPais();
    //     console.log("holaaa")
    // }
//     return usaPais;
// }
function ingresarDato() {
    var pais1 = usarPais();

    console.log(pais1[0].pais);
    var salario = document.getElementById("salario");
    var nombre = document.getElementById("nombre");
    var salarioValue = salario.value
    var nombreValue = nombre.value
    const paisArgentina = document.getElementById("nombre-argentina");
    const paisMexico = document.getElementById("nombre-mexico")
    const paiscolombia = document.getElementById("nombre-colombia")
    const salarioArgentina = document.getElementById("salario-argentina");
    const salarioMexico = document.getElementById("salario-mexico")
    const salariocolombia = document.getElementById("salario-colombia")
    pais1.push({
        'name': nombreValue,
        'salario': salarioValue
    })
    console.log(pais1)
    if (pais1[0].pais == "Argentina") {
        paisArgentina.innerHTML += "<p>nombre: " + pais1[pais1.length - 1].name + " </p> ";
        salarioArgentina.innerHTML+= "<p> salario: "+pais1[pais1.length - 1].salario + " </p>";
    }
    else if (pais1[0].pais == "Mexico") {
        paisMexico.innerHTML += "<p>nombre: " + pais1[pais1.length - 1].name + " </p> ";
        salarioMexico.innerHTML+="<p> salario: "+pais1[pais1.length - 1].salario + " </p>";
    }
    else {
        paiscolombia.innerHTML += "<p>nombre: " + pais1[pais1.length - 1].name + " </p> ";
        salariocolombia.innerHTML+="<p> salario: "+pais1[pais1.length - 1].salario + " </p>";
    }
    return pais1;
}

function listaSalarios() {
    //   var lista = ingresarDato();
    //   lista.pop();
    const paisCalcular = document.getElementById("pais-calcular");
    const paisValue = paisCalcular.value
    let lista;
    if (paisValue == "Colombia") {
        lista = colombia;
    } else if (paisValue == "Mexico") {
        lista = mexico;
    } else {
        lista = argentina;
    }
   if (lista.length>1){
       lista.shift()
    var listaOrdenada = lista.map(function (persona) {
        return parseFloat(persona.salario);
    });
    console.log(listaOrdenada);
    return listaOrdenada;
}else{ alert("hola")}
}

function ordenarSalarios(){
    var lista=listaSalarios();
    var listaOrdenada=lista.sort(function(salarios,salarioSigue){
        return salarios-salarioSigue
    })
    console.log(listaOrdenada)
    var tamano=listaOrdenada.length;
    var mitad=parseInt(tamano/2);
    var mediana= 0;
    if((tamano % 2)==0){
    mediana=((listaOrdenada[mitad]+listaOrdenada[mitad-1])/2).toFixed(2)
    } else{
        mediana=listaOrdenada[ mitad]
    }
    console.log(mediana)
    return mediana;
    
}

function diezPorciento() {
  var inicio = 0;
  var corte = 0;
  var listaOrdenada = lista.sort(function (salarios, salarioSigue) {
    return salarios - salarioSigue;
  });
  tamano = listaOrdenada.length;
  inicio = parseInt((tamano * 90) / 100);
  corte = tamano - incio;
  const salariosTop = listaOrdenada.splice(inicio, corte);
  return salariosTop;
}

function medianaTop(){
var listaSalarios=diezPorciento();
var tamano=listaSalarios.length;
    var mitad=parseInt(tamano/2);
    var mediana= 0;
    if((tamano % 2)==0){
    mediana=((listaOrdenada[mitad]+listaOrdenada[mitad-1])/2).toFixed(2)
    } else{
        mediana=listaOrdenada[ mitad]
    }
    console.log(mediana)
    return mediana;
}


// var esto=Object.keys({colombia})[0]
// console.log(esto)
console.log(colombia.length)