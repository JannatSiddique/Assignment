"use strict";
let age1 = 30;
let users = ['Alice', 'Bob', 'Charlie'];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    if (age1 < 2) {
        console.log("The person is a baby.");
    }
    else if (age1 >= 2 && age1 < 4) {
        console.log("The person is a toddler.");
    }
    else if (age1 >= 4 && age1 < 13) {
        console.log("The person is a kid.");
    }
    else if (age1 >= 13 && age1 < 20) {
        console.log("The person is a teenager.");
    }
    else if (age1 >= 20 && age1 < 65) {
        console.log("The person is an adult.");
    }
    else {
        console.log("The person is an elder.");
    }
}
users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
