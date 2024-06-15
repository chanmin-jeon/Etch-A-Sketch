function createGridSquare() {
    const square = document.createElement('div'); 
    square.classList.add('grid-square'); 
    return square; 
}

function createGridRow(numCols) {
    const row = document.createElement('div'); 
    row.classList.add('grid-row');
    row.setAttribute('style','display: flex;')
    for (let i = 0; i < numCols; i++) {
        row.appendChild(createGridSquare()); 
    }
    return row; 
}

function createGrid(numRows,numCols) {
    const grid = document.createElement('div'); 
    grid.classList.add('grid-container'); 
    for (let i = 0; i < numRows; i++) {
        grid.appendChild(createGridRow(numCols)); 
    }
    return grid; 
}
const etch = document.createElement('section'); 
etch.classList.add('etch-a-sketch'); 
etch.appendChild(createGrid(16,16)); 
const body = document.querySelector('body'); 
body.appendChild(etch); 