var readlineSync = require("readline-sync")

const soma = (a, b) => (a + b).toFixed(2)

const somaService = async () => {
  const valueOne = readlineSync.questionFloat("Insira o primeiro valor: ")
  const valueTwo = readlineSync.questionFloat("Insira o segundo valor: ")

  const result = soma(parseFloat(valueOne), parseFloat(valueTwo))
  console.log("O resultado da soma é: ", result)
}

const multiplicação = (a, b) => (a * b).toFixed(2)

const multiplicaçãoService = async () => {
  const valueOne = readlineSync.questionFloat("Insira o primeiro valor: ")
  const valueTwo = readlineSync.questionFloat("Insira o segundo valor: ")

  const result = multiplicação(parseFloat(valueOne), parseFloat(valueTwo))
  console.log("O resultado da multiplicação é: ", result)
}

const main = () => {
  const actions = ["soma", "multiplicação"]
  const index = readlineSync.keyInSelect(actions, "Escolha uma opção")

  if (actions[index] == "soma") somaService()
  else if (actions[index] == "multiplicação") multiplicaçãoService()
}

module.exports = main()
