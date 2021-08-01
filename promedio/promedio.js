var lista = [];
var listaMediana=[];
var listaModa=[];
var listaPromedioPon=[];
function obtenerLista(lista) {
  const cadenaSinEspacios = lista.trim();
  const cadenasSinLineaslista=cadenaSinEspacios.replace(/(\r\n|\n|\r)/gm, "");
  var arrayCadenas = cadenasSinLineaslista.split(";");

  return arrayCadenas;
}

function ejecutarObtenerLista() {
  const lista = document.getElementById("listaPromedio");
  const listaValue = lista.value;
  var arrayCadenas = obtenerLista(listaValue);
  var listaFinal = [];
  for (var i = 0; i < arrayCadenas.length; i++) {
    listaFinal.push(parseInt(arrayCadenas[i]));
  }
  console.log(listaFinal);
  return listaFinal;
}

function promedio() {
  var lista = ejecutarObtenerLista();
  if (isNaN(lista[lista.length-1])){
    lista.pop();
    
  }
  const suma = lista.reduce(function (inicio = 0, siguiente) {
    return inicio + siguiente;
  });
  const promedio = suma / lista.length;
  console.log(promedio);
  return promedio;
}

function clearTextareaPromedio() {
  var clear = document.getElementById("listaPromedio");
  
  clear.innerHTML = "";
 
}
function clearTextareaMediana() {
 
  var clear2 = document.getElementById("listaMediana");
 
  
  clear2.innerHTML = "";
  
}
function clearTextareaModa() {
 
  var clear3 = document.getElementById("listaModa");
  
  clear3.innerHTML = "";
}

function ingresarDato(dato) {
  lista.push(parseInt(dato));
  return lista;
}

function datos() {
  var lista2 = document.getElementById("lista2");
  var datonuevo = lista2.value;
  var ingresarDat = ingresarDato(datonuevo);
  console.log(ingresarDat);
  clearinput();
  return ingresarDat;
}

function calcularUnoPorUno() {
  if (lista.length > 0) {
    var sumaLista = lista.reduce(function (inicio = 0, siguiente) {
      return inicio + siguiente;
    });
    const promedio = sumaLista / lista.length;
    console.log(promedio);
  } else {
    alert("ingresa un numero");
  }

  return promedio;
}

function clearinput() {
  var lista2 = document.getElementById("lista2");

  lista2.value = "";
  lista2.focus();
}

function checkboxAble() {
  var buttonCalcInUnoAuno = document.getElementById("buttonCalcInUnoAuno");
  var buttonInUnoAuno = document.getElementById("buttonInUnoAuno");
  var checkboxUnoPoruno = document.getElementById("checkboxUnoPoruno");
  var lista2 = document.getElementById("lista2");
  var listaPromedio=document.getElementById("listaPromedio");
  var buttonPromedio=document.getElementById("buttonPromedio");
  checkboxUnoPoruno.onchange = function () {
    buttonInUnoAuno.disabled = !this.checked;
    buttonCalcInUnoAuno.disabled = !this.checked;
    lista2.disabled = !this.checked;
    listaPromedio.disabled=this.checked;
    buttonPromedio.disabled=this.checked;
  };
}

function ejecutarObtenerListaMediana() {
  const lista = document.getElementById("listaMediana");
  const listaValue = lista.value;
  var arrayCadenas = obtenerLista(listaValue);
  var listaFinal = [];
  for (var i = 0; i < arrayCadenas.length; i++) {
    listaFinal.push(parseInt(arrayCadenas[i]));
  }
  console.log(listaFinal);
  return listaFinal;
}

function ordenarListaSort() {
  var lista = ejecutarObtenerListaMediana();
  if (isNaN(lista[lista.length-1])){
    lista.pop();
    
  }
  var listaOrdenada = lista.sort(function (a, b) {
    return a - b;
  });
  console.log(listaOrdenada)
  return listaOrdenada;
}

