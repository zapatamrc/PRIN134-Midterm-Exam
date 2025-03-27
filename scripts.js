document.addEventListener('DOMContentLoaded', function() {
    const select = document.querySelector('#btn-select-all');
    const unselect = document.querySelector('#btn-unselect-all');
    const first = document.querySelector('#btn-select-first');
    const last = document.querySelector('#btn-select-last');
    const next = document.querySelector('#btn-select-next');
    const prev = document.querySelector('#btn-select-previous');
    const cards = document.querySelectorAll('.card');
    const pet = document.querySelectorAll('.btn-full');
    const sitelogo = document.querySelector('.banner-content');

    select.addEventListener('click', active);
    unselect.addEventListener('click', inactive);
    first.addEventListener('click', highlightFirstCard);
    last.addEventListener('click', highlightLastCard);
    next.addEventListener('click', highlightNextCard);
    prev.addEventListener('click', highlightPrevCard);
    sitelogo.addEventListener('click',logo);

    pet.forEach(button => {
        button.addEventListener('click', change);
    });

    function getCurrentActiveIndex() {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains('active')) {
                return i;
            }
        }
        return 0;
    }

    function highlightCard(index) {
        cards.forEach(card => {
            card.classList.remove('active');
            card.classList.remove('card-selected');
        });
        cards[index].classList.add('active');
        cards[index].classList.add('card-selected');
    }

    function highlightFirstCard() {
        highlightCard(0);
    }

    function highlightLastCard() {
        highlightCard(cards.length - 1);
    }

    function highlightNextCard() {
        const currentIndex = getCurrentActiveIndex();
        const nextIndex = (currentIndex + 1) % cards.length;
        highlightCard(nextIndex);
    }

    function highlightPrevCard() {
        const currentIndex = getCurrentActiveIndex();
        const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
        highlightCard(prevIndex);
    }

    function active() {
        document.querySelectorAll('.btn-full').forEach(button => {
            const icon = button.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }
        });
    }

    function inactive() {
        document.querySelectorAll('.btn-full').forEach(button => {
            const icon = button.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        });
    }

    function change(event) {
        const icon = event.currentTarget.querySelector('i');
        if (icon) {
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        }
    }

    function logo() {
        sitelogo.classList.add("animate__animated", "animate__pulse");
        setTimeout(() => {
            sitelogo.classList.remove("animate__animated", "animate__pulse");
        }, 1000); 
    }
});

