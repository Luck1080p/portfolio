// Função para alternar entre as visualizações (Currículo e Projetos)
function showView(viewId) {
  const splash = document.getElementById('splash');
  const main = document.getElementById('main');
  const navBar = document.getElementById('nav-bar');
  const curriculumView = document.getElementById('curriculum-view');
  const projectsView = document.getElementById('projects-view');
  const navCurr = document.getElementById('nav-curr');
  const navProj = document.getElementById('nav-proj');

  // Esconde o splash screen se estiver visível
  if (!splash.classList.contains('hidden')) {
    splash.classList.add('hidden');
    main.style.display = 'block';
    setTimeout(() => {
      main.classList.add('visible');
      navBar.classList.add('visible');
    }, 50);
  }

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

  // Rola para o topo ao mudar de página
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

