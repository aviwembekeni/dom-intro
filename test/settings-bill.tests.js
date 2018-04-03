describe('calculateRadioBillSett', function() {


    it('should return bill amount for smses and the bills object', function() {
      var radioBillTotalTwo = RadioBillTotalTwo();

      radioBillTotalTwo.calculate('call');
      radioBillTotalTwo.calculate('call');
      radioBillTotalTwo.calculate('call');
      radioBillTotalTwo.calculate('sms');
      radioBillTotalTwo.calculate('sms');

      assert.deepEqual({"requestedBill" : 1.5, "sms" : 1.5, "call" : 8.25, "total" : 9.75 }, radioBillTotalTwo.check('sms'));
    });

    it('should return bill amount for calls and the bills object', function() {
      var radioBillTotalTwo = RadioBillTotalTwo();


      radioBillTotalTwo.calculate('call');
      radioBillTotalTwo.calculate('call');
      radioBillTotalTwo.calculate('sms');
      radioBillTotalTwo.calculate('sms');

      assert.deepEqual({"requestedBill" : 5.5, "sms" : 1.5, "call" : 5.5, "total" : 7 }, radioBillTotalTwo.check('call'));
    });

    it('should return 0 for smes when smses dont exist', function() {
      var radioBillTotalTwo = RadioBillTotalTwo();

      radioBillTotalTwo.calculate('call');

      assert.deepEqual({"requestedBill" : 0, "sms" : 0, "call" : 2.75, "total" : 2.75 }, radioBillTotalTwo.check('sms'));
    });

    it('should return 0 for calls when calls dont exist', function() {
      var radioBillTotalTwo = RadioBillTotalTwo();


      radioBillTotalTwo.calculate('sms');
      radioBillTotalTwo.calculate('sms');
      radioBillTotalTwo.calculate('sms');

      assert.deepEqual({"requestedBill" : 0, "sms" : 2.25, "call" : 0, "total" : 2.25 }, radioBillTotalTwo.check('call'));
    });

});
