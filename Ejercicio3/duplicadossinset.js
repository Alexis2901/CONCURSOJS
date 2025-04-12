//elementos duplicados elimar sin set
function sinduplicados(arr){
const resultado = [];
for (let i = 0; i < arr.length; i++){
    if (!resultado.includes(arr[i])){
        resultado.push(arr[i]);
    }
}
return resultado;
}

const duplicado = [1,2,2,3,4,4,5];
const quitarduplicados = sinduplicados(duplicado);
console.log(quitarduplicados);