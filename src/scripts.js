document.addEventListener("DOMContentLoaded", function () {
  const codeWord = document.querySelector(".CODE-transition");
  codeWord.addEventListener("mouseover", () => {
    codeWord.classList.add("text-white");
  });

  // Adiciona classe "text-white" à palavra "CODE" quando o usuário rolar para baixo
  window.addEventListener("scroll", function () {
    if (window.scrollY > 25) {
      codeWord.classList.add("text-white");
      otherWords.forEach((word) => word.classList.remove("text-white"));
    }
  });

});

const scrollButtons = document.querySelectorAll(".scroll-btn");
scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetSelector = button.getAttribute("data-scroll-to");
    const target = document.querySelector(targetSelector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
