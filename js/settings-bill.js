// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeWithSettings");
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");

// get refences to all the settings fields
var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".warning");

//get a reference to the add button
var addCostBtn = document.querySelector(".addCosts"); 

//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var callCostSetting = 2.55;
var smsCallSetting = 0.65;
var warningLevelSetting = 30.00;
var criticalLevelSetting = 65.00;

// create a variables that will keep track of all three totals.
var callTotCost = 0;
var smsTotCost = 0;

//add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener('click', updateSettings);

//add an event listener for when the add button is pressed
addCostBtn.addEventListener('click', radioBillTotalTwo);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function radioBillTotalTwo(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
       
    if (checkedRadioBtn != null){
        var billItemType = checkedRadioBtn.value;

        if(billItemType === 'call'){
            callTotCost += 2.55;
    
        }else if(billItemType === 'sms'){
            smsTotCost += 0.65;
    
        }

    
        callTotalSettingsElem.innerHTML = callTotCost.toFixed(2);
        smsTotalSettingsElem.innerHTML = smsTotCost.toFixed(2);
        var totCost = callTotCost + smsTotCost;
        totalSettingsElem.innerHTML = totCost.toFixed(2);
    
        if (totCost >= 65) {
            totalSettingsElem.classList.add("danger");
        } else if(totCost >= 30){
            totalSettingsElem.classList.add("warning");
        }
    }

   
}

function  updateSettings(){

}

