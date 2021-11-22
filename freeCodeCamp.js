// record-collection
//Коллекция записей
//Вам дается буквальный объект, представляющий часть вашей коллекции музыкальных альбомов. Каждый альбом имеет уникальный идентификационный номер в качестве ключа и несколько других свойств. Не все альбомы содержат полную информацию.

//Вы начинаете с updateRecordsфункции, которая принимает объектный литерал, recordsсодержащий коллекцию музыкальных альбомов, an id, a prop(like artistor tracks) и a value. Завершите функцию, используя приведенные ниже правила, чтобы изменить объект, переданный в функцию.

//Ваша функция всегда должна возвращать весь объект коллекции записей.
//Если propнет , tracksи valueне пустая строка, обновление или набор этого альбома propв value.
//Если propесть, tracksно у альбома нет tracksсвойства, создайте пустой массив и добавьте valueк нему.
//Если propесть tracksи valueне является пустой строкой, добавьте valueв конец существующего tracksмассива альбома .
//Если valueэто пустая строка, удалите данное propсвойство из альбома.
//Примечание:recordCollection для тестов используется копия объекта.

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop in records[id]) {	
		if (value === "") {		
			delete records[id][prop];
		} else {		
			if (prop === 'tracks') {			
				records[id][prop].push(value);
			} else {
			console.log(value);
				records[id][prop] = value;
			}
		}
	} else {	
		if (prop === 'tracks') {		
			records[id][prop] = [];			
			records[id][prop].push(value);
		} else {
			records[id][prop] = value;
		}
	}
	
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// counting-cards

let count = 0;
function cc(card) {  
  let yes = ' Bet';
  let no = ' Hold';

  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count += 1;
  } else if (card === 10 || card === 'J' || card=== 'Q' || card === 'K'|| card === 'A') {
    count -= 1;
  } else {
    count += 0;
  }


  return count > 0 ? count + yes: count + no;  
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

// iterate-odd-numbers-with-a-for-loop
const myArray = [];
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// count-backwards-with-a-for-loop
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

// count-backwards-with-a-for-loop
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// iterate-through-an-array-with-a-for-loop
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// nesting-for-loops
function multiplyAll(arr) {
  let product = 1;
  
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}  
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// iterate-with-javascript-do---while-loops

const myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

// replace-loops-using-recursion
//Напишите рекурсивную функцию, sum(arr, n)которая возвращает сумму первых nэлементов массива arr.

function sum(arr, n) { 

if (n <= 0) return 0;
	else {
		return sum(arr, n - 1) + arr[n - 1];
	} 
}

// умножьте первые n элементы массива, чтобы создать произведение этих элементов.

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
}

// profile-lookup

// У нас есть массив объектов, представляющих разных людей в наших списках контактов.
// Для вас заранее написана lookUpProfileфункция, которая принимает nameи свойство ( prop) в качестве аргументов.
// Функция должна проверять, nameявляется ли это фактическим контактом, firstNameи данное свойство ( prop) является свойством этого контакта.
// Если оба верны, то верните «значение» этого свойства.
// Если nameне соответствует ни одному контакту, вернуть строку No such contact.
// Если propне соответствует каким-либо действительным свойствам найденного контакта, nameверните строку No such property.

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for (let i = 0; i < contacts.length; i++) {
		if (contacts[i].firstName === name) {
			if (prop in contacts[i]) {
				return contacts[i][prop];
			}
			else return "No such property";
		}		
	}
	return ("No such contact");
  // Only change code above this line
}

lookUpProfile("Akira", "likes");

// generate-random-fractions-with-javascript

function randomFraction() {
  return Math.random();
}

// basic-javascript/generate-random-whole-numbers-with-javascript
// Используйте метод для генерации и возврата случайного целого числа между 0и 9.

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// generate-random-whole-numbers-within-a-range
// Создайте функцию с именем, randomRangeкоторая принимает диапазон myMinи myMaxвозвращает случайное целое число, которое больше или равно myMin, и меньше или равно myMax, включительно.

function randomRange(myMin, myMax) {  
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; 
}

// use-the-parseint-function
// Используйте parseInt()в convertToIntegerфункции, чтобы она преобразовывала входную строку strв целое число и возвращала его.

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("007");

