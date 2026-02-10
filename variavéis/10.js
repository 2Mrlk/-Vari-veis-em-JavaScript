
let mensagemGlobal = "Olá, mundo!";

function exibirMensagem() {
    let mensagemLocal = "Olá, função!";
    console.log(mensagemGlobal); // Acessando a variável global
    console.log(mensagemLocal); // Acessando a variável local
}

exibirMensagem();

console.log(mensagemGlobal); // Acessando a variável global
console.log(mensagemLocal); // Tentando acessar a variável local
// O código irá imprimir "Olá, mundo!" e "Olá, função!" dentro da função exibirMensagem(). No entanto,
//  quando tentamos acessar mensagemLocal fora da função, ocorrerá um erro de referência,
//  pois mensagemLocal é uma variável local e só é acessível dentro da função onde foi declarada.