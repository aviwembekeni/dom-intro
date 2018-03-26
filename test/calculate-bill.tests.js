describe('totalPhoneBill', function() {
    it('should return the value of a single call', function() {
      assert.equal(2.75, totalPhoneBill('call'));
    });

    it('should return the value of a single sms', function() {
      assert.equal(0.75, totalPhoneBill('sms'));
    });

    it('should return the the total value of the string passed to it', function() {
      assert.equal(7.75, totalPhoneBill('sms, call, sms, sms, call'));
    });
});
