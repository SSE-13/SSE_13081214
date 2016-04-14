
import * as fs from 'fs';




function readFile() {
    var map_path = __dirname + "/map.json"
    var content = fs.readFileSync(map_path, "utf-8");
    var obj = JSON.parse(content);
    var mapData = obj.map;
    return mapData;
}

var map = new Array();

function createMapEditor() {
    var world = new editor.WorldMap();
    var rows = mapData.length;
    var cols = mapData[0].length;

    for(var row = 0; row <rows; row++) {
           map[row] = new Array();
           
        for(var col= 0; col <cols; col++){
            
            var tile = new editor.Tile();
            tile.setWalkable(mapData[row][col]);
            map[row][col] = mapData[row][col];
            tile.x = col * editor.GRID_PIXEL_WIDTH;
            tile.y = row * editor.GRID_PIXEL_HEIGHT
            tile.ownedCol = col;
            tile.ownedRow = row;
            tile.width = editor.GRID_PIXEL_WIDTH;
            tile.height = editor.GRID_PIXEL_HEIGHT;
            world.addChild(tile);

            eventCore.register(tile, events.displayObjectRectHitTest, onTileClick);  
        }
    }
    
    
    return world;

}

function Save() {
    
    var save = new render.DisplayObjectContainer();
    
    var bg = new render.Rect();
    bg.width = 55;
    bg.height = 30;
    bg.color = '#FFFF00';
    
    var title = new render.TextField();
    title.filltext = 'SAVE';
    
    save.addChild(bg);
    save.addChild(title);
    
    eventCore.register(save, events.displayObjectRectHitTest, onSaveClick);
       
    return save;
    
}
    
    
 

function onTileClick(tile: editor.Tile) {
    
    
    switch (tile.color) {
                case '#FF0000':
                    tile.setWalkable(1);
                    break;
                case '#0000FF':
                    tile.setWalkable(0);
                    break;
            
                default:
                    break;
            }
    map[tile.ownedRow][tile.ownedCol] = tile.num;
            
     
}



function onSaveClick(){

    var json = {"map":[map[0], map[1], map[2], map[3]]};
    var obj = JSON.stringify(json);
    var map_path = __dirname + "/map.json";
    fs.writeFile(map_path, obj, function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
    
    
    
   
    
}



var mapData = readFile();

var renderCore = new render.RenderCore();
var eventCore = new events.EventCore();
eventCore.init();

var whole = new render.DisplayObjectContainer();
whole.width = 600;
whole.height = 600;
whole.x = 0;
whole.y = 0;

var editor = createMapEditor();
editor.x = 100;

var s = Save();

whole.addChild(editor);
whole.addChild(s);

renderCore.start(whole);

