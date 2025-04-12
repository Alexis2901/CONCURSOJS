//sin reverse
function arregloinvertido(arr) {
    const invertir = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      invertir.push(arr[i]);
    }
    return invertir;
  }
  
  const valores = [14, 23, 32, 24, 45];
  const resultado = arregloinvertido(valores);
  console.log(resultado); 
  