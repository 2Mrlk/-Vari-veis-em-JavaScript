//O que será impresso no console ao executar o código abaixo? Explique o motivo.

jsx
var nome = "Ana";

function mostrarNome() {
    var nome = "Carlos";
    console.log(nome); // ?
}

mostrarNome();
console.log(nome); // ?


//Agora, substitua `var` por `let` dentro da função e observe se há alguma mudança no comportamento.
let nome =" Ana"
function mostrarNome(){
    let nome = "Carlos";
    console.log(nome);
}
mostrarNome();
console.log(nome);//?
//sem mudanças de comportamento 