function Collision(Object1,Object2,Object3,Object4){
    if(Object1.x - Object2.x < Object2.width/2 + Object1.width/2
      && Object2.x - Object1.x < Object1.width/2 + Object2.width/2){
        Object1.velocityX = 0;
      }
       
      if(Object3.x - Object4.x < Object4.width/2 + Object3.width/2
        && Object4.x - Object3 < Object3.width/2 + Object4.width/2){
          Object3.velocityX = 0;
        }
  }