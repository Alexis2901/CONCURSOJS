function segundoMay(arr) {
    let mayor = -Infinity;
    let segundo = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
  
      if (num > mayor) {
        segundo = mayor;
        mayor = num;
      } else if (num > segundo && num < mayor) {
        segundo = num;
      }
    }
  
    return segundo;
  }
  
  const nums = [12, 35, 1, 10, 34, 1];
  console.log("El segundo mayor es : " + (segundoMay(nums)));
  