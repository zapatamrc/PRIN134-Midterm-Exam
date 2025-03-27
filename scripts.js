document.addEventListener('DOMContentLoaded', function() {
    // Select all necessary elements
    const selectAllBtn = document.querySelector('#btn-select-all');
    const unselectAllBtn = document.querySelector('#btn-unselect-all');
    const firstBtn = document.querySelector('#btn-select-first');
    const lastBtn = document.querySelector('#btn-select-last');
    const nextBtn = document.querySelector('#btn-select-next');
    const prevBtn = document.querySelector('#btn-select-previous');
    const cards = document.querySelectorAll('.card');
    const petButtons = document.querySelectorAll('.btn-full');

    // Add event listeners
    selectAllBtn.addEventListener('click', active);
    unselectAllBtn.addEventListener('click', inactive);
    firstBtn.addEventListener('click', highlightFirstCard);
    lastBtn.addEventListener('click', highlightLastCard);
    nextBtn.addEventListener('click', highlightNextCard);
    prevBtn.addEventListener('click', highlightPrevCard);

    petButtons.forEach(button => {
        button.addEventListener('click', change);
    });

    // Helper functions
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
});