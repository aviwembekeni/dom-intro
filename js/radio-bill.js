// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");

//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");

var templateSource = document.querySelector(".totalsTemplate").innerHTML;

var totalsTemplate = Handlebars.compile(templateSource);

var totalsDisplayElem = document.querySelector(".radioBillTotalsSection");

var totalsDataHTML = totalsTemplate({
    callTotal : 0,
    smsTotal : 0,
    total : 0

});

totalsDisplayElem.innerHTML = totalsDataHTML;
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

    var checkBillTotatalStyle = function(){
      if (bills['total'] >= 50) {
          return "danger";
      } else if(bills['total'] >= 30){
          return "warning";
      }
    }

      return {
          calculate : calculateRadioBill,
          check : checkRadioBill,
          checkBillTotStyle :  checkBillTotatalStyle

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
      var totalCost = bill['total'];
      var billTotStyle = radioBillTotal.checkBillTotStyle();

      if (totalCost >= 50) {
          billTotStyle = "danger";
      } else if(totalCost >= 30){
          billTotStyle = "warning";
      }

      var totalsDataHTML = totalsTemplate({
          callTotal : totCallBill.toFixed(2),
          smsTotal : totSmsBill.toFixed(2),
          total : totalCost.toFixed(2),
          billTotalStyle : billTotStyle

      });

      totalsDisplayElem.innerHTML = totalsDataHTML;

    }

}

radioBillAddBtn.addEventListener('click', calcRadioBillClicked);
