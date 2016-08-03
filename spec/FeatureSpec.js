describe('Feature tests:', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Users can increase the temperature', function() {
    thermostat.pushUpButton();
    expect(thermostat.temperature).toEqual(21);
  });
});
