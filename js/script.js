// nomeie 3 propriedades ou métodos de strings
const nome = 'Mateus';
const nomeMaiusculo = nome.toUpperCase();
const tamanhoNome = nome.length;
const primeiraLetra = nome.charAt(0).toLowerCase();
const ultimaLetra = nome.charAt(nome.length - 1).toLowerCase();

console.log(nome, nomeMaiusculo, tamanhoNome, primeiraLetra, ultimaLetra);

// nomeie 5 propriedades ou métodos de elementos do DOM
const botao = document.querySelector('.btn');
const body = document.querySelector('body');
const idBotao = botao.getAttribute('id');
const textoBotao = botao.innerText;
const classesBotao = botao.classList.value;
const bodyHeight = body.style.height;
const bodyWidth = body.style.width;

console.log(idBotao, textoBotao, classesBotao, bodyHeight, bodyWidth);

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
new ClipboardJS(botao);