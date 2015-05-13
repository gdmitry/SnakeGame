//http://stackoverflow.com/questions/10337128/how-to-roll-up-a-javascript-error
//http://www.toptal.com/javascript/10-most-common-javascript-mistakes
// http://www.w3.org/TR/touch-events/
define(['./wrappers/Raster', './wrappers/Point', './wrappers/Configuration'], function (Raster, Point, config) {
    
    var cellSize = config.gameField.cellSize;

    var getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function Food(options) {        
        this.raster = new Raster("./images/food.png");
        this.position = new Point(getRandomInt(0, config.gameField.Width - 1) * cellSize + cellSize / 2, getRandomInt(0, config.gameField.Height - 1) * cellSize + cellSize / 2 - 2);
        this.raster.position = this.position;
    }

    Food.prototype.generate = function (options) {
        var occupiedCells = options && options.occupiedCells || [];
        var currentSegment;
        var x;
        var y;
        var result = false;

        while (!result) {
            currentSegment = new Point(getRandomInt(0, config.gameField.Width - 1) * cellSize + cellSize / 2, getRandomInt(0, config.gameField.Height - 1) * cellSize + cellSize / 2 - 2);
            x = currentSegment.x;
            y = currentSegment.y;
            result = occupiedCells.some(function (cell) {
                if (cell.position.x != x && cell.position.y != y) {
                    return true;
                }
            });
        }
        this.position = currentSegment;
        this.raster.position = this.position;

    }

    return Food;
});