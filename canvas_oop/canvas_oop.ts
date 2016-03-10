/**
 * 基类，负责处理x,y,rotation 等属性
 */ 
class DisplayObject {

    x = 0;

    y = 0;

    rotation = 0;

    draw(context: CanvasRenderingContext2D) {
        context.save();
        context.rotate(this.rotation);
        context.translate(this.x, this.y);
        this.render(context);

        context.restore();
    }

    render(context: CanvasRenderingContext2D) {

    }

}

class Bitmap extends DisplayObject {


    source;

    render(context: CanvasRenderingContext2D) {

        var image = imagePool[this.source];
        if (image) {
            context.drawImage(image, 0, 0);
        }
        else {
            context.font = "20px Arial";
            context.fillStyle = '#000000';
            context.fillText('错误的URL', 0, 20);
        }
    }

}

class Rect extends DisplayObject {

    width = 100

    height = 100;

    color = '#FF0000';

    render(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.width, this.height);
    }
}

class TextField extends DisplayObject {


    filltext = '仿游戏王ygocore游戏界面';
    font = "20px Arial";
    color = '#000000';

    render(context: CanvasRenderingContext2D) {
        context.font = this.font;
        context.fillStyle = this.color;
        context.fillText(this.filltext, 0, 20);
    }
}

function drawQueue(queue) {
    for (var i = 0; i < renderQueue.length; i++) {
        var displayObject: DisplayObject = renderQueue[i];
        displayObject.draw(context);
    }
}

var imagePool = {};

function loadResource(imageList, callback) {
    var count = 0;
    imageList.forEach(function(imageUrl) {
        var image = new Image();
        image.src = imageUrl;
        image.onload = onLoadComplete;
        image.onerror = onLoadError;

        function onLoadComplete() {
            imagePool[imageUrl] = image;
            count++;
            if (count == imageList.length) {
                callback();
            }
        }
        
        function onLoadError(){
            alert('资源加载失败:' + imageUrl);
        }
    })
}


var canvas: HTMLCanvasElement = document.getElementById("game") as HTMLCanvasElement;
var context = canvas.getContext("2d");


var rect = new Rect();
rect.width = 248;
rect.height = 6;
rect.x = 118;
rect.y = 257;
rect.color = '#dee5ef'


var rect2 = new Rect();
rect2.width = 250;
rect2.height = 8;
rect2.x = 117;
rect2.y = 256;
rect2.color = '#7aa7d4'


var text = new TextField();
text.x = 10;


var text2 = new TextField();
text2.x = 289;
text2.y = 270;
text2.filltext = "——13081214";
text2.font = "2px Arial";
text2.color = "#575757"


var bitmap = new Bitmap();
bitmap.source = 'bg.jpg';
bitmap.x=10;
bitmap.y=40;

var bitmap2 = new Bitmap();
bitmap2.source = 'bg2.jpg';
bitmap2.x=117;
bitmap2.y=40;

var bitmap3 = new Bitmap();
bitmap3.source = 'capitulate.png';
bitmap3.x=83;
bitmap3.y=42;

var bitmap4 = new Bitmap();
bitmap4.source = 'menu.png';
bitmap4.x=10;
bitmap4.y=136;

var bitmap5 = new Bitmap();
bitmap5.source = 'effect.png';
bitmap5.x=10;
bitmap5.y=147;

var bitmap6 = new Bitmap();
bitmap6.source = 'phase.png';
bitmap6.x=225;
bitmap6.y=148;

var bitmap7 = new Bitmap();
bitmap7.source = 'cardpic.png';
bitmap7.x=10;
bitmap7.y=40;


//渲染队列
//var renderQueue = [rect, rect2, text,bitmap,bitmap2];
var renderQueue = [text,bitmap,bitmap2,bitmap3,bitmap4,bitmap5,bitmap6,bitmap7,rect2,rect,text2];
//资源加载列表
var imageList = ['bg.jpg','bg2.jpg','capitulate.png','menu.png','effect.png','phase.png','cardpic.png'];

//先加载资源，加载成功之后执行渲染队列
loadResource(imageList, function() {
    drawQueue(renderQueue);
})


