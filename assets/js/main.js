// Função para entrar no site (remover splash)
function entrar() {
  const splash = document.getElementById('splash');
  const main = document.getElementById('main');
  const navBar = document.getElementById('nav-bar');

  splash.classList.add('hidden');
  main.style.display = 'block';
  
  setTimeout(() => {
    main.classList.add('visible');
    navBar.classList.add('visible');
    // Garante que o currículo apareça por padrão ao entrar
    showView('curriculum');
  }, 50);
}

// Função para alternar entre as abas (Currículo e Projetos)
function showView(viewId) {
  const curriculumView = document.getElementById('curriculum-view');
  const projectsView = document.getElementById('projects-view');
  const navCurr = document.getElementById('nav-curr');
  const navProj = document.getElementById('nav-proj');

  // Alterna visibilidade das seções
  if (viewId === 'curriculum') {
    curriculumView.style.display = 'block';
    projectsView.style.display = 'none';
    navCurr.classList.add('active');
    navProj.classList.remove('active');
  } else if (viewId === 'projects') {
    curriculumView.style.display = 'none';
    projectsView.style.display = 'block';
    navProj.classList.add('active');
    navCurr.classList.remove('active');
  }

  // Rola para o topo ao mudar de aba
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

