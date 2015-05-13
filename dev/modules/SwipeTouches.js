﻿define(['./Direction'], function (direction) {

    function swipedetect(el, callback) {
        var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 50,//required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 300, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handleswipe = callback || function (swipedir) { }

        touchsurface.on('touchstart', function (e) {
            var touchobj = e.originalEvent.changedTouches[0]
            swipedir = 'none'
            dist = 0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
            e.preventDefault()
        })

        touchsurface.on('touchmove', function (e) {
            e.preventDefault() // prevent scrolling when inside DIV
        })

        touchsurface.on('touchend', function (e) {
            var touchobj = e.originalEvent.changedTouches[0]
            distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
            distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            if (elapsedTime <= allowedTime) { // first condition for awipe met
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
                    swipedir = (distX < 0) ? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
                }
                else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
                    swipedir = (distY < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
                }
            }
            handleswipe(swipedir)
            e.preventDefault()
        })
    }

    swipedetect($("html"), function (swipedir) {

        if (swipedir == 'left') {
            direction[0] = "LEFT";
            return false;
        }

        if (swipedir == 'right') {
            direction[0] = "RIGHT";
            return false;
        }

        if (swipedir == 'up') {
            direction[0] = "TOP";
            return false;
        }

        if (swipedir == 'down') {
            direction[0] = "BOTTOM";
            return false;
        }
    })
   
});