



//.................................Прорисовка круга..............................
//var canvas = document.querySelector("#myCanvas");
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var myColor = 'red';

var img = new Image();
img.src = "../plan1.png";
//img.onload =
function imageOnLoad() {

    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0,0, img.width, img.height);
    // var red = 150,
    //     green = 255,
    //     blue = 40;
    // for(var i = 0; i < imageData.data.length; i +=4){
    //     if(imageData.data[i] == 0 && imageData.data[i + 1] == 0 && imageData.data[i + 2] == 0) {
    //         imageData.data[i] = red;
    //         imageData.data[i + 1] = green;
    //         imageData.data[i + 2] = blue;
    //     }
    //
    // }
    // context.putImageData(imageData, img.width + 10, 0);
}



document.getElementById('color').oninput = function () {
  myColor = this.value;
};

var canvasPos = getPosition(canvas);

var mouseX = 100;
var mouseY = 100;

canvas.onmousedown = function move () {
    canvas.addEventListener("mousemove", setMousePosition, false);

};
canvas.onmouseup = function () {
    canvas.removeEventListener("mousemove", setMousePosition, false);
};

function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
}


function update() {
    var circleRadius = 10;

    context.clearRect(0, 0, canvas.width, canvas.height);
    imageOnLoad();
    context.beginPath();
    context.arc(mouseX, mouseY, circleRadius, 0, 2 * Math.PI, true);
    context.fillStyle = myColor;
    context.fill();
    requestAnimationFrame(update);

    // var counterY = mouseY,
    //     counterX = mouseX - circleRadius-1;

    //console.log(counterY);

    // context.beginPath();
    // context.fillStyle = 'green';
    // context.fillRect(counterX, counterY, 3, 3);

    // for(var i = 0; i < 90; i++){
    //     counterX++;
    //     counterY--;
    //     context.beginPath();
    //     context.fillStyle = 'green';
    //     context.fillRect(counterX, counterY,3,3);
    // }

}

update();

function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;

    while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}





//.....................енд прорисовка круга.........................

