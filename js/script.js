
// Seleciona os botões de navegação do carrossel
let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

// Seleciona os principais containers da lista de slides e das miniaturas (thumbs)
let container = document.querySelector('.container')
let list = document.querySelectorAll('.container .list')
let thumb = document.querySelectorAll('.container .thumb')

// Adiciona eventos de clique para os botões de navegação
btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

// Função responsável por mover os itens da lista e das thumbs ao clicar nas setas
function moveItemsOnClick(type) {
  // Seleciona todos os itens da lista e das thumbs
  let listItems = document.querySelectorAll('.list .list-item');
  let thumbItems = document.querySelectorAll('.thumb .thumb-item');

  if (type === 'next') {
    // Move o primeiro item da lista para o final
    if (listItems.length > 0) {
      list[0].appendChild(listItems[0]);
    }
    // Move o primeiro item das thumbs para o final
    if (thumbItems.length > 0) {
      thumb[0].appendChild(thumbItems[0]);
    }
    // Adiciona a classe para animação "next"
    container.classList.add('next');
  } else if (type === 'back') {
    // Move o último item da lista para o início
    if (listItems.length > 0) {
      list[0].insertBefore(listItems[listItems.length - 1], listItems[0]);
    }
    // Move o último item das thumbs para o início
    if (thumbItems.length > 0) {
      thumb[0].insertBefore(thumbItems[thumbItems.length - 1], thumbItems[0]);
    }
    // Adiciona a classe para animação "back"
    container.classList.add('back');
  }

  // Remove as classes de animação após o tempo da animação CSS (2000ms)
  setTimeout(() => {
    container.classList.remove('next');
    container.classList.remove('back');
  }, 2000); // ajuste conforme a duração da animação no CSS
}

// Inicializa o Swiper para os cards de trilhas
let swiperCards = new Swiper('.card_content', {
  loop: true, // Loop infinito
  grabCursor: true, // Cursor de "pegar" ao passar o mouse
  spaceBetween: 100, // Espaço entre slides

  // Paginação (bolinhas)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Setas de navegação
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsividade: quantidade de slides por tela
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

// =========================
// MENU MOBILE (HAMBURGUER)
// =========================

// Seleciona o menu mobile e o botão hamburguer pelo ID
const menuDiv = document.getElementById('menu-mobile');
const btnAnimar = document.getElementById('btn-menu');

// Adiciona evento de clique ao menu mobile para abrir/fechar o menu
menuDiv.addEventListener('click', animarMenu)

// Função que alterna as classes para abrir/fechar o menu mobile e animar o botão
function animarMenu() {
  menuDiv.classList.toggle('abrir-menu') // Abre/fecha o menu mobile
  btnAnimar.classList.toggle('ativo')    // Anima o botão hamburguer
}

/* Funções para abrir e fechar o popup de login*/
function abrirPopup() {
  document.getElementById("popup").style.display = "flex";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}
/* Função para validar o login */
function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

 if (usuario === "Admin" && senha === "Admin") {
    // Salva o login
    localStorage.setItem('usuarioLogado', 'true');
    // Redireciona para a página adm
    window.location.href = "html/adm.html";
  } 
  else {
    alert("Usuário ou senha incorretos!");
  }
}

function logout() {
  // Exemplo: remover dados do usuário do localStorage/sessionStorage
  localStorage.removeItem('usuarioLogado');
  sessionStorage.removeItem('usuarioLogado');
  // Redireciona para a página de login
  window.location.href = "index.html";
}

