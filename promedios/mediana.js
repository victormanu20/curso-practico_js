var result_mediana=document.getElementById("result_mediana");
var input=document.getElementById("array");


//CALCULAR LA MEDIA ARITMETICA
 function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  

//VERIFICAR SI ES PAR O IMPAR EL TAMAÑO DE LA LISTA
 function esPar(numero){
     if(numero%2===0){
         return true;
     }else{
         return false;
     }
 }

 //ORDENAR LISTA
 function ordenarLista(lista){
     lista.sort(function(a,b){
        return a-b;
     });

     return lista;
 }

 //VERIFICAR SI LISTA ESTA VACIA
 function listaVacia(lista){
     if(lista.length!=0){
         return true;
     }else{
         return false;
     }

 }




 //CALCULAMOS LA MEDIANA
 var mediana;
// var lista=[];


 function calcular_mediana(lista){


    if (listaVacia(lista)){
        
        const mitad_lista=parseInt(lista.length/2);
        ordenarLista(lista);

        if(esPar(lista.length)){
            const elemento1=lista[mitad_lista-1];
            const elemento2=lista[mitad_lista];
       
            const promedioElemento1y2 = calcularMediaAritmetica([
               elemento1,
               elemento2,
             ]);
             
             mediana = promedioElemento1y2;
       
        }else{
           mediana=lista[mitad_lista];
        }
    return mediana;

    }else{
        alert("lista vacia")
    }
 }

 function convertirInt (array){
    var array_nuevo=[]
    for(var i=0;i<array.length;i++){
        array_nuevo[i]=(Number(array[i]))
    };

    return array_nuevo;
 }

 function calcular_mediana_button(){
    const value=input.value;
    var array = value.split(",");
    var array_num=convertirInt(array);
    valor_mediana=calcular_mediana(array_num);
    result_mediana.innerText="la mediana es: "+valor_mediana;
 };