function ordenarListafor() {
  var tempVar;
  var listaOrdenada = [];
  var lista = ejecutarObtenerListaMediana();
  if (isNaN(lista[lista.length-1])){
    lista.pop();
    
  }
  for (i = 0; i < lista.length; i++) {
    for (j = i; j < lista.length; j++) {
      if (lista[i] > lista[j]) {
        tempVar = lista[i];
        lista[i] = lista[j];
        lista[j] = tempVar;
      }
    }
    listaOrdenada.push(lista[i]);
  }
  return listaOrdenada;
}
function calcularMediana(){
  var listaOr=ordenarListaSort()
  
  var tamano=listaOr.length;
  var mediana;
  var n1,n2;
if (tamano % 2==0){
   n1=listaOr[parseInt(listaOr.length/2)-1]
  n2=listaOr[parseInt(listaOr.length/2)]
  mediana=(n1+n2)/2
}
else {
  mediana=listaOr[parseInt(listaOr.length/2)];
}
alert(mediana) ;
}
function datosMediana() {
  var lista2 = document.getElementById("lista2Mediana");
  var datonuevo = lista2.value;
  var ingresarDat = ingresarDato(datonuevo);
  console.log(ingresarDat);
  clearinput();
  return ingresarDat;
}


function checkboxAbleMediana() {
  var buttonCalcInUnoAunoMediana = document.getElementById("buttonCalcInUnoAunoMediana");
  var buttonInUnoAunoMediana = document.getElementById("buttonInUnoAunoMediana");
  var checkboxUnoPorunoMediana = document.getElementById("checkboxUnoPorunoMediana");
  var lista2Mediana = document.getElementById("lista2Mediana");
  var buttonCalcularMediana=document.getElementById("buttonCalcularMediana");
  var listaMediana=document.getElementById("listaMediana");
  checkboxUnoPorunoMediana.onchange = function () {
    buttonInUnoAunoMediana.disabled = !this.checked;
    buttonCalcInUnoAunoMediana.disabled = !this.checked;
    lista2Mediana.disabled = !this.checked;
    buttonCalcularMediana.disabled = this.checked;
    listaMediana.disabled= this.checked;
  };
}

function ingresarDatoMediana(dato) {
  listaMediana.push(parseInt(dato));
  return listaMediana;
}

function datosMediana() {
  var lista2 = document.getElementById("lista2Mediana");
  var datonuevo = lista2.value;
  var ingresarDat = ingresarDatoMediana(datonuevo);
  console.log(ingresarDat);
  clearinputMediana();
  return ingresarDat;
}


function calcularUnoPorUnoMediana() {
  var listaMedianaOrdenada;
  var tamano=listaMediana.length;
  var mediana;
  var n1,n2;
  if (tamano > 0) {
 listaMedianaOrdenada=listaMediana.sort(function (a, b) {
  return a - b;
   
});
alert(listaMedianaOrdenada)
if (tamano % 2==0){
   n1=listaMedianaOrdenada[parseInt(listaMedianaOrdenada.length/2)-1]
  n2=listaMedianaOrdenada[parseInt(listaMedianaOrdenada.length/2)]
  mediana=(n1+n2)/2
}
else {
  mediana=listaMedianaOrdenada[parseInt(listaMedianaOrdenada.length/2)];
}
alert(mediana) ;
  } else {
    alert("ingresa un numero");
  }

  
}
function clearinputMediana() {
  var lista2Mediana = document.getElementById("lista2Mediana");

  lista2Mediana.value = "";
  lista2Mediana.focus();
}

function ejecutarObtenerListaMediana() {
  const lista = document.getElementById("listaMediana");
  const listaValue = lista.value;
  var arrayCadenas = obtenerLista(listaValue);
  var listaFinal = [];
  for (var i = 0; i < arrayCadenas.length; i++) {
    listaFinal.push(parseFloat(arrayCadenas[i]));
  }
  
  console.log(listaFinal);
  return listaFinal;
}

function ejecutarObtenerListaModa() {
  const lista = document.getElementById("listaModa");
  const listaValue = lista.value;
  var arrayCadenas = obtenerLista(listaValue);
  var listaFinal = [];
  for (var i = 0; i < arrayCadenas.length; i++) {
    listaFinal.push(parseInt(arrayCadenas[i]));
  }
  console.log(listaFinal);
  return listaFinal;
}

