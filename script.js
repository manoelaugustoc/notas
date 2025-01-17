// script.js (pode ser usado para interações futuras)
// Exemplo: adicionar um efeito de "scroll suave" para links internos (se você adicionar links de navegação na página)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});