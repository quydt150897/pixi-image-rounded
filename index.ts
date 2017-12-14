import { Application, loader, Sprite } from "pixi.js";

//Create a Pixi Application
let app = new Application({ 
    width: 256, 
    height: 256,                       
    antialias: true, 
    transparent: false, 
    resolution: 1,
    forceCanvas: true,
  }
);
loader.add("twitt.png").add("twitt.png").load(setup);;
function setup() {
    //This code will run when the loader has finished loading the image
    let sprite = new Sprite(
        loader.resources["twitt.png"].texture
    );
    app.stage.addChild(sprite);
}

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);