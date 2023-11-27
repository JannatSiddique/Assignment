"use strict";
let Guestlist4 = [
    "Anna",
    "Ambreen",
    "Zainab",
    "Zaini",
    "Abdulah",
    "Hafsa",
    "Baby",
    "mommy"
];
console.log("I can invite only 2 people for dinner");
while (Guestlist4.length > 2) {
    let removeguest = Guestlist4.pop();
    console.log(`Sorry, ${removeguest} I can't invite you to dinner`);
}
for (let guest of Guestlist4) {
    console.log(`Hello ${guest} you are invited`);
}
Guestlist4.pop();
Guestlist4.pop();
console.log(` After dinner: ${Guestlist4}`);
