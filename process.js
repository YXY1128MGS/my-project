document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.detail-card');
    const lightbox = document.querySelector('.image-lightbox');
    const lightboxImage = document.querySelector('.image-lightbox img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const mobileQuery = window.matchMedia('(max-width: 768px)');

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const image = card.querySelector('img');

            if (mobileQuery.matches) {
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;
                lightbox.classList.add('open');
                lightbox.setAttribute('aria-hidden', 'false');
                document.body.classList.add('no-scroll');
                return;
            }

            const isActive = card.classList.contains('active');
            cards.forEach((item) => item.classList.remove('active'));
            if (!isActive) {
                card.classList.add('active');
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (mobileQuery.matches || event.target.closest('.detail-card')) {
            return;
        }

        cards.forEach((item) => item.classList.remove('active'));
    });

    const closeLightbox = () => {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', closeLightbox);

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });
});
