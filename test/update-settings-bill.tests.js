describe('updateSettings', function() {


    it('should return updated call value', function() {
      var updateSettingsRequest = UpdateSettingsRequest();

      updateSettingsRequest.updateCall(5);
      updateSettingsRequest.updateCall(9);

      assert.equal(9, updateSettingsRequest.checkCall());
    });

    it('should return updated sms value', function() {
      var updateSettingsRequest = UpdateSettingsRequest();
      updateSettingsRequest.updateSms(10);
      updateSettingsRequest.updateSms(7);

      assert.equal(7, updateSettingsRequest.checkSms());
    });

    it('should return updated warningLevel value', function() {
      var updateSettingsRequest = UpdateSettingsRequest();
      updateSettingsRequest.updateWarningLevel(50);
      updateSettingsRequest.updateWarningLevel(70);

      assert.equal(70, updateSettingsRequest.checkWarningLevel());
    });

    it('should return updated criticalgLevel value', function() {
      var updateSettingsRequest = UpdateSettingsRequest();
      updateSettingsRequest.updateCriticalLevel(80);
      updateSettingsRequest.updateCriticalLevel(90);

      assert.equal(90, updateSettingsRequest.checkCriticalLevel());
    });

});
