window.addEventListener('DOMContentLoaded', (event) => {
    var wpelement = document.getElementById("wallpaper");

    var reactscale = wpelement.getAttribute('reactscale');
    var effectscale = wpelement.getAttribute('effectscale');
    var effectimg = wpelement.getAttribute('effectimg');

    wpelement.style.width = "100%";
    wpelement.style.height = "100%";
    wpelement.style.position = "absolute";
    wpelement.style.top = 0;
    wpelement.style.left = 0;
    wpelement.style.zIndex = -1;
    wpelement.style.transition = "all " + effectscale + "s linear";

    wpelement.style.backgroundSize = 100 + 2*reactscale + "%";
    wpelement.style.backgroundRepeat = "no-repeat";
    wpelement.style.backgroundImage = "url('" + effectimg + "')";

    var w = window.innerWidth;
    var h = window.innerHeight;

    document.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;

        var posX = w/2 - x;
        var posY = h/2 - y;

        var scrollX = (((reactscale * posX) / (w / 2)) - reactscale) + "vw";
        var scrollY = (((reactscale * posY) / (h / 2)) - reactscale) + "vh";

        wpelement.style.backgroundPositionX = scrollX;
        wpelement.style.backgroundPositionY = scrollY;
    }
});