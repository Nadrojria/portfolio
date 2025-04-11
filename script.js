const globe = document.getElementById('globeId');

const myGlobe = new Globe(globe)
  .globeImageUrl("./images/basketball_sph.png")
  .backgroundColor("#b0dfdf")

myGlobe.controls().autoRotate = true;
myGlobe.controls().enableZoom = false;
myGlobe.controls().autoRotateSpeed = 2.3;
    
