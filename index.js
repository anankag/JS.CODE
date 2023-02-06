
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

console.log(spelling("bee"),spelling("happy"),spelling("eagerly"));
