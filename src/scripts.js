//Inicialização do texto e efeitos de rolagem:
document.addEventListener("DOMContentLoaded", function () {
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

    if (window.scrollY > 25) {
      codeWord.classList.add("text-white", "font-bold");
      textContainer.classList.add("parent-container");
      otherWords.forEach((word) => {
        word.classList.remove("text-white", "font-bold");
      });
    } else {
      otherWords.forEach((word) => {
        word.classList.add("text-white", "font-bold");
      });
    }
  });
});

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


document.addEventListener("DOMContentLoaded", function () {
  // Função para aplicar a animação de movimento aleatório nos elementos
  function randomValues() {
    anime({
      targets: ".btn-magnetic",
      translateX: function () {
        return anime.random(-2000, 2000); // Movimento aleatório na horizontal
      },
      translateY: function () {
        return anime.random(-2000, 2000); // Movimento aleatório na vertical
      },
      rotate: function () {
        return anime.random(0, 360); // Rotação aleatória
      },
      easing: "linear",
      duration: 800,
      complete: randomValues,
    });
  }

  // Inicia a animação de movimento aleatório
  randomValues();
});
document.addEventListener("DOMContentLoaded", function () {
  const vectorWords = [
    "Curious",
    "Passionate",
    "Creative",
    "Persistent",
    "Developer",
  ];
  const typingEffect = document.getElementById("typingEffect");
  let index = 0;

  function typeNextWord() {
    if (index < vectorWords.length) {
      const word = vectorWords[index];
      typingEffect.textContent = ""; // Limpa o conteúdo do elemento
      let i = 0;

      // Função para adicionar caracteres com efeito de digitação e caractere piscante
      function typeCharacter() {
        if (i <= word.length) {
          typingEffect.textContent = word.substring(0, i) + "|"; // Adiciona o texto digitado até o momento e o caractere piscante
          i++;
          setTimeout(typeCharacter, 300); // Tempo de digitação entre os caracteres
        } else {
          setTimeout(removeLastCharacter, 400); // Tempo antes de remover o caractere piscante
        }
      }

      // Função para remover o último caractere piscante
      function removeLastCharacter() {
        typingEffect.textContent = word.substring(0, i - 1); // Remove o último caractere piscante
        index++;
        setTimeout(typeNextWord, 600); // Tempo de espera antes de passar para a próxima palavra
      }

      typeCharacter(); // Inicia a função para digitar os caracteres
    }
  }

  typeNextWord(); // Inicia a sequência de digitação
});