window.addEventListener('scroll', function() {
    var topbar = document.querySelector('.topbar');
    var scrollPosition = window.scrollY;
    
    // Reduz a imagem de fundo ao rolar a página
    if (scrollPosition > 0) {
        topbar.style.backgroundSize = (100 - scrollPosition / 10) + '%';
    } else {
        topbar.style.backgroundSize = '100%';
    }
});
