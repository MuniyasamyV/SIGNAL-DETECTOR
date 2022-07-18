(function (root, factory)
{
    root['vechicle'] = factory();

})(window, function()
{
    var VechicleClass = function(no,model)
    {
        this.num = no;
        this.model = model;
        var distance = 100;
        maintainDistance = function(newDistance)
        {
            if(newDistance<distance);
            newDistance = distance
        }
        this.getDistance = function()
        {
            return distance
        }
        return {
            makeVehicle:function(no,model)
            {
             return new VechicleClass(no,model)
            }
        }
    }
})