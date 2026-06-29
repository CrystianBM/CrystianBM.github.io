var form = document.getElementById("contact-form");
var feedback = document.getElementById("form-feedback");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  var nome = document.getElementById("nome").value.trim();
  var email = document.getElementById("email").value.trim();
  var mensagem = document.getElementById("mensagem").value.trim();

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

  // Aqui você conectaria com um backend ou serviço como EmailJS / Formspree
  // Por enquanto só exibe a mensagem de sucesso
  feedback.textContent = "Mensagem enviada! Entrarei em contato em breve.";
  feedback.className = "success";
  feedback.style.display = "block";

  form.reset();
});
