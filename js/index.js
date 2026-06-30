// Efeito de digitação do nome
var nomeCompleto = "CRYSTIAN";
var nomeEl = document.getElementById("typed-name");
var index = 0;

function digitarNome() {
  if (index < nomeCompleto.length) {
    nomeEl.textContent += nomeCompleto[index];
    index++;
    setTimeout(digitarNome, 100);
  }
}

// Começa a digitar depois de 400ms
setTimeout(digitarNome, 400);
