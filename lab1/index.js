//write a function to take your name and print it with hello
function sayHello(name){
    console.log(`Hello ${name}`);
}

const sayHi=(name)=> {
    console.log(`Hi ${name}`);
}

sayHello("Anuj Sharma");
sayHi("Manju Sinha");


task.on('greet', sayHi);

task.emit('greet', 'Anuj Sharma');

task.once("greet",() => {
    console.log("system started ....");
});

task.off("exit", (name) => {
    console.log(`Goodbye ${name}`);