// const date = new Date("2024-12-10T00:00:00.000Z");

// const date = Date.parse("2020-01-10T00:00:00.000Z");

// console.log(today);
// console.log(date);

// const date2 = new Date(1578614400000);
// console.log(date2);

// const todayTimestamp = Date.now();

// console.log((todayTimestamp - date.getTime()) / 1000 / 60);

const date = Date.now();
let date2;

setTimeout(() => {
  date2 = Date.now();
  const diff = date2 - date;
  console.log(diff);
}, 3000);
