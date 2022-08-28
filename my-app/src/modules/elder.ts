import getRandomIntInclusive from "../helpers/getRandomIntInclusive";
import eldersData from "./../data/ancients";
import { resetDeck } from "./decks";

const elderContainer = document.querySelector(".elder-container") as HTMLDivElement;
const elderImgs = document.querySelectorAll(".elder-img");

type Elder = {
  id: string;
  name: string;
  cardFace: any;
  firstStage: {
    greenCards: number;
    brownCards: number;
    blueCards: number;
  };
  secondStage: {
    greenCards: number;
    brownCards: number;
    blueCards: number;
  };
  thirdStage: {
    greenCards: number;
    brownCards: number;
    blueCards: number;
  };
};

let elderNumber: number;
let elder: Elder = eldersData[getRandomIntInclusive(0, 3)];

elderContainer.addEventListener("click", (event) => {
  const element = event.target as HTMLElement;

  elderImgs.forEach((el, i) => {
    if (el === element) {
      if (el.parentElement) {
        if (el.parentElement.classList.contains("active")) {
          return;
        } else {
          el.parentElement.classList.add("active");
          elderNumber = i;
          elder = eldersData[elderNumber];
          resetDeck();
        }
      }
    } else if (element.classList.contains("elder-img")) {
      if (el.parentElement) {
        el.parentElement.classList.remove("active");
      }
    }
  });
});

export { elder };
