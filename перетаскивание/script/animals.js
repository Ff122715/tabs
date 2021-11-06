const divAnimals = document.querySelectorAll('.animal');
const animals = document.querySelectorAll('.img');
const cells = document.querySelectorAll('.cell');
const text = document.getElementById('text');

let count = cells.length;

let dragSource = null;
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
    dragSource = e.target.closest('.cell');
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
        if (dragItem.dataset.role === 'predator') {
            changeVisual(dragSource, e.target.closest('.cell'), 'good');
            if (countRes() === count) text.textContent = 'Поздравляем! Вы нашли всех хищников';
            else text.textContent = 'Найди хищников и перетащи их в клетки!';
        }
    }
}

function countRes() {
    return document.querySelectorAll('.cell > img[data-role="predator"]').length;
}

function changeVisual(elSource, elRes, classRes) {
    if (elRes != null) elRes.classList.add(classRes);
    if (elSource != null) elSource.classList.remove(classRes);
}