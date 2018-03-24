// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");

//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalElement = document.querySelector(".callTotalTwo");
var smsTotalElement = document.querySelector(".smsTotalTwo");
var totalCostElement = document.querySelector(".totalTwo");

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function textBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    
    if (checkedRadioBtn != null){
        var billItemType = checkedRadioBtn.value;

        if(billItemType === 'call'){
            callsTotal += 2.75;
    
        }else if(billItemType === 'sms'){
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

   
}

radioBillAddBtn.addEventListener('click', textBillTotal);