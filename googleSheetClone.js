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

function createSheetDB() {
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push({
        value: "",
        formula: "",
        children: [],
        parents: [],
      });
    }
    sheetDB.push(row);
  }
}

createSheetDB();

let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let cellContainer = document.querySelector(".cells");

function generateHeaders() {
  for (let i = 0; i < cols; i++) {
    let cell = document.createElement("div");
    cell.textContent = String.fromCharCode(65 + i);
    topRow.appendChild(cell);
    cell.classList.add("cell");
  }
  for (let i = 0; i < rows; i++) {
    let cell = document.createElement("div");
    cell.textContent = i + 1;
    leftCol.appendChild(cell);
    cell.classList.add("cell");
  }
}
generateHeaders();
let selectedCell = null;
function generateCells() {
  for (let i = 0; i < rows; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("div");
      cell.contentEditable = true;
      cell.classList.add("cell");
      cell.setAttribute("rid", i);
      cell.setAttribute("cid", j);
      rowDiv.appendChild(cell);
      cell.addEventListener("click", function (e) {
        selectedCell = cell;
        let addressBar = document.querySelector("#address");
        let address = String.fromCharCode(65 + j) + (i + 1);
        addressBar.value = address;
      });
    }
    cellContainer.appendChild(rowDiv);
  }
}
generateCells();

cellContainer.addEventListener(
  "blur",
  function (e) {
    let cell = e.target;
    let value = cell.textContent;
    let rid = Number(cell.getAttribute("rid"));
    let cid = Number(cell.getAttribute("cid"));
    if (sheetDB[rid][cid].formula) {
      removeDependencies(rid, cid);
    }
    sheetDB[rid][cid].value = value;
    sheetDB[rid][cid].formula = "";
    updateChildren(rid, cid);
  },
  true,
);

let boldBtn = document.querySelector("#bold");
let italicBtn = document.querySelector("#italic");
let underlineBtn = document.querySelector("#underline");

boldBtn.addEventListener("click", function () {
  if (!selectedCell) return;
  selectedCell.style.fontWeight =
    selectedCell.style.fontWeight === "bold" ? "normal" : "bold";
});

italicBtn.addEventListener("click", function () {
  if (!selectedCell) return;
  selectedCell.style.fontStyle =
    selectedCell.style.fontStyle === "italic" ? "normal" : "italic";
});

underlineBtn.addEventListener("click", function () {
  if (!selectedCell) return;
  selectedCell.style.textDecoration =
    selectedCell.style.textDecoration === "underline" ? "none" : "underline";
});

// A1 + B1
// ["A1", "+", "B1"]
// ["5", "+", "10"]
//  "5 + 10"
function evaluateFormula(formula) {
  if (formula === "") return "";
  let tokens = formula.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    if (/^[A-Z][0-9]+/.test(tokens[i])) {
      let { rid, cid } = getRIDCID(tokens[i]);
      let value = sheetDB[rid][cid].value;
      tokens[i] = value;
    }
  }
  let expression = tokens.join(" ");
  try {
    return eval(expression);
  } catch (err) {
    console.error("ERROR");
    return "";
  }
}

function getRIDCID(address) {
  let cid = address.charCodeAt(0) - 65;
  let rid = Number(address.slice(1)) - 1;
  return { rid, cid };
}

let formulaInput = document.querySelector("#formula");
formulaInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let formula = formulaInput.value;
    if (!selectedCell) return;
    let address = document.querySelector("#address").value;
    let { rid, cid } = getRIDCID(address);
    if (sheetDB[rid][cid].formula) {
      removeDependencies(rid, cid);
    }
    let value = evaluateFormula(formula);
    sheetDB[rid][cid].value = value;
    sheetDB[rid][cid].formula = formula;
    addDependencies(rid, cid, formula);
    updateChildren(rid, cid);
    updateCellUI(rid, cid, value);
  }
});

function updateCellUI(rid, cid, value) {
  let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
  if (cell) cell.textContent = value;
}

function removeDependencies(rid, cid) {
  let parents = sheetDB[rid][cid].parents;
  parents.forEach(({ rid: pr, cid: pc }) => {
    sheetDB[pr][pc].children = sheetDB[pr][pc].children.filter((child) => {
      return !(child.childRID === rid && child.childCID === cid);
    });
  });
}

function updateChildren(rid, cid) {
  let children = sheetDB[rid][cid].children;
  children.forEach((child) => {
    let cellObj = sheetDB[child.childRID][child.childCID];
    let newValue = evaluateFormula(cellObj.formula);
    cellObj.value = newValue;
    updateCellUI(child.childRID, child.childCID, newValue);
    updateChildren(child.childRID, child.childCID);
  });
}

