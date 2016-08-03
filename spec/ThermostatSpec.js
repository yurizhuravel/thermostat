describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Has a default temperature', function() {

    it('of 20 degrees', function() {
      expect(thermostat.defaultTemperature).toEqual(20);
    });
  });
});
