// https://iterativo.wordpress.com/2012/03/06/unit-testing-javascript-modules-using-requirejs-and-jasmine/
// http://blog.pluralsight.com/6-examples-of-hard-to-test-javascript

define(function () {

    describe("LocalStorage", function () {

        describe('When retriveResults', function () {
            describe('and checkStorage is true', function () {
                beforeEach(function () {
                    //spyOn(localStorage, "checkStorage").and.returnValue(true);
                });

                it("should retrive results if it was stored previously", function () {
                    var possibleDirections = ["BOTTOM", "RIGHT", "LEFT", "TOP"];
                    var d = "TOP";

                    var a = possibleDirections.indexOf(d);
                    if (a != -1) {
                        possibleDirections.splice(a, 1);
                    }
                    console.log(possibleDirections);
                    expect(possibleDirections.length).toEqual(3);
                });
            });            
        });       
    });
});