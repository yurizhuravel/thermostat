function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSaveMode = true;
}

Thermostat.prototype.pushUpButton = function () {
  if(this.temperature === 25 && this.powerSaveMode) {
    throw new Error ('Can not set the temperature above 25 degrees in power save mode');
  }
  if(this.temperature === 32 && !this.powerSaveMode) {
    throw new Error ('Can not set the temperature above 32');
  }
  this.temperature += 1;
};

Thermostat.prototype.pushDownButton = function () {
  if(this.temperature === 10) {
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
  if(this.temperature < 18) {
    return 'green';
  }
  if(this.temperature > 24) {
    return 'red';
  }
  return 'yellow';
};
