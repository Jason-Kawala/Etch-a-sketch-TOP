let container = document.getElementById('container');

function createGrid(rows , cols) { /* Fonction de création de la grille de jeu */
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

createGrid(64,64);










/* Event listener pour gérer le mouse over et le changement de couleur */
let grid = document.querySelectorAll('.grid-item');
grid.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        cell.classList.add('hover');
    })
});