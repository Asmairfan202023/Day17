"use strict";
// function with rest parameters: Write a function that takes a rest parameter reperesenting multiple hobbies. it should log each hobby with a statement saying you enjoy that hobby.
function Hobbies(...hobies) {
    hobies.forEach((hobby) => {
        console.log(`You enjoy ${hobby}.`);
    });
}
// Example usage
Hobbies('reading', 'painting', 'gardening');