// use-the-parseint-function-with-a-radix
// Используйте parseInt()в convertToIntegerфункции, чтобы она преобразовывала двоичное число в целое и возвращала его.

function convertToInteger(str) {
 return parseInt(str, 2);
}

convertToInteger("10011");

// use-the-conditional-ternary-operator

function checkEqual(a, b) {
  return a === b ? 'Equal' : 'Not Equal';
}

checkEqual(1, 2);

// use-multiple-conditional-ternary-operators

function checkSign(num) {
  return num === 0 ? 'zero' : num > 0 ? 'positive' : 'negative';
}

checkSign(10);

// use-recursion-to-create-a-countdown

//Мы определили функцию, вызываемую countdownс одним параметром ( n). Функция должна использовать рекурсию для возврата массива, содержащего целые числа nна 1основе nпараметра.
//Если функция вызывается с числом меньше 1, функция должна вернуть пустой массив. Например, вызов этой функции с n = 5должен вернуть массив [5, 4, 3, 2, 1].
//Ваша функция должна использовать рекурсию путем вызова самой себя и не должна использовать какие-либо циклы.

function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

//use-recursion-to-create-a-range-of-numbers

function rangeOfNumbers(startNum, endNum) {
  if (endNum <= startNum) {
    return [endNum];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
};


//es6/____________
//compare-scopes-of-the-var-and-let-keywords

function checkScope() {
  let i = 'function scope';
  if (true) {
    let ii = 'block scope';
    console.log('Block scope i is: ', ii);
  }
  console.log('Function scope i is: ', i);
  return i;
}

// mutate-an-array-declared-with-const

const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;  
}
editInPlace();

// prevent-object-mutation
//В этой задаче вы собираетесь использовать Object.freezeдля предотвращения изменения математических констант.
//Вам необходимо заморозить MATH_CONSTANTSобъект, чтобы никто не мог изменить значение PI, добавить или удалить свойства.

unction freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };  
  Object.freeze(MATH_CONSTANTS);
  
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// use-arrow-functions-to-write-concise-anonymous-functions

const magic = () => new Date();

// write-arrow-functions-with-parameters

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

// set-default-parameters-for-your-functions

const increment = (number, value = 1) => number + value;

// use-the-rest-parameter-with-function-parameters

const sum = (...args) => {
  //const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

// use-the-spread-operator-to-evaluate-arrays-in-place
// Скопируйте все содержимое arr1в другой массив arr2с помощью оператора распространения.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);

// Приведенный ниже код ES5 используется apply()для вычисления максимального значения в массиве:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
// maximus будет иметь значение 89.

/ /Нам пришлось использовать, Math.max.apply(null, arr)потому что Math.max(arr)возвращается NaN. Math.max()ожидает аргументы, разделенные запятыми, но не массив. Оператор распространения упрощает чтение и сопровождение этого синтаксиса.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
// maximus будет иметь значение 89.

// ...arrвозвращает распакованный массив. Другими словами, он расширяет массив.
//Однако оператор распространения работает только на месте, например, в аргументе функции или в литерале массива.
//Следующий код работать не будет: 
const spreaded = ...arr;

// use-destructuring-assignment-to-extract-values-from-objects
// Замените два присваивания эквивалентным деструктурирующим присваиванием.
// Он по-прежнему должен назначать переменные todayи tomorrowзначения объекта todayи tomorrowиз него HIGH_TEMPERATURES.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

//const today = HIGH_TEMPERATURES.today;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;

const {today, tomorrow} = HIGH_TEMPERATURES;

// use-destructuring-assignment-to-assign-variables-from-objects
// Вот как вы можете дать новые имена переменных в назначении:

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
}; 
 
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// use-destructuring-assignment-to-assign-variables-from-nested-objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};  
	// const lowToday = LOCAL_FORECAST.today.low;
	// const highToday = LOCAL_FORECAST.today.high;
 const { today: {low: lowToday, high:highToday }} = LOCAL_FORECAST;

// use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements

//Результат похож на Array.prototype.slice()показанный ниже:

//const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
//console.log(a, b);
//console.log(arr);
//Консоль отобразит значения 1, 2и [3, 4, 5, 7].

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {  
  const [a, b, ...arr] = list;  
  return arr;
}
const arr = removeFirstTwo(source);

