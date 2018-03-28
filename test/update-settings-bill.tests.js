describe('updateSettings', function() {


    it('should return updated settings object', function() {
      var updateSettingsRequest = UpdateSettingsRequest();

      updateSettingsRequest.update(5, 7.5, 60, 85);

      assert.deepEqual({"callCostSetting" : 5, "smsCallSetting" : 7.5, "warningLevelSetting" : 60, "criticalLevelSetting" : 85 }, updateSettingsRequest.check());
    });

    it('should return updated settings object and should have original value for data that is not updated or left blank', function() {
      var updateSettingsRequest = UpdateSettingsRequest();
      updateSettingsRequest.update(5, 0.75, 80, 90);
      updateSettingsRequest.update(2.75,"" , 70, 85);

      assert.deepEqual({"callCostSetting" : 2.75, "smsCallSetting" : 0.75, "warningLevelSetting" : 70, "criticalLevelSetting" : 85 }, updateSettingsRequest.check());
    });

    it('should return updated settings object and should have original value for data that is not updated or left blank and should change only fields with updated values', function() {
      var updateSettingsRequest = UpdateSettingsRequest();
      updateSettingsRequest.update(5, 10, 75, 90);
      updateSettingsRequest.update("",7 , "", "");

      assert.deepEqual({"callCostSetting" : 5, "smsCallSetting" : 7, "warningLevelSetting" : 75, "criticalLevelSetting" : 90 }, updateSettingsRequest.check());
    });

});
