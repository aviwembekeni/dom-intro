// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");

//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");
var totalCostElem = document.querySelector(".totalTwo");

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function RadioBillTotal(){

  var bills = {call:0,
               sms:0,
               total: 0};

   var calculateRadioBill = function(billItemType){

        if(billItemType == 'call'){
          bills[billItemType] += 2.75;
        }else if (billItemType == 'sms') {
          bills[billItemType] += 0.75;
        }

        bills['total'] = bills['sms'] + bills['call'];

    };

    var checkRadioBill = function(billItemType){
        return {
          requestedBill : bills[billItemType],
          sms : bills['sms'],
          call : bills['call'],
          total : bills['total']
        }
    }

      return {
          calculate : calculateRadioBill,
          check : checkRadioBill

      }

    }

var radioBillTotal = RadioBillTotal();

var calcRadioBillClicked = function(){

  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

  if (checkedRadioBtn != null){
      var billItemType = checkedRadioBtn.value;

      radioBillTotal.calculate(billItemType);
      var bill = radioBillTotal.check(billItemType);

      var totSmsBill = bill['sms'];
      var totCallBill = bill['call'];
      callTotalElem.innerHTML = totCallBill.toFixed(2);
      smsTotalElem.innerHTML =  totSmsBill.toFixed(2);
      var totalCost = bill['total'];
      totalCostElem.innerHTML = totalCost.toFixed(2);

      if (totalCost >= 50) {
          totalCostElem.classList.add("danger");
      } else if(totalCost >= 30){
          totalCostElem.classList.add("warning");
      }
    }

}

radioBillAddBtn.addEventListener('click', calcRadioBillClicked);
