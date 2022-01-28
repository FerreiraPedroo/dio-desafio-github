
function Tratamento(arr, numero) {
  try {
    if (!arr && !numero) throw new ReferenceError("Enviar os parâmetros");
    if (typeof arr !== 'object') throw new TypeError("Array prescisa ser do tipo object");
    if (typeof numero !== 'number') throw new TypeError("Numero prescisa ser do tipo number");
    if (arr.length !== numero) throw new RangeError("Tamanho inválido");
    return arr;

  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Esse erro é um ReferrenceError");
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log("Esse erro é um TypeError");
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log("Esse erro é um RangeError");
      console.log(e.message)
    } else {
      console.log("Tipo de erro não esperado:" + e)
    }
  }
}
console.log(Tratamento([1,2,3,4], 4));