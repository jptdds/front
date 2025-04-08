
let paragrafo = "O parágrafo";
console.log(paragrafo);

// Selecionando o parágrafo pelo id e pela classe
let PARAGRAFOUM = document.getElementById('PARAGRAFOUM');
console.log(PARAGRAFOUM);
let PARAGRAFODOIS = document.getElementsByClassName('PARAGRAFODOIS');
console.log(PARAGRAFODOIS);
let selector = document.querySelectorAll('p');
console.log(selector);

/*--------------------------------------------------*/
// Corrigindo a criação e adição dos elementos
const dvParagrafo3 = document.createElement('p'); // Criar um elemento <p> (parágrafo)
dvParagrafo3.textContent = 'Program BRL'; // Definir o conteúdo do parágrafo
document.body.appendChild(dvParagrafo3); // Adicionar o parágrafo ao corpo da página
/* CONST BOTAO = DOCUMENT QUERY SELECTOR #MEUBOTAO 'botao.addEventListener('click',()=>{
    console.log('botão clickado')})*/
    const botao = document.createElement('button');
    botao.textContent='>>>>>CLIQUE AQUI<<<<<<';
    document.body.appendChild(botao);
    botao.addEventListener('mouseover',()=>{
        console.log('Botão Clicado')
    });
