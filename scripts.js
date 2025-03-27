const petButtons = document.querySelectorAll('.btn-full');
const select = document.querySelector('#btn-select-all');
const unselect = document.querySelector('#btn-unselect-all');
const first = document.querySelector('#btn-select-first');
const last = document.querySelector('#btn-select-last');
const next = document.querySelector('#btn-select-next');
const back = document.querySelector('#btn-select-previous');
const cards = document.querySelectorAll('.card');

petButtons.forEach(button => {
    button.onclick = change;
});

select.onclick = active;
unselect.onclick = inactive;
first.onclick = highlightFirstCard;
last.onclick = highlightLastCard;
next.onclick = highlightNextCard;
back.onclick = highlightPrevCard;

function highlightFirstCard() {
    cards.forEach(card => {
        card.classList.remove('active');
        card.classList.remove('card-selected');
    });
    cards[0].classList.add('active');
    cards[0].classList.add('card-selected');
}

function highlightLastCard() {
    cards.forEach(card => {
        card.classList.remove('active');
        card.classList.remove('card-selected');
    });
    const lastCard = cards[cards.length - 1];
    lastCard.classList.add('active');
    lastCard.classList.add('card-selected');
}

function active() {
    petButtons.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    });
}

function inactive() {
    petButtons.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    });
}

function change(event) {
    const icon = event.currentTarget.querySelector('i');
    if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    }
}