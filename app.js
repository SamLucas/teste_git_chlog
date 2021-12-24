var readlineSync = require("readline-sync")

const soma = (a, b) => (a + b).toFixed(2)

const somaService = async () => {
  const valueOne = readlineSync.questionFloat("Insira o primeiro valor: ")
  const valueTwo = readlineSync.questionFloat("Insira o segundo valor: ")

  const result = soma(parseFloat(valueOne), parseFloat(valueTwo))
  console.log("O resultado da soma é: ", result)
}

const main = () => {
  const actions = ["soma"]
  const index = readlineSync.keyInSelect(actions, "Escolha uma opção")

  if (actions[index] == "soma") somaService()
}

module.exports = main()
