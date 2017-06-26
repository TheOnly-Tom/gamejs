/*
main.js
GameJs 
https://github.com/TheOnly-Tom/gamejs/
*/
var VERBOOSE = true;

var gamePlayer = {
  create: function(parentNode, height, width, tick) {
    this.parent = parentNode;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.height = height;
    this.width = width;
    this.tick = tick;
    this.running = 0;
    
    this.canvas.height = this.height;
    this.canvas.width = this.width;
    this.parent.appendChild(this.canvas);
    if (VERBOOSE) {
      console.log("gamePlayer created.",this.parent,this.canvas,this.ctx,this);
    }
  },
  loop: function() {
    this.ctx.clearRect(0,0,this.width,this.height);
  },
  start: function() {
    this.running = setInterval(this.loop,this.tick);
    if (VERBOOSE) {
      console.log("gamePlayer started.",this);
    }
  },
  end: function() {
    clearInterval(this.running);
    this.running = 0;
  },
  OBJECTS: []
};

var gameObject = {
  create: function(player, x, y, width, height) {
    
  }
};
