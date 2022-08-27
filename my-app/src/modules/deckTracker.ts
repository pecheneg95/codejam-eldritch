import { elder } from "./elder";

const cardContainer = document.querySelector(".card-container") as HTMLDivElement;

export default function showDeckTracker() {
  const stepContainer = document.createElement("div");

  stepContainer.classList.add("step-container");

  let stepNumber = 1;

  for (let key in elder) {
    if (typeof elder[key] === "object") {
      stepContainer.appendChild(createStepTracker(elder[key], stepNumber));
      stepNumber++;
    }
  }
  cardContainer.appendChild(stepContainer);
}

function createStepTracker(obj, n) {
  const step = document.createElement("div");
  const stepHeader = document.createElement("h4");
  const itemContainer = document.createElement("div");
  const itemColorClass = ["green-item", "brown-item", "blue-item"];

  let itemNumber = 0;

  for (let key in obj) {
    const item = document.createElement("div");
    item.classList.add("step-item");
    item.classList.add(itemColorClass[itemNumber]);
    item.textContent = obj[key];
    itemContainer.appendChild(item);
    itemNumber++;
  }
  step.classList.add("step");
  stepHeader.classList.add("step-header");
  itemContainer.classList.add("item-container");
  stepHeader.textContent = `Стадия ${n}`;
  step.appendChild(stepHeader);
  step.appendChild(itemContainer);
  
  return step;
}
