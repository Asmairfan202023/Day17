"use strict";
// Question 50: Multiple Template Literals: Use template literals to create a multiple string that describes your ideal day. Include atleast three different activities.
function describeIdealDay() {
    const mornActivity = 'exercise in the drawingroom';
    const afternoonActivity = 'having a picnic with family';
    const eveningActivity = 'reading a novel under the moonlight';
    const idealDayDescription = `
        My ideal day starts with ${mornActivity}.
        In the afternoon, I enjoy ${afternoonActivity}.
        And in the evening, nothing beats ${eveningActivity}.
    `;
    return idealDayDescription;
}
// Example usage
const myIdealDay = describeIdealDay();
console.log(myIdealDay);
