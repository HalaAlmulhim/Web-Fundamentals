/* Print odds 1-20
Print out all odd numbers from 1 to 20
The expected output will be:*/

for(let i=1; i<20; i+=2){
    console.log(i);
}

/* Sum and Print 1-5
Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
 The expected output will be: */
let sum=0;
for(let i=1; i<=5; i++){
    sum+=i;
    console.log("Num:", i, "Sum:", sum);
}