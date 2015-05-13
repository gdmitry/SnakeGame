define(['./wrappers/Raster','./wrappers/Point'], function (Raster, Point) {
   

    function SnakeCell(options) {
        this.raster = new Raster('./images/grass_snake.png');
        this.setCoordinates(options || new Point(0, 0));       
    }

    SnakeCell.prototype.setCoordinates = function (point) {
        this.raster.position = point;
        this.position = point;
        this.x = point.x;
        this.y = point.y;
    }

    return SnakeCell;
});