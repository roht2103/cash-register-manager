let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
const btn = document.querySelector("#checkBtn");
const returnAmount = document.querySelector("#returnAmount");
returnAmount.style.display = "none";
btn.addEventListener("click", function () {
  // validateData() function will be called when button will be clicked
  validateData();
});

function validateData() {
  if (billAmount.value <= 0 || cashGiven.value <= 0) {
    // Alert message when bill amount or cash given will be less than or equal to 0
    alert("Invalid bill amount");
  } else if (cashGiven.value < billAmount.value) {
    //  Alert message when cash given is less than bill amount
    alert("cash given is less than bill amount");
  } else {
    // else change will be calculated by calling calculateChange() function

    let amountToBeReturned = cashGiven.value - billAmount.value;
    returnAmount.style.display = "block";
    returnAmount.innerText = "Amount to be returned : " + amountToBeReturned;
    calculateChange(amountToBeReturned);
  }
}

function calculateChange(amountToBeReturned) {
  console.log(amountToBeReturned);
}
