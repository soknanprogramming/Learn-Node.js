const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
    console.log(`Order-pizza! Baking a ${size} pizza with ${topping}`);
});
emitter.on("order-pizza", size => {
    if(size === "large"){
        console.log("Serving complimentary drink");
    }
});

emitter.emit("order-pizza", "large", "mushrooms");
