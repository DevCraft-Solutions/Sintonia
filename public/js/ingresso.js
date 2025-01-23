document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselTitle = document.querySelector('.carousel-title');
    let currentIndex = 0;

    // Atualiza o título com base no slide atual
    function updateTitle() {
        const currentItem = carouselItems[currentIndex];
        carouselTitle.textContent = currentItem.getAttribute('data-title');
    }

    // Move os slides
    function moveSlide(direction) {
        currentIndex += direction;

        // Volta ao primeiro slide ou vai para o último
        if (currentIndex < 0) {
            currentIndex = carouselItems.length - 1;
        } else if (currentIndex >= carouselItems.length) {
            currentIndex = 0;
        }

        // Atualiza a posição do carrossel
        const offset = -currentIndex * 100; // Cada slide ocupa 100% da largura
        carouselContainer.style.transform = `translateX(${offset}%)`;

        // Atualiza o título
        updateTitle();
    }

    // Inicializa o título
    updateTitle();

    // Expõe a função moveSlide globalmente
    window.moveSlide = moveSlide;
});
