describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it('has a default temperature', function() {
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });

    describe("Thermostat's temperature", function() {

      it('can be increased by pushing the Up button', function() {
        thermostat.pushUpButton();
        expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE + 1);
      });

      it('can be decreased by pushing the Down button', function() {
        thermostat.pushDownButton();
        expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE - 1);
      });

      it('can not go lower than 10 degrees', function() {
        thermostat.temperature = 10;
        expect(function(){ thermostat.pushDownButton(); }).toThrowError('Can not set the temperature below 10 degrees');
      });

      it('can be reset to default', function() {
        thermostat.temperature = 28;
        thermostat.resetTemperature();
        expect(thermostat.temperature).toEqual(20);
      })

      describe('Power save mode', function() {

      it('when ON, temperature can not exceed 25 degrees', function() {
        thermostat.temperature = 25;
        expect(function(){ thermostat.pushUpButton(); }).toThrowError('Can not set the temperature above 25 degrees in power save mode');
      });

      it('when OFF, temperature can not exceed 32 degrees', function() {
        thermostat.powerSaveMode = false;
        thermostat.temperature = 32;
        expect(function(){ thermostat.pushUpButton(); }).toThrowError('Can not set the temperature above 32');
      });

      it('can be switched OFF and ON', function() {
        thermostat.togglePowerSave();
        expect(thermostat.powerSaveMode).toEqual(false);
        thermostat.togglePowerSave();
        expect(thermostat.powerSaveMode).toEqual(true);
      });

    });

    describe('Thermostat display', function() {

      it('is GREEN when temperature is below 18', function() {
        thermostat.temperature = 17;
        expect(thermostat.displayColour()).toEqual('green');
      });

      it('is YELLOW when temperature is between 18 and 24', function() {
        thermostat.temperature = 22;
        expect(thermostat.displayColour()).toEqual('yellow');
      });

      it('is RED when temperature is above 24', function() {
        thermostat.temperature = 27;
        expect(thermostat.displayColour()).toEqual('red');
      });
    });

  });

});
