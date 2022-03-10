let container = document.getElementById('container');
let reset = document.getElementById('reset-btn');
let okBtn = document.getElementById('ok-btn');
let grid = document.querySelectorAll('.grid-item');



function createGrid(rows , cols) { /* Fonction de création de la grille de jeu */
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

createGrid(32,32);

/* Event listener pour gérer le mouse over et le changement de couleur */
function hoverListener() {
let grid = document.querySelectorAll('.grid-item');
grid.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        cell.classList.add('hover');
    })
});
}

hoverListener();

function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
    return val;
}

okBtn.addEventListener('click', () => {
    const gridSize = getVal();
    if (gridSize > 64 && gridSize < 2 ) {
        window.prompt('Incorret value, please choose a grid size between 2 and 64');
    }
    else {
        container.innerHTML = ""; /* Delete all child of container grid */
        createGrid(gridSize, gridSize);
        hoverListener();
    }
});

/* Remove color on reset button click */
reset.addEventListener('click', () => {
    grid.forEach(cell => {
        cell.classList.remove('hover');
        console.log('reset');
    });
});



