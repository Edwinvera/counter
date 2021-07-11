// set counter to zero
let counter = 0;

// selecting value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");
console.log(buttons)
buttons.forEach(button => {
  button.addEventListener("click", function (element) {
    const styles = element.currentTarget.classList;

    // increment and decrement the counter
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }
    // adjust color of number when - or +
    if (counter > 0) {
      value.style.color = "lime";
    }
    if (counter < 0) {
      value.style.color = "red"
    }
    if (counter === 0) {
      value.style.color = "black"
    }

    value.textContent = counter;
  });
});