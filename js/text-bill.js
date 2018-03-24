// get a reference to the textbox where the bill type is to be entered
var billTypeTextfield = document.querySelector(".billTypeText");

//get a reference to the add button
var addToBillButton = document.querySelector(".addToBillBtn");
var callTotalElement = document.querySelector(".callTotalOne");
var smsTotalElement = document.querySelector(".smsTotalOne");
var totalCostElement = document.querySelector(".totalOne");

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function textBillTotal(){
    var billTypeEntered  = billTypeTextfield.value.trim();

    if(billTypeEntered === 'call'){
        callsTotal += 2.75;

    }else if(billTypeEntered === 'sms'){
        smsTotal += 0.75;

    }

    callTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50) {
        totalCostElement.classList.add("danger");
    } else if(totalCost >= 30){
        totalCostElement.classList.add("warning");
    }
}

addToBillButton.addEventListener('click', textBillTotal);