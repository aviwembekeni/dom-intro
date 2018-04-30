describe('calculateRadioBill', function() {


    it('should return bill amount for smses and the bills object', function() {
      var radioBillTotal = RadioBillTotal();

      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('sms');

      assert.deepEqual({"requestedBill" : 1.5, "sms" : 1.5, "call" : 8.25, "total" : 9.75 }, radioBillTotal.check('sms'));
    });

    it('should return bill amount for calls and the bills object', function() {
      var radioBillTotal = RadioBillTotal();


      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('sms');

      assert.deepEqual({"requestedBill" : 5.5, "sms" : 1.5, "call" : 5.5, "total" : 7 }, radioBillTotal.check('call'));
    });

    it('should return 0 for smes when smses dont exist', function() {
      var radioBillTotal = RadioBillTotal();

      radioBillTotal.calculate('call');

      assert.deepEqual({"requestedBill" : 0, "sms" : 0, "call" : 2.75, "total" : 2.75 }, radioBillTotal.check('sms'));
    });

    it('should return 0 for calls when calls dont exist', function() {
      var radioBillTotal = RadioBillTotal();


      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('sms');

      assert.deepEqual({"requestedBill" : 0, "sms" : 2.25, "call" : 0, "total" : 2.25 }, radioBillTotal.check('call'));
    });

});


describe('checkRadioBillTotatalStyle', function() {


    it("should return 'warning' if the total is between 30 and less than 50", function() {
      var radioBillTotal = RadioBillTotal();

      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');


      assert.deepEqual("warning", radioBillTotal.checkBillTotStyle());
    });

    it("should return 'danger' if the total is greater than 50", function() {
      var radioBillTotal = RadioBillTotal();

      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('sms');
      radioBillTotal.calculate('call');
      radioBillTotal.calculate('call');


      assert.deepEqual("danger", radioBillTotal.checkBillTotStyle());
    });



});
