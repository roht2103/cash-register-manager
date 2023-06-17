let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
const btn = document.querySelector("#checkBtn");

btn.addEventListener("click", function () {
    console.log("clicked");
    console.log(billAmount.value);
    if(cashGiven.value<billAmount.value){
        alert("cash given is less than bill amount");
    }
});