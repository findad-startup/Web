const continents = [
  {
    _id: 1,
    name: "패션",
  },
  {
    _id: 2,
    name: "식당",
  },
  {
    _id: 3,
    name: "스포츠",
  },
  {
    _id: 4,
    name: "엔터테이먼트",
  },
  {
    _id: 5,
    name: "교육",
  },
  {
    _id: 6,
    name: "여행",
  },
  {
    _id: 7,
    name: "상품",
  },
];

const price = [
  {
    _id: 0,
    name: "Any",
    array: [],
  },
  {
    _id: 1,
    name: "0% to 19%",
    array: [0, 19],
  },
  {
    _id: 2,
    name: "20% to 39%",
    array: [20, 39],
  },
  {
    _id: 3,
    name: "40% to 59%",
    array: [40, 59],
  },
  {
    _id: 4,
    name: "60% to 79%",
    array: [60, 79],
  },
  {
    _id: 5,
    name: "80% to FREE",
    array: [80, 1001],
  },
];

export { continents, price };
