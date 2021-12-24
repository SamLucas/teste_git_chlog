var readlineSync = require("readline-sync")

// Soma

const soma = (a, b) => (a + b).toFixed(2)

const somaService = async () => {
  const valueOne = readlineSync.questionFloat("Insira o primeiro valor: ")
  const valueTwo = readlineSync.questionFloat("Insira o segundo valor: ")

  const result = soma(parseFloat(valueOne), parseFloat(valueTwo))
  console.log("O resultado da soma é: ", result)
}

// Multiplicação

const multiplicação = (a, b) => (a * b).toFixed(2)

const multiplicaçãoService = async () => {
  const valueOne = readlineSync.questionFloat("Insira o primeiro valor: ")
  const valueTwo = readlineSync.questionFloat("Insira o segundo valor: ")

  const result = multiplicação(parseFloat(valueOne), parseFloat(valueTwo))
  console.log("O resultado da multiplicação é: ", result)
}

// Divisão

const divisao = (a, b) => (a / b).toFixed(2)

const divisaoService = async () => {
  const valueOne = readlineSync.questionFloat("Insira o primeiro valor: ")
  const valueTwo = readlineSync.questionFloat("Insira o segundo valor: ")

  const result = divisao(parseFloat(valueOne), parseFloat(valueTwo))
  console.log("O resultado da divisão é: ", result)
}

// Subtração

const subtração = (a, b) => (a - b).toFixed(2)

const subtraçãoService = async () => {
  const valueOne = readlineSync.questionFloat("Insira o primeiro valor: ")
  const valueTwo = readlineSync.questionFloat("Insira o segundo valor: ")

  const result = subtração(parseFloat(valueOne), parseFloat(valueTwo))
  console.log("O resultado da divisão é: ", result)
}

const main = () => {
  const actions = ["soma", "multiplicação", "divisão", "subtração"]

  const index = readlineSync.keyInSelect(actions, "Escolha uma opção")

  switch (actions[index]) {
    case "soma":
      somaService()
    case "multiplicação":
      multiplicaçãoService()
    case "divisão":
      divisaoService()
    case "subtração":
      subtraçãoService()
  }
}

module.exports = main()
