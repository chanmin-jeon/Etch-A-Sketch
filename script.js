function createGridSquare(squaresPerSide, size) {
    const square = document.createElement('div'); 
    square.classList.toggle('grid-square'); 
    squareStyleSet(square, size, 'lightblue'); 
    square.addEventListener('mouseover', () => squareStyleSet(square, size, 'lightpink')); 
    return square; 
}

function squareStyleSet(square, size, color) {
    square.setAttribute('style', `background-color: ${color}; height: ${size}px; width: ${size}px;`); 
}

function createGridRow(squaresPerSide, size) {
    const row = document.createElement('div'); 
    row.classList.add('grid-row');
    row.setAttribute('style','display: flex;')
    for (let i = 0; i < squaresPerSide; i++) {
        row.appendChild(createGridSquare(squaresPerSide , size)); 
    }
    return row; 
}

function createGrid(squaresPerSide, size) {
    const grid = document.createElement('div'); 
    grid.classList.add('grid-container'); 
    for (let i = 0; i < squaresPerSide; i++) {
        grid.appendChild(createGridRow(squaresPerSide, size)); 
    }
    return grid; 
}

function resetGrid() {
    const squares = document.querySelectorAll('.grid-square'); 
    squares.forEach((div) => squareStyleSet(div, size, 'lightblue')); 
}

function newGrid() {
    let oldGrid = document.querySelector('.grid-container'); 
    let btnsContainer = document.querySelector('.btns-container')
    let inputSquares = 0; 
    while (inputSquares < 1 || inputSquares >= 100) {
        inputSquares = prompt('How many squares per side? (must be less than 100)'); 
    }
    size = Math.floor(800/inputSquares); 
    let currGrid = createGrid(inputSquares, size); 
    oldGrid.remove(); 
    etch.insertBefore(currGrid, btnsContainer); 
}

/* rows and columns */ 
let squaresPerSide = 16; 
let size = Math.floor(800/squaresPerSide); 

/* creating grid */ 
const etch = document.createElement('section'); 
etch.classList.add('etch-a-sketch'); 
etch.append(createGrid(squaresPerSide, size)); 

/* creating buttons */ 
const btnsContainer  = document.createElement('div');
btnsContainer.classList.add('btns-container'); 

const refreshBtn = document.createElement('button');
refreshBtn.classList.add('refresh-btn'); 
refreshBtn.textContent = "Refresh";
refreshBtn.addEventListener('click',() => resetGrid()); 


const setGridBtn = document.createElement('button');
setGridBtn.classList.add('new-grid-btn'); 
setGridBtn.textContent = "New Grid";
setGridBtn.addEventListener('click', () => newGrid()); 

btnsContainer.append(refreshBtn); 
btnsContainer.append(setGridBtn); 
etch.append(btnsContainer); 

/* load grid */ 
const body = document.querySelector('body'); 
body.append(etch); 


