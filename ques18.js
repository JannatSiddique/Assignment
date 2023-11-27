"use strict";
let place = ["Saudia", "Turkey", "Maldives", "Baku", "Canada"];
place.sort();
console.log(place);
console.log("Sorted array");
place.forEach((place, index) => {
    console.log(`${index + 1}. ${place}`);
});
let orgplace = ["Saudia", "Turkey", "Maldives", "Baku", "Canada"];
console.log(orgplace);
let revplace = ["Saudia", "Turkey", "Maldives", "Baku", "Canada"];
revplace.reverse();
revplace.slice();
revplace.forEach((revplace, index) => {
    console.log(`${index + 1}. ${revplace}`);
});
console.log(`Its order has changed ${revplace}`);
