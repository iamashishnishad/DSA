///Traverse the array and print the sum of all the elements in the array

// const arr = [10, 20, 30, 40, 50];


/// Using the forEach

// arr.forEach((value, index) => {
// 	console.log(`the value of the ${value} and index of the element ${index}`)
// })


// for(i=0; i<arr.length; i++){
// 	console.log(`index of the array ${i} and value of the array ${arr[i]}` )
// }

// The for...of loop iterates over the array’s values.


// for (const value of arr){
//     console.log(`value of the array ${value}`)
// }


// Find the Sum of All Elements:


// let sum =0;

// for(i=0; i<arr.length; i++){
//     sum += arr[i];
// }

// console.log(`sum of the all element ${sum}`)


// Search for an Element:


// let key = 30;

// for (i =0; i<arr.length; i++){
//     if(arr[i]==key){
        
//         console.log(`we found the element ${arr[i]} and key ${key} and  index ${i}`)
//         break;
//     }
// }


// Modify Each Element:


// for(i=0; i<arr.length;  i++){
//     arr[i] *= 2
// }


// console.log(`modification of the number ${arr}`)



const arr = [10, 20, 30, 40, 50];


if(arr.length == 0){
    return largest =null; smallest = null; 
}


let largest = arr[0];
let smallest = arr[0];


for(i=0; i<arr.length; i++){

if(arr[i]>largest){
    largest = arr[i];
}
else if(arr[i]<smallest){
    smallest =  arr[i]
}
}

console.log(`largest number in the array ${largest}`)   
console.log(`smallest number in the array ${smallest}`)

// 1.	Find the largest/smallest element in an array.



