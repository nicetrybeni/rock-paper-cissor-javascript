function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(10);
console.log(twice(10));
