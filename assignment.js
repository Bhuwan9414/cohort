//  1 :

// function sayhello() {
//     const str = "hello world"
//     console.log(str)
// }

// const ans = sayhello();
// console.log(ans);


//  2 :

// function doublenumber(a){
//     return a * 2
// }

// const ans = doublenumber(5)
// console.log(ans);


//  3 :

// function sum(a,b){
//     return a + b;
// }

// const ans = sum(5,4);
// console.log(ans);


//  4 :

// let doublenumber = (a) => {return a * 2}

// const ans = doublenumber(7)
// console.log(ans);


//  5 :

// function sub(a){
//     return a - 10;
// }

// const ans = sub(20)
// console.log(ans);


//  6 :

// function greater(a){
//     if(a>5){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(greater(2));


//  7 :

// function between(a){
//     if(a <= 10 && a > 1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(between(45))


//  8 :

// function iseven(a){
//     if(a % 2 == 0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }

// console.log(iseven(10))


//  9 :

// function checkage(age){
//     if(age >= 18){
//         return "adult";
//     }
//     else{
//         return "minor"
//     }
// }

// console.log(checkage(20))



//  10 :

function getdaytype(day){
    switch(day){
        case 1 :
       return "weekday";
       break;

       case 2 :
       return "weekday";
       break;

       case 3 :
       return "weekday";
       break;

       case 4 :
       return "weekday";
       break;

       case 5 :
       return "weekday";
       break;

       case 6 :
       return "weekend";
       break;

       case 7 :
       return "weekend";
       break;
    }
}

const ans = getdaytype(6);
console.log(ans);
