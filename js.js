let container = document.getElementById('container');
let reset = document.getElementById('reset-btn');
let okBtn = document.getElementById('ok-btn');


/* Fonction de création de la grille de jeu */
function createGrid(rows , cols) { 
    let grid = document.querySelectorAll('.grid-item');
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    return rows; /* retour du choix de la taille pour utilisation dans la fonction reset */
    };
};
createGrid(32,32);
let grid = document.querySelectorAll('.grid-item');



/* Remove color on reset button click */
function resetListener() {
reset.addEventListener('click', () => {
    grid.forEach(cell => {
        cell.classList.remove('hover');
        console.log('reset');
    });
});
}

/* Event listener pour gérer le mouse over et le changement de couleur */
function hoverListener() {
let grid = document.querySelectorAll('.grid-item');
grid.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        cell.classList.add('hover');
    })
});
}

function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
    return val;
}

okBtn.addEventListener('click', () => {
    const gridSize = getVal();
    if (gridSize > 64 || gridSize < 2 ) {
        window.alert('Incorret value, please choose a grid size between 2 and 64 !');
    }
    else {
        container.innerHTML = "";/* Supprimer le contenu du container pour retirer toutes les div formant la grille */
        createGrid(gridSize, gridSize);
        hoverListener();
        resetListener();
    }
});

hoverListener();
resetListener();

