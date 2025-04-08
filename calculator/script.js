// Função para Adição
function adicao() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 + num2;
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

// Função para Subtração
function subtracao() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 - num2;
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

// Função para Multiplicação
function multiplicacao() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 * num2;
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

// Função para Divisão
function divisao() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('resultado').innerHTML = 'Resultado: Erro! Divisão por zero.';
    } else {
        let resultado = num1 / num2;
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    }
}

// Função para Porcentagem
function porcentagem() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = (num1 * num2) / 100;
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}%`;
}
