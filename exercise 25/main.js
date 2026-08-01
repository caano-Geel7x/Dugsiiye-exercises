 const arry1 =[ 1, 2, 3,]
 const arry2 = [...arry1 , 4 , 5, 6,]
 console.log(arry2);
 
function total(...Numbers){
    return Numbers.reduce((multiply,Num)=>multiply * Num, 1);
}
console.log(total(5,2,10));


