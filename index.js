function filterArray(arr) {
  return arr.filter((el) => typeof el === "number");
}
console.log(
  filterArray([1, 2, "a", "b"]),
  filterArray([1, "a", "b", 0, 15]),
  filterArray([1, 2, "aasf", "1", "123", 123])
);

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
console.log(
  sortByLength([]),
  sortByLength(["apple", "pie", "shortcake"]),
  sortByLength(["a", "ccc", "dddd", "bb"]),
  sortByLength(["may", "april", "september", "august"])
);

function sortWithoutDuplicates(array) {
  const newArray = [];
  array.forEach((el) => {
    if (!newArray.includes(el)) {
      newArray.push(el);
      newArray.sort((a, b) => a - b);
    }
  });
  return newArray;
}
console.log(
  sortWithoutDuplicates([1, 3, 3, 5, 5]),
  sortWithoutDuplicates([4, 4, 4, 4]),
  sortWithoutDuplicates([5, 7, 8, 9, 10, 15]),
  sortWithoutDuplicates([1, 1, 13, 9, 9, 3, 10, 3, 5, 5])
);

function set(array) {
  const newArray = [...new Set(array)];
  newArray.sort((a, b) => a - b);
  return newArray;
}
console.log(
  set([1, 3, 3, 5, 5]),
  set([4, 4, 4, 4]),
  set([1, 1, 13, 9, 9, 3, 10, 3, 5, 5]),
  set([5, 7, 8, 9, 10, 15])
);

function charIndex(string, char) {
  let lastIndex = string.lastIndexOf(char);
  let firstIndex = string.indexOf(char);
  if (lastIndex && firstIndex) {
    return undefined;
  }
  return `The first "l" has index ${firstIndex}, the last "l" has index ${lastIndex}`;
}
console.log(
  charIndex("circumlocution", "c"),
  charIndex("hello", "l"),
  charIndex("happy", "h"),
  charIndex("happy", "e")
);

function clone(array) {
  const newArr = [...array];
  newArr.push(array);
  return newArr;
}
console.log(clone([1, 1]), clone([1, 2, 3]), clone(["x", "y"]));

let newArray = [];
function indexMultiplier(array) {
  newArray = array.map((index, el) => {
    return el * index;
  });
  return newArray;
}
indexMultiplier([-3, 0, 8, -6]);

let sum = 0;
for (let i = 0; i < newArray.length; i++) {
  sum += newArray[i];
}
console.log(sum);

function spelling(str) {
  const array = [];
  let n = 0;
  for (let i = 0; i < str.length; i++) {
    array.push(str.slice(0, ++n));
  }
  return array;
}

console.log(spelling("bee"), spelling("happy"), spelling("eagerly"));

function filterArray(array) {
  return array.filter((el) => typeof el === "number");
}
console.log(
  filterArray([1, 2, "a", "b"]),
  filterArray([1, "a", "b", 0, 15]),
  filterArray([1, 2, "aasf", "1", "123", 123])
);

function arrayForEach(array) {
  const newArray = [];
  array.forEach((el) => {
    if (typeof el === "number") {
      newArray.push(el);
    }
  });
  return newArray;
}

console.log(
  arrayForEach([1, 2, "aasf", "1", "123", 123]),
  arrayForEach([1, "a", "b", 0, 15])
);

function f(array) {
  return array.map((el) => (typeof el === "number" ? el : "string"));
}

console.log(f([1, "a", "b", 0, 15]));

function isAvgWhole(array) {
  return array.reduce((sum, el) => sum + el, 0) % array.length === 0
    ? true
    : false;
}
console.log(
  isAvgWhole([1, 3]),
  isAvgWhole([1, 2, 3, 4]),
  isAvgWhole([1, 5, 6]),
  isAvgWhole([1, 1, 1]),
  isAvgWhole([9, 2, 2, 5])
);

function sumEls(array) {
  return array.reduce((accumulator, el) => accumulator + el, 0);
}
console.log(sumEls([1, 5, 6]));

