"use strict";
function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`The T-shirt size is ${size} and it should have the message: "${message}"`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'Hello, T-shirt!');
