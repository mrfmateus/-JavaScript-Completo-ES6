// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor) {
    if (valor) {
        console.log(`${valor} é Truthy`);
    } else {
        console.log(`${valor} é Falsy`);
    }
}

verificaTruthy(0);
verificaTruthy('teste');

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calculaPerimetroQuadrado(lado) {
    if (typeof lado !== 'number') {
        console.log('Informe um número!');
    } else {
        return (lado * 4);
    }
}

calculaPerimetroQuadrado(' ');
console.log(`O perímetro é: ${calculaPerimetroQuadrado(10)}`);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function getNomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome;
}

console.log(getNomeCompleto('Mateus', 'Ferreira')); 

// Crie uma função que verifica se um número é par
function parOuImpar(numero) {
    if ((numero % 2) == 0) {
        console.log(`${numero} é par!`);
    } else {
        console.log(`${numero} é ímpar!`);
    }
}

parOuImpar(20);
parOuImpar(19);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function getTipo(valor) {
    return typeof valor;
}

console.log(getTipo(0));
console.log(getTipo());
console.log(getTipo(true));
console.log(getTipo('Mateus'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', () => {
    console.log('Mateus Renan Ferreira');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20)); 
console.log(jaVisitei(20)); 
  