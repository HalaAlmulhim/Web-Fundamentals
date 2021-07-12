//Get 1 to 255

function buildArr(){
    var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
    }
    return arr;
}
var result = buildArr();
console.log(result);
//.........................

//Get even 1000
function getSum(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++){
        if (i % 2 == 0){
            sum = sum + i;
        } 
    }
    return sum;
}
console.log(getSum());
//.....................................

//Sum odd 5000- odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function getSumOdd(){
    var sum = 0;
    for (var i = 1; i <= 5000; i+=2){
        if (i % 2 == 1){
            sum = sum + i;
            console.log(i);
        }
    }
    return sum;
}
console.log(getSumOdd());
//...................................

//Iterate an array - returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function iterate(numArr){
    var sum = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    return sum;
}
console.log(iterate([1,2,4]));
//...................................

//Find max - returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(numArr){
    var max = numArr[0]; 
    for (var i = 0; i < numArr.length; i++){ 
        if (numArr[i] > max){
            max = numArr[i];
        }
    }
    return max;
}
console.log(findMax([-3,-5,-6,-2]));
//............................................

//Find average - returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAvg(numArr){
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    avg = sum / numArr.length;
    return avg;
}
console.log(findAvg([1,3,5,7,20]));
//...............................................

//Array odd -  return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function oddArray(){
    var arr = [];
    for (var x = 1; x < 50; x+=2){
        arr.push(x);
    }
    return arr;
}
oddArray();
//.............................................................

/*Greater than Y - returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, 
your function will return 2.(There are two values in the array greater than 3, which are 5, 7).*/
function greaterThanY(arr, y){
    var counter = 0;
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] > y){
            counter++;
        }
    }
    return counter;
}
console.log(greaterThanY([1,3,5,7], 2));
//................................................

/*Squares-  write a function that replaces each value in the array with the value squared by itself.
(e.g. [1,5,10,-2] will become [1,25,100,4])*/
function squares(arr){
    for (var idx = 0; idx < arr.length; idx++){
        arr[idx] = arr[idx]*arr[idx];
    }
}
squares([1, -2, 5, 10]);
//..........................................

/*Negatives - write a function that replaces any negative numbers within the array with the value of 0.
When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])*/
function noNegatives(arr){
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] < 0){
            arr[idx] = 0;
        }
    }
    console.log(arr);
}
noNegatives([-1,2,-5]);
//....................................................

/*Max/Min/Avg - write a function that returns a new array that only contains the maximum, minimum,
and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])*/
function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var idx = 0; idx < arr.length; idx++){
        sum = sum + arr[idx];
        if (arr[idx] > max){
            max = arr[idx];
        }
        else if (arr[idx] < min){
            min = arr[idx];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);

    return newArr;
}
console.log(maxMinAvg([2,10,-3,4]));
//......................................................

/*Swap Values -  Write a function that will swap the first and last values of any given array. 
The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).*/
function swap(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}
var tester = [1,4,10,-2];
swap(tester);
console.log(tester);
//........................................

/* Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. 
(e.g. [1,5,10,-2] will become [-2,5,10,1]).*/
function noNegativesDojo(arr){
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] < 0){
            arr[idx] = "Dojo";
        }
    }
    console.log(arr);
}
noNegativesDojo([-1,2,-5]);