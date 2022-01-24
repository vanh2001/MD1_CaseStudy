class Ship {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

function drawImages() {
    let ctx = document.getElementById('myCanvas').getContext('2d');
    let ship = new Ship(1000, 600);
    let theImage = new Image();
    theImage.onload = function () {
        ctx.drawImage(theImage,((ship.x)/2)-30, (ship.y)-100, 90, 100);
    }
    theImage.src = "img/roket.png";
}
drawImages();
