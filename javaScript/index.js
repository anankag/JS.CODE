let count = 0;
function charCount(string, str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === string) {
      ++count;
    }
  }
  return count;
}

charCount("a", "edabit");
charCount("c", "chamber of secrets");
charCount("b", "big fat bubble");

let res_ = "";
function highestDigit(number) {
  number = number.toString();
  res_ = number[0];
  for (let i = 0; i < number.length; i++) {
    if (number[i] > res_) {
      _res = number[i];
    }
  }
  return res_;
}

highestDigit(379);
highestDigit(2);
highestDigit(377401);

let _res = 0;
function findPerimeter(length, width) {
  _res = 2 * (length + width);
  return _res;
}

findPerimeter(6, 7);
findPerimeter(20, 10);
findPerimeter(2, 9);



let sum = 0;
function calcLength(string) {
  for (let i = 0; i < string.length; i++) {
    if (true) {
      sum++;
    }
  }
  return sum;
}

calcLength("Hello World");
calcLength("wash your hands!");

function boolToString(bool) {
  bool = bool.toString();
  return bool;
}

boolToString(true);
boolToString(false);

function lessThanOrEqualToZero(number) {
  if (number <= 0) {
    return true;
  }
  return false;
}

lessThanOrEqualToZero(5);
lessThanOrEqualToZero(0);

function isPlural(string) {
  let len = string.length;
  if (string[len - 1] === "s") {
    return true;
  }
  return false;
}

isPlural("changes");
isPlural("change");
isPlural("dudes");
isPlural("magic");

function potatoes(string) {
  let output = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "p") {
      ++output;
    }
  }
  return output;
}

console.log(potatoes("potatopotatopotato"));


let lessThanOrEqualToZero = () => num <= 0;
console.log(lessThanOrEqualToZero(5));
