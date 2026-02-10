
//A diferença entre var, let e const no contexto do escopo é a seguinte:

-// var: A variável declarada com var tem escopo de função, o que significa que ela é acessível em toda a função onde foi declarada. Além disso, as variáveis declaradas com var são "hoisted", ou seja, elas são elevadas ao topo do escopo, o que pode levar a comportamentos inesperados.
- //let: A variável declarada com let tem escopo de bloco, o que significa que ela é acessível apenas dentro do bloco onde foi declarada. As variáveis let também são "hoisted", mas não podem ser acessadas antes da linha em que foram declaradas (isso é conhecido como "temporal dead zone").
- //const: A variável declarada com const também tem escopo de bloco e deve ser inicializada no momento da declaração. Uma vez atribuído um valor a uma variável const, esse valor não pode ser alterado.

//Exemplo de código:

function exemploEscopo() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  console.log(x); // 10
  console.log(y); // Não está definindo
  console.log(z); // Não está definindo
}