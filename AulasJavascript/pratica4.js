const { question } = require("readline-sync");

let choice = null;
let value = null;
while (value == null) {
  const drink = question(
    "Bebidas:\n- Cerveja\n- Vodka\n- Whisky\n\nEscolha sua bebida:\n"
  );

  switch (drink.toLocaleLowerCase()) {
    case "cerveja":
      value = 5.75;
      choice = "Cerveja";
      break;
    case "vodka":
      value = 10.50;
      choice = "Vodka";
      break;
    case "whisky":
      value = 15.95;
      choice = "Whisky";
      break;
    default:
      console.log("Opção inválida, escolha entre uma das opções abaixo...");
      break;
  }
}
console.log(`Você escolheu um ${choice} no valor de R$ ${value}`);
