console.log('Hello World');

/* Variable */

var maklumat = 'abc';
var maklumat2 = 'def';

// Nilai BOLEH diubah
let result = maklumat + maklumat2;
console.log(result);
// abcdef

// Nilai BOLEH diubah
result = maklumat + ' ' + maklumat2;
console.log(result);
// abc def

// Nilai TAK BOLEH diubah
const maklumat3 = 'ghi';
console.log(maklumat3);
// ghi

/* always use const unless tahu akan ada mutation data */


/* Javascript Data Types */

// string
const perkataan = 'ini adalah jenis string';
console.log(perkataan);
// ini adalah jenis string

// number
const nombor = 1234;
console.log(nombor);
// 1234

const nomborPi = 3.14;
console.log(nomborPi);
// 3.14

const nomborNegatif = -1234;
console.log(nomborNegatif);
// -1234

// boolean
const betulAtauSalah = true;
const salah = false;
console.log(betulAtauSalah);
// true
console.log(salah);
// false

// null
const kosong = null;
console.log(kosong);
// null

// undefined
let belumDitentukan;
console.log(belumDitentukan);
// undefined

// object
const objek = {
    nama: 'Irfan',
    umur: 25
};
console.log(objek);
// {nama: 'Irfan', umur: 25}

// array
const senarai = [1, 2, 3, 4, 5];
console.log(senarai);
// (5) [1, 2, 3, 4, 5]

// function
const fungsi = () => {
    return 'ini adalah fungsi'
};
console.log(fungsi())
// ini adalah fungsi
 

/* Expression */

const a = 10;
const b = 20;
const c = 5 + a + b;
console.log(c);
// 35

const nama = 'Irfan'
const umur = 18
const greeting = 'hai ' + nama + ' umur: ' + umur;
console.log(greeting)
// hai Irfan umur: 18

const umurSekarang = 18;
const hadUmurTua = 20;
const masihMuda = umurSekarang < hadUmurTua;
console.log(masihMuda);
// true

const fungsiGreeting = (nama, umur) => {
    return 'hai ' + nama + ' umur ' + umur
};
console.log(fungsiGreeting('faiz', 18));
// hai faiz umur 18
console.log(fungsiGreeting('Irfan', 25));
// hai Irfan umur 25


/* Operators */

/* Arithmetic Operators */

// addition
var x = 10;
var y = 20;
var z = x + y;
console.log(z);
// 30

// subtraction
var x = 10;
var y = 20;
var z = x - y;
console.log(z);
// -10

// multiplication
var x = 10;
var y = 5;
var z = x * y;
console.log(z);
// 50

// division
var x = 20;
var y = 10;
var z = x / y;
console.log(z);
// 2

// modulus
var x = 23;
var y = 10;
var z = x % y;
console.log(z);
// 3

// increment
var x = 10;
x++;
console.log(x);
// 11

// decrement
var x = 10;
x--;
console.log(x);
// 9

/* Comparison Operators */

// equal to
var r = '10';
var s = 10;
console.log(r == s);
// true

// strict equal
console.log(r === s);
// false

// not equal to
var t = 10;
var u = 20;
console.log(t != u);
// true

// greater than
var v = 10;
var w = 20;
console.log(v > w);
// false

// less than
var x = 10;
var y = 20;
console.log(x < y);
// true

// greater than or equal to
var x = 10;
var y = 20;
console.log(x >= y);
// false

// less than or equal to
var x = 10;
var y = 20;
console.log(x <= y);
// true

/* Logical Operators */

// and
var ad = 10;
var ae = 20;
console.log(ad < 20 && ae > 10);
// true

// or
var af = 10;
var ag =20;
console.log(af < 20 || ag > 100);
// true

// not
var ah = 10;
var ai = 20;
console.log(!(ah < 20 && ai > 10));
// false

/* Ternary Operators */

// Conditional
var ao = 10;
var ap = 20;
var aq = ao > ap ? "yes" : "no";
console.log(aq);
// no

/* String Operator */

// string concatenation
var aj = "Hello";
var ak = "World";
var al = aj + ak;
console.log(al);
// HelloWorld

/* Unary Operator */

// typeof
var am = 10;
console.log(typeof am);
// number

// negation
var an = true;
console.log(!an);
// false
var ao = true;
console.log(!!ao);
// true


/* Array */

const senaraiNombor = [1,2,3,4,5,6];
console.log(senaraiNombor);
// (6) [1, 2, 3, 4, 5, 6]

const abu = 'abu';
console.log(abu);
// abu

const senaraiNama = ['ali', 'ahmad', abu];
console.log(senaraiNama);
// (3) ['ali', 'ahmad', 'abu']

