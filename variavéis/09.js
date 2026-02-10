

function testeEscopo() {
    var a = 10;
    if (true) {
        let b = 20;
        console.log(a); // ?
        console.log(b); // ?
    }
    console.log(a); // ?
    console.log(b); // ?
}
testeEscopo();

// o codigo irá imprimir 10, 20, 10 e depois dará um erro, pois a variável b foi declarada usando let dentro do bloco if, o que significa que ela só é acessível dentro desse bloco. Quando tentamos acessar b fora do bloco if, ocorre um erro de referência.