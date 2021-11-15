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

// 






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

