$(document).ready(function() {

    var thermostat = new Thermostat();

    function updateTemperature(){
      $('#temperature').text(thermostat.temperature);
      $('body').attr('class', thermostat.displayColour());
    }


   function showPSM(){
     $('#power-saving-status').text(thermostat.powerSaveStatus());
   }

    updateTemperature();
    showPSM();


    $('#temperature-up').click(function() {
     thermostat.pushUpButton();
     updateTemperature();
    });

    $('#temperature-down').click(function() {
     thermostat.pushDownButton();
     updateTemperature();
    });

    $('#temperature-reset').click(function(){
      thermostat.resetTemperature();
      updateTemperature();
    });

    $('#powersaving-on-off').click(function(){
      thermostat.togglePowerSave();
      updateTemperature();
      showPSM();
    });



});
