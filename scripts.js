const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const select = document.querySelector('#btn-select-all');
const unselect = document.querySelector('#btn-unselect-all');

button1.onclick = change;
button2.onclick = change;
button3.onclick = change;
button4.onclick = change;
button5.onclick = change;
button6.onclick = change;
select.onclick = active;
unselect.onclick = inactive;

function active() {
    const buttons = [button1, button2, button3, button4, button5, button6];
    buttons.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    });
}

function inactive() {
    const buttons = [button1, button2, button3, button4, button5, button6];
    buttons.forEach(button => {
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