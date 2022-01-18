function operator (_numberone, _numbertwo) {
  let response = "";
  _numberone === _numbertwo ? response = `Os números ${_numberone} e ${_numbertwo} são iguais. ` : response = `Os números ${_numberone} e ${_numbertwo} não são iguais. `
  _numberone + _numbertwo === 10 ? response += `Sua soma é ${_numberone + _numbertwo}, que é igual que 10 `: ""
  _numberone + _numbertwo < 10 ? response += `Sua soma é ${_numberone + _numbertwo}, que é menor que 10 `: ""
  _numberone + _numbertwo > 10 ? response += `Sua soma é ${_numberone + _numbertwo}, que é maior que 10 `: ""
  _numberone + _numbertwo === 20 ? response += `e igual que 20. `: ""
  _numberone + _numbertwo < 10 ? response += `e menor que 20. `: ""
  _numberone + _numbertwo > 20 ? response += `e maior que 20. `: ""
  console.log(response)
}
operator(10,10)