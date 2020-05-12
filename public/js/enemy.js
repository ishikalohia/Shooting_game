class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, id){

     super(scene, x, y, "enemy");
     scene.add.existing(this);

     scene.physics.add.existing(this);

     this.depth = 5;
     this.id = id;
     
     //self =  this;
  }
  shoot(){
    new Shot(this.scene, this.x, this.y, this.angle);
  }

}