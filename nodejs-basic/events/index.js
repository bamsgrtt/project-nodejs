const { EventEmitter } = require('events');


const birtdayEventListener = (name) => {
    console.log(`Happy birtday ${name}!`);
}

const myEmitter = new EventEmitter;

myEmitter.on('birtday', birtdayEventListener);

myEmitter.emit('birtday', 'Bambang');
