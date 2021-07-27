var lista = [];

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

function ordenarListaSort() {
  var lista = ejecutarObtenerLista();
  var listaOrdenada = lista.sort(function (a, b) {
    return a - b;
  });
  return listaOrdenada;
}

function ordenarListafor() {
  var tempVar;
  var listaOrdenada = [];
  var lista = ejecutarObtenerLista();

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
