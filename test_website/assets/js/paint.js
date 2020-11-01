let canvas = document.getElementById("draw");
context = canvas.getContext("2d");

let clickX = new Array();
let clickY = new Array();
let clickDrag = new Array();
let paint;
let mouseX;
let mouseY;
let offsetLeft = canvas.parentElement.parentElement.offsetLeft;
let offsetTop = canvas.parentElement.parentElement.offsetTop;
let size = 100;
let color = "#df4b26";
let sizeAr = new Array();
let colorAr = new Array();

canvas.addEventListener('mousedown', function(e) {
    // mouseX = e.pageX - this.offsetLeft;
    // mouseY = e.pageY - this.offsetTop;
    // версія для нашої розмітки
    mouseX = e.pageX - this.offsetLeft - offsetLeft;
    mouseY = e.pageY - this.offsetTop - offsetTop;
    paint = true;
    addClick(mouseX, mouseY, size, color);
    redraw();
});
canvas.addEventListener('mousemove', function(e) {
    if (paint) {
        // addClick(e.pageX - this.offsetLeft, e.pageY -
        //     this.offsetTop, true);
        // версія для нашої розмітки
        addClick(e.pageX - this.offsetLeft - offsetLeft, e.pageY -
            this.offsetTop - offsetTop, size, color, true);
        redraw();
    }
});
canvas.addEventListener('mouseup', function(e) {
    paint = false;
});
canvas.addEventListener('mouseleave', function(e) {
    paint = false;
});

function addClick(x, y, size, color, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    sizeAr.push(size)
    colorAr.push(color);
}

function redraw() {
    context.clearRect(0, 0, context.canvas.width,
        context.canvas.height);
    context.lineJoin = "round";
    for (var i = 0; i < clickX.length; i++) {
        context.strokeStyle = colorAr[i];
        context.lineWidth = sizeAr[i];
        context.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
            context.moveTo(clickX[i] - 1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.stroke();
    }
}

function clearCanvas() {
    context.clearRect(0, 0, context.canvas.width,
        context.canvas.height);
    clickX = new Array();
    clickY = new Array();
    clickDrag = new Array();
    sizeAr = new Array();
    colorAr = new Array();
}

function changeSize() {
    size = document.getElementById("range").value;
    document.getElementById("point").width = size;
    document.getElementById("point").height = size;
}

function changeColor() {
    color = document.getElementById("palette").value;
}