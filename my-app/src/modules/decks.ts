import { elder } from "./elder";
import { difficult } from "./difficulty";
import showDeckTracker from "./deckTracker";
import createDeck from "./creteDeck";
import shufleArray from "../helpers/shufleArray";

type Card = {
  id: string;
  cardFace: string;
  difficulty: string;
  color: string;
};

const startDeckBtn = document.querySelector(".deck-start") as HTMLButtonElement;
const cardContainer = document.querySelector(".card-container") as HTMLDivElement;

let deck: Card[];
let cardIndex = 0;
let allCardCount = 0;

function resetDeck() {
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
  startDeckBtn.classList.remove("none");
  cardContainer.classList.add("none");
}

function openDeck() {
  startDeckBtn.classList.add("none");
  cardContainer.classList.remove("none");
}

startDeckBtn.addEventListener("click", () => {
  openDeck();
  showDeckTracker();
  showCardSelector();
  cardIndex = 0;
  deck = generateDeck();
  console.log(`Древний: ${elder.name}`);
  console.log(`Сложность: ${difficult.name}`);
  console.log(`Колода: `, deck);
});

function showCardSelector() {
  const cardSelectorContainer = document.createElement("div");
  const cardSelectorBtn = document.createElement("div");
  const currentCard = document.createElement("div");

  cardSelectorContainer.classList.add("card-selector-container");
  cardSelectorBtn.classList.add("card-selector-btn");
  currentCard.classList.add("current-card");

  cardSelectorBtn.addEventListener("click", showCard);

  cardSelectorContainer.appendChild(cardSelectorBtn);
  cardSelectorContainer.appendChild(currentCard);

  cardContainer.appendChild(cardSelectorContainer);
}

function generateDeck() {
  const countGreenCard = elder.firstStage.greenCards + elder.secondStage.greenCards + elder.thirdStage.greenCards;
  const countBrownCard = elder.firstStage.brownCards + elder.secondStage.brownCards + elder.thirdStage.brownCards;
  const countBlueCard = elder.firstStage.blueCards + elder.secondStage.blueCards + elder.thirdStage.blueCards;

  allCardCount = countGreenCard + countBrownCard + countBlueCard;

  const rules = difficult.rules;

  const greenDeck = shufleArray(createDeck("green", countGreenCard, rules));
  const brownDeck = shufleArray(createDeck("brown", countBrownCard, rules));
  const blueDeck = shufleArray(createDeck("blue", countBlueCard, rules));

  const greenDeckStep1 = shufleArray(greenDeck.slice(0, elder.firstStage.greenCards));
  const brownDeckStep1 = shufleArray(brownDeck.slice(0, elder.firstStage.brownCards));
  const blueDeckStep1 = shufleArray(blueDeck.slice(0, elder.firstStage.blueCards));

  const step1Deck: Card[] = shufleArray(greenDeckStep1.concat(brownDeckStep1).concat(blueDeckStep1));

  const greenDeckStep2 = greenDeck.slice(elder.firstStage.greenCards, elder.firstStage.greenCards + elder.secondStage.greenCards);
  const brownDeckStep2 = brownDeck.slice(elder.firstStage.brownCards, elder.firstStage.brownCards + elder.secondStage.brownCards);
  const blueDeckStep2 = blueDeck.slice(elder.firstStage.blueCards, elder.firstStage.blueCards + elder.secondStage.blueCards);

  const step2Deck: Card[] = shufleArray(greenDeckStep2.concat(brownDeckStep2).concat(blueDeckStep2));

  const greenDeckStep3 = greenDeck.slice(elder.secondStage.greenCards, elder.secondStage.greenCards + elder.thirdStage.greenCards);
  const brownDeckStep3 = brownDeck.slice(elder.secondStage.brownCards, elder.secondStage.brownCards + elder.thirdStage.brownCards);
  const blueDeckStep3 = blueDeck.slice(elder.secondStage.blueCards, elder.secondStage.blueCards + elder.thirdStage.blueCards);

  const step3Deck: Card[] = shufleArray(greenDeckStep3.concat(brownDeckStep3).concat(blueDeckStep3));

  const finalyDeck = step1Deck.concat(step2Deck).concat(step3Deck);

  return finalyDeck;
}

function showCard() {
  if (cardIndex < allCardCount) {
    const currentCard = document.querySelector(".current-card") as HTMLDivElement;
    const stepContainer = document.querySelector(".step-container") as HTMLDivElement;

    const countCardStep1 = elder.firstStage.greenCards + elder.firstStage.brownCards + elder.firstStage.blueCards;
    const countCardStep2 = elder.secondStage.greenCards + elder.secondStage.brownCards + elder.secondStage.blueCards;
    const countCardStep3 = elder.thirdStage.greenCards + elder.thirdStage.brownCards + elder.thirdStage.blueCards;

    if (cardIndex < countCardStep1) {
      if (deck[cardIndex].color === "green") {
        stepContainer.children[0].children[1].children[0].textContent = String(Number(stepContainer.children[0].children[1].children[0].textContent) - 1);
      }
      if (deck[cardIndex].color === "brown") {
        stepContainer.children[0].children[1].children[1].textContent = String(Number(stepContainer.children[0].children[1].children[1].textContent) - 1);
      }
      if (deck[cardIndex].color === "blue") {
        stepContainer.children[0].children[1].children[2].textContent = String(Number(stepContainer.children[0].children[1].children[2].textContent) - 1);
      }
    } else if (cardIndex < countCardStep2 + countCardStep1) {
      if (deck[cardIndex].color === "green") {
        stepContainer.children[1].children[1].children[0].textContent = String(Number(stepContainer.children[1].children[1].children[0].textContent) - 1);
      }
      if (deck[cardIndex].color === "brown") {
        stepContainer.children[1].children[1].children[1].textContent = String(Number(stepContainer.children[1].children[1].children[1].textContent) - 1);
      }
      if (deck[cardIndex].color === "blue") {
        stepContainer.children[1].children[1].children[2].textContent = String(Number(stepContainer.children[1].children[1].children[2].textContent) - 1);
      }
    } else if (cardIndex < countCardStep3 + countCardStep2 + countCardStep1) {
      if (deck[cardIndex].color === "green") {
        stepContainer.children[2].children[1].children[0].textContent = String(Number(stepContainer.children[2].children[1].children[0].textContent) - 1);
      }
      if (deck[cardIndex].color === "brown") {
        stepContainer.children[2].children[1].children[1].textContent = String(Number(stepContainer.children[2].children[1].children[1].textContent) - 1);
      }
      if (deck[cardIndex].color === "blue") {
        stepContainer.children[2].children[1].children[2].textContent = String(Number(stepContainer.children[2].children[1].children[2].textContent) - 1);
      }
    }

    currentCard.style.backgroundImage = `url(${deck[cardIndex].cardFace})`;

    cardIndex++;
  } else {
    console.log("Колода закончилась");
  }
}

export { resetDeck, Card };
