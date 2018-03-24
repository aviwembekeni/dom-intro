// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");

//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");
var totalCostElem = document.querySelector(".totalTwo");

//create a variable that will keep track of the total bill
var callsTot = 0;
var smsTot = 0;

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    
    if (checkedRadioBtn != null){
        var billItemType = checkedRadioBtn.value;

        if(billItemType === 'call'){
            callsTot += 2.75;
    
        }else if(billItemType === 'sms'){
            smsTot += 0.75;
    
        }
    
        callTotalElem.innerHTML = callsTot.toFixed(2);
        smsTotalElem.innerHTML = smsTot.toFixed(2);
        var total = callsTot + smsTot;
        totalCostElem.innerHTML = total.toFixed(2);
    
        if (total >= 50) {
            totalCostElem.classList.add("danger");
        } else if(total >= 30){
            totalCostElem.classList.add("warning");
        }
    }

   
}

radioBillAddBtn.addEventListener('click', radioBillTotal);