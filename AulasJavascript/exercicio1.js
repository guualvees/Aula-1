const carro = {

  modelo: 'Audi A3',

  marca: 'Audi',

  ano: 2020

};
for (let caracteristica in carro) {

  console.log(caracteristica + ': ' + carro[caracteristica]);

}