const senaraiCampur = ['ali', true, 18, senaraiNama, ()=>{console.log('hello world')}];
console.log(senaraiCampur);
// (5) ['ali', true, 18, Array(3), ƒ]

const senarai2d = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];
console.log(senarai2d);
// (9) [Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9)]

/* Array Methods */

// Push
// tambah data dalam array
const senaraiBuah = ['apple', 'banana', 'cherry'];
senaraiBuah.push('date');
console.log(senaraiBuah);
// (4) ['apple', 'banana', 'cherry', 'date']

// Pop
// buang data terakhir dalam array
const senaraiKereta = ['proton', 'perodua', 'honda']
senaraiKereta.pop();
console.log(senaraiKereta);
// (2) ['proton', 'perodua']

// Shift
// buang data terawal dalam array
const senaraiNombor2 = [1,2,3,4,5,6]
senaraiNombor2.shift();
console.log(senaraiNombor2);
// (5) [2, 3, 4, 5, 6]

// Unshift
// tambah data pada permulaan
const senaraiNombor3 = [1,2,3,4,5,6];
senaraiNombor3.unshift(9);
console.log(senaraiNombor3);
// (7) [9, 1, 2, 3, 4, 5, 6]

/* LOOP */
// operasi dalam array yang membolehkan kita mengakses setiap data dalam array secara satu persatu mengikut urutan
// for
// while
// forEach
// map
// filter

// forEach
const senaraiBuah2 = ['apple', 'banana', 'cherry'];
senaraiBuah2.forEach((buah, index) => {
    console.log(buah, index);
});
// apple 0, banana 1, cherry 2

// map
const senaraiNombor4 = [1,2,3,4,5,6];
const hasil = senaraiNombor4.map(nombor => nombor * 2);
console.log(hasil);
// (6) [2, 4, 6, 8, 10, 12]

// filter
const senaraiNombor5 = [1,2,3,4,5,6];
const hasil5 = senaraiNombor5.filter(nombor => nombor >3);
console.log(hasil5);
// (3) [4, 5, 6]

// for
const senaraiNombor6 = [1,2,3,4,5,6];
for ( let i = 0; i < senaraiNombor6.length; i++) {
    console.log(senaraiNombor6[i])
};
// 1, 2, 3, 4, 5, 6


/* FUNCTION */
// reusable block of code

const nombor5 = 5;
const nombor10 = 10;

function tambahDua(nombor1, nombor2){
    return nombor1 + nombor2;
}

const hasil1 = tambahDua(nombor5, nombor10);
console.log(hasil1);
// 15


// Bentuk-bentuk function


function pendarabDua1(nombor){
    return nombor * 2;
}

const pendarabDua2 = function(nombor){
    return nombor * 2;
}

const pendarabDua3 = (nombor) => {
    return nombor * 2;
}


// SCOPE

const nama1 = 'Irfan';

function panggilanNama(){
    const nama1 = 'Syadid';
    console.log(nama1);
}

panggilanNama();
// Syadid

console.log(nama1);
// Irfan

// Function akan menggunakan variable yang wujud dalam scope sendiri terlebih dahulu


const nama2 = 'Irfan';

const panggilanNama1 = () => {
    console.log(nama);
}

panggilanNama1();
// Irfan

// Jika tiada dalam scope sendiri, dia akan mencari dalam variable dalam scope luar dia

let nama3 = 'Irfan';

function panggilanNama2(nama3NakUbah) {
    nama3NakUbah = nama3NakUbah + ' Syadid'
    return nama3NakUbah;
}
console.log(nama3);
// Irfan

nama3 = panggilanNama2(nama3);

console.log(nama3);
// Irfan Syadid

// Mutation data dalam function akan mutate variable asal

// DEFAULT PARAMETERS

function panggilNama(nama = 'Irfan') {
    console.log(nama);
}

panggilNama();
// Irfan

panggilNama('Syadid');
// Syadid

// Fuction boleh mempunyai parameters yang value ditetapkan

// IF

// if(condition) {
//     statement
// }

const age1 =20;
if (age1 > 18) {
    console.log('You are adult');
}
// You are adult

// IF ELSE

// if (condition) {
//     statement
// } else {
//     statement2
// }

const age3 = 17;
if (age3 > 18) {
    console.log('You are adult')
} else {
    console.log('You are not adult')
}
// You are not adult


// IF ELSE IF ELSE

// if(condition1){
//     statement1
// } else if (conditoin2){
//     statement2
// } else {
//     statement3
// }



const age = 25;

if (age > 18){
    console.log('anda dewasa');
} else if (age < 18 && age > 12){
    console.log('anda muda')
} else {
    console.log('anda kanak-kanak')
};
// anda dewasa



// SWITCH

const day = 7;
switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
        break;
}
// Sunday