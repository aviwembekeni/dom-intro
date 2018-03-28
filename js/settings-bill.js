// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeWithSettings");
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");

// get refences to all the settings fields
var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
var addCostBtnSett = document.querySelector(".addCostsSettings");

//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var callCostSetting = 2.75;
var smsCallSetting = 0.75;
var warningLevelSetting = 40.00;
var criticalLevelSetting = 75.00;

callCostSettingElem.value = callCostSetting;
smsCostSettingElem.value = smsCallSetting;
warningLevelSettingElem.value = warningLevelSetting;
criticalLevelSettingElem.value = criticalLevelSetting;

// create a variables that will keep track of all three totals.
var callTotCost = 0;
var smsTotCost = 0;
var totCost = 0;

//add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener('click', updateSettingsClicked);

//add an event listener for when the add button is pressed


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

/*function radioBillTotalTwo(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (checkedRadioBtn != null){
       if(totCost < criticalLevelSetting){

            var billItemType = checkedRadioBtn.value;

            if(billItemType === 'call'){
                callTotCost += callCostSetting;

            }else if(billItemType === 'sms'){
                smsTotCost += smsCallSetting;

            }


            callTotalSettingsElem.innerHTML = callTotCost.toFixed(2);
            smsTotalSettingsElem.innerHTML = smsTotCost.toFixed(2);
            totCost = callTotCost + smsTotCost;
            totalSettingsElem.innerHTML = totCost.toFixed(2);

            if (totCost >= criticalLevelSetting) {
                totalSettingsElem.classList.add("danger");
            } else if(totCost >= warningLevelSetting){
                totalSettingsElem.classList.add("warning");

            }
        }
    }


}*/

function RadioBillTotalTwo(){

  var bills = {call:0,
               sms:0,
               total: 0};

   var calculateRadioBillSett = function(billItemType, totCost, criticalLevelSetting){

       if(totCost < criticalLevelSetting){
        if(billItemType == 'call'){
          bills[billItemType] += callCostSetting;
        }else if (billItemType == 'sms') {
          bills[billItemType] += smsCallSetting;
        }

        bills['total'] = bills['sms'] + bills['call'];
      }
    };

    var checkRadioBillSett = function(billItemType){
        return {
          requestedBill : bills[billItemType],
          sms : bills['sms'],
          call : bills['call'],
          total : bills['total']
        }
    }

    return {
        calculate : calculateRadioBillSett,
        check : checkRadioBillSett

    }

    /*    callTotalElem.innerHTML = callsTot.toFixed(2);
        smsTotalElem.innerHTML = smsTot.toFixed(2);
        var total = callsTot + smsTot;
        totalCostElem.innerHTML = total.toFixed(2);

        if (total >= 50) {
            totalCostElem.classList.add("danger");
        } else if(total >= 30){
            totalCostElem.classList.add("warning");
        }*/
    }

var radioBillTotalTwo = RadioBillTotalTwo();

var calcRadioBillWithSettingsClicked = function(){

  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  if (checkedRadioBtn != null){

      var billItemType = checkedRadioBtn.value;

      radioBillTotalTwo.calculate(billItemType, totCost, criticalLevelSetting);
      var bill = radioBillTotalTwo.check(billItemType);

      var totSmsBill = bill['sms'];
      var totCallBill = bill['call'];
      callTotalSettingsElem.innerHTML = totCallBill.toFixed(2);
      smsTotalSettingsElem.innerHTML =  totSmsBill.toFixed(2);
      totCost = bill['total'];
      totalSettingsElem.innerHTML = totCost.toFixed(2);

      if (totCost >= criticalLevelSetting) {
          totalSettingsElem.classList.add("danger");
      } else if(totCost >= warningLevelSetting){
          totalSettingsElem.classList.add("warning");
      }
    }
  }

function UpdateSettingsRequest(){

  // this is scoped inside the ShoppingBasket function
  var settings = {callCostSetting: 2.75,
                  smsCallSetting: 0.75,
                  warningLevelSetting: 40,
                  criticalLevelSetting: 75
                  };

  var updateSettings = function(updatedCallCost, updatedSmsCost, updatedWarningLevel, updatedCriticalLevel){
      if (settings["callCostSetting"] != updatedCallCost && updatedCallCost != ""){
          settings["callCostSetting"] = updatedCallCost;
      }

      if (settings["smsCallSetting"] != updatedSmsCost  && updatedSmsCost != ""){
          settings["smsCallSetting"] = updatedSmsCost;
      }

      if (settings["warningLevelSetting"] != updatedWarningLevel  && updatedWarningLevel != ""){
          settings["warningLevelSetting"] = updatedWarningLevel;
      }

      if (settings["criticalLevelSetting"] != updatedCriticalLevel  && updatedCriticalLevel != ""){
          settings["criticalLevelSetting"] = updatedCriticalLevel;
      }

  };

  var checkSettings = function(){
      return  settings
  }

  return {
      update : updateSettings,
      check : checkSettings
  }
}

var updateSettingsRequest = UpdateSettingsRequest();

function  updateSettingsClicked(){
  var updatedCallCost = callCostSettingElem.value;
  var updatedSmsCost = smsCostSettingElem.value;
  var updatedWarningLevel = warningLevelSettingElem.value;
  var updatedCriticalLevel = criticalLevelSettingElem.value;

  updateSettingsRequest.update(updatedCallCost, updatedSmsCost, updatedWarningLevel, updatedCriticalLevel);
  var updatedSettingsState = updateSettingsRequest.check();
  if(updatedCallCost != ""){
     callCostSetting = parseFloat(updatedSettingsState['callCostSetting']);
    }

  if(updatedSmsCost != ""){
     smsCallSetting = parseFloat(updatedSettingsState['smsCallSetting']);
    }

//  if(totCost >= criticalLevelSetting){
    if (updatedWarningLevel != "") {
      warningLevelSetting = parseFloat(updatedSettingsState['warningLevelSetting']);
    }

    if (updatedCriticalLevel != "") {
      criticalLevelSetting = parseFloat(updatedSettingsState['criticalLevelSetting']);
    }

//  }

}


addCostBtnSett.addEventListener('click', calcRadioBillWithSettingsClicked);
