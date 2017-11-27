var app = app || {};


app.Animation = (function () {

    var tl1 = new TimelineMax(),
        txt1,
        cta_txt,
        cta_arrow,
        curtain,
        buttonExit,
        circle1,
        circle2,
        circle3,
        circle4,
        myArray;

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        txt1 = document.getElementById('txt1');
        cta_txt = document.getElementById('cta_txt');
        cta_arrow = document.getElementById('cta_arrow');
        curtain = document.getElementById('curtain');
        buttonExit = document.getElementById('button-exit');
        circle1 = document.getElementById('circle1');
        circle2 = document.getElementById('circle2');
        circle3 = document.getElementById('circle3');
        circle4 = document.getElementById('circle4');

        myArray= [circle1, circle2, circle3, circle4];

        buttonExit.addEventListener('mouseover', function () {
            TweenMax.to(cta_arrow, .25, {x: 5});
            TweenMax.to(cta_arrow, .25, {x: 0, delay: .25});
        });
    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        // TweenMax.to(myArray,1, {rotation: 360, ease:Linear.easeNone, repeat:15});

        tl1.to(curtain, .5, {opacity: 0})
            .from(circle1, 7, {x:"+=50", ease:Sine.easeOut},"-=.5")
            .from(circle2, 7, {x:"+=75", ease:Sine.easeOut},"-=7")
            .from(circle3, 7, {x:"+=100", ease:Sine.easeOut},"-=7")
            .from(circle4, 7, {x:"+=90", ease:Sine.easeOut},"-=7")
            .to(txt1, 1, {opacity: 1},"-=5")
            .to(cta_txt, .5, {opacity: 1}, "-=3")
            .to(cta_arrow, .5, {opacity: 1}, "-=3");
    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize:initialize,
        start:start,
        stop:stop
    }

})();
