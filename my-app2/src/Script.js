//ARRAY METHODS....................
//.push()
//Transform each item in an array.
//Adds one or more elements to the end of an array.

let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits);//["apple", "banana","mango"]=>3

//pop()
//Removes the last element from an array.

let fruit = ["apple", "banana","mango"];
fruit.pop();
console.log(fruit);//["apple","banana"]

//shify()
//Removes the first element from an array.

let fruiti = ["apple", "banana"];
fruiti.shift();
console.log(fruiti);//["banana"]

//unshift()
//Adds one or more elements to the beginning of an array.

let fruitss = ["banana"];
fruitss.unshift("apple");
console.log(fruitss);//["apple","banana"]

//lenght
//Returns the number of elements in the array.

let numbers = [10,20,30];
console.log(numbers.length);//3

//indexOf()
//Returns the first index of the element (or -1 if not found).

let numberss=[10,20,30];
console.log(numberss.indexOf(30));//2

//includes()
//Checks if the array contains a specific element.

let fruitt = ["apple", "banaaa"];
console.log(fruitt.includes("banana"));//false(check banana spelling)

//or

let fruitti = ["apple", "banaaa"];
console.log(fruitt.includes("banaaa"));//true


//join()
//Joins all array elements into a string.

let words = ["Hello", "World"];
console.log(words.join(" "));//"Hello World"

//reverse()
//Reverses the order of elements in an array.

let numberrs = [1,2,3,4];
numberrs.reverse();
console.log(numberrs);//[4,3,2,1]

//sort()
//Sorts the elements alphabetically or with a compare function.

let numbersss = [3,1,2,4,8];
numberrs.sort();
console.log(numberrs);//[1,2,3,4]

//Itration Methods
//These methods help you loop through the array without manually writing a loop.

array.forEach(element => {
    
});

//**************STRING METHODS************************

//1.  length
//Returns the length of the string.

let str = "JavaScript";
console.log(str.length);//10

//2.  charAt(index)
//Returns the character at the specified index.

let strr = "Javascript";
console.log(str.charAt(4));//'S'

//3. slice(start,end)
//Extracts part of a string.

console.log(str.slice(0,4));//'Java'

//4.  substring(start,end)
//Similar to slice, but doesn't support negative indexes.

console.log(str.substring(0,4));//'Java'

//5.  substr(start, length)
//Returns part of a string from a start index with given length.

console.log(str.substr(4,6));//'Script'

//6.  toUpperCaase()/toLowerCase
//Converts the string to uppercase or lowercase.

console.log(str.toUpperCase());//'JAVASCRIPT'
console.log(str.toLowerCase());//'javascript'

//7.  indexOf(substring)/lastIndexOf(substring)
//Finds the first/last occurrence of a substring.

console.log(str.indexOf('S'));//4
console.log(str.lastIndexOf("a"));//3

//8. includes(substring)
//Checks if a string contains a specific value.

console.log(str.includes("Script"));//true

//9. startsWith()/endWith
//Checks if the string starts or ends with a specific substring.

console.log(str.startsWith("Java"));//true
console.log(str.endsWith("pt"));//true

//10. replace(old,new)/replaceAll()
//Replaces part string

let text = "Hello World";
console.log(text.replace("World", "Javascript"));//Hello Javascript

let textt = "Hello World";
console.log(text.replaceAll("World", "Javascript"));//'Hello Javascript'

//11. trim()/trimStart()/trimEnd()
//Removes whitespace

let txt = "  Hello   ";
console.log(txt.trim());//"Hello"

//12. split(separator)
//Splits a string into an array.

let names ="John,jane,Bob";
console.log(names.split(","))//['John','Jane,'Bob']


//13.concat()
//joins two or more strings.

let a= "Hello";
let b = "World";
console.log(a.concat("",b));//"Hello Wold"

//14. repeat(n)
//Repeat the string n times

console.log("ha".repeat(3));//'hahaha'

//15. match()/matchAll()
//used with regex to search

let str2 ="cat bat rat";
console.log(str2.match(/at/g));//['at','at';'at']

//endWith(str) 
//Checks if string ends with given text

let strrr = "Tanaya";
console.log(strrr.endsWith('ya'));

//lastIndexOf(str) 
//finds lasst occurance of string

let last = "kanerkaar";
console.log(last.lastIndexOf('a'));

//replaceAll(old, new)
//replace all matches

let name = ("Tanaya Kanerkar");
let updatedName = name.replaceAll("Tanaya", "Ram");
console.log(updatedName);