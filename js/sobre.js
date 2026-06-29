// sobre.js - Script da página sobre

// Anima as barras de skill quando entram na tela
var barras = document.querySelectorAll(".skill-bar-fill");

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var barra = entry.target;
      var porcentagem = barra.getAttribute("data-width");
      barra.style.width = porcentagem + "%";
    }
  });
}, { threshold: 0.3 });

barras.forEach(function(barra) {
  observer.observe(barra);
});
