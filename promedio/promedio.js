var lista = [];
var listaMediana = [];
var listaModa = [];
var listaPromedioPon = [];

function obtenerLista(lista1) {
  const cadenaSinEspacios = lista1.trim();
  const cadenasSinLineaslista = cadenaSinEspacios.replace(/(\r\n|\n|\r)/gm, "");
  const patt1 = /[0-9];/g;
  const result = cadenasSinLineaslista.match(patt1);
  var arrayCadenas = ""
  if (result != null) {
    arrayCadenas = cadenasSinLineaslista.split(";");
console.log(result)
  }
  return arrayCadenas;
}

function ejecutarObtenerLista() {
  const lista1 = document.getElementById("listaPromedio");
  const listaValue = lista1.value;
  var listaFinal1 = "";
  if (listaValue != "") {
    var arrayCadenas = obtenerLista(listaValue);
    listaFinal1 = [];
    for (var i = 0; i < arrayCadenas.length; i++) {
      listaFinal1.push(parseInt(arrayCadenas[i]));
    }
    //console.log(listaFinal1);
    return listaFinal1;
  } else {
    return listaFinal1;
  }
}


function promedio() {
  var respCalPro = document.getElementById("resp-cal-pro")
  var lista1 = ejecutarObtenerLista();
  if (lista1 == "") { alert("hay un problema con la lista, verifica si ingresaste numeros seguidos de punto y comas ejemplo 10;20;30;") } else {
    if (isNaN(lista1[lista1.length - 1])) {
      lista1.pop();

    }
    const suma = lista1.reduce(function (inicio = 0, siguiente) {
      return inicio + siguiente;
    });
    const promedio = suma / lista1.length;
    console.log(promedio);
    respCalPro.innerHTML = "EL PROMEDIO ES " + promedio.toFixed(2)
    setTimeout(function () {
      window.location.reload(1);
    }, 5000);
  }
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
  var ingrePro = document.getElementById("ingre-pro")
  var lista2 = document.getElementById("lista2");
  var datonuevo = lista2.value;
  if (datonuevo != "") {

    var ingresarDat = ingresarDato(datonuevo);
    console.log(ingresarDat);
    clearinput();
    ingrePro.innerHTML = " " + ingresarDat
    //return ingresarDat;
  }
}

