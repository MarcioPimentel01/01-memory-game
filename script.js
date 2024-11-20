const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    console.log(this);
    console.log(`I was clicked`)
    this.classList.toggle('flip');
    console.log(this);
    console.log(`I was flipped`);
}


cards.forEach(card => card.addEventListener('click', flipCard));