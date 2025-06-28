// Seleciona o menu mobile pelo ID
const menuDiv = document.getElementById('menu-mobile');

// Seleciona o botão do menu (hamburguer) pelo ID
const btnAnimar = document.getElementById('btn-menu');

// Adiciona um evento de clique ao menu mobile para chamar a função animarMenu
menuDiv.addEventListener('click', animarMenu);

// Função que alterna as classes para abrir/fechar o menu mobile e animar o botão
function animarMenu() {
  menuDiv.classList.toggle('abrir-menu'); // Abre/fecha o menu mobile
  btnAnimar.classList.toggle('ativo');    // Anima o botão
}