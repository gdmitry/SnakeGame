//http://www.w3.org/TR/pointerevents/
require.config({
    paths: {
        'text':
        'lib/text',
        'paper':
        'lib/paper',
        'json': 'lib/json'      
    }
});

requirejs(["./modules/Map", './modules/Controls', './modules/SwipeTouches'], function (Map) {  
  
    var mc = new Hammer($('input').get(0));

    mc.on("press tap", function (ev) {
        setTimeout(Map.renderMap.bind(Map), 200);
        ev.preventDefault();
    });
});
