const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];


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
function checkboxAble(){
    var tieneDescuento = document.getElementById("tieneDescuento");
    var buttonCupon=document.getElementById("buttonCupon");
    var textDescuento = document.getElementById("textDescuento");
    tieneDescuento.onchange= function() {
        textDescuento.disabled = !this.checked;
        buttonCupon.disabled= !this.checked;
    };
}
 
function muestraDescuento(descuento){
const descuentoObtenido=document.getElementById("descuentoObtenido")
descuentoObtenido.innerHTML="obtuviste un descuento de "+descuento+" %"

}
function inputDescuento(descuento){
const descuentoObtenido=document.getElementById("descuento")
descuentoObtenido.setAttribute("value", parseInt(descuento))
}

function buscaCupon(){
    var cupon = document.getElementById("textDescuento");
    var valueCupon=cupon.value;
    const articuloEncon = function articuloEncontrado(coupon){
        return coupon.name == valueCupon;
    }
    const userCoupon = coupons.find(articuloEncon);
    muestraDescuento(userCoupon.discount);
    inputDescuento(userCoupon.discount)
}
