let movers = [];

function setup() {
  createCanvas(350, 600);
  colorMode(HSB, 360, 100, 100, 100); 

  for (let i = 0; i < 5; i++) {
    movers[i] = new Mover(random(0.5, 2)); 
  }
}


function draw() {
  background('#C5E2FF');
  let buoyancy = createVector(0, -0.02); 
  let wind = createVector(random(-0.01, 0.01), 0); 

  for (let mover of movers) {
    mover.applyForce(buoyancy);
    mover.applyForce(wind); 

    mover.update();
    mover.show();
    mover.pass();
  }  
}

// 수정 전 (buoyancy, wind 적용 전)
// function draw() {
//   background(220);
//   for (let mover of movers) {
//     mover.update();
//     mover.show();
//     mover.pass();
//   }  
// }
