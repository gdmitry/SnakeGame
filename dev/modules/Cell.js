define(['./wrappers/Raster', './wrappers/Point', './wrappers/Configuration'], function (Raster, Point, config) {
    var cellSize = config.gameField.cellSize;

    function Cell(options) {
        this.raster = new Raster("./images/cell.jpg");
        this.raster.position = new Point(options.x * cellSize + cellSize / 2, options.y * cellSize + cellSize / 2);       
    }

    return Cell;
});