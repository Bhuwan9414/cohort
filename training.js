// console.log("bhuwan")

// alert("alert")

// let firstname = 20;

// console.log(firstname);

// types of datatype :
//  1 : primitive data types : string, boolean, number, undefined, symbol, bigint.
//  2 : reference or object type datatype : arrays, object, daye and null.


// array : in javascript array is collection of multiple data types.

// let arr = {};

// let a=prompt("enter a")
// console.log(a);
// let b = prompt("enter b")
// console.log(b);

//  let arr = [5,4,2,6];

//  console.log(arr.reverse());

//  console.log(arr.includes());

//  console.log(arr.sort());
 
 
// let arr1 = [10,20,30];
// let arr2 = [40,50,60];

// console.log(arr1.concat(arr2));

// let arr = [1,2,3,4,5]

// arr.forEach(element => {
//     console.log(element);

// });


// let arr1 = [1,2,3,4,5]
// let arr2 = arr1.map(myfunction);

// function myfunction(value, index, array){
//     return value * 2;
// }


// normal method to mutltiply the array by 2 :


// const inputarr = [1,2,3,4,5]

// const newarray = [];

// for(let i=0;i<inputarr.length;i++){
//     newarray.push(inputarr[i] * 2)
// }

// console.log(newarray);



//  map :

// const arr = [1,2,3,4,5]

// function transform(i){
//     return i*2;
// }

// const ans = arr.map(transform);

// console.log(ans);


// const arr = [1,2,3,4,5];

// function transform(i){
//     return i * 2;
// }


// const ans = arr.map(arr,transform);

// console.log(ans);


// function mymap(arr, transform){
//  const result = [];
 
//  for(let i=0;i<arr.length;i++){
//     result.push(transform(arr[i], i, arr))
//  }
//  return result;
// }

// const arr = [1,2,3,4,5];

// function transform(i){
//     return i*2
    
// }

// const ans = mymap(arr,transform);

// console.log(ans);


// let obj1 = {
//     firstname: "Bhuwan",
//     lastname : "suthar"

// }

// let obj2 = {
//     address : "udaipur",
//     gender : "male"
// }

// let obj3 = {...obj1,...obj2};
// console.log(obj3);


// function busyWait(ms) {
//     return new Promise((resolve) => {
//         const start = Date.now();  // Get the current time
//         let now = start;
        
//         // Busy wait: Keep looping until the specified time has passed
//         while (now - start < ms) {
//             now = Date.now();  // Update the current time in each iteration
//         }

//         // Once the loop completes, resolve the promise
//         resolve();
//     });
// }

// // Example usage:
// console.log('Before wait');
// busyWait(3000).then(() => {
//     console.log('Waited for 3 seconds');
// });
// console.log('After wait');



function wait1(t1){
    return new Promise(function(resolve,reject){
        setTimeout()
    })
}

function wait1(t1){
    
}

function wait1(t1){
    
}

function calculateTime(t1,t2,t3){

}