import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        // CASO QUEIRA AUMENTAR O DELAY ENTRE AS IMGS, ALTERAR AQUI
        delay: 2000,
        disableOnInteraction: false,
    },
});

