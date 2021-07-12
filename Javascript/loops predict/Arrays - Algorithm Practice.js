var testArr = [6,3,5,1,2,4];

// print vals and sum
var sum=0;
for(let i=0; i<testArr.length; i++){
    sum+=testArr[i];
    console.log('val:', testArr[i], 'sum:', sum);
}

// Value * Position
for(let i=0; i<testArr.length; i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr);