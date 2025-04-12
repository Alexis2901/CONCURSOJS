function Palindromo(str) {
    const limpia = str.replace(/\s+/g, '').toLowerCase();
    const invertir = limpia.split('').reverse().join('');
  
    if (limpia === invertir) {
      console.log("Sí es un palíndromo");
    } else {
      console.log("No es un palíndromo");
    }
  }
  
  const palabra = "anita lava la tina";
  Palindromo(palabra);
  const palabra2 = "juan escutia levanta la bandera";
  Palindromo(palabra2);