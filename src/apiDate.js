// const date = new Date();
// console.log(date.toISOString());
const date2 = new Date("2020-01-31T11:12:20.663Z");

date2.setDate(date2.getDate() + 1);
console.log(date2);
console.log(date2.toJSON() === date2.toISOString());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getUTCHours());

// date.setHours(date.getHours() + 1);
// console.log(date);
