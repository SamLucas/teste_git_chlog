var readlineSync = require("readline-sync")

const soma = (a, b) => a + b

const main = async () => {
  const valueOne = readlineSync.question("Insira o primeiro valor: ")
  const valueTwo = readlineSync.question("Insira o segundo valor: ")

  const result = soma(parseInt(valueOne), parseInt(valueTwo))
  console.log("O resultado da soma é: ", result)
}

module.exports = main()
