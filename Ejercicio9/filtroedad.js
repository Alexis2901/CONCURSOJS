const usuarios = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Carlos", edad: 15 },
    { nombre: "Lucía", edad: 30 }
  ];
  
  const mayoresDeEdad = usuarios.filter(usuario => usuario.edad >= 18);
  
  console.log(mayoresDeEdad);
  