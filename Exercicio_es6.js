"use strict";

var alunos = ["Paulo", "Patricia", "Mauro", "Kezia", "Nelissa", "Luiz", "André", "Bruna", "Maria", "Leandro", "Henrique", "Daiane", "Fábio", "Juliana"];
var notaAluno = 0;
var alunosNota = alunos.map(function (NomeAtual) {
  GeraNota();
  return {
    nome: NomeAtual,
    Nota: notaAluno
  };
});
function GeraNota(aa) {
  var nota = Math.random() * 10;
  nota = Math.ceil(nota);
  notaAluno = nota;
  console.log(nota);
  console.log(notaAluno);
  return {
    nota: nota
  };
}
console.log('Inicio - Alunos e notas');
//console.log(alunos);
console.log(alunosNota);
console.log('Fim da lista - Alunos e notas');
var AlunosAprovador = alunosNota.filter(function (item) {
  return item.Nota >= 6;
});
console.log('Lista Alunos Aprovados');
console.log(AlunosAprovador);