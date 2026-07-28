//write a function to take your name and print it with hello
function sayHello(name){
    console.log(`Hello ${name}`);
}

const sayHi=(name)=> {
    console.log(`Hi ${name}`);
}

const findSum=(a,b)=>{
    return a+b;
};
const sum=(a,b)=>a+b;

sayHello("Anuj Sharma");
sayHi("Manju Sinha");
console.log(findSum(5, 10));
console.log(sum(5, 10));


task.on('greet', sayHi);

task.emit('greet', 'Anuj Sharma');

task.once("greet",() => {
    console.log("system started ....");
});

task.off("exit", (name) => {
    console.log(`Goodbye ${name}`);
});