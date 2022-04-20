// Select color input
let color = document.getElementById('colorPicker');
// Select size input
let sizePicker = document.getElementById('sizePicker');
// Our canvas
let canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function (event) {
  event.preventDefault();
  makeGrid()
});

function makeGrid() {
// Must create a variable to store values of height and width.
let rows = document.getElementById('inputHeight').value;
let cols = document.getElementById('inputWidth').value;

// For each row
for (let x = 0; x < row; x++) {
    // Create row
    let row = document.createElement('tr');
    // For each cell
    for (let z = 0; z < cols; z++) {
        // Create cell
        let cell = document.createElement('td');
        // Add cells to rows
        row.appendChild(cell);
    // Add rows to our canvas
    canvas.appendChild(row);
    }
  }
}