function TheBiggestNum(array) {
  return array.reduce((accumulator, el) =>
    accumulator > el ? accumulator : el
  );
}
console.log(TheBiggestNum([9, 2, 2, 5, 21]));

function theSmallestNum(array) {
  return array.reduce((accumulator, el) =>
    accumulator < el ? accumulator : el
  );
}
console.log(theSmallestNum([9, 2, 2, 5]));

function firstVowel(string) {
  str = string.split("");
  return str.findIndex(
    (el) =>
      el === "a" || "e" || "i" || "o" || "u" || "A" || "E" || "I" || "O" || "U"
  );
}
console.log(firstVowel("pInEaPPLe")); //***it is not working, but i don't get why

function firstVowel(string) {
  return string.search(/[a,e,i,o,u,A,E,I,O,U]/g);
}
console.log(
  firstVowel("pInEaPPLe"),
  firstVowel("STRAWBERRY"),
  firstVowel("hello"),
  firstVowel("apple")
);

let string = "STRAWBERRY";
for (let i = 0; i < string.length; i++) {
  if (
    string[i] === "a" ||
    "e" ||
    "i" ||
    "o" ||
    "u" ||
    "A" ||
    "E" ||
    "I" ||
    "O" ||
    "U"
  ) {
    console.log(string[i]);
  }
} // how does it work this why ????

function minMax(array) {
  const res = [];
  res.push(Math.min(...array));
  res.push(Math.max(...array));
  return res;
}
console.log(minMax([1, 2, 3, 4, 5]), minMax([2334454, 5]), minMax([1]));

function findLargestNums(array) {
  let res = [];
  array.forEach((el, i, array) => res.push(Math.max(...array[i])));
  return res;
}
console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ]),
  findLargestNums([
    [-34, -54, -74],
    [-32, -2, -65],
    [-54, 7, -43],
  ]),
  findLargestNums([
    [0.4321, 0.7634, 0.652],
    [1.324, 9.32, 2.5423, 6.4314],
    [9, 3, 6, 3],
  ])
);
function findLargestNums(array) {
  return array.map((el, i, array) => Math.max(...array[i]));
}
console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ]),
  findLargestNums([
    [-34, -54, -74],
    [-32, -2, -65],
    [-54, 7, -43],
  ]),
  findLargestNums([
    [0.4321, 0.7634, 0.652],
    [1.324, 9.32, 2.5423, 6.4314],
    [9, 3, 6, 3],
  ])
);

