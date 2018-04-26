
var billTypeTextfield = document.querySelector(".billTypeText");

var addToBillButton = document.querySelector(".addToBillBtn");
var callTotalElement = document.querySelector(".callTotalOne");
var smsTotalElement = document.querySelector(".smsTotalOne");
var totalCostElement = document.querySelector(".totalOne");

var textBillTemplateSource = document.querySelector(".totalsTemplate").innerHTML;

var textBillTotalsTemplate = Handlebars.compile(textBillTemplateSource);

var textBillTotalsDisplayElem = document.querySelector(".textBillTotalsSection");

var textBillTotalsDataHTML = textBillTotalsTemplate({
    callTotal : 0,
    smsTotal : 0,
    total : 0

});

textBillTotalsDisplayElem.innerHTML = textBillTotalsDataHTML;


//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


function TextBillTotal(){

   var bills = {call:0,
                sms:0,
                total: 0};

   var calculateBill = function(billType){

        if(billType == 'call'){
          bills[billType] += 2.75;
        }else if (billType == 'sms') {
          bills[billType] += 0.75;
        }

        bills['total'] = bills['sms'] + bills['call'];

    };



    var checkBill = function(billType){
        return {
          requestedBill : bills[billType],
          sms : bills['sms'],
          call : bills['call'],
          total : bills['total']
        }
    }

    return {
        calculate : calculateBill,
        check : checkBill

    }



}

var textBillTotal = TextBillTotal();

var calcBillClicked = function(){

  var typeOfBill = billTypeTextfield.value.trim();
  billTypeTextfield.value = "";

  textBillTotal.calculate(typeOfBill);
  var bill = textBillTotal.check(typeOfBill);

  var totSmsBill = bill['sms'];
  var totCallBill = bill['call'];
  var totalCost = bill['total'];
  var billTotStyle = "";

  if (totalCost >= 50) {
      billTotStyle = "danger";
  } else if(totalCost >= 30){
      billTotStyle = "warning";
  }

  var textBillTotalsDataHTML = textBillTotalsTemplate({
      callTotal : totCallBill.toFixed(2),
      smsTotal : totSmsBill.toFixed(2),
      total : totalCost.toFixed(2),
      billTotalStyle : billTotStyle

  });

  textBillTotalsDisplayElem.innerHTML = textBillTotalsDataHTML;




}

//add an event listener for when the add button is pressed
addToBillButton.addEventListener('click', calcBillClicked);
