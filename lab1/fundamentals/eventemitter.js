import {EventEmitter} from "node:events";

const sayHi=(name)=> {
    console.log(` ${name} logged in`);
};

const task = new EventEmitter();

task.once("greet", ()=>{
    console.log("system started");
});

task.once("exit",(name)=>{
    console.log(`system shutdown by ${name}`);
});

task.on('greet', sayHi);

task.on("greet",(name)=>{
    console.log(`${name} starts working`);
});

task.on("greet", (name) => {
  console.log(`${name} Logged out`);
});

task.emit('greet', 'Anukriti');
task.off("greet", sayHi);
task.emit("greet", "Akriti");
task.emit("exit", "Anukriti");
task.getMaxListeners();
console.log("total listener", task.listenerCount("greet"));
task.removeAllListeners("greet");