"use strict";
function show_magicians1(magicians1) {
    magicians1.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians1) {
    for (let i = 0; i < magicians1.length; i++) {
        magicians1[i] = "the Great " + magicians1[i];
    }
}
const magicians1 = ['Merlin', 'David Copperfield', 'Houdini', 'Dynamo'];
make_great(magicians1);
show_magicians1(magicians1);