function calcularModa()
{
  var lista = ejecutarObtenerListaModa();   
  if (isNaN(lista[lista.length-1])){
    lista.pop();
    
  }
    lista.sort();
    console.log(lista);  
    // find the max frequency using linear
    // traversal
    let max_count = 1, res = lista[0];
    let curr_count = 1;
       
    for (let i = 1; i < lista.length; i++)
    {
        if (lista[i] == lista[i - 1])
            curr_count++;
        else
        {
            if (curr_count > max_count)
            {
                max_count = curr_count;
                res = lista[i - 1];
            }
            curr_count = 1;
        }
    }
    
    // If last element is most frequent
    if (curr_count > max_count)
    {
        max_count = curr_count;
        res = lista[n - 1];
    }
    console.log(res);
}

function checkboxAbleModa() {
  var buttonCalcInUnoAunoModa = document.getElementById("buttonCalcInUnoAunoModa");
  var buttonInUnoAunoModa = document.getElementById("buttonInUnoAunoModa");
  var checkboxUnoPorunoModa = document.getElementById("checkboxUnoPorunoModa");
  var lista2Moda = document.getElementById("lista2Moda");
  var listaModa =document.getElementById("listaModa");
  var buttonCalcularModa=document.getElementById("buttonCalcularModa");
  checkboxUnoPorunoModa.onchange = function () {
    buttonInUnoAunoModa.disabled = !this.checked;
    buttonCalcInUnoAunoModa.disabled = !this.checked;
    lista2Moda.disabled = !this.checked;
    listaModa.disabled = this.checked;
    buttonCalcularModa.disabled = this.checked;
  };
}

/*obtener moda de otra forma */
var camilo = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];
var listaCount = {};
var listaArray=[]
camilo.map(function (elemento) {
  if (listaCount[elemento]) {
    listaCount[elemento] += 1;
  } else {
    listaCount[elemento] = 1;
  }
});
listaArray=Object.entries(listaCount).sort(function(valorAcumulado,nuevoValor){
return valorAcumulado[1]-nuevoValor[1]
})

function ingresarDatoModa(dato) {
  listaModa.push(parseInt(dato));
  return listaModa;
}

function datosModa() {
  var lista2Moda = document.getElementById("lista2Moda");
  var datonuevo = lista2Moda.value;
  var ingresarDat = ingresarDatoModa(datonuevo);
  console.log(ingresarDat);
  clearinputModa();
  return ingresarDat;
}

function clearinputModa() {
  var lista2Moda = document.getElementById("lista2Moda");

  lista2Moda.value = "";
  lista2Moda.focus();
}
function calcularUnoPorUnoModa() {
  if (listaModa.length > 0) {
    var listaCount = {};
    var listaArray = [];
    listaModa.map(function (elemento) {
      if (listaCount[elemento]) {
        listaCount[elemento] += 1;
      } else {
        listaCount[elemento] = 1;
      }
    });
    listaArray = Object.entries(listaCount).sort(function (
      valorAcumulado,
      nuevoValor
    ) {
      return valorAcumulado[1] - nuevoValor[1];
    });
  }alert(listaArray[listaArray.length-1][0])
}


/*PROMEDIO PONDERADO */

function obtenerListaPonderado(lista) {
  const cadenaSinEspacios = lista.trim();
  const cadenasSinLineaslista=cadenaSinEspacios.replace(/(\r\n|\n|\r)/gm, "");
  var arrayCadenas = cadenasSinLineaslista.split(";");

  return arrayCadenas;
}

function ejecutarObtenerListaPonderado() {
  const lista = document.getElementById("listaPromedioPon");
  const listaValue = lista.value;
  var arrayCadenas = obtenerListaPonderado(listaValue);
  var listaFinal = [];
  for (var i = 0; i < arrayCadenas.length; i++) {
    listaFinal.push(arrayCadenas[i]);
  }
  if (listaFinal[listaFinal.length-1]===""){
    listaFinal.pop();
    
  }
  console.log(listaFinal);
  return listaFinal;
}

