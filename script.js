/***DARK MODE****
******************/
const toggle = document.getElementById('toggle-dark-mode');

toggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains('dark-mode');
  toggle.textContent = isDark ? '☀️' : '🌙';
  
  if (typeof myGlobe !== 'undefined') {
    myGlobe.backgroundColor(isDark ? "#303030" : "#b0dfdf");
  }
});


/****GLOBE MAIN****
******************/
const globe = document.getElementById('globeId');

const myGlobe = new Globe(globe)
  .globeImageUrl("./images/basketball_sph.png")
  .backgroundColor("#b0dfdf");

myGlobe.controls().autoRotate = true;
myGlobe.controls().enableZoom = false;
myGlobe.controls().autoRotateSpeed = 2.3;

const markers = [
  { lat: 34.0522, lng: -118.2437, label: "Home page", target: "page1" },
  { lat: 45.75, lng: 4.85, label: "Skills", target: "page2" },
  { lat: 13.7563, lng: 100.5018, label: "Projects", target: "page3" },
  { lat: 35.6762, lng: 139.6503, label: "Contact", target: "page4" }
];

// Add markers
myGlobe
  .pointsData(markers)
  .pointLat(d => d.lat)
  .pointLng(d => d.lng)
  .pointAltitude(0.1)       
  .pointColor(() => 'orange')      
  .pointRadius(1);               

// Add labels HTML on top markers
myGlobe
  .htmlElementsData(markers)
  .htmlLat(d => d.lat)
  .htmlLng(d => d.lng)
  .htmlAltitude(0.1)
  .htmlElement(d => {
    const labelTitle = document.createElement('div');
    labelTitle.innerText = d.label;
    labelTitle.style.color = 'black';
    labelTitle.style.background = 'white';
    labelTitle.style.padding = '4px 8px';
    labelTitle.style.borderRadius = '6px';
    labelTitle.style.fontSize = '20px';
    labelTitle.style.fontFamily = '"Patrick Hand", cursive';
    labelTitle.style.pointerEvents = 'auto';

    labelTitle.addEventListener('click', () => {
      const section = document.getElementById(d.target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
    
    return labelTitle;
  });
   