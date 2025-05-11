"use strict"

//************************************************************************************************
// HOME WORK №2 OF ANASTASIIA ALTSHULER 342776804
// AND EVGENY ALTSHULER 328873773
/*************************************************************************************************



/***************************************START*String  ***************************************/

/**************************************Task#1**************/
//Pring count  length of bio
//Variables
let name = 'Mary '
let activity = 'drink tea'
let bio = 'Our guest ' + name + activity + '.'
//Print count length
console.log(bio.length)
/************************************************************/

/******************************Task#2**********************/
//Ask from user to provide num
let use = prompt('Enter num: ')
const str = 'It is along established fact that a reader will be distract'
//Print the result with str[index]
console.log(`Char# ${use} is: "${str[use]}"`)
/************************************************************/

/****************************Task#3*************************/
//Ask from user to provide string
const str1 = prompt('Enter string')
//looking for the last letter and the second to last letter with str.length
console.log(`Last char is ${str1.charAt(str1.length - 1)}. Last char - 1 is: ${str1.charAt(str1.length - 2)}`);
/************************************************************/

/******************************Task#4********************/
//Added variables
let str2 = 'abcde'
let strReverse = ' ';//

//Loops with length for reverse the received string
for (let i = str2.length - 1; i >= 0; i--)//while "i" with value of count of length -1  > or = 0
{
  strReverse += str2[i];//Adding to the empty  variable at new value
}
console.log(strReverse);//Pring the result
/************************************************************/

/******************************Task#5********************/

const text = "JS"
console.log(text.toLowerCase())
/************************************************************/

/******************************Task#6********************/
//Added variables
const str3 = ' is along established fact that a reader will be distract'
let str4 = prompt(" Please emter text")//Ask from user to provide text

console.log(str3.includes(str4))//Checked if str4 included in the composition

/************************************************************/

/******************************Task#7********************/
//Added variables
const elem = '-';//This variable we will looked in str5
let str5 = '1-2-3-4-5';

//Created loops. Run while in the text there '-' and chage it (str5.replace) to '.'
while (str5.includes(elem)) {
  str5 = str5.replace(elem, '.');
}
console.log(str5); //Pring result

/************************************************************/

/******************************Task#8********************/
const str6 = '1-2-3-4-5'
console.log(str6.replaceAll('-', '.'))
/************************************************************/

/******************************Task#9********************/
const str7 = 'sdfwe'
console.log(str7.substring(4, 2)) //fw
/************************************************************/

/******************************Task#10********************/
const str8 = "I'm learning javascript!"
console.log(str8.substr(4, 8))//learning
console.log(str8.substr(-11))//javascript!

console.log(str8.substring(4, 12))//learning
console.log(str8.substring(13, 24))//javascript!

console.log(str8.slice(-20, -12))//learning
console.log(str8.slice(-11))//javascript!
/************************************************************/

/******************************Task#11********************/
const str15 = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/'
console.log(str15.indexOf('http://') === 0)//true
/************************************************************/

/******************************Task#12********************/
//Added variables
const str16 = 'https://www.notion.html'
const strCheck2 = '.html';

//Need to check that 'html' located in the end of str8
//For it we will know start index of 'html' and compair if intex == count of length of str8 - count of length of strCheck2
console.log(str16.indexOf(strCheck2) === (str16.length - strCheck2.length));
/************************************************************/

/******************************Task#13********************/
const str9 = 'ab cd cd cd ef'
console.log(str9.lastIndexOf('cd'))//9
console.log(str9.lastIndexOf('cd', 8))//6

/************************************************************/

/****************************** Task#14 ********************/
const str10 = "abcd";
console.log(str10.startsWith("abc")); // true
console.log(str10.startsWith("xxx")); // false
console.log(str10.startsWith("bc", 1)); // true

/************************************************************/

/****************************** Task#15 ********************/
const str11 = "abcde";
console.log(str11.endsWith("cde")); // true
console.log(str11.endsWith("xxx")); // false
console.log(str11.endsWith("bc", 3)); // true

/************************************************************/

/****************************** Task#16 ********************/

let str12 = 'ab-cd-ef';
console.log(str12.split('-'))//['ab','cd','ef']
console.log(str12.split('-', 2))//['ab','cd']
console.log(str12.split(''))//['a', 'b', '-', 'c', 'd', '-', 'e', 'f']
console.log(str12.split('', 3))//[['a', 'b', '-']

let str13 = '12345'
console.log(str13.split('')) //['1', '2', '3', '4', '5']
/************************************************************/