function calcularUnoPorUno() {
  const ingrepro = document.getElementById("ingre-pro")
  if (lista.length > 0) {
    var sumaLista = lista.reduce(function (inicio = 0, siguiente) {
      return inicio + siguiente;
    });
    const promedio = sumaLista / lista.length;
    //console.log(promedio);
    ingrepro.innerHTML += "<br><br> <p class='text-area-resultado'> el promedio es  " + promedio.toFixed(2) + "</p>"
    setTimeout(function () {
      window.location.reload(1);
    }, 10000);
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
  var listaPromedio = document.getElementById("listaPromedio");
  var buttonPromedio = document.getElementById("btn-promedio");
  var ingrepro = document.getElementById("ingre-pro");
  var labelpromedio = document.getElementById("label-promedio")
  checkboxUnoPoruno.onchange = function () {
    buttonInUnoAuno.disabled = !this.checked;
    buttonCalcInUnoAuno.disabled = !this.checked;
    lista2.disabled = !this.checked;
    listaPromedio.disabled = this.checked;
    listaPromedio.hidden = this.checked;
    buttonPromedio.disabled = this.checked;
    buttonPromedio.hidden = this.checked;
    labelpromedio.hidden = this.checked;
  };
  if (checkboxUnoPoruno.checked) {
    ingrepro.style.display = "block";

  } else {
    ingrepro.style.display = "none";

  }
}

function ejecutarObtenerListaMediana() {
  const lista = document.getElementById("listaMediana");
  const listaValue = lista.value;
  var listaFinal = "";
  if (listaValue != "") {
    var arrayCadenas = obtenerLista(listaValue);
    var listaFinal = [];
    for (var i = 0; i < arrayCadenas.length; i++) {
      listaFinal.push(parseInt(arrayCadenas[i]));
    }
    console.log(listaFinal);
    return listaFinal;
  }
  else {
    return listaFinal;
  }
}

function ordenarListaSort() {
  var lista = ejecutarObtenerListaMediana();
  if (lista != "") {
    if (isNaN(lista[lista.length - 1])) {
      lista.pop();

    }
    var listaOrdenada = lista.sort(function (a, b) {
      return a - b;
    });
    //console.log(listaOrdenada)
    return listaOrdenada;
  }
}

function ordenarListafor() {
  var tempVar;
  var listaOrdenada = [];
  var lista = ejecutarObtenerListaMediana();
  if (isNaN(lista[lista.length - 1])) {
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
function calcularMediana() {
  var listaOr = ordenarListaSort()
  //console.log(listaOr)
  const ingremed = document.getElementById("resp-cal-med")
  if (listaOr != undefined) {
    var tamano = listaOr.length;
    var mediana;
    var n1, n2;
    if (tamano % 2 == 0) {
      n1 = listaOr[parseInt(listaOr.length / 2) - 1]
      n2 = listaOr[parseInt(listaOr.length / 2)]
      mediana = (n1 + n2) / 2
    }
    else {
      mediana = listaOr[parseInt(listaOr.length / 2)];
    }
    //alert(mediana) ;
    ingremed.innerHTML = "LA MEDIANA ES " + mediana;
    setTimeout(function () {
      window.location.reload(1);
    }, 5000);
  } else { alert("hay un problema con la lista") }
}




function checkboxAbleMediana() {
  var buttonCalcInUnoAunoMediana = document.getElementById("buttonCalcInUnoAunoMediana");
  var buttonInUnoAunoMediana = document.getElementById("buttonInUnoAunoMediana");
  var checkboxUnoPorunoMediana = document.getElementById("checkboxUnoPorunoMediana");
  var lista2Mediana = document.getElementById("lista2Mediana");
  var buttonCalcularMediana = document.getElementById("buttonCalcularMediana");
  var listaMediana = document.getElementById("listaMediana");
  var ingremed = document.getElementById("ingre-med");
  var labelmediana = document.getElementById("label-mediana");
  checkboxUnoPorunoMediana.onchange = function () {
    buttonInUnoAunoMediana.disabled = !this.checked;
    buttonCalcInUnoAunoMediana.disabled = !this.checked;
    lista2Mediana.disabled = !this.checked;
    buttonCalcularMediana.disabled = this.checked;
    buttonCalcularMediana.hidden = this.checked;
    listaMediana.disabled = this.checked;
    listaMediana.hidden = this.checked;
    labelmediana.hidden = this.checked;
  };

  if (checkboxUnoPorunoMediana.checked) {
    ingremed.style.display = "block";

  } else {
    ingremed.style.display = "none";

  }
}

function ingresarDatoMediana(dato) {
  listaMediana.push(parseInt(dato));
  return listaMediana;
}

function datosMediana() {
  const ingrePro = document.getElementById("ingre-med")
  var lista2 = document.getElementById("lista2Mediana");
  var datonuevo = lista2.value;
  if (datonuevo != "") {
    var ingresarDat = ingresarDatoMediana(datonuevo);
    console.log(ingresarDat);
    clearinputMediana();
    ingrePro.innerHTML = " " + ingresarDat
    return ingresarDat;
  }
}


function calcularUnoPorUnoMediana() {
  const ingrepro = document.getElementById("ingre-med")
  var listaMedianaOrdenada;
  var tamano = listaMediana.length;
  var mediana;
  var n1, n2;
  if (tamano > 0) {
    listaMedianaOrdenada = listaMediana.sort(function (a, b) {
      return a - b;

    });
    //alert(listaMedianaOrdenada)
    if (tamano % 2 == 0) {
      n1 = listaMedianaOrdenada[parseInt(listaMedianaOrdenada.length / 2) - 1]
      n2 = listaMedianaOrdenada[parseInt(listaMedianaOrdenada.length / 2)]
      mediana = (n1 + n2) / 2
    }
    else {
      mediana = listaMedianaOrdenada[parseInt(listaMedianaOrdenada.length / 2)];
    }
    ingrepro.innerHTML += "<br><br> <p class='text-area-resultado'> la mediana es  " + mediana + "</p>"
    setTimeout(function () {
      window.location.reload(1);
    }, 10000);
  } else {
    alert("ingresa un numero");
  }


}
function clearinputMediana() {
  var lista2Mediana = document.getElementById("lista2Mediana");

  lista2Mediana.value = "";
  lista2Mediana.focus();
}



function ejecutarObtenerListaModa() {
  const lista = document.getElementById("listaModa");
  const listaValue = lista.value;
  var listaFinal ="";
  if (listaValue != "") {
  var arrayCadenas = obtenerLista(listaValue);
  
 listaFinal = [];
  for (var i = 0; i < arrayCadenas.length; i++) {
    listaFinal.push(parseInt(arrayCadenas[i]));
  }
  //console.log(listaFinal);
  return listaFinal;
}else {
  return listaFinal;
}}

function calcularModa() {
  const respcalmoda=document.getElementById("resp-cal-moda")
  var lista = ejecutarObtenerListaModa();
  if (lista != "") {
    if (isNaN(lista[lista.length - 1])) {
      lista.pop();

    }
    lista.sort();
    console.log(lista);
    // find the max frequency using linear
    // traversal
    let max_count = 1, res = lista[0];
    let curr_count = 1;

    for (let i = 1; i < lista.length; i++) {
      if (lista[i] == lista[i - 1])
        curr_count++;
      else {
        if (curr_count > max_count) {
          max_count = curr_count;
          res = lista[i - 1];
        }
        curr_count = 1;
      }
    }

    // If last element is most frequent
    if (curr_count > max_count) {
      max_count = curr_count;
      res = lista[n - 1];
    }
    //console.log(res);
    respcalmoda.innerHTML="LA MODA ES "+res;
    setTimeout(function () {
      window.location.reload(1);
    }, 5000);
  } else { alert("hay un problema con la lista, verifica si ingresaste numeros seguidos de punto y comas ejemplo 10;20;30;") }
}
function checkboxAbleModa() {
  var buttonCalcInUnoAunoModa = document.getElementById("buttonCalcInUnoAunoModa");
  var buttonInUnoAunoModa = document.getElementById("buttonInUnoAunoModa");
  var checkboxUnoPorunoModa = document.getElementById("checkboxUnoPorunoModa");
  var lista2Moda = document.getElementById("lista2Moda");
  var listaModa = document.getElementById("listaModa");
  var buttonCalcularModa = document.getElementById("buttonCalcularModa");
  var ingremod = document.getElementById("ingre-moda");
  var labelModa = document.getElementById("label-moda");
  checkboxUnoPorunoModa.onchange = function () {
    buttonInUnoAunoModa.disabled = !this.checked;
    buttonCalcInUnoAunoModa.disabled = !this.checked;
    lista2Moda.disabled = !this.checked;
    listaModa.disabled = this.checked;
    listaModa.hidden = this.checked;
    labelModa.hidden = this.checked;
    buttonCalcularModa.disabled = this.checked;
    buttonCalcularModa.hidden = this.checked;
  };

  if (checkboxUnoPorunoModa.checked) {
    ingremod.style.display = "block";

  } else {
    ingremod.style.display = "none";

  }
}

/*obtener moda de otra forma */
var camilo = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];
var listaCount = {};
var listaArray = []
camilo.map(function (elemento) {
  if (listaCount[elemento]) {
    listaCount[elemento] += 1;
  } else {
    listaCount[elemento] = 1;
  }
});
listaArray = Object.entries(listaCount).sort(function (valorAcumulado, nuevoValor) {
  return valorAcumulado[1] - nuevoValor[1]
})

function ingresarDatoModa(dato) {
  listaModa.push(parseInt(dato));
  return listaModa;
}

function datosModa() {
  var lista2Moda = document.getElementById("lista2Moda");
  var datonuevo = lista2Moda.value;
  var ingresarDat = ingresarDatoModa(datonuevo);
  const ingrepro = document.getElementById("ingre-moda");
  ingrepro.innerHTML=" "+ingresarDat;
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
  const ingrepro = document.getElementById("ingre-moda")
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
  } //alert("LA OMDA ES"+listaArray[listaArray.length - 1][0])
  ingrepro.innerHTML += "<br><br> <p class='text-area-resultado'> LA MODA ES  " + listaArray[listaArray.length - 1][0] + "</p>"
    setTimeout(function () {
      window.location.reload(1);
    }, 10000);
}


/*PROMEDIO PONDERADO */

function obtenerListaPonderado(lista) {
  const cadenaSinEspacios = lista.trim();
  const cadenasSinLineaslista = cadenaSinEspacios.replace(/(\r\n|\n|\r)/gm, "");
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
  if (listaFinal[listaFinal.length - 1] === "") {
    listaFinal.pop();

  }
  console.log(listaFinal);
  return listaFinal;
}

function ejecutarObtenerListaPonderadoFinal() {
  const listaPonderado = ejecutarObtenerListaPonderado();
  const nuevalista = []
  for (i = 0; i < listaPonderado.length; i++) {
    nuevalista.push(listaPonderado[i].split(","))
  }


  console.log(nuevalista)
  return nuevalista;
}
function calcularPonderado() {
  var listaPonderado = ejecutarObtenerListaPonderadoFinal();
  var sumaCreditos = 0;
  var pondeTotal = 0;
  var sumaMulti = 0;
  for (i = 0; i < listaPonderado.length; i++) {
    sumaCreditos += parseFloat(listaPonderado[i][1])

  }
  console.log(sumaCreditos)
  const multi = listaPonderado.map(function (inicio) {
    return parseFloat(inicio[0]) * parseFloat(inicio[1]);
  });

  sumaMulti = multi.reduce(function (inicio = 0, siguiente) {
    return inicio + siguiente;
  });
  console.log(multi)
  pondeTotal = sumaMulti / sumaCreditos
  console.log(pondeTotal)
}
/**uno por uno ponderado */
function checkboxAblePromedioPon() {
  var buttonCalcInUnoAunoPromedioPon = document.getElementById("buttonCalcInUnoAunoPromedioPon");
  var buttonInUnoAunoPromedioPon = document.getElementById("buttonInUnoAunoPromedioPon");
  var checkboxUnoPorunoPromedioPon = document.getElementById("checkboxUnoPorunoPromedioPon");
  var lista2PromedioPon = document.getElementById("lista2PromedioPon");
  var lista3PromedioPon = document.getElementById("lista3PromedioPon");
  var listaPromedioPon = document.getElementById("listaPromedioPon");
  var buttonCalPond = document.getElementById("buttonCalPond");
  var ingrepropon = document.getElementById("ingre-pro-pon");
  var labelpromediopon = document.getElementById("labelpromediopon");
  checkboxUnoPorunoPromedioPon.onchange = function () {
    buttonInUnoAunoPromedioPon.disabled = !this.checked;
    buttonCalcInUnoAunoPromedioPon.disabled = !this.checked;
    lista2PromedioPon.disabled = !this.checked;
    lista3PromedioPon.disabled = !this.checked;
    listaPromedioPon.disabled = this.checked;
    listaPromedioPon.hidden = this.checked;
    buttonCalPond.disabled = this.checked;
    buttonCalPond.hidden = this.checked;
    labelpromediopon.hidden = this.checked;
  };
  if (checkboxUnoPorunoPromedioPon.checked) {
    ingrepropon.style.display = "block";

  } else {
    ingrepropon.style.display = "none";

  }
}

function clearTextareaPromedioPon() {
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
  var totalPonderado = 0;
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

    totalPonderado = sumaArriba / sumaCreditos
  }

  clearinputPromedioPon();
  console.log(totalPonderado);
  // console.log(listaPromedioPon);
  console.log(sumaCreditos);
  // console.log(tempData);
  console.log(sumaArriba);
  return listaPromedioPon;
}

