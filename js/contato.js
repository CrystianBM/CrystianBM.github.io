// JS simples para validação
var form = document.getElementById("contact-form");
var feedback = document.getElementById("form-feedback");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  var nome = document.getElementById("nome").value.trim();
  var email = document.getElementById("email").value.trim();
  var mensagem = document.getElementById("mensagem").value.trim();

  // Validação
  if (nome === "" || email === "" || mensagem === "") {
    feedback.textContent = "Por favor, preencha todos os campos.";
    feedback.className = "error";
    feedback.style.display = "block";
    return;
  }

  if (!email.includes("@")) {
    feedback.textContent = "Digite um e-mail válido.";
    feedback.className = "error";
    feedback.style.display = "block";
    return;
  }


  // Espaço para integração com backend ou serviço de envio de e-mail posteriormente


  // Mensagem de sucesso fictícia
  feedback.textContent = "Mensagem enviada! Entrarei em contato em breve.";
  feedback.className = "success";
  feedback.style.display = "block";

  form.reset();
});
