var result_moda=document.getElementById("result_moda");
var input=document.getElementById("array");

function calcular_moda(lista){
    
const lista1Count = {};

lista.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  }
);

var lista1Array = Object.entries(lista1Count).sort(
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);

var moda = lista1Array[lista1Array.length - 1];
return moda;

}

function convertirInt (array){
    var array_nuevo=[]
    for(var i=0;i<array.length;i++){
        array_nuevo[i]=(Number(array[i]))
    };

    return array_nuevo;
 }

function calcular_moda_button(){
    const value=input.value;
    var array = value.split(",");
    var array_num=convertirInt(array);
    valor_moda=calcular_moda(array_num);
    result_moda.innerText="la moda es: "+ valor_moda[0]+" se repite "+valor_moda[1];

}