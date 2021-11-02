const divAnimals = document.querySelectorAll('.animal');
const animals = document.querySelectorAll('.img');
const cells = document.querySelectorAll('.cell');

let dragItem = null;
animals.forEach(cell => {
    cell.addEventListener('dragstart', dragstart);
    cell.addEventListener('dragend', dragend);
});

[...divAnimals, ...cells].forEach(cell => {
    cell.addEventListener('dragover', dragover);
    cell.addEventListener('drop', drop);
});

function dragstart(e) {
    dragItem = e.target;
    setTimeout(() => {
        e.target.style.display = 'none';
    }, 0);
}

function dragend(e) {
    e.target.style.display = '';
}

function dragover(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (e.target.tagName !== 'IMG') {
        e.target.append(dragItem);
        /*if (dragItem.dataset.role === 'predator' && e.target.closest('.cell')) {
            e.target.classList.add('good');
        }*/
    }
}