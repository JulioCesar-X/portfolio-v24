document.addEventListener("DOMContentLoaded", function () {
  initializeText();
  handleFloatingShapes();
  setupHamburgerMenu();
  typeWords();
  paintCodeWord();
  paintScrollWord();

});

function initializeText() {
  const initialText = `At first, he was just a young man who kept his ideas stuck in his head, as in the darkness of a cave. Later, with the help of <span class="hover:text-white .transition">Philosophy</span> and <span class="hover:text-white .transition">Natural Sciences</span>, a light came, but it was the <span class="CODE-transition">CODE</span> that changed everything.`;
  document.getElementById("textContainer").innerHTML = initialText;
}

function paintCodeWord() {
  // Adiciona classe "text-white" à palavra "CODE" quando o usuário passar o mouse sobre ela
  const codeWord = document.querySelector(".CODE-transition");
  if (codeWord) {
    codeWord.addEventListener("mouseover", () => {
      codeWord.classList.add("text-white", "font-bold");
      textContainer.classList.add("parent-container");
    });
  }
}

function paintScrollWord() {
   // Adiciona classe "text-white" à palavra "CODE" quando o usuário rolar para baixo
  window.addEventListener("scroll", function () {
    const otherWords = document.querySelectorAll(".transition");

    if (window.scrollY > 15) {
      codeWord.classList.add("text-white", "font-bold");
      otherWords.forEach((word) => {
        word.classList.remove("text-white", "font-bold");
      });
    } else {
      otherWords.forEach((word) => {
        word.classList.add("text-white", "font-bold");
      });
    }

  });

}

function handleFloatingShapes() {
  const shapes = document.querySelectorAll(".btn-magnetic");
  shapes.forEach((shape) => {
    shape.addEventListener("mouseenter", () => {
      shape.style.transform = "scale(1.2)";
      shape.classList.add('CODE-transition', 'text-6x1');
      anime.remove(shape);
    });
    shape.addEventListener("mouseleave", () => {
      shape.style.transform = "scale(1)";
      randomValues(shape);
    });
    randomValues(shape);
  });
}

function randomValues(element) {
  anime({
    targets: element,
    translateX: () => anime.random(-560, 560),
    translateY: () => anime.random(-550, 550),
    rotate: () => anime.random(-360, 360),
    easing: "linear",
    duration: 3000,
    complete: () => randomValues(element),
  });
}

function setupHamburgerMenu() {
  const hamburger = document.querySelector(".btn-hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

function typeWords() {
  const words = [
    "Curious",
    "Passionate",
    "Creative",
    "Persistent",
    "Developer",
  ];
  const typingEffectElement = document.getElementById("typingEffect");
  let wordIndex = 0;

  function typeNextWord() {
    if (wordIndex < words.length) {
      let charIndex = 0;
      const currentWord = words[wordIndex];

      // Mostrar cursor inicial antes de começar a digitar
      typingEffectElement.textContent = "|";
      setTimeout(() => typeCharacter(currentWord), 600);

      function typeCharacter(word) {
        if (charIndex <= word.length) {
          typingEffectElement.textContent = word.slice(0, charIndex) + "|";
          charIndex++;
          setTimeout(() => typeCharacter(word), 100);
          
        } else {
          // Decidir o que fazer após terminar de digitar a palavra
          if (word === "Developer") {
            typingEffectElement.classList.add("typing-red");
            // Para "Developer", não remover caracteres e remover cursor
            typingEffectElement.textContent = word; // Remover cursor final
            // Não chamar mais nada para encerrar a função
          } else {
            setTimeout(removeCharacters, 600);
          }
        }
      }

      function removeCharacters() {
        if (charIndex > 0) {
          charIndex--;
          typingEffectElement.textContent =
            currentWord.slice(0, charIndex) + "|";
          setTimeout(removeCharacters, 100);
        } else {
          wordIndex++;
          setTimeout(typeNextWord, 600);
        }
      }
    }
  }

  typeNextWord();
}
document.addEventListener("DOMContentLoaded", async function () {
  try {
    // Faz a requisição para a API para obter a foto de perfil
    const response = await fetch("https://api.github.com/users/JulioCesar-X");
    const data = await response.json();

    // Obtém a URL da foto de perfil
    const profileImageUrl = data.avatar_url;

    // Define a imagem de fundo do container redondo com a URL da foto de perfil
    const container = document.querySelector(".container");
    container.style.backgroundImage = `url('${profileImageUrl}')`;
  } catch (error) {
    console.error("Erro ao obter a foto de perfil:", error);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.5, // Define o quanto do item deve estar visível para ativar
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn"); // Certifique-se de que esta classe está definida no CSS
      } else {
        entry.target.classList.remove("animate-fadeIn");
      }
    });
  }, observerOptions);

  // Aplicar o observer a todos os elementos que requerem animação ao entrar em vista
  document.querySelectorAll('.animatable').forEach(el => observer.observe(el));
});


