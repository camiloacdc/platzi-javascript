var lista = [];
var listaMediana=[];
var listaModa=[];
function obtenerLista(lista) {
  const cadenaSinEspacios = lista.trim();
  var arrayCadenas = cadenaSinEspacios.split(",");

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
  checkboxUnoPoruno.onchange = function () {
    buttonInUnoAuno.disabled = !this.checked;
    buttonCalcInUnoAuno.disabled = !this.checked;
    lista2.disabled = !this.checked;
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
  var listaOrdenada = lista.sort(function (a, b) {
    return a - b;
  });
  return listaOrdenada;
}

function ordenarListafor() {
  var tempVar;
  var listaOrdenada = [];
  var lista = ejecutarObtenerListaMediana();

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
  checkboxUnoPorunoMediana.onchange = function () {
    buttonInUnoAunoMediana.disabled = !this.checked;
    buttonCalcInUnoAunoMediana.disabled = !this.checked;
    lista2Mediana.disabled = !this.checked;
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

  return promedio;
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
    listaFinal.push(parseInt(arrayCadenas[i]));
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
    // Sort the array
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
  checkboxUnoPorunoModa.onchange = function () {
    buttonInUnoAunoModa.disabled = !this.checked;
    buttonCalcInUnoAunoModa.disabled = !this.checked;
    lista2Moda.disabled = !this.checked;
  };
}