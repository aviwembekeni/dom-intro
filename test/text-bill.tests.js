describe('calculateBill', function() {


    it('should return bill amount for smses and the bills object', function() {
      var textBillTotal = TextBillTotal();

      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('sms');

      assert.deepEqual({"requestedBill" : 1.5, "sms" : 1.5, "call" : 8.25, "total" : 9.75 }, textBillTotal.check('sms'));
    });

    it('should return bill amount for calls and the bills object', function() {
      var textBillTotal = TextBillTotal();


      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('sms');

      assert.deepEqual({"requestedBill" : 5.5, "sms" : 1.5, "call" : 5.5, "total" : 7 }, textBillTotal.check('call'));
    });

    it('should return 0 for sms since they dont exist', function() {
      var textBillTotal = TextBillTotal();


      textBillTotal.calculate('call');
      textBillTotal.calculate('call');

      assert.deepEqual({"requestedBill" : 0, "sms" : 0, "call" : 5.5, "total" : 5.5 }, textBillTotal.check('sms'));
    });

    it('should return 0 for call since they dont exist', function() {
      var textBillTotal = TextBillTotal();


      textBillTotal.calculate('sms');
      textBillTotal.calculate('sms');

      assert.deepEqual({"requestedBill" : 0, "sms" : 1.5, "call" : 0, "total" : 1.5 }, textBillTotal.check('call'));
    });

});

describe('checkTextBillTotatalStyle', function() {


    it("should return 'warning' if the total is between 30 and less than 50", function() {
      var textBillTotal = RadioBillTotal();

      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');


      assert.deepEqual("warning", textBillTotal.checkBillTotStyle());
    });

    it("should return 'danger' if the total is greater than 50", function() {
      var textBillTotal = RadioBillTotal();

      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('sms');
      textBillTotal.calculate('call');
      textBillTotal.calculate('call');


      assert.deepEqual("danger", textBillTotal.checkBillTotStyle());
    });



});
