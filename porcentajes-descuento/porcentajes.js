


function Pordescuento(precio,descuento){
    var total;
    if (descuento>99 || descuento<1){
        alert("ingresa el porcentaje correcto")
    }else{
    total=precio*((100-descuento)/100)
    }
    return total;
}
function calcularPorcentajes(){
const resultPrecio=document.getElementById("resultPrecio");
const precio=document.getElementById("precio");
const precioValue=precio.value;
const descuento=document.getElementById("descuento");
const descuentoValue=descuento.value;

const total=(Pordescuento(precioValue,descuentoValue)).toFixed(2)
resultPrecio.innerText="el precio con descuento es "+ total

}
