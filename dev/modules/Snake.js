define(['./wrappers/Raster', './wrappers/Point', './wrappers/Configuration', './SnakeCell'], function (Raster, Point, config, SnakeCell) {
    'use strict';

    var cellSize = config.gameField.cellSize;

    function Snake(options) {
        this.length = options && options.length || config.snake.snakeLength;
        this.segments = [];
        this.generate();
    }

    Snake.prototype.move = function (direction) {
        /* cash head coordinates before shifting */
        var head = this.segments[0]
        var currentHeadPosition = head.position;
        var nextHeadPosition;
        var x;
        var y;
        var isCycle;

        switch (direction) {
            case "TOP":
                nextHeadPosition = new Point(currentHeadPosition.x, currentHeadPosition.y - cellSize);
                break;
            case "RIGHT":
                nextHeadPosition = new Point(currentHeadPosition.x + cellSize, currentHeadPosition.y);
                break;
            case "BOTTOM":
                nextHeadPosition = new Point(currentHeadPosition.x, currentHeadPosition.y + cellSize);
                break;
            case "LEFT":
                nextHeadPosition = new Point(currentHeadPosition.x - cellSize, currentHeadPosition.y);
                break;
        }

        x = nextHeadPosition.x;
        y = nextHeadPosition.y;

        if (y < 0) {
            y = config.gameField.Height * cellSize - cellSize / 2;
        }
        if (y > config.gameField.Height * cellSize) {
            y = cellSize / 2;
        }
        if (x > config.gameField.Width * cellSize) {
            x = cellSize / 2;
        }
        if (x < 0) {
            x = config.gameField.Width * cellSize - cellSize / 2;
        }

        /* check if cycle */
        this.segments.some(function (segment, index) {
            if (segment.position.x == x && segment.position.y == y) {
                if (index === 1) { // restore previous direction
                    isCycle = "OLD_DIRECTION";
                } else { //cycle
                    isCycle = "CYCLE";
                }
                return true;
            }
        });

        if (isCycle !== undefined) {
            return isCycle;
        }
        var len = this.segments.length;
        while (len-- > 1) {
            this.segments[len].setCoordinates(this.segments[len - 1].position);
        }

        head.setCoordinates(new Point(x, y));
    }

    Snake.prototype.generate = function () {
        var head = config.snake.head;
        var headPosition = new Point(head.x * cellSize + cellSize / 2, head.y * cellSize + cellSize / 2);
        var currentPosition = headPosition;
        var len = this.length;

        while (len-- > 0) {
            this.segments.push(new SnakeCell(currentPosition));
            currentPosition = new Point(currentPosition.x, currentPosition.y + cellSize);
        }       
    }

    Snake.prototype.addSegment = function () {
        var len = this.segments.length;
        var tale = this.segments[len-1];
        var nextSegment = new Point(tale.x + cellSize,tale.y);           
        this.segments.push(new SnakeCell(nextSegment));
        this.length = this.segments.length;
    }


    return Snake;
});