//Задание 1
'use strict';
alert('Задание 1')
function EasyNumber() {
    let i = 1;
    numberI:
    while (i < 100) {
        ++i;
        let j = 1;
        while (j < i) {
            ++j;
            if (i % j == 0) continue numberI;
            console.log(i);
        }
    }
}
EasyNumber();
