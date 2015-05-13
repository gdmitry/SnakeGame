//https://remysharp.com/2010/07/21/throttling-function-calls
//http://habrahabr.ru/post/60957/
require([
        './modules/StringSpec'
],
    function () {
        console.log("Jasmine started..");
        jasmine.getEnv().execute();
    });


