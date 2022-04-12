

function Precio_Descuento(Pre,des){
    var Precio_nuevo=(Pre*(100-des))/100;
    return Precio_nuevo;
}

cupones=[
    {nombre:"flash", valor:15},
    {nombre:"superman", valor:80},
    {nombre:"iron-man", valor:50},
    {nombre:"batman", valor:5},
]

function validacion_cupon(){
    const input_cup=document.getElementById("cupon")
    var value_cup=String(input_cup.value);

    const result_cupon=document.getElementById("result_cupon");
    var nuevo_descuento;

    var validacion= cupones.find(function(cupon){
        return cupon.nombre===value_cup;
    });
      //cupon  
  
      if (!validacion) {

          result_cupon.innerText="El cupón " + value_cup + " es inválido";
          nuevo_descuento=0;
          result_cupon.style.color="red";
      }else{

          var nuevo_descuento=validacion.valor
          result_cupon.innerText="El cupón " + value_cup + " es válido";
          result_cupon.style.color="green";



      }
    return nuevo_descuento;
}

function calcular_precio_descuento(){
    const input_precio=document.getElementById("precio_original")
    const value_precio=Number(input_precio.value);
    const input_des=document.getElementById("descuento")
    const value_des=Number(input_des.value);
    
    var nuevo_descuento=validacion_cupon()+value_des;
    const precio=Precio_Descuento(value_precio,nuevo_descuento);

    const result_price=document.getElementById("result_price");
    result_price.innerText="El precio con descuento es: "+precio;

    //alert(validacion);


    //alert(precio)
    //imprimimos el valor en pantalla
    

}
