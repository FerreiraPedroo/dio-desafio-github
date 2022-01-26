// MAP
const usuarios = new Map();
usuarios.set("João", "Admin");
usuarios.set("Paulo", "Admin");
usuarios.set("Ferreira", "User");
usuarios.set("Nascimento", "User");
usuarios.set("Pedro", "Admin");

function getAdmins(map) {
  let admins = []
  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key)
    }
  }
  return admins
}

console.log(getAdmins(usuarios))



// SETS
const meuArray = [20,15,25,70,20,58,35,10,15,25,25,35,70,22];

function valoresUnicos(arr){
  const mySet = new Set(arr);

  return [...mySet];
}

console.log(valoresUnicos(meuArray))