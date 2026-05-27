document.addEventListener('DOMContentLoaded', () => {
    const previewCards = document.querySelectorAll('.preview-card');
    const mainCards = document.querySelectorAll('.main-work');
    const lightbox = document.querySelector('.image-lightbox');
    const lightboxImage = document.querySelector('.image-lightbox img');
    const mobileQuery = window.matchMedia('(max-width: 768px)');

    const openLightbox = (image) => {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
    };

    previewCards.forEach((card) => {
        card.addEventListener('click', () => {
            openLightbox(card.querySelector('img'));
        });
    });

    mainCards.forEach((card) => {
        card.addEventListener('click', () => {
            if (mobileQuery.matches) {
                openLightbox(card.querySelector('img'));
            }
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
    };

    lightbox.addEventListener('click', closeLightbox);

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });
});
