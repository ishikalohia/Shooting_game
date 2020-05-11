var window_height = window.innerHeight;
var window_width = window.innerWidth;

var config = {
	type: Phaser.AUTO,
	width: window_width,
	height: window_height,
	backgroundColor: '#000000',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 0,
			},
			fps: 60,
		}
	},

	scene: {
		preload: preload,
		create: create,
		update: update,

	}
} 

var game = new Phaser.Game(config);
var player;
var player_init = false;
function preload(){
	this.load.image('player', 'public/img/player.png');
	this.load.image('bullet', 'public/img/bullet.png');
}

function create(){
	this.io = io();

	self = this;
	this.io.on('actualPlayer', function(players){
		Object.keys(players).forEach(function(id){
			if(players[id].player_id == self.io.id){
				//alert("we are in the array");
				createPlayer(self, players[id].x, players[id].y);
			}else{

			}
		});
	});
	//new Player(this, 500, 500);
}

function update(){
	if (this.player_init == true) {
        this.player.update();
    }
}

function createPlayer(scene, x, y) {
	scene.player_init = true; 
    scene.player = new Player(scene, x, y);
}