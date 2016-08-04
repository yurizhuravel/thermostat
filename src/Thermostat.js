function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 32;
  this.PSM_MAX_TEMPERATURE = 25;
  this.HIGH_POWER_USAGE = 25;
  this.LOW_POWER_USAGE = 17;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSaveMode = true;
}

Thermostat.prototype.pushUpButton = function () {
  if(this.temperature === this.PSM_MAX_TEMPERATURE && this.powerSaveMode) {
    throw new Error ('Can not set the temperature above 25 degrees in power save mode');
  }
  if(this.temperature === this.MAX_TEMPERATURE && !this.powerSaveMode) {
    throw new Error ('Can not set the temperature above 32');
  }
  this.temperature += 1;
};

Thermostat.prototype.pushDownButton = function () {
  if(this.temperature === this.MIN_TEMPERATURE) {
    throw new Error ('Can not set the temperature below 10 degrees');
  }
  this.temperature -= 1;
};

Thermostat.prototype.togglePowerSave = function () {
  this.powerSaveMode ? this.powerSaveMode = false : this.powerSaveMode = true;
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.displayColour = function () {
  if(this.temperature <= LOW_POWER_USAGE) {
    return 'green';
  }
  if(this.temperature >= this.HIGH_POWER_USAGE) {
    return 'red';
  }
  return 'yellow';
};
