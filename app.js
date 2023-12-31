let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
const btn = document.querySelector("#checkBtn");
const returnAmount = document.querySelector("#returnAmount");
const noOfNotes = document.querySelectorAll(".no-of-notes");
returnAmount.style.display = "none";

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

btn.addEventListener("click", function () {
  // validateData() function will be called when button will be clicked
  validateData();
});

function validateData() {
  if (billAmount.value > 0) {
    if ((cashGiven.value-billAmount.value)<0) {
      alert("cash given should be greater than bill amount");
    } else {
      let amountToBeReturned = cashGiven.value - billAmount.value;
      returnAmount.style.display = "block";
      returnAmount.innerText = "Amount to be returned : " + amountToBeReturned;
      calculateChange(amountToBeReturned);
    }
  } else {
    alert("Invalid bill amount");
  }
}

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
