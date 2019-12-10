<<<<<<< HEAD
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var W = window.screen.width;
var H = window.screen.height;
canvas.width = W;
canvas.height = H;
var fontSize = 16;
var colunms = Math.floor(W / fontSize);
var drops = [];
for (var i = 0; i < colunms; i++) {
    drops.push(0);
}

var str = "10";
function draw() {
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0, 0, W, H);
    context.font = "700 " + fontSize + "px  微软雅黑";
    context.fillStyle = "#00cc33";
    for (var i = 0; i < colunms; i++) {
        var index = Math.floor(Math.random() * str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if (y >= canvas.height && Math.random() > 0.99) {
            drops[i] = 0;
        }
        drops[i]++;
    }
};
draw();
setInterval(draw, 30);

document.ondragstart = document.onselectstart = document.oncontextmenu = document.onkeydown = function (e) {
    if (e && e.stopPropagation) {
        e.stopPropagation()
    } else {
        window.event.cancelBubble = true
    }
    if (e && e.preventDefault) {
        e.preventDefault()
    } else {
        window.event.returnValue = false
    }
    return false
=======
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var W = window.screen.width;
var H = window.screen.height;
canvas.width = W;
canvas.height = H;
var fontSize = 16;
var colunms = Math.floor(W / fontSize);
var drops = [];
for (var i = 0; i < colunms; i++) {
    drops.push(0);
}

var str = "10";
function draw() {
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0, 0, W, H);
    context.font = "700 " + fontSize + "px  微软雅黑";
    context.fillStyle = "#00cc33";
    for (var i = 0; i < colunms; i++) {
        var index = Math.floor(Math.random() * str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if (y >= canvas.height && Math.random() > 0.99) {
            drops[i] = 0;
        }
        drops[i]++;
    }
};
draw();
setInterval(draw, 30);

document.ondragstart = document.onselectstart = document.oncontextmenu = document.onkeydown = function (e) {
    if (e && e.stopPropagation) {
        e.stopPropagation()
    } else {
        window.event.cancelBubble = true
    }
    if (e && e.preventDefault) {
        e.preventDefault()
    } else {
        window.event.returnValue = false
    }
    return false
>>>>>>> f88e312724ddd6e17d7f4b3e44d30cb7c0f513d7
}