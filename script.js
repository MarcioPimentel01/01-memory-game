const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;

let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        secondCard = this;
        // You can add logic here to check if the two cards match
        console.log(firstCard.dataset.framework);
        console.log(secondCard.dataset.framework);
        hasFlippedCard = false;
    }
}



cards.forEach(card => card.addEventListener('click', flipCard));