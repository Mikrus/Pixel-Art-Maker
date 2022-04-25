// Select color input
let color = document.getElementById('colorPicker')

// When the user selects the height and width
let sizePicker = document.getElementById('sizePicker')
// Select size input
let height = document.getElementById('inputHeight')
let width = document.getElementById('inputWidth')

// Our canvas
let canvas = document.getElementById('pixelCanvas')

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function (event) {
  event.preventDefault();
  makeGrid()
});

function makeGrid() {

// For each row
for (let x = 0; x < width.value; x++) {
    // Create row
    let row = document.createElement('tr')
    // For each cell
    for (let z = 0; z < height.value; z++) {
        // Create cell
        let cell = document.createElement('td')
        // Add cells to rows
        row.append(cell)
        // Add rows to our canvas
        canvas.append(row)
    }

  }

}

