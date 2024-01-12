// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var user = {
    nome: 'Sarah',
    sobrenome: 'Prando',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
user.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000;
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    verHomem(pessoa){
        if(pessoa === 'homem'){
            console.log('Latir');
        } else {
            console.log('Cachorro não viu um homem');
        }
    },

  }




  /////////////////////////////////////////////////////////




// nomeie 3 propriedades ou métodos de strings
var nome = 'Sarah';

nome.charAt(2);
nome.length;
nome.toLowerCase();

// nomeie 5 propriedades ou métodos de elementos do DOM

/* 
querySelector
addEventListener
classList
className
innerHTML
*/

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V