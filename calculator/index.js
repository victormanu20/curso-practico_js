
 //aqui interactuamos con el html
//CUADRADO
function perimetro_cuadrado(lado_cuadrado){
    var calcular_perimetro;
    calcular_perimetro=lado_cuadrado*4;
    return calcular_perimetro;
}


function area_cuadrado(lado_cuadrado){
    return lado_cuadrado**2;
}


 function calcular_perimetro_cuadrado(){
    const input=document.getElementById("input_lado");
    const value=input.value;

    const perimetro=perimetro_cuadrado(value);
    alert(perimetro);
}

function calcular_area_cuadrado(){
   const input=document.getElementById("input_lado");
   const value=input.value;

   const area=area_cuadrado(value);
   alert(area);
}

//TRAINGULO

function perimetro_triangulo(lado1,lado2,base){
    return lado1+lado2+base;
};

function area_triangulo(ladoA,Base){
    var area=Math.sqrt(ladoA**2-(Base**2/4));
    return area;
}

function calcular_perimetro_triangulo(){
    const inputA=document.getElementById("input_ladoA");
    const valueA=Number(inputA.value);

    const inputB=document.getElementById("input_ladoB");
    const valueB=Number(inputB.value);

    const input_base=document.getElementById("input_base");
    const value_base=Number(input_base.value);

    const perimetro=perimetro_triangulo(valueA,valueB,value_base);
    alert(perimetro);
}

function calcular_area_triangulo(){
   const inputA=document.getElementById("input_ladoA");
   const valueA=Number(inputA.value);

   const inputB=document.getElementById("input_ladoB");
    const valueB=Number(inputB.value);

    const input_base=document.getElementById("input_base");
    const value_base=Number(input_base.value);

    if(valueA===valueB && valueA !=value_base){
        const area=area_triangulo(valueA,valueB,value_base);
        alert(area);
    }
    else{
        alert("No es un triangulo isoceles");
    }


   
}

 //CIRCULO
 const PI=Math.PI;

 function perimetro_circulo(radio){
     return 2*radio*PI
 };

function area_circulo(radio){
    return PI*(radio**2);
};

function calcular_perimetro_circulo(){
    const input=document.getElementById("input_radio");
    const value=input.value;

    const perimetro=perimetro_circulo(value);
    alert(perimetro);
}

function calcular_area_circulo(){
   const input=document.getElementById("input_radio");
   const value=input.value;

   const area=area_circulo(value);
   alert(area);
}