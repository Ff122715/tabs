const pieces = document.querySelectorAll('.piece');
const img = document.querySelectorAll('.img');
const cells = document.querySelectorAll('.cell');
const text = document.getElementById('text');

let count = cells.length;

let dragItem = null;

img.forEach(cell => {
    cell.addEventListener('dragstart', dragstart);
    cell.addEventListener('dragend', dragend);
});

[...pieces, ...cells].forEach(cell => {
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
         if(countRes() === count) {

        }
    }
}

function countRes() {

}