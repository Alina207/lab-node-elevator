class Elevator { // For the logic of the elevator: accepting requests, moving up or down, etc.
  constructor(){
    this.direction = "up";
    this.currentFloor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
  }

  start() {
    var clear = setInterval(() => this.update(), 1000);
  } // should start a `setInterval` call the `update` function every second

  stop() {
    clearInterval(clear);
  } // should stop the elevator's `setInterval` listening for requests

  update() {
    this.log(); // should (for now) display the current status of the elevator by calling the `log` function.
  }
  log() { // should print the info related to position & direction
    console.log('Direction:' + this.direction + ' | Current Floor: ' + this.currentFloor);
  }

  floorUp() { // update the current floor by incrementing it by one. (But not above the top floor.)
    this.direction = "up";
    if (this.currentFloor < this.MAXFLOOR) {
      this.currentFloor +=1;
    } else {
      console.log("This is the top floor");
    }
    this.update();
  }

  floorDown() { // update the current floor by subtracting one from the current floor. (But not below the ground floor.)
    this.direction = "down";
    if (this.currentFloor > 0) {
      this.currentFloor -=1;
    } else {
      console.log("This is the bottom floor");
    }
    this.update();
  }

  _passengersEnter() { }

  _passengersLeave() { }

  call() {
    this.requests[Person]; // what happens when a person ‘calls’ the elevator; should receive a person object & add it as a request into elevator’s queue.
  }
}

module.exports = Elevator;
