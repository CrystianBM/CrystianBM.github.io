// Animação das barras de skill quando carrega a página
var barras = document.querySelectorAll(".skill-bar-fill-high, .skill-bar-fill-mid, .skill-bar-fill-low, .skill-bar-fill-perfect");

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
