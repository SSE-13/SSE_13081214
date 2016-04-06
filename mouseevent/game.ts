var humanContainer = new render.DisplayObjectContainer();
var head = new render.Bitmap();
var trunk = new render.Bitmap();
var left_leg = new render.Bitmap();
var right_leg = new render.Bitmap();
var left_arm = new render.Bitmap();
var right_arm = new render.Bitmap();
var human = new render.DisplayObjectContainer();

head.source = "tou.png";
trunk.source = "shenti.png";
left_leg.source = "zuojiao.png";
right_leg.source = "youjiao.png";
left_arm.source = "zuoshou.png";
right_arm.source = "youshou.png";

humanContainer.addChild(human)
human.addChild(head)
human.addChild(trunk)
human.addChild(left_leg)
human.addChild(right_leg)
human.addChild(left_arm)
human.addChild(right_arm)


var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["tou.png","shenti.png","zuojiao.png","youjiao.png","zuoshou.png","youshou.png"]);


class HumanBody extends Body {
    
    
    vx:number = 3;
    r = Math.PI/3;
    

    onTicker(duringTime: number) {
        this.x += duringTime * this.vx;
        this.rotation += duringTime * this.r; 

    }
}

var ticker = new Ticker();
var body = new HumanBody(humanContainer);

body.vx = 3;
body.x = 50;
body.y = 200; 
ticker.start([body]);


var eventCore = new events.EventCore();
eventCore.init();

var isHead = false;
var isLeg = false;

var HitTest = (localPoint:math.Point,displayObject:render.DisplayObject) =>{
    if(localPoint.x > 128  && localPoint.x <= 255 && localPoint.y > 0 && localPoint.y <= 120){
        isHead = true;
    }
    
    if(localPoint.x > 40 && localPoint.x < 170 && localPoint.y > 180 && localPoint.y < 310 
    || localPoint.x > 220 && localPoint.x < 350 && localPoint.y > 180 && localPoint.y < 310){
        isLeg = true;
    }
    return true;
}
var OnClick = () => {
    if(isHead && !isLeg){
        body.vx *= -1;
        body.r *= -1;
        isHead = false;
        }
        
     if(isLeg && !isHead){
        body.x = 50;
        body.y = 200; 
        body.vx = 0;
        body.r = 0;
        body.rotation = 0;
    }
    
    if(isHead && isLeg) {
        body.vx = 3;
        body.x = 50;
        body.y = 200; 
        body.r = Math.PI/3;
        isLeg = false;
        isHead = false;
        }
    
    
}


eventCore.register(head,HitTest,OnClick);










