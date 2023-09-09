const escolhaBebida = prompt("Escolha uma bebida: cerveja, cachaça ou whisky");
let valor;
switch (escolhaBebida.toLowerCase()) {
    case "cerveja":
        valor = 6.50;
        break;
    case "cachaça":
        valor = 3.00;
        break;
    case "whisky":
        valor = 12.50;
        break;
    default:
        console.log("Escolha inválida. Por favor, escolha entre café, leite ou chá.");
        break;
}
if (valor !== undefined) {
    console.log(`Você escolheu ${escolhaBebida} e o valor a ser pago é R$ ${valor.toFixed(2)}.`);
}
