let str = "madam";
let len = str.length;
for (let i = 0; i<len/2;i++){
    if (str[i] === str[len - 1 - i]) {
        console.log("polindrome");
    }else {
        console.log("it is not a polindrom");
    }
}

let ageInDays = 0;
function calcAge(age) {
    ageInDays = age>=0 ? age*365: undefined;
	return ageInDays;
}
calcAge(65);

calcAge(0);

calcAge(20);
console.log(ageInDays);

1.1 function lessThanOrEqualToZero(num) {
	return num <= 0;
	}
lessThanOrEqualToZero(5);

1.2 const lessThanOrEqualToZero = num => num <= 0;
let res = 0;
let num = 4;
    for (let i=1; i <=num;i++){

          res += i;
    }

        console.log(res);

var isPalindrome = function(x) {
    let a = String(x);
    console.log(a.length);
    let b = x.length;

    for(let i = 0;i<x.length/2;i++){
        if (x[i]===x[b - 1 -i]){
            console.log("true"); ;
        }else {
        console.log("false");
    }
}
}
isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;

for (let key in salaries){
 sum+= salaries[key];
  } 
    console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

for (let key in menu){
if (typeof menu[key] === "number"){
   menu[key] *= 2;
}
}
console.log(menu);