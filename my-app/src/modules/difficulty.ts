import getRandomIntInclusive from "../helpers/getRandomIntInclusive";
import difficultData from "./../data/difficulties";
import { resetDeck } from "./decks";

const difficultContainer = document.querySelector(".difficult-container") as HTMLDivElement;
const difficultBtns = document.querySelectorAll(".difficult-btn");

type Difficult = {
  id: string;
  name: string;
  rules: {
    priorityCards: string;
    allowedСards: string[];
  };
};

let difficultNumber = getRandomIntInclusive(0, 4);
let difficult: Difficult = difficultData[difficultNumber];

difficultContainer.addEventListener("click", (event) => {
  const element = event.target as HTMLElement;

  difficultBtns.forEach((el, i) => {
    if (el === element) {
      if (element.classList.contains("active")) {
        return;
      } else {
        element.classList.add("active");
        difficultNumber = i;
        difficult = difficultData[difficultNumber];
        resetDeck();
      }
    } else if (element.classList.contains("difficult-btn")) {
      el.classList.remove("active");
    }
  });
});

export { difficult };
