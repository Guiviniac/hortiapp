function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('minimized');

    // Ajusta a margem do conteúdo dependendo do estado da sidebar
    setContentMargin();
}

// Define a margem do conteúdo com base no estado atual da sidebar
function setContentMargin() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');

    if (window.innerWidth <= 768) {
        // Em telas menores, margem de 60px se minimizada, 270px se expandida
        content.style.marginLeft = sidebar.classList.contains('minimized') ? '60px' : '270px';
    } else {
        // Em telas maiores, 60px se minimizada, 270px se expandida
        content.style.marginLeft = sidebar.classList.contains('minimized') ? '60px' : '270px';
    }
}

// Configura a margem inicial do conteúdo ao carregar a página
document.addEventListener('DOMContentLoaded', setContentMargin);

// Atualiza a margem do conteúdo quando a janela é redimensionada
window.addEventListener('resize', setContentMargin);
