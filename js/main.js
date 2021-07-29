var nome = "Elias Rodrigues";
var idade = 34;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo!";

// alert(`${nome} tem ${idade}`);
// alert(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(idade * idade2);

// Arrays
var lista = ["maça", "pera", "laranja"];
console.log(lista);
console.log(lista[0]);

// Adicionar um item na lista
retorno_push = lista.push("uva");
console.log(lista, retorno_push);
// Deleta o último elemento de uma lista
deletado = lista.pop();
console.log(lista, deletado);

// Tamanho da lista
console.log(lista.length);

// Inverter a lista
console.log(lista.reverse());

// Criar string a partir de uma lista
console.log(lista.toString());

// Juntando dados com a lista em uma única string
console.log(lista.join(' - '));


// Dicionário
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta["nome"]);

// Lista de dicionários
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxo"}];
console.log(frutas[1].nome);

// Condicionais
var idade = 18;
// Entrada de dados:
// var idade2 = prompt("Qual a sua idade?")


// Teste condicional
if (idade >= 18){
  console.log("Maior de idade.");
}
else {
  console.log("Menor de idade");
}

// Laços de repetição
// While
var count = 0;
while (count < 5) {
  console.log(count);
  count++;
};


// For
var count2;
for (count2 = 0; count <= 5; count++){
  console.log(count);
}

// Datas
// Data atual
var d = new Date();
console.log(d);
console.log(d.getDate());


// Função
function soma(x, y) {
  return x + y;
}

console.log(soma(5,10));

function setReplace(frase, nome, novo_nome){
  return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade){
  let validar = true;
  if (idade >= 18){
    validar = true;
    return validar;
  }
  else {
    validar = false;
    return validar;
  }
}

var i = 15;
console.log(validaIdade(i))

// Manipulando elementos da página
function clicou(){
  //alert("Obrigado por clicar!");
  // Retornar dentro do HTML
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";

  // Exemplo dele encontrando o elemento no DOM
  // console.log(document.getElementById("agradecimento"));

}

function redirecionar(){
  window.open("https://www.youtube.com/"); // Abre em outra aba.
  window.location.href = "https://www.youtube.com/"; // Abre na mesma janela.
}

// On mouse over
function trocar(objeto){
  // Pelo DOM
  // document.getElementById("passe_mouse").innerHTML = "Mudou o texto!";
  // Por parâmetro
  objeto.innerHTML = "Mudou o texto!";
}

// On Mouse out
function voltar(objeto){
  // Pelo DOM
  // document.getElementById("passe_mouse").innerHTML = "Passe o mouse aqui."

  // Por parâmetro
  objeto.innerHTML = "Passe o mouse aqui."
}

// On load
function load() {
  alert("Página carregada!");
}

// On change
function change(elemento){
  alert(`Valor selecionado ${elemento.value}`);
}