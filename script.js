const globe = document.querySelector('#globeId');

const myGlobe = new Globe(globe)
  .globeImageUrl("basketball_sph.png")
  .backgroundColor("rgb(189, 240, 240)")
  //.backgroundImageUrl("test.avif");

myGlobe.controls().autoRotate = true;
