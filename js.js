let container = document.getElementById('container');
let reset = document.getElementById('reset-btn');
let okBtn = document.getElementById('ok-btn');
let gridSize = 32;
let classic = "rgba(80, 132, 173, 0.733)";


function randColor() {
    let arrColor = [];
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let alpha = Math.random(); /* Couleur 'normales' */
    arrColor.push(r,g,b,alpha);
    return arrColor;
}

function randBrightColor() {
    let arrColor = [];
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let alpha = (Math.random()/2) + 0.5; /* Avoir des couleurs plus vives */
    arrColor.push(r,g,b,alpha);
    return arrColor;
}

function randBlandColor() {
    let arrColor = [];
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let alpha = Math.random()/2; /* Avoir des couleurs plus vives */
    arrColor.push(r,g,b,alpha);
    return arrColor;
}

function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
    return val;
}

/* Fonction de création de la grille de jeu */
function createGrid(rows , cols) {
    let grid = document.querySelectorAll('.grid-item');
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

createGrid(gridSize,gridSize);
let grid = document.querySelectorAll('.grid-item');

function hoverListener(colorType) {
    let colors = colorType;
    console.log(colors);
    if (colors == "rgba(80, 132, 173, 0.733)") {
        grid.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                cell.style.setProperty('--hover-color', classic)
            })
        });
    }
    else {
        grid.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                cell.style.setProperty('--hover-color',`rgba(${colors[0]},${colors[1]},${colors[2]},${colors[3]})`);
            })
        });
    }
}

hoverListener(classic);

/* Remove color on reset button click */

reset.addEventListener('click', () => {
    grid.forEach(cell => {
        cell.style.setProperty('--hover-color', 'white');
    }
)});

okBtn.addEventListener('click', () => {
    gridSize = getVal();
    if (gridSize > 64 || gridSize < 2 ) {
        window.alert('Incorret value, please choose a grid size between 2 and 64 !');
    }
    else {
        createGrid(gridSize,gridSize);
        grid.forEach(cell => {
            cell.style.setProperty('--hover-color', 'white');
        })
    }
});

