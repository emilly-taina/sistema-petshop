document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");
  const emptyState = document.getElementById("emptyState");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filtro = button.dataset.filter;

      filterButtons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

      let visiveis = 0;

      productCards.forEach((card) => {
        const categoria = card.dataset.category;
        const deveMostrar = filtro === "todos" || categoria === filtro;
        card.classList.toggle("hidden", !deveMostrar);
        if (deveMostrar) visiveis++;
      });

      emptyState.hidden = visiveis > 0;
    });
  });
});
