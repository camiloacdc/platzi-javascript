const coupons = [
    {
        name: "Camilo_es_Ironman",
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

    const cupon1=document.getElementById('cupon1')
    const descue1=document.getElementById('descue1')
    const cupon2=document.getElementById('cupon2')
    const descue2=document.getElementById('descue2')
    const cupon3=document.getElementById('cupon3')
    const descue3=document.getElementById('descue3')
    cupon1.innerHTML=coupons[0].name
    descue1.innerHTML=coupons[0].discount+" %"
    cupon2.innerHTML=coupons[1].name
    descue2.innerHTML=coupons[1].discount+" %"
    cupon3.innerHTML=coupons[2].name
    descue3.innerHTML=coupons[2].discount+" %"

    


function Pordescuento(precio,descuento){
    var total;
    if (descuento>99 || descuento<1){
        alert("Ingresa el porcentaje correcto")
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
const resultadoDes=document.getElementById("resultadoDes")
resultadoDes.style.border=" 1px solid black";
resultadoDes.style.borderRadius=" 8px";
const total=(Pordescuento(precioValue,descuentoValue)).toFixed(2)
resultPrecio.innerText="El precio con descuento es "+ total
setTimeout(function(){
    window.location.reload(1);
 }, 5000);
}
function checkboxAble(){
    var tieneDescuento = document.getElementById("tieneDescuento");
    var buttonCupon=document.getElementById("buttonCupon");
    var textDescuento = document.getElementById("textDescuento");
    var btnClc=document.getElementById("btnClc");
    var descuento=document.getElementById("descuento")
    var labelDescuento=document.getElementById("labelDescuento")
    tieneDescuento.onchange= function() {
        textDescuento.disabled = !this.checked;
        buttonCupon.disabled= !this.checked;
        btnClc.disabled=this.checked;
        descuento.hidden=this.checked;
        labelDescuento.hidden=this.checked;
    };
}
 
function muestraDescuento(descuento){
const descuentoObtenido=document.getElementById("descuentoObtenido")
const resultPrecio=document.getElementById("resultPrecio")
const precio=document.getElementById("precio");
const precioValue=precio.value;
const resultadoDes=document.getElementById("resultadoDes")
resultadoDes.style.border=" 1px solid black";
resultadoDes.style.borderRadius=" 8px";
descuentoObtenido.innerHTML="Obtuviste un descuento de "+descuento+" %";
const total=(Pordescuento(precioValue,descuento)).toFixed(2)
resultPrecio.innerText="El precio con descuento es "+ total;
setTimeout(function(){
    window.location.reload(1);
 }, 5000);
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
