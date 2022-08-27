const difficulties = [
  {
    id: "beginer",
    name: "Новичок",
    rules: {
      priorityCards: "easy",
      allowedСards: ["normal"],
    },
  },
  {
    id: "easy",
    name: "Лёгкий",
    rules: {
      priorityCards: "none",
      allowedСards: ["easy", "normal"],
    },
  },
  {
    id: "normal",
    name: "Средний",
    rules: {
      priorityCards: "none",
      allowedСards: ["easy", "normal", "hard"],
    },
  },
  {
    id: "hard",
    name: "Высокий",
    rules: {
      priorityCards: "none",
      allowedСards: ["normal", "hard"],
    },
  },
  {
    id: "nightmare",
    name: "Кошмар",
    rules: {
      priorityCards: "hard",
      allowedСards: ["normal"],
    },
  },
];

export default difficulties;
