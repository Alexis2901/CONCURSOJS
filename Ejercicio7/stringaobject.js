const string = "nombre:Ivan, edad: 23, ciudad:CDMX";

const objeto = Object.fromEntries(
  string.split(', ').map(parte => {
    const [clave, valor] = parte.split(':');

    const num = Number(valor);
    return [clave, isNaN(num) ? valor : num];
  })
);

console.log(objeto);
