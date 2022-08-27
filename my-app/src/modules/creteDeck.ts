import getRandomIntInclusive from "../helpers/getRandomIntInclusive";
import { greenCards, brownCards, blueCards } from "./../data/mythicCards/index";
import { Card } from "./decks";

const decksForColors: {
  green: Card[];
  brown: Card[];
  blue: Card[];
} = {
  green: greenCards,
  brown: brownCards,
  blue: blueCards,
};

export default function createDeck(color: string, count: number, rules: { priorityCards: string; allowedСards: string[] }) {
  const deck: Card[] = [];
  const scoupe: Card[] = [...decksForColors[color]];

  let priorityScoupe: Card[];
  let anotherScoupe: Card[];

  if (rules.priorityCards !== "none") {
    priorityScoupe = scoupe.filter((el) => el.difficulty === rules.priorityCards);
  } else {
    priorityScoupe = [];
  }
  anotherScoupe = scoupe.filter((el) => rules.allowedСards.includes(el.difficulty));

  for (let i = 0; deck.length < count; i++) {
    if (priorityScoupe.length !== 0) {
      const itemNumber = getRandomIntInclusive(0, priorityScoupe.length - 1);
      deck.push(priorityScoupe[itemNumber]);
      priorityScoupe.splice(itemNumber, 1);
    } else {
      const itemNumber = getRandomIntInclusive(0, anotherScoupe.length - 1);
      deck.push(anotherScoupe[itemNumber]);
      anotherScoupe.splice(itemNumber, 1);
    }
  }

  return deck;
}
