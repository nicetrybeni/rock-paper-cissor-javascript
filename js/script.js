function printZeroPaddWithLabel(number, label){
    let numberString = String(number);
    while (numberString.length < 3){
        numberString = "0" + numberString;
}
console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs){
    printZeroPaddWithLabel(cows, "Cows");
    printZeroPaddWithLabel(chickens, "Chicken");
    printZeroPaddWithLabel(pigs, "Pigs");
}
printFarmInventory(7, 11, 3);