function ejecutarObtenerListaPonderadoFinal() {
  const listaPonderado =ejecutarObtenerListaPonderado();
  const nuevalista=[]
  for(i=0;i<listaPonderado.length;i++){
    nuevalista.push( listaPonderado[i].split(",") )
  }
  
  
  console.log( nuevalista)
  return nuevalista;
}
function calcularPonderado(){
var listaPonderado=ejecutarObtenerListaPonderadoFinal();
var sumaCreditos=0;
var pondeTotal=0;
var sumaMulti=0;
for (i=0;i<listaPonderado.length;i++){
  sumaCreditos+=parseFloat(listaPonderado[i][1])
  
}
console.log(sumaCreditos)
const multi = listaPonderado.map(function (inicio) {
  return parseFloat(inicio[0]) * parseFloat(inicio[1]);
});

sumaMulti= multi.reduce(function (inicio = 0, siguiente) {
  return inicio + siguiente;
});
console.log(multi)
pondeTotal=sumaMulti/sumaCreditos
console.log(pondeTotal)
}
/**uno por uno ponderado */
function checkboxAblePromedioPon() {
  var buttonCalcInUnoAunoPromedioPon = document.getElementById("buttonCalcInUnoAunoPromedioPon");
  var buttonInUnoAunoPromedioPon = document.getElementById("buttonInUnoAunoPromedioPon");
  var checkboxUnoPorunoPromedioPon = document.getElementById("checkboxUnoPorunoPromedioPon");
  var lista2PromedioPon = document.getElementById("lista2PromedioPon");
  var lista3PromedioPon = document.getElementById("lista3PromedioPon");
  var listaPromedioPon =document.getElementById("listaPromedioPon");
  var buttonCalPond=document.getElementById("buttonCalPond");
  checkboxUnoPorunoPromedioPon.onchange = function () {
    buttonInUnoAunoPromedioPon.disabled = !this.checked;
    buttonCalcInUnoAunoPromedioPon .disabled = !this.checked;
    lista2PromedioPon.disabled = !this.checked;
    lista3PromedioPon.disabled = !this.checked;
    listaPromedioPon.disabled=this.checked;
    buttonCalPond.disabled=this.checked;
  };
}

function clearTextareaPromedioPon(){
  var listaPromedioPon = document.getElementById("listaPromedioPon");
  
  listaPromedioPon.innerHTML = "";
}

function clearinputPromedioPon() {
  var lista2PromedioPon = document.getElementById("lista2PromedioPon");
  var lista3PromedioPon = document.getElementById("lista3PromedioPon");

  lista2PromedioPon.value = "";
  lista3PromedioPon.value = "";
  lista2PromedioPon.focus();
}

function datosPromedioPon() {
  var lista2PromedioPon = document.getElementById("lista2PromedioPon");
  var lista3PromedioPon = document.getElementById("lista3PromedioPon");
  var value1 = parseFloat(lista2PromedioPon.value);
  var value2 = parseFloat(lista3PromedioPon.value);
  var tempData = [];
  var sumaArriba = 0;
  var sumaCreditos = 0;
  var totalPonderado=0;
  if (lista2PromedioPon.value === "" || lista3PromedioPon.value === "") {
    alert("ingresa un numero");
  } else {
    listaPromedioPon.push({ value1, value2 });

    for (var i = 0; i < listaPromedioPon.length; i++) {
      algo = listaPromedioPon[i].value1 * listaPromedioPon[i].value2;
      tempData.push(algo);
    }
    for (var i = 0; i < tempData.length; i++) {
      sumaArriba += parseFloat(tempData[i]);
    }
    for (var i = 0; i < listaPromedioPon.length; i++) {
      sumaCreditos += listaPromedioPon[i].value2;
    }

    totalPonderado=sumaArriba/sumaCreditos
  }

  clearinputPromedioPon();
  console.log(totalPonderado);
  // console.log(listaPromedioPon);
  console.log(sumaCreditos);
  // console.log(tempData);
  console.log(sumaArriba);
  return listaPromedioPon;
}

