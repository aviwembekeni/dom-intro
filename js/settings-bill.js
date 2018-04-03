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

var totCost = 0;



//add an event listener for when the add button is pressed


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function RadioBillTotalTwo(){

  var bills = {call:0,
               sms:0,
               total: 0};

   var calculateRadioBillSett = function(billItemType){

        if(billItemType == 'call'){
          bills[billItemType] += callCostSetting;
        }else if (billItemType == 'sms') {
          bills[billItemType] += smsCallSetting;
        }

        bills['total'] = bills['sms'] + bills['call'];

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

    }

var radioBillTotalTwo = RadioBillTotalTwo();

var calcRadioBillWithSettingsClicked = function(){

  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  if (checkedRadioBtn != null && criticalLevelSetting > totCost){

      var billItemType = checkedRadioBtn.value;

      radioBillTotalTwo.calculate(billItemType);
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


  var settings = {callCostSetting: 2.75,
                  smsCostSetting: 0.75,
                  warningLevelSetting: 40,
                  criticalLevelSetting: 75
                  };

 var updateCallCost = function(updatedCallCost){
   settings["callCostSetting"] = updatedCallCost;
 }

 var updateSmsCost = function(updatedSmsCost){
   settings["smsCostSetting"] = updatedSmsCost;
 }

 var updateWarningLevelSetting = function(updatedWarningLevel){
   settings["warningLevelSetting"] = updatedWarningLevel;
 }

 var updateCriticalLevelSetting = function(updatedCriticalLevel){
   settings["criticalLevelSetting"] = updatedCriticalLevel;
 }


  var checkCallCost = function(){
      return  settings["callCostSetting"]
  }

  var checkSmsCost = function(){
      return  settings["smsCostSetting"]
  }

  var checkWarningLevelSetting = function(){
      return  settings["warningLevelSetting"]
  }

  var checkCriticalLevelSetting = function(){
      return  settings["criticalLevelSetting"]
  }



  return {
      updateCall : updateCallCost,
      checkCall : checkCallCost,
      updateSms : updateSmsCost,
      checkSms : checkSmsCost,
      updateWarningLevel : updateWarningLevelSetting,
      checkWarningLevel : checkWarningLevelSetting,
      updateCriticalLevel : updateCriticalLevelSetting,
      checkCriticalLevel : checkCriticalLevelSetting
  }
}

var updateSettingsRequest = UpdateSettingsRequest();

function  updateSettingsClicked(){
  var updatedCallCost = callCostSettingElem.value;
  var updatedSmsCost = smsCostSettingElem.value;
  var updatedWarningLevel = warningLevelSettingElem.value;
  var updatedCriticalLevel = criticalLevelSettingElem.value;


  if(updatedCallCost != ""){
    updateSettingsRequest.updateCall(updatedCallCost);
    var updatedCallCostSetting = updateSettingsRequest.checkCall();
     callCostSetting = parseFloat(updatedCallCostSetting);
    }

  if(updatedSmsCost != ""){
    updateSettingsRequest.updateSms(updatedSmsCost);
    var updatedSmsCostSetting = updateSettingsRequest.checkSms();
     smsCallSetting = parseFloat(updatedSmsCostSetting);
    }

    if (updatedWarningLevel != "") {
      updateSettingsRequest.updateWarningLevel(updatedWarningLevel);
      var updatedWarningLevelSetting = updateSettingsRequest.checkWarningLevel();
      warningLevelSetting = parseFloat(updatedWarningLevelSetting);
    }

    if (updatedCriticalLevel != "") {
      updateSettingsRequest.updateCriticalLevel(updatedCriticalLevel);
      var updatedCriticalLevelSetting = updateSettingsRequest.checkCriticalLevel();
      criticalLevelSetting = parseFloat(updatedCriticalLevelSetting);
    }


}


addCostBtnSett.addEventListener('click', calcRadioBillWithSettingsClicked);

//add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener('click', updateSettingsClicked);
