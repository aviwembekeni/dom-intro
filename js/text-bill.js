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

    console.log(bills);

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
  callTotalElement.innerHTML = totCallBill.toFixed(2);
  smsTotalElement.innerHTML =  totSmsBill.toFixed(2);
  var totalCost = bill['total'];
  totalCostElement.innerHTML = totalCost.toFixed(2);

  if (totalCost >= 50) {
      totalCostElement.classList.add("danger");
  } else if(totalCost >= 30){
      totalCostElement.classList.add("warning");
  }

}


addToBillButton.addEventListener('click', calcBillClicked);
