define(['./wrappers/Configuration', './wrappers/View', './Cell', './Snake', './FoodCell', './wrappers/Size', './Direction'], function (config, view, Cell, Snake, Food, Size, direction) {
    var Map = (function () {

        var snake;
        var food;
        var speed = config.snake.snakeSpeed;
        var width = config.gameField.Width;
        var height = config.gameField.Height;
        var cellSize = config.gameField.cellSize;
        var canvasSize = new Size(width * cellSize, height * cellSize);
        view.viewSize = canvasSize;

        return {
            renderBackground: function (width, heigth) {
                var map = [];
                var i = 0;
                var j = 0;

                for (i = 0; i < height; i++) {
                    map[i] = [];
                    for (j = 0; j < width; j++) {
                        map[i][j] = new Cell({ x: j, y: i });
                    }
                }
                return map;
            },

            renderMap: function () {
                var count = 0;
                var currentDirection = direction[0];
                var lastDirection = currentDirection;
                var result;
                var isEnd = false;
                this.renderBackground(width, height);
                snake = new Snake();
                food = new Food();

                view.onFrame = function (event) {
                    if (isEnd) {
                        return;
                    }
                    count++;
                    if (count === speed) {
                        count = 0;
                        result = snake.move(currentDirection);
                        if (result === "CYCLE") {
                            console.log("LOOSE");
                            isEnd = true;
                        }
                        if (result === "OLD_DIRECTION") {
                            snake.move(lastDirection);
                        } else {
                            lastDirection = currentDirection;
                        }
                        checkForFood();
                        currentDirection = direction[0];
                    }
                }

               /* $('input').click(function () {
                    // view.element.getContext('2d').clearRect();                  
                    //snake = new Snake();
                    food = new Food();
                    isEnd = false;
                });*/
/*
                  var startX;
                  var startY;
  
                  $("#myCanvas").on("touchstart", function (evt) {
                      console.log("touchstart");
                      //evt.preventDefault();
                      console.log(evt.originalEvent.touches);
                      console.log(evt.originalEvent.changedTouches);
                      console.log(evt.originalEvent.targetTouches);
  
                  });
  
                  $("#myCanvas").on("touchend", function () {
                      console.log("touchend");
                  });
  
                  $("#myCanvas").on("touchcancel", function () {
                      console.log("touchcancel");
                  });
  
                  $("#myCanvas").on("touchleave", function () {
                      console.log("touchleave");
                  });
  
                  $("#myCanvas").on("touchmove", function (evt) {
                      console.log("touchmove");
  
                  });
  
                  $("#myCanvas").on("click", function () {
                      console.log("click");
                  });
*/
            }
        }

        function checkForFood() {
            var headPosition = snake.segments[0].position;
            var applePosition = food.position;
            if ((headPosition.x === applePosition.x) && (headPosition.y === (applePosition.y + 2))) {
                snake.addSegment();
                food.generate({ occupiedCells: snake.segments });

            }

        }

    })();

    return Map;


});