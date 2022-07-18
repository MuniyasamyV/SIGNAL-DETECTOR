(function (root, factory) {
    root["detectorModule"] = factory(root.alarmModule);
})(window, function (alarm) {
    var intervalId = null;
    var DetectorClass = function (vehicle) {
        var MIN_DISTANCE_FOR_SIREN = 10
        var vehicleObj = vehicle
        var isAmbulance = function () {
            if (vehicleObj.type == "Ambulance")
                return true
            else
                return false
        }
        var checkForDistance = function () {
            if (vehicleObj.getDistance() < MIN_DISTANCE_FOR_SIREN && isAmbulance()){
                alarm.chnageSignalTo('GREEN')
                clearInterval(intervalId)
                intervalId = null;
                console.log(`Ambulace: ${vehicleObj.number} approching changed signal to GREEN`)
            }else {
                console.log(`vehicle:[${vehicleObj.type}] ${vehicleObj.number} is at ${vehicleObj.getDistance()}`)
                if(!alarm.isEmergencyMode()){
                    alarm.setToNormalMode()
                }else{
                    console.log(`EMERGENCY: Ambulace passing, singnal is GREEN`)
                }
            }
        }
        this.monitorDistace= function(){
            intervalId = setInterval(checkForDistance,1000)
        }
    }
    
    return {
        register: function (vehicleObj) {
            return new DetectorClass(vehicleObj)
        }
    }
})
var vehicle1 = vehicleModule.makeVechicle('100','car')
var vehicle2 = vehicleModule.makeVechicle('101','bus')
var vehicle3 = vehicleModule.makeVechicle('103','Ambulance')

var detector1 = detectorModule.register(vehicle1)
var detector2 = detectorModule.register(vehicle2)
var detector3 = detectorModule.register(vehicle3)

detector1.monitorDistace()
detector3.monitorDistace()
vehicle3.setDistance(2)
