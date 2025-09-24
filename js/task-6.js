function getRondomHExColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }

    createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
    const boxes = [];
    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;
        div.style.backgroundColor = getRondomHExColor();
        boxes.push(div);
        boxSize += 10;
    }   

    boxesContainer.append(...boxes);
}   

function destroyBoxes() {
    boxesContainer.innerHTML = "";
}