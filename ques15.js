"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guestlist2 = void 0;
let Guestlist2 = [
    "Ambreen",
    "Zainab",
    "Abdulah",
    "Hafsa",
    "Baby",
];
exports.Guestlist2 = Guestlist2;
Guestlist2.forEach((guestname) => {
    console.log(`Dear ${guestname}, you are invited to dinner.`);
});
let guestcant = "Ambreen";
console.log(`${guestcant} can't make it to dinner`);
let newguest = "Zulkaif";
let indexofguestcant = Guestlist2.indexOf(guestcant);
if (indexofguestcant !== -1) {
    Guestlist2[indexofguestcant] = newguest;
}
Guestlist2.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
