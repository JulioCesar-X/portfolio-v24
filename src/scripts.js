document.addEventListener("DOMContentLoaded", function () {

  // Texto inicial
  const initialText = `At first, he was just a young man who kept his ideas stuck in his head, as in the darkness of a cave. Later, with the help of <span class="duration-500 hover:text-white transition">Philosophy</span> and <span class="duration-500 hover:text-white transition">Natural Sciences</span>, a light came, but it was the <span class="CODE-transition">CODE</span> that changed everything.`;

  // Define o conteúdo do contêiner de texto com o texto inicial
  const textContainer = document.getElementById("textContainer");
  textContainer.innerHTML = initialText;

  // Adiciona classe "text-white" à palavra "CODE" quando o usuário passar o mouse sobre ela
  const codeWord = document.querySelector(".CODE-transition");
  if (codeWord) {
    codeWord.addEventListener("mouseover", () => {
      codeWord.classList.add("text-white", "font-bold");
      textContainer.classList.add("parent-container");
    });
  }

  // Adiciona classe "text-white" à palavra "CODE" quando o usuário rolar para baixo
  window.addEventListener("scroll", function () {
    const otherWords = document.querySelectorAll(".transition");

    if (window.scrollY > 15) {
      codeWord.classList.add("text-white", "font-bold");
       textContainer.classList.add("parent-container");
      otherWords.forEach((word) => {
        word.classList.remove("text-white", "font-bold");
      });
    } else {
      otherWords.forEach((word) => {
        word.classList.add("text-white","font-bold");
      });
    }
  });

  // Adiciona efeito de digitação
  const typingText = [
    "curious",
    "positive",
    "empathic",
    "resilient",
    "developer",
  ];
  const typingEffectElement = document.getElementById("typingEffect");

  function startTyping(index) {
    let i = 0;
    const interval = setInterval(function () {
      typingEffectElement.textContent += typingText[index][i];
      i++;
      if (i === typingText[index].length) {
        clearInterval(interval);
        setTimeout(function () {
          startDeleting(index);
        }, 1000);
      }
    }, 300);
  }

  function startDeleting(index) {
    let i = typingText[index].length - 1;
    const interval = setInterval(function () {
      typingEffectElement.textContent = typingEffectElement.textContent.slice(
        0,
        -1
      );
      i--;
      if (i === -1) {
        clearInterval(interval);
        setTimeout(function () {
          if (index < typingText.length - 1) {
            startTyping(index + 1);
          } else {
            startTyping(0);
          }
        }, 500);
      }
    }, 100);
  }

  startTyping(0);
});