function addDependencies(childRID, childCID, formula) {
  let tokens = formula.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    if (/^[A-Z][0-9]+/.test(tokens[i])) {
      let { rid, cid } = getRIDCID(tokens[i]);
      sheetDB[rid][cid].children.push({ childRID, childCID });
      sheetDB[childRID][childCID].parents.push({ rid, cid });
    }
  }
}
let aiMode = false;
let aiModal = document.querySelector("#aiModal");
let aiBtn = document.querySelector("#ai");
let closeBtn = document.querySelector(".close");
let modalContent = document.querySelector(".modal-content");

let modalOffsetX = 0;
let modalOffsetY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;
let selectedCells = new Set();

aiBtn.addEventListener("click", function () {
  if (!aiMode) {
    aiModal.classList.add("show");
    resetModalPosition();
  } else {
    aiModal.classList.remove("show");
  }
  aiMode = !aiMode;
});

closeBtn.addEventListener("click", function () {
  aiMode = false;
  aiModal.classList.remove("show");
});

modalContent.addEventListener("mousedown", function (e) {
  if (e.target.closest(".close,textarea, button, input")) return;
  let rect = modalContent.getBoundingClientRect();
  modalContent.style.transform = "none";
  modalOffsetX = e.clientX - rect.left;
  modalOffsetY = e.clientY - rect.top;
  isDragging = true;
  e.preventDefault();
});

document.addEventListener("mousemove", function (e) {
  if (!isDragging) return;
  let newX = e.clientX - modalOffsetX;
  let newY = e.clientY - modalOffsetY;
  modalContent.style.left = newX + "px";
  modalContent.style.top = newY + "px";
});

document.addEventListener("mouseup", function (e) {
  isDragging = false;
});

function resetModalPosition() {
  modalContent.style.left = "50%";
  modalContent.style.top = "50%";
  modalContent.style.transform = "translate(-50%, -50%)";
}
let selectionStartCell = null;

cellContainer.addEventListener("mousedown", function (e) {
  if (!aiMode) return;
  selectionStartCell = e.target;
  startX = e.clientX;
  startY = e.clientY;
});

cellContainer.addEventListener("mousemove", function (e) {
  if (!aiMode || !selectionStartCell) return;
  let isMoved =
    Math.abs(e.clientX - startX) > 4 || Math.abs(e.clientY - startY) > 4;
  if (!isMoved) return;
  let cell = e.target;
  if (!cell.getAttribute("rid") || !cell.getAttribute("cid")) return;
  selectedCells.add(cell);
  cell.classList.add("selected");
});

cellContainer.addEventListener("mouseup", function (e) {
  // console.log("Selected Cells:", selectedCells);
  selectionStartCell = null;
});

let submitBtn = document.querySelector("#submitPrompt");
let aiPromptInput = document.querySelector("#aiPrompt");
let apiKey =
  "";
let aiResponseDiv = document.querySelector("#aiOutput");

submitBtn.addEventListener("click", async function () {
  if (selectedCells.size === 0) {
    alert("Please select at least one cell to ask a question.");
  }
  if (aiPromptInput.value.trim() === "") {
    alert("Please enter a question.");
  }
  let cells = Array.from(selectedCells).map((cell) => {
    let rid = Number(cell.getAttribute("rid"));
    let cid = Number(cell.getAttribute("cid"));
    let address = String.fromCharCode(65 + cid) + (rid + 1);
    return { address, rid, cid, value: cell.textContent };
  });
  // console.log("Selected Cells:", cells);
  let question = aiPromptInput.value.trim();
  // console.log("Question:", question);
  let result = await CallAI(cells, question);
  aiResponseDiv.textContent = result;
});

async function CallAI(cells, question) {
  let promptText = `Please process this spreadsheet based on the following instructions:\n\nInstructions: ${question}\n\nCells:\n ${cells
    .map((cell) => `${cell.address}: ${cell.value}`)
    .join(
      "\n",
    )}\n\nRespond with only action and relevant information. Do not include any explanations or additional text.`;

  // console.log("Prompt Text:", promptText);
  try {
    let response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: promptText,
            },
          ],
        }),
      },
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    let data = await response.json();
    let aiResponse = data.choices[0].message.content;
    aiModal.classList.remove("show");
    return aiResponse;
  } catch (e) {
    aiResponseDiv.textContent = "Error occurred while calling AI.";
    console.error("Error calling AI:", e);
  }
}
