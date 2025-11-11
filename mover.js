class Mover {
  constructor(m) {
    this.mass = m; 
    this.position = createVector(random(width), random(height)); 
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

    update() {
    this.velocity.add(this.acceleration); 
    this.position.add(this.velocity);
    this.acceleration.mult(0); 
  }
}