alert('Задание 1')
// Вариант 1
let num = '123';
// num = num.split('')
// let objNum = {

// };
// num.forEach((item, index, array) => {
//     if (array.length == 1) {
//         objNum.hundreds = 0;
//         objNum.dozens = 0;
//         objNum.units = item;
//     }
//     if (array.length == 2) {
//         if (index == 0) {
//             objNum.hundreds = 0;
//             objNum.dozens = item;
//         }
//         if (index == 1) {
//             objNum.units = item;
//         }
//     }
//     if (array.length == 3) {
//         if (index == 0) {
//             objNum.hundreds = item;
//         }
//         if (index == 1) {
//             objNum.dozens = item;
//         }
//         if (index == 2) {
//             objNum.units = item;
//         }
//     }

// })
// console.log(objNum)

//Вариант 2
objNum = {

};
function numToClass() {
    if (num.length == 1) {
        objNum.units = Number(num);
        objNum.dozens = 0;
        objNum.hundreds = 0;
    }
    if (num.length == 2) {

        objNum.units = Number(num) % 10;
        objNum.dozens = Math.trunc(Number(num) / 10);
        objNum.hundreds = 0;
    }
    if (num.length == 3) {
        objNum.units = Number(num) % 10;
        objNum.dozens = Math.trunc(Number(num) % 100 / 10);
        objNum.hundreds = Math.trunc(Number(num) / 100);
    }
};

numToClass();
console.log(objNum);
