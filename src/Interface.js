$(document).ready(function() {

    var thermostat = new Thermostat();
    
    $('#temperature').text(thermostat.temperature);
    
    $('#temperature-up').click(function() {
       thermostat.pushUpButton();
        $('#temperature').text(thermostat.temperature);
    });
    
    $('#temperature-down').click(function() {
       thermostat.pushDownButton();
        $('#temperature').text(thermostat.temperature);
    });

});