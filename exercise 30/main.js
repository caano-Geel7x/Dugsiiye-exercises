function operate(a,b, callback) {
    return callback(a,b);
}

function multiply (a,b){
 return  a * b; 
}
function divide (a,b){
 return  a / b; 
}


 console.log(operate (5,4, multiply));
 console.log(operate (20,4, divide));
 