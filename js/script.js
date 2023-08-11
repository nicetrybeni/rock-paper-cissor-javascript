function power1(base, exponent){
    if(exponent == 0){
        return 1;
    }else{
        return base * power1(base, exponent - 1); 
    }
}
console.log(power1(2,3))

function power2(base, exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power2(2,3));