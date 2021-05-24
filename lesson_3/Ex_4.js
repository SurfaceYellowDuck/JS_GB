//Задание 4
'use strict';
alert('Задание 4')
function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

function drawing() {
    for (let el of makeRangeIterator(1, 21)) {
        console.log(el + ' *'.repeat(el));
    }
}
drawing();
