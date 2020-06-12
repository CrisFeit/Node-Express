"use strict";
const me = {
    name: 'Cris',
    age: 32,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('Hello', person.name);
};
greetPerson(me);
