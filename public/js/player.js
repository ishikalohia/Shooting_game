class Player extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y){

     super(scene, x, y, "player");
     scene.add.existing(this);

     scene.physics.add.existing(this);

     this.player_speed = 600;
     this.depth = 5;

     this.setInteractive();
     this.setCollideWorldBounds(true);

     self =  this;
     this.keyUp = scene.input.keyboard.addKey('up');
     this.keyDown = scene.input.keyboard.addKey('down');
     this.keyLeft = scene.input.keyboard.addKey('left');
     this.keyRight = scene.input.keyboard.addKey('right');

     scene.input.on("pointermove", function(pointer){
		this.angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.x, this.y, pointer.x, pointer.y);
		this.setAngle(this.angle);
     }, this);
     scene.input.keyboard.on('keydown-F', function(){
     		var a = new Shot(self.scene, self.x, self.y, self.angle);
     });
  }
  update(){
  		this.setVelocity(0, 0);

  		if(this.keyUp.isDown){
  			this.setVelocityY(this.player_speed *-1);
  		}else if(this.keyDown.isDown){
  			this.setVelocityY(this.player_speed);
  		}
  		if(this.keyRight.isDown){
  			this.setVelocityX(this.player_speed);
  		}else if(this.keyLeft.isDown){
  			this.setVelocityX(this.player_speed* -1);
  		}
  }


}