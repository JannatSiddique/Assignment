"use strict";
let Guestlist3 = [
    "Ambreen",
    "Zainab",
    "Abdulah",
    "Hafsa",
    "Baby",
];
for (let guest of Guestlist3) {
    console.log(`Hello ${guest} we found a bigger dinner table`);
}
let newguestbign = "Anna";
Guestlist3.unshift(newguestbign);
console.log(Guestlist3);
let newguestmid = "Zaini";
let index = Math.floor(Guestlist3.length / 2);
Guestlist3.splice(index, 0, newguestmid);
let newguestend = "mommy";
Guestlist3.push(newguestend);
console.log(Guestlist3);
console.log("Invitation for you all");
for (let guest of Guestlist3) {
    console.log(`Dear ${guest} you all are invited to dinner.`);
}
;
