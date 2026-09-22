/*
Google Sheet Clone
1. Features (Phase 1):
- User will be able to edit a particular cell.
- Toolbar implmentation (Bold, Italic, underline).
- Addressbar implementation (User can see currently selected cell).
- Formula bar implementation (User can enter the formula and see result in desired cell).
- Dependency tracking.

2. Features (Phase 2):
- User will be able to select multiple cells at once with highlighting.
- In the toolbar we will add an AI button.
- If ai mode is on, there would be some ChatPopUp.
- User can ask questions related to the selected cells and get answers from AI at relevant place.
- The AI popup should be draggable.


Data structure:
- 2D array.

c1 = A1 + B2;
D2 = C1 + 10;

Data Model:

 - value
 - formula
 - children array
 - parents array

All in the Object

*/

let rows = 1000;
let cols = 26;
let sheetDB = [];

let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let cellContainer = document.querySelector(".cells");

function generateHeaders() {
  for (let i = 0; i < cols; i++) {
    let cell = document.createElement("div");
    cell.textContent = String.fromCharCode(65 + i);
    topRow.appendChild(cell);
  }
  for (let i = 0; i < rows; i++) {
    let cell = document.createElement("div");
    cell.textContent = i + 1;
    leftCol.appendChild(cell);
  }
}
generateHeaders();

function generateCells() {
  for (let i = 0; i < rows; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("div");
      cell.contentEditable = true;
      cell.classList.add("cell");
      rowDiv.appendChild(cell);
    }
    cellContainer.appendChild(rowDiv);
  }
}
generateCells();
