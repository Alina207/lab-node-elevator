const Elevator = require('./elevator.js');
const Person = require('./person.js');

const myElevator = new Elevator();

const Alina = new Person('Alina', '1', '2');
const Cynthia = new Person('Cynthia', '2', '3');
const Tommy = new Person('Tommy', '3', '4');
const Chuckie = new Person('Chuckie', '4', '5');
const Angelica = new Person('Angelica', '5', '6');
const Stew = new Person('Stew', '6', '7');

myElevator.floorUp(); // 1
myElevator.floorUp(); // 2
myElevator.floorUp(); // 3
myElevator.floorUp(); // 4
myElevator.floorUp(); // 5
myElevator.floorUp(); // 6
myElevator.floorUp(); // 7
myElevator.floorUp(); // 8
myElevator.floorUp(); // 9
myElevator.floorUp(); // 10
myElevator.floorUp(); // 11
myElevator.floorDown(); // 10
myElevator.floorDown(); // 9
myElevator.floorDown(); // 8
myElevator.floorDown(); // 7
myElevator.floorDown(); // 6
myElevator.floorDown(); // 5
myElevator.floorDown(); // 4
myElevator.floorDown(); // 3
myElevator.floorDown(); // 2
myElevator.floorDown(); // 1
myElevator.floorDown(); // 0


/*
myElevator.call(Alina);
myElevator.call(Cythia);
myElevator.call(Tommy);
myElevator.call(Chuckie);
myElevator.call(Angelica);
myElevator.call(Stew); */
