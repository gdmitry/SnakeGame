define(['./wrappers/Tool', './Direction'], function (Tool, direction) {
  
    var tool = new Tool();
    tool.onKeyDown = function (event) {
        if (event.key == 'right') {
            direction[0] = "RIGHT";
            return false;
        }
        if (event.key == 'left') {
            direction[0] = "LEFT";
            return false;
        }
        if (event.key == 'up') {
            direction[0] = "TOP";
            return false;
        }
        if (event.key == 'down') {
            direction[0] = "BOTTOM";
            return false;
        }
    }
    tool.activate();
    
});