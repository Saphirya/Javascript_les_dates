//déclarer une date
// const today = new Date();
// console.log(today);

// const date = new Date(1000 * 3600 * 24 * 365);
// console.log(date);

// const date2 = new Date(2020, 0, 10, 50, 80, 25);
// console.log(date2);

//format ISO
const today = new Date("2020-01-10T00:00:00.000Z");
console.log(today);
console.log(today.toISOString());
console.log(today.toUTCString());
