/*1. What is the result of “3”+5+6.

The result is "356".
Explanation: 3 + "5" results in "35" (since 3 is converted to a string). Then, "35" + 6 results in "356" (concatenation).*/

/*2. What is the result of 3+”5”+6

The result is "356".*/

/*3. What is the result of 3+5+”6”
 
The result is "86".*/

//4. Write a program to return the length of a string "Pneumonoultramicroscopicsilicovolcanoconiosis".

let str1 = "Pneumonoultramicroscopicsilicovolcanoconiosis";
console.log(str.length);

//5. Write a program to convert the above string to Upper case

let str2 = "Pneumonoultramicroscopicsilicovolcanoconiosis";
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

//6. Write a program to convert the above string to Lower case

let str = "Pneumonoultramicroscopicsilicovolcanoconiosis";
let lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr);

//7. Consider the string “I like this product; I hate this product; This product is worth buying; I don’t agree with the above user”. Now break this whole string into pieces wherever you see “;”. Now print the broken down pieces one after the other in console.

let sentences = "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user";
let parts = sentence.split(";");
parts.forEach(part => console.log(part.trim()));



//8. For the above question 1, return the number of time the letter "o" appears.
let sentence1 = "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user";
let count = (sentence.match(/o/g) || []).length;
console.log(count);



//9. Write a program to replace a particular term in a sentence (you can come up with a sentence). Replace with the term "javascript".

let sentence = "I am learning programming languages.";
let newSentence = sentence.replace("programming languages", "javascript");
console.log(newSentence);

//10. Find the number of times the string "not" appears in this sentence -
//a. " Javascript notation %^&* notes that structure rules and not context for nothing"

let sentence = "Javascript notation %^&* notes that structure rules and not context for nothing";
let count = (sentence.match(/not/g) || []).length;
console.log(count);



//b. Now, for the above problem 4, create an array with texts before and after "not" occurrences.

let sentence = "Javascript notation %^&* notes that structure rules and not context for nothing";
let parts = sentence.split(/not/);
console.log(parts);


 
11. There is a link: http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/your
info.jsp
a. Alert- ‘contact us’
b. Alert- ‘your info’
c. Have two text fields- Replace ‘navigate’ , ‘contact’ with whatever the user enters in the text
field and hits ‘submit’
d. Have 3 text fields- whatever you enter in those text fields should replace ‘prompt1’,’prompt2’
and prompt3’.Then ‘alert’ that. After 3rd alert, the whole new link should come up.
http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/
firstname=prompt1 & lastname=prompt&ph_no=prompt3”
