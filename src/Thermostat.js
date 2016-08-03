function Thermostat() {
  this.defaultTemperature = 20;
  this.temperature = this.defaultTemperature;
  this.powerSaveMode = true;
}

Thermostat.prototype.pushUpButton = function () {
  if(this.temperature === 25 && this.powerSaveMode) {
    throw new Error ('Can not set the temperature above 25 degrees in power save mode');
  }
  this.temperature += 1;
};

Thermostat.prototype.pushDownButton = function () {
  if(this.temperature === 10) {
    throw new Error ('Can not set the temperature below 10 degrees');
  }
  this.temperature -= 1;
};
