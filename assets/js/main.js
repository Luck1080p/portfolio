// Função para entrar no currículo (esconder splash screen)
function entrar() {
  document.getElementById('splash').classList.add('hidden');
  const main = document.getElementById('main');
  main.style.display = 'block';
  // Pequeno delay para o display:block ter efeito antes da animação
  setTimeout(() => { 
    main.style.opacity = '1'; 
  }, 10);
}
