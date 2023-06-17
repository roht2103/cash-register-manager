let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
const btn = document.querySelector("#checkBtn");

btn.addEventListener("click", function () {

    validateData();

    
});

function validateData(){
    if(billAmount.value<=0 || cashGiven.value<=0){
        alert("Invalid bill amount");
    }
    else if(cashGiven.value<billAmount.value){
        alert("cash given is less than bill amount");
    }
    else{
        let amountToBeReturned=cashGiven.value-billAmount.value;
        calculateChange();
    }
}

function calculateChange(amountToBeReturned){

}