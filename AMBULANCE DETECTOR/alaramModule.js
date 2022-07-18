(function (root, factory) {
    root["alarmModule"] = factory();
})(window, function () {
    var mode = "NORMAL"
    this.color = 'GREEN'
    return {
        chnageSignalTo:function(color){
            if(mode!=="EMERGENCY")
            this.color = color
        },
        setToNormalMode:function(){
            return "Signal back to Normal Mode"
        },
        isEmergencyMode:function(){mode === "EMERGENCY"}
    }
})