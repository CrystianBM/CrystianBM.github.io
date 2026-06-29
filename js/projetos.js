// projetos.js - Script da página de projetos

// Filtro de projetos por categoria
var filterBtns = document.querySelectorAll(".filter-btn");
var cards = document.querySelectorAll(".project-card");

filterBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {

    // Remove .active de todos os botões
    filterBtns.forEach(function(b) {
      b.classList.remove("active");
    });

    // Adiciona .active no botão clicado
    this.classList.add("active");

    var categoria = this.getAttribute("data-filter");

    // Mostra ou esconde os cards
    cards.forEach(function(card) {
      if (categoria === "todos") {
        card.classList.remove("hidden");
      } else {
        var tags = card.getAttribute("data-tags");
        if (tags.includes(categoria)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      }
    });

  });
});
