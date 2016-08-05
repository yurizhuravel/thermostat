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
  if(this.temperature >= this.PSM_MAX_TEMPERATURE && this.powerSaveMode) {
    alert('Can not set the temperature above 25 degrees in power save mode');
    this.temperature = this.PSM_MAX_TEMPERATURE;
    return;
  }
  if(this.temperature === this.MAX_TEMPERATURE && !this.powerSaveMode) {
    alert('Can not set the temperature above 32');
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.pushDownButton = function () {
  if(this.temperature === this.MIN_TEMPERATURE) {
    alert('Can not set the temperature below 10 degrees');
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.togglePowerSave = function () {
  if(this.powerSaveMode){
    this.powerSaveMode = false;
    return;
  }
    this.powerSaveMode = true;
    if(this.temperature > this.PSM_MAX_TEMPERATURE){
     this.temperatue = this.PSM_MAX_TEMPERATURE;
    }
};


Thermostat.prototype.powerSaveStatus = function(){
   if(this.powerSaveMode){
       return "on";
   }
    return "off";
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.displayColour = function() {
  if(this.temperature <= this.LOW_POWER_USAGE) {
    return 'green';
  }
  if(this.temperature >= this.HIGH_POWER_USAGE) {
    return 'red';
  }
  return 'yellow';
};