// use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters

// В некоторых случаях вы можете деструктурировать объект в самом аргументе функции.
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}

// Это эффективно разрушает объект, отправленный в функцию. Это также можно сделать на месте:
const profileUpdate = ({ name, age, nationality, location }) => {

}

// Используйте деструктурирующие назначения в аргументе функции halfтолько для отправки maxи minвнутри функции.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0; 

// create-strings-using-template-literals

//Используйте метод итератора (любой цикл), чтобы получить желаемый результат (как показано ниже).

//[
//  '<li class="text-warning">no-var</li>',
// '<li class="text-warning">var-on-top</li>',
//  '<li class="text-warning">linebreak</li>'
//]
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

// write-concise-object-literal-declarations-using-object-property-shorthand

const createPerson = (name, age, gender) => ({  
  name, age, gender  
});

// createPerson("Zodiac Hasbro", 56, "male");
// вернет {name: "Zodiac Hasbro", age: 56, gender: "male"}

//При определении функций внутри объектов в ES5 мы должны использовать ключевое слово functionследующим образом:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
//В ES6 вы можете полностью удалить functionключевое слово и двоеточие при определении функций в объектах. Вот пример этого синтаксиса:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

// write-concise-declarative-functions-with-es6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

// use-class-syntax-to-define-a-constructor-function

class Vegetable {
  constructor(targetPlanet) {
    this.name = targetPlanet;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// create-a-module-script

//<html>
  //<body>
    
		//<script type="module" src="index.js"></script>
    
  //</body>
//</html>

// use-export-to-share-a-code-block

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString };

// reuse-javascript-code-using-import

import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");









//RegExp_______________________

// regular-expressions/
// using-the-test-method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// match-literal-strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

//match-a-literal-string-with-different-possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

//ignore-case-while-matching

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

//extract-matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

//find-more-than-the-first-match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

//match-anything-with-wildcard-period
//Заполните регулярное выражение unRegexтак , чтобы он соответствовал последовательности run, sun, fun, pun, nun, и bun. В вашем регулярном выражении должен использоваться подстановочный знак.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

//match-single-character-with-multiple-possibilities
Используйте класс символов с гласными ( a, e, i, o, u) в своем регулярном выражении , vowelRegexчтобы найти все гласные в строке quoteSample.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi
let result = quoteSample.match(vowelRegex);

//match-letters-of-the-alphabet
//Сопоставьте все буквы в строке quoteSample.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

//match-numbers-and-letters-of-the-alphabet
Создайте одно регулярное выражение, которое соответствует диапазону букв между hи sи диапазону чисел между 2и 6. Не забудьте включить в регулярное выражение соответствующие флаги.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

//match-single-characters-not-specified
//Создайте одно регулярное выражение, которое соответствует всем символам, кроме числа или гласной. Не забудьте включить в регулярное выражение соответствующие флаги.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

//match-characters-that-occur-one-or-more-times
//Вы хотите найти совпадения, когда буква sвстречается один или несколько раз Mississippi. Напишите регулярное выражение, в котором используется +знак.

let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

//match-characters-that-occur-zero-or-more-times
//Для этой задачи chewieQuoteинициализирована как скрытая строка Aaaaaaaaaaaaaaaarrrgh!. Создайте регулярное выражение, chewieRegexкоторое использует *символ для соответствия Aсимволу верхнего регистра, за которым сразу следует ноль или более aсимволов нижнего регистра в chewieQuote.

let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);

//find-characters-with-lazy-matching
//Исправьте регулярное выражение, /<.*>/чтобы он возвращал тег HTML, <h1>а не текст "<h1>Winter is coming</h1>"

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);

//find-one-or-more-criminals-in-a-hunt
//Напишите жадное регулярное выражение, которое находит одного или нескольких преступников в группе других людей. Преступник обозначается заглавной буквой C.

let reCriminals = /C+/g; // Change this line

// match-beginning-string-patterns
//Используйте символ каретки в регулярном выражении, чтобы найти его Calтолько в начале строки rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

// match-ending-string-patterns
//Используйте символ привязки ( $), чтобы сопоставить строку cabooseв конце строки caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

