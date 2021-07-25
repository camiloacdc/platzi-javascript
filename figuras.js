function mostrar(algo){
    alert(algo)
    }
//codigo cuadrado

    function areaCuadrado(lado){
              area=lado*lado
              if(isNaN(area)){alert("ingresa un numero")}else{
              return area;}
    }
    function perimetroCuadrado(lado){
        perimetro=lado*4
        if(isNaN(perimetro)){alert("ingresa un numero")}else{
        return perimetro;}
}

//codigo triangulo
console.group("triangulos")
function perimetroTriangulo(lado1,lado2,lado3){
    perimetro=parseInt(lado1)+parseInt(lado2)+parseInt(lado3)

    if(isNaN(perimetro)){alert("ingresa un numero")}else{
        return perimetro;}
}
function areaTriangulo(base,altura){
    area=(base*altura)/2;

    if(isNaN(area)){alert("ingresa un numero")}else{
        return area;}
}
//circulo

function diametroCirculo(radio){
    diametro=radio*2;
    if(isNaN(diametro)){
        alert("ingresa un numero")
    }else{
    
    return diametro;}
}

function perimetroCirculo(radio){
    diametro= diametroCirculo(radio);
    perimetro=(diametro* Math.PI).toFixed(2);
    return perimetro;
}

function areaCirculo(radio){
    area=(radio*radio*Math.PI).toFixed(2);

    if(isNaN(area)){alert("ingresa un numero")}else{
        return area;
       }
}

//lamados html
function calcularAreaCuadrado(){
    const lado=document.getElementById("lado")
    const value=lado.value;
    const area=areaCuadrado(value);
    alert("el área del cuadrado es:"+area+" "+"cm2");
}
function calcularPerimetroCuadrado(){
    const lado=document.getElementById("lado")
    const value=lado.value;
    const perimetro=perimetroCuadrado(value);
    alert("el perimetro del cuadrado es:"+perimetro+" "+"cm2");
}
function calcularAreaCirculo(){
    const radio=document.getElementById("radio")
    const value=radio.value;
    const area=areaCirculo(value);
    alert("el area del circulo es : "+area+" "+"cm2");
}
function calcularPerimetroCirculo(){
    const lado=document.getElementById("radio")
    const value=lado.value;
    const perimetro=perimetroCirculo(value);
    
    alert("el perimetro del circulo es:"+perimetro+" "+"cm2");
}
function calcularAreaTriangulo(){
    const base=document.getElementById("base");
    const valueBase=base.value;
    const altura=document.getElementById("altura");
    const valueAltura=altura.value;
    const area=areaTriangulo(valueBase,valueAltura);
    alert("el perimetro del triángulo es:"+area+" "+"cm");
}
function calcularPerimetroTriangulo(){
    const lado1=document.getElementById("lado1")
    const valueL1=lado1.value;
    const lado2=document.getElementById("lado2")
    const valueL2=lado2.value;
    const base=document.getElementById("base")
    const valueBase=base.value;
    const perimetro=perimetroTriangulo(valueL1,valueL2,valueBase);
    alert("el perimetro del triángulo es:"+perimetro+" "+"cm");
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