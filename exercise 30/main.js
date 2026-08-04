function greet(name) {
    console.log("hellow, "+ name);
    
}
function call(callback) {
const name = prompt("please inter your name :");
 callback(name)
}
call(greet);