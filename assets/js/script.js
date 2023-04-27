//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alart("You clicked sub");
            } else {
                let gameType = this.getAttribute("data-type");
                alart(`you clicked ${gameType}`);
            }
        });
    }

});

function runGame() {

}

function checkAnwser() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMuliplyQuestion() {

}