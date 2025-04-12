function BuscarMaxymin(arr) {
let mayor = arr[0];
let menor = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i];
    }
    if (arr[i] < menor) {
      menor = arr[i];
    }
  }

  return { mayor, menor };
}

const valores = [12, 5, 8, 130, 44];
const resultado = BuscarMaxymin(valores);
console.log(`El número Mayor es: ${resultado.mayor}, El número Menor es: ${resultado.menor}`);