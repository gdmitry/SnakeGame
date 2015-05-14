define(['./Direction'], function (direction) {

    var myElement = $('html').get(0);
    var mc = new Hammer(myElement);   

    mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL, velocity: 0.3 });

    mc.on("swipeleft", function (ev) {
        direction[0] = "LEFT";
    });
    mc.on("swiperight", function (ev) {
        direction[0] = "RIGHT";
    });
    mc.on("swipeup", function (ev) {        
        direction[0] = "TOP";
    });
    mc.on("swipedown", function (ev) {
        direction[0] = "BOTTOM";
    });

});