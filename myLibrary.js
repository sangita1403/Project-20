function bounceOff()
{
    if (car.x - wall.x < wall.width/2 + car.width/2
      && wall.x - car.x < wall.width/2 + car.width/2) 
   {
   car.velocityX = car.velocityX * (-1);
   wall.velocityX = wall.velocityX * (-1);
   }
  if (car.y - car.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2)
    {
    car.velocityY = car.velocityY * (-1);
    wall.velocityY = wall.velocityY * (-1);
    }
}