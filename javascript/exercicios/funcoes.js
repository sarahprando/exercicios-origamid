// Crie uma função para verificar se um valor é Truthy
function verificarValor(i) {
    return !!i;
}

verificarValor(2);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
    return lado * lado;
}

console.log(4);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(name1,name2,name3) {
    return `${name1} ${name2} ${name3}`;
}

nomeCompleto('Sarah', 'Antonio', 'Prando');

// Crie uma função que verifica se um número é par
function verificaPar(a) {
    var b = a % 2;

    if(typeof a === 'number' && b === 0){
        console.log(`O número ${a} é par`);
    } else if(typeof a === 'number' && b !== 0) {
        console.log(`O número ${a} é ímpar`);
    } else {
        console.log(`Informe um valor tipo number`)
    }
}

verificaPar(5);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaType(parametro){
    return `O tipo do dado passado é ${typeof parametro}`;
}

verificaType(true);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
    console.log(`Sarah Antonio Prando`);
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);

  // correção do último exercicio 
  var totalPaises = 193;

  function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);

  