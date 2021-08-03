function mostrar(algo){
    alert(algo)
    }
//codigo cuadrado

    function areaCuadrado(lado){
              area=parseFloat(lado)*parseFloat(lado)
              if(isNaN(area)){alert("ingresa un numero")}else{
              return area;}
    }
    function perimetroCuadrado(lado){
        perimetro=parseFloat(lado)*4
        if(isNaN(perimetro)){alert("ingresa un numero")}else{
        return perimetro;}
}

//codigo triangulo
console.group("triangulos")
function perimetroTriangulo(lado1,lado2,lado3){
    perimetro=parseFloat(lado1)+parseFloat(lado2)+parseFloat(lado3)

    if(isNaN(perimetro)){alert("ingresa un numero")}else{
        return perimetro;}
}
function areaTriangulo(base,altura){
    area=(parseFloat(base)*parseFloat(altura))/2;

    if(isNaN(area)){alert("ingresa un numero")}else{
        return area;}
}
//circulo

function diametroCirculo(radio){
    diametro=radio*2;
    
    
    return diametro;
}

function perimetroCirculo(radio){
    diametro= diametroCirculo(parseFloat(radio));
    perimetro=(diametro* Math.PI).toFixed(2);
    if(isNaN(perimetro)){alert("ingresa un numero")}else{
        return perimetro;
       }
   
}

function areaCirculo(radio){
    area=(parseFloat(radio)*parseFloat(radio)*Math.PI).toFixed(2);

    if(isNaN(area)){alert("ingresa un numero")}else{
        return area;
       }
}

//lamados html
function calcularAreaCuadrado(){
    const lado=document.getElementById("lado")
    const resultadoCuadrado=document.getElementById("resultado-cuadrado")
    const value=lado.value;
    const area=areaCuadrado(value);
    if(area!=undefined){
        resultadoCuadrado.innerHTML="El area del cuadrado es: "+area+" "+"m2 para un lado de " + value;}
        clearCuadrado(); 
        
}
function calcularPerimetroCuadrado(){
    const lado=document.getElementById("lado")
    const resultadoCuadrado=document.getElementById("resultado-cuadrado")
    const value=lado.value;
    const perimetro=perimetroCuadrado(value);
    if(perimetro!=undefined){
        resultadoCuadrado.innerHTML="El perimetro del cuadrado es: "+perimetro+" "+" m2 para un lado de "+ value;}
        clearCuadrado(); 
        
}

function clearCuadrado(){
    var lado=document.getElementById("lado")
    
    lado.value="";
    lado.focus();
    setTimeout(function(){
        window.location.reload(1);
     }, 5000);
}
function calcularAreaCirculo(){
    const radio=document.getElementById("radio")
    const resultadoCirculo=document.getElementById("resultado-circulo")
    const value=radio.value;
    const area=areaCirculo(value);
    if(area!=undefined){
    resultadoCirculo.innerHTML="El area del circulo es : "+area+" "+"m2 para un radio de "+ value; }
    clearCirculo();
    
}
function calcularPerimetroCirculo(){
    const lado=document.getElementById("radio")
    const resultadoCirculo=document.getElementById("resultado-circulo")
    const value=lado.value;
    const perimetro=perimetroCirculo(value);
    if(perimetro!=undefined){
    resultadoCirculo.innerHTML="El perimetro del circulo es : "+perimetro+" "+" m2 para un radio de "+ value ;
    }
    clearCirculo();
    
}
function clearCirculo(){
    var radio=document.getElementById("radio")
    
    radio.value="";
    radio.focus()
    setTimeout(function(){
        window.location.reload(1);
     }, 5000);
}
function calcularAreaTriangulo(){
    const base=document.getElementById("base");
    const valueBase=base.value;
    const altura=document.getElementById("altura");
    const valueAltura=altura.value;
    const area=areaTriangulo(valueBase,valueAltura);
    if(area!=undefined){
    resultado.innerHTML="El área del triángulo es: "+area+" "+"cm con un base de "+valueBase+" y una altura de "+valueAltura;}
    clearTrianguloBase()
    setTimeout(function(){
        window.location.reload(1);
     }, 5000);
    
}
function calcularPerimetroTriangulo(){
    const lado1=document.getElementById("lado1")
    const valueL1=lado1.value;
    const lado2=document.getElementById("lado2")
    const valueL2=lado2.value;
    const base=document.getElementById("lado3")
    const valueBase=base.value;
    const resultado=document.getElementById("resultado")
    const perimetro1=perimetroTriangulo(valueL1,valueL2,valueBase);
    if (perimetro1!=undefined){
    resultado.innerHTML="El perimetro del triángulo es: "+perimetro1+" "+"cm con medidas de "+valueL1+", "+valueL2+", "+valueBase;}
    clearTrianguloPer()
    
}
function clearTrianguloPer(){
    var lado1=document.getElementById("lado1")
    var lado2=document.getElementById("lado2")
    var lado3=document.getElementById("lado3")
    
    lado1.value="";
    lado2.value="";
    lado3.value="";
    lado1.focus()
    setTimeout(function(){
        window.location.reload(1);
     }, 5000);
}
function clearTrianguloBase(){
    var lado1=document.getElementById("base")
    var lado2=document.getElementById("altura")
       
    lado1.value="";
    lado2.value="";
    lado1.focus()
    setTimeout(function(){
        window.location.reload(1);
     }, 5000);
}
//Calcular altura triangulo isósceles

function alturaTrianguloIsosceles(lado1,lado2,base){
    
    if(lado1==lado2 && lado1!=base){
        altura=(Math.sqrt (Math.pow(lado1,2)-(Math.pow(base,2)/4))).toFixed(2)
         
    }else{
        alert("no es un triángulo isósceles") 
    }
    return altura;
}
