const date = new Date();
// console.log(date);
// console.log(date.toISOString());
// console.log(date.toTimeString());
// console.log(date.toLocaleString("fr-FR"));
// console.log(date.toLocaleTimeString("fr-FR"));
console.log(
  date.toLocaleDateString("fr-FR", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
);

//aficher sur l'html
document.body.innerHTML = date.toLocaleDateString("fr-FR", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

// setInterval(() => {
//   console.log(new Date().toLocaleTimeString("fr-FR"));
// }, 1000);