function stringFilter(string) {
  return string.replace(
    /[! @ # & () {}% : ; ', ? / *` ~ $ ^ + = < > “]/gi,
    " "
  );
}
console.log(
  stringFilter("The quick brown fox!"),
  stringFilter("D0n$c sed 0di0 du1"),
  stringFilter("%fd76$fd(-)6GvKLO")
);

function arrayConcat(array, arr) {
  array = array.concat(arr);
  const newArr = [...new Set(array)];
  return newArr;
}
console.log(
  arrayConcat(["a", "b", "c"], ["a", "b", "c", "d"]),
  arrayConcat(["a", "b", "c"], []),
  arrayConcat(["a", "b", "c"], [1, 2, 3])
);

function firstElements(array, n) {
  const res = array.slice(0, n);
  return n === 0 || n < 0 ? [] : res;
}
console.log(
  firstElements([1, 2, 3, 4], 0),
  firstElements([2, 5, 223, 54, 1, 6, 3, 78, 8, 4], 3),
  firstElements([1, 2, 3, 4], -1),
  firstElements([8, 4, 1, 53], 7)
);

function duplicateCheck(array) {
  const newArray = [];
  array.forEach((el) => {
    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  });
  return newArray;
}
console.log(
  duplicateCheck(["John", "Taylor", "John"]),
  duplicateCheck([1, 0, 1, 2]),
  duplicateCheck(["The", "big", "cat"])
);

function pairFirstAndLastNums(array) {
  let newArray = [];
  for (let i = 0; i < array.length / 2; i++) {
    newArray.push(array[i]);
    newArray.push(array[array.length - 1 - i]);
  }
  return newArray;
}
console.log(
  pairFirstAndLastNums([1, 2, 3, 4, 5, 6, 7]),
  pairFirstAndLastNums([5, 9, 8, 1, 2]),
  pairFirstAndLastNums([1, 2, 3, 4, 5, 6]),
  pairFirstAndLastNums([])
);

function capitalizeFirstLetter(array) {
  let newArray = String(array);
  let newArr = newArray.toLowerCase();
  return newArr
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

console.log(
  capitalizeFirstLetter(["mavies", "senaida", "letty"]),
  capitalizeFirstLetter(["manvel", "POGHOS", "vardan", "gArnIk"]),
  capitalizeFirstLetter(["Vardan", "Garnik", "Hakob"])
);

function sumMakesTen(a, b, n) {
  res = a + b;
  if (res === n) {
    return true;
  }
  return false;
}
console.log(
  sumMakesTen(1, 9, 10),
  sumMakesTen(2, 3, 10),
  sumMakesTen(-12, 2, 10),
  sumMakesTen(3, -1, 10),
  sumMakesTen(7, 3, 10)
);

function getBoxVolume(width, length, height) {
  return width * length * height;
}
console.log(
  getBoxVolume(1, 2, 13),
  getBoxVolume(2, 2, 2),
  getBoxVolume(11, 1, 2)
);

function arrayOfMultiples(num, length) {
  let res = [];
  for (let i = 1; i <= length; i++) {
    num === 0 ? ["0"] : res.push(i * num);
  }
  return res;
}
console.log(
  arrayOfMultiples(2, 5),
  arrayOfMultiples(0, 2),
  arrayOfMultiples(7, 3),
  arrayOfMultiples(3, 1)
);
function geTheSumOfOdds(array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      res += array[i];
    }
  }
  return res;
}
console.log(
  geTheSumOfOdds([1, 2, 3, 4, 5]),
  geTheSumOfOdds([0, 2, 4, 6, 8, 10]),
  geTheSumOfOdds([2, 1, 3])
);

function geTheSumOfOdds(array) {
  return array.filter((el) => el % 2 !== 0).reduce((acc, el) => acc + el, 0);
}
console.log(
  geTheSumOfOdds([1, 2, 3, 4, 5]),
  geTheSumOfOdds([0, 2, 4, 6, 8, 10]),
  geTheSumOfOdds([22, 1, 3])
);

function minMaxElSwap(array) {
  const min = array.reduce((acc, el) => (acc < el ? acc : el));
  const max = array.reduce((acc, el) => (acc > el ? acc : el), 0);
  const minIndex = array.indexOf(min);
  const maxIndex = array.indexOf(max);
  const newOne = array[minIndex];
  array[minIndex] = array[maxIndex];
  array[maxIndex] = newOne;
  return array;
}
console.log(
  minMaxElSwap([1, 2, 3, 4, 5, 6]),
  minMaxElSwap([0, 2, 4, 6, 8, 10]),
  minMaxElSwap([3])
);

function stringWordsIncludePref(array, string) {
  let res = 0;
  array.forEach((el) => (el.includes(string) ? res++ : res));
  return res;
}
console.log(
  stringWordsIncludePref(["attention", "please", "attend"], "at"),
  stringWordsIncludePref(["live", "lie", "love"], "l"),
  stringWordsIncludePref(["solve", "me", "please"], "no")
);
function rps(p1, p2) {
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";
  return p1 === rock && p2 === scissors
    ? `The winner is ${p1}`
    : p1 === scissors && p2 === paper
    ? `The winner is ${p1}`
    : p1 === paper && p2 === rock
    ? `The winner is ${p1}`
    : p2 === rock && p1 === scissors
    ? `The winner is ${p2}`
    : p2 === scissors && p1 === paper
    ? `The winner is ${p2}`
    : p2 === paper && p1 === rock
    ? `The winner is ${p2}`
    : p1 === p2
    ? "It's a draw"
    : null;
}
console.log(
  rps("Rock", "Paper"),
  rps("Scissors", "Paper"),
  rps("Paper", "Paper")
);