// match-all-letters-and-numbers
// Используйте класс сокращенных символов \wдля подсчета количества буквенно-цифровых символов в различных кавычках и строках.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /[\w+]/g;
let result = quoteSample.match(alphabetRegexV2).length;

//match-everything-but-letters-and-numbers
//Используйте класс сокращенных символов \Wдля подсчета количества не буквенно-цифровых символов в различных кавычках и строках.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /[\W+]/g;
let result = quoteSample.match(nonAlphabetRegex).length;

// match-all-numbers
// Используйте сокращенный класс символов, \dчтобы подсчитать количество цифр в названиях фильмов. Записанные числа («шесть» вместо 6) не учитываются.

let movieName = "2001: A Space Odyssey";
let numRegex = /[\d+]/g;
let result = movieName.match(numRegex).length;

// match-all-non-numbers
// Используйте сокращенный класс символов для нецифровых символов, \Dчтобы подсчитать, сколько нецифровых символов содержится в названиях фильмов.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /[\D+]/g;
let result = movieName.match(noNumRegex).length;

// restrict-possible-usernames
// 1. В именах пользователей можно использовать только буквенно-цифровые символы.
// 2. Единственные числа в имени пользователя должны быть в конце. В конце их может быть ноль или больше. Имя пользователя не может начинаться с цифры.
// 3. Буквы имени пользователя могут быть строчными и прописными.
// 4. Имя пользователя должно состоять не менее чем из двух символов. В двухсимвольном имени пользователя в качестве символов можно использовать только буквы алфавита.

let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$|^[a-z]+\d{2,}$/i;
let result = userCheck.test(username);

// match-whitespace
// чтобы искать в строке несколько пробельных символов.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

// match-non-whitespace-characters
// чтобы искать в строке несколько непробельных символов.

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

//specify-upper-and-lower-number-of-matches
// ohRegexчтобы оно соответствовало всей фразе, Oh noтолько если оно 3должно 6содержать буквы h.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

// specify-only-the-lower-number-of-matches
// haRegexчтобы оно соответствовало слову, Hazzahтолько если оно содержит четыре или более букв z.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

// specify-exact-number-of-matches
imRegexчтобы оно соответствовало слову, Timberтолько если оно состоит из четырех букв m.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);

// check-for-all-or-none
// favRegexчтобы оно соответствовало версии слова для американского английского ( favorite) и британского ( favourite) английского языка ( ).

let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);

// positive-and-negative-lookahead
// Используйте опережающие поиски pwRegexдля сопоставления паролей, длина которых превышает 5 символов и состоит из двух последовательных цифр.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);

//Более практичное использование просмотра вперед - проверка двух или более шаблонов в одной строке. Вот (наивно) простая программа проверки паролей, которая ищет от 3 до 6 символов и хотя бы одно число:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

// Предварительный просмотр немного сбивает с толку, но некоторые примеры помогут.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;

quit.match(quRegex);
noquit.match(qRegex);
//Оба эти match вернут ["q"].

// check-for-mixed-grouping-of-characters
// Исправьте регулярное выражение, чтобы оно проверяло имена Franklin Rooseveltили Eleanor Rooseveltс учетом регистра, и должно было делать уступки для отчества.

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin( D\.)?|Eleanor) Roosevelt/;
let result = myRegex.test(myString);

//reuse-patterns-using-capture-groups
// Используйте группы захвата, reRegexчтобы сопоставить строку, состоящую только из одного и того же числа, повторяемого ровно три раза, разделенных одиночными пробелами.

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);

// use-capture-groups-to-search-and-replace
// Напишите регулярное выражение, fixRegexиспользуя три группы захвата, которые будут искать каждое слово в строке one two three.
// Затем обновите replaceTextпеременную, заменив one two threeее строкой, three two oneи присвойте результат resultпеременной.
// Убедитесь, что вы используете группы захвата в строке замены, используя $синтаксис знака доллара ( ).

let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);

//remove-whitespace-from-start-and-end

// Напишите регулярное выражение и используйте соответствующие строковые методы для удаления пробелов в начале и конце строк.
// Есть метод String.prototype.trim(), но вам нужно будет выполнить эту задачу, используя регулярные выражения.

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");

