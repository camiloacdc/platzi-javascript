var colombia=[]
var mexico=[]
var argentina=[]

function validaPais(){
    var pais= document.getElementById("pais")
    var valuePais=pais.value
    var paisValido="Pais valido"
    if(valuePais.toLowerCase()!="argentina" && valuePais.toLowerCase()!="colombia" && valuePais.toLowerCase()!="mexico" && valuePais.toLowerCase()!="méxico")
    {
        paisValido="pais no valido"
    }
    console.log(paisValido)
    return paisValido
}

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
function ingresarPais(){
    var paisValidado=validaPais();
    var usaPais;
    if(paisValidado==="Pais valido"){
        usaPais=usarPais();
    }
    return usaPais;
}
function ingresarDato(){
    var pais=ingresarPais();
    var salario=document.getElementById("salario");
    var nombre=document.getElementById("nombre");
    var salarioValue=salario.value
    var nombreValue=nombre.value

    pais.push({
        name:nombreValue,
        salario:salarioValue
    })
    console.log(pais)
    return pais;
}

function listaSalarios() {
  var lista = ingresarDato();
  lista.pop();
  var listaOrdenada = lista.map(function (persona) {
    return parseFloat(persona.salario);
  });
  console.log(listaOrdenada);
  return listaOrdenada;
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


var esto=Object.keys({colombia})[0]
console.log(esto)