(function (root, factory) {
    root["detector"] = factory();
})(window, function () {
    var Vehicle = function () {
        var VEHICLENAME = {
            listOfVehicle: ['bus', 'van', 'ambulance']
        }
        return VEHICLENAME;
        
    }
    var transport = new Vehicle()
    var detectVehicle = VEHICLENAME.listOfVehicle
    this.detectSensor = function (name) {
        for (var i = 0; i < detectVehicle.length; i++) {
            if (detectVehicle["ambulance"] == name) {
                return "speed breaker down"
            }
            else {
                return "nothing happend"
            }
        }
        this.getVehicle = function () {
            return VEHICLENAME;
        };
        var run = function () {
            return new detector();
        }
        return run;
    }
})