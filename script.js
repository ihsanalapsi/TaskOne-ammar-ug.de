let currentPosition = 0;
const cardsContainer = document.querySelector('.roadmap-cards');
const cardWidth = document.querySelector('.roadmap-cards .card').clientWidth + 20; // عرض الكارت الواحد مع المسافة
const totalCards = document.querySelectorAll('.roadmap-cards .card').length;

document.querySelector('.left-arrow').addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--;
        updateCardsPosition();
    }
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    if (currentPosition < totalCards - 1) { // في حال وجود كرت رابع
        currentPosition++;
        updateCardsPosition();
    }
});

function updateCardsPosition() {
    cardsContainer.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
}