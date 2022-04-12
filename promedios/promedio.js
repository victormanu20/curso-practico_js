// const lista=[
//     100,
//     200,
//     300,
//     400,
//     500
// ];

const result_media=document.getElementById("result_media");


function Media_Aritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
  }

function calcular_Media(){
    // var pon_Suma=0;
    // var promedio=0;
    // for(var i=0;i<lista.length;i++){
    //     pon_Suma=pon_Suma+lista[i];
    //     };

    const input=document.getElementById("array");
    const value=input.value;
    var array = value.split(",");
    var array_num=[]
    console.log(array)
    for(var i=0;i<array.length;i++){
        array_num[i]=(Number(array[i]))
    };
    // array.forEach(function(num){
    //     array_num.push(Number(array[num-1]));

    // }) ;
    console.log(array_num);
    valor_media=Media_Aritmetica(array_num);  

    result_media.innerText="la media es "+valor_media;
};