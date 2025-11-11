class Mover {
  constructor(m) {
    this.mass = m; 
    this.position = createVector(random(width), random(height)); 
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass); 
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration); 
    this.position.add(this.velocity);
    this.acceleration.mult(0); 
  }

  show() {
    let r = this.mass * 12; 
    
    let hue = map(this.mass, 0.5, 2, 200, 300);
    fill(hue, 80, 90, 80); 
    stroke(hue, 50, 70);
    strokeWeight(2);
    ellipse(this.position.x, this.position.y, r, r * 1.3); 
  }
}