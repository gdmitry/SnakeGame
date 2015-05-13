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
    Map.renderMap();

});
