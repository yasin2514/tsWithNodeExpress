// built - in - module

//event emitter module
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

//listener-1
myEmitter.on("birthday", (name) => {
  console.log(`Happy Birthday to you ${name}`);
});

//listener-2
myEmitter.on("birthdayGift", (gift) => {
  console.log(`I will send you ${gift} this gift`);
});

//call the event
myEmitter.emit("birthday",'Yasin');
myEmitter.emit("birthdayGift",'Bike');