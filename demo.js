// // Circle dia circum area


// var pie = 3.14;
// var r = 4;
// var d = 2*r;
// console.log("diameter is: "+d);
// var z= pie*d; 
// console.log("circumference is: "+z);
// var a = pie*r*r;
// console.log("area is: "+a);


// // simple interest


// let P=10000;
// let R=12;
// let T=1;
// let I= (P*R*T)/100;
// console.log(I);


// // Leap Year


// let x=2005;
// if ((x%400===0) || (x%4===0 && x%100!=0))
// {
//     console.log(x+" is a leap year");
// }
// else{
//     console.log(x+" is not a leap year");
// }


// // palindrome


// function isPalindrome(str) {
// 	let j = str.length - 1
// 	for (let i = 0; i < str.length / 2; i++) {
// 		if (str[i] != str[j]) {
// 			return false;
// 		}
// 		j--;
// 	}
// 	return true;
// }

// let str1 = "racecar";
// let str2 = "nitin";
// let str3 = "1221";
// let str4 = "11612611";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));
// console.log(isPalindrome(str4));


// // Alphabet Check


// function isAlphabet(char) {
//     let isAlphabet = (/[a-zA-Z]/).test(char);

//     let message = isAlphabet?  "The character is an alphabet." : "The character is not an alphabet.";

//     console.log(message);
// }

// let testChar = '12a';
// isAlphabet(testChar);


// // Arrow Function


// console.log(add(5,2));

// let add= ()=>{
//     return true;
// }
// console.log(add());


// // Celsius to Farenheit


// function toCelsius(f) {
//     return (5 / 9) * (f - 32);
// }

// let value = toCelsius(98.6);
// console.log(value);


// // Value change

// let a=10;
// let b=20;

// let c=a;

// a=b;
// b=c;

// console.log("a="+a,"b="+b);


// // Prime Numbers

// let n,i,flag;
// flag=1;
// i=2;
// n=21;
// while(i<n/2){
//     if (n%i==0){
//         flag=0;
//         console.log(n + " is not a prime number");
//         break;
//     }
//     else{
//         i++;
//     }
// }
//     if (flag==1){
//         console.log(n + " is a prime number");
//      }


// // Prime nos b/w 2 intervals



// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// function displayPrimeNumbers(start, end) {
//     console.log(`Prime numbers between ${start} and ${end}:`);
//     for (let i = start; i <= end; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// const startInterval = 1;
// const endInterval = 10000000;
// displayPrimeNumbers(startInterval, endInterval);





// // Higher Order Function

// const radius=[2,4,6];

// // logic to calculate area
// const area = function(radius){
//     return Math.PI * radius * radius;
// }

// // logic to calculate diameter
// const diameter = function(radius){
//     return 2 * radius;
// }

// // logic to calculate circumference
// const circum = function(radius){
//     return 2 * Math.PI * radius;
// }

// const calculate = function(radius, logic){ 
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }
// console.log(calculate(radius, area));
// console.log(calculate(radius, diameter));
// console.log(calculate(radius, circum));



// let products=[
//     {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
//     {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
//     {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
//     {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
//     {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
// ]


// // 1. print product name only

// let product= products.map(product=>product.pName);
// console.log(product);

// //2. print all mobile details whose display is lcd

// let product1= products.filter(product1=>product1.display==='lcd');
// console.log(product1);

// //3. print 5g mobile phone name

// let product2= products.filter(k=>k.band=='5g');
// product2.forEach((k)=>console.log(k.pName));

// //4. filter mobile based on price


// let minPrice = 0;
// let maxPrice = 1300;

// let product3 = products.filter(product3=> product3.price >= minPrice && product3.price <= maxPrice);

// product3.forEach((product3)=>console.log(product3.pName));

// //5. costly mobile

// let CostlyProduct = products.reduce((minPriceProduct, currentProduct) => {
//     return (currentProduct.price > minPriceProduct.price) ? currentProduct : minPriceProduct;
// }, products[0]);

// console.log("Costly mobile: ", CostlyProduct.pName);


// //6. low cost mobile

// let lowCostProduct = products.reduce((minPriceProduct, currentProduct) => {
//     return (currentProduct.price < minPriceProduct.price) ? currentProduct : minPriceProduct;
// }, products[0]);

// console.log("Low cost mobile: ", lowCostProduct.pName);


data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
]


// //1. district having Highest +ve case

// let Highest= data.reduce((min, current) => {
//     return (current.data[2] > min.data[2]) ? current : min;
// }, data[0]);

// console.log("Highest +ve case: ", Highest.data[2]);


let secondIndexValues = data.map(item => item[2]);

// Finding the maximum value from the extracted values
let highestValue = Math.max(...secondIndexValues);

console.log("Highest value from the second index:", highestValue);