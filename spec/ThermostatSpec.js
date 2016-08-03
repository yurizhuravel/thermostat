describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it('has a default temperature of 20 degrees', function() {
      expect(thermostat.defaultTemperature).toEqual(20);
    });

    describe("Thermostat's temperature", function() {

      it('can be increased by pushing the Up button', function() {
        thermostat.pushUpButton();
        thermostat.pushUpButton();
        expect(thermostat.temperature).toEqual(22);
      });

      it('can be decreased by pushing the Down button', function() {
        thermostat.pushDownButton();
        expect(thermostat.temperature).toEqual(19);
      });

      it('can not go lower than 10 degrees', function() {
        thermostat.temperature = 10;
        expect(function(){ thermostat.pushDownButton(); }).toThrowError('Can not set the temperature below 10 degrees');
      });

      it('can not go higher than 25 degrees in default power save mode', function() {
        thermostat.temperature = 25;
        expect(function(){ thermostat.pushUpButton(); }).toThrowError('Can not set the temperature above 25 degrees in power save mode');
      });

    });


});
