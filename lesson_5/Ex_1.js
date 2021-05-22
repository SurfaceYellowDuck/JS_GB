function tableCreate() {
    let chessGame = document.createElement('div'),
        chessNum = document.createElement('div'),
        chessBoard = document.createElement('div'),
        chessWords = document.createElement('div');
    chessWords.classList.add('chessWords');
    chessNum.classList.add('chessNum');
    chessBoard.classList.add('chessBoard');
    var body = document.body,
        tbl = document.createElement('table');
    body.appendChild(chessWords);
    body.appendChild(chessGame);
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
    var numList = document.createElement('div');
    chessWords.insertAdjacentHTML('afterbegin', '<div>A B C D E F G H</div>');
    for (var i = 0; i < 8; i++) {
        numList.insertAdjacentHTML('afterbegin', `<div>${i + 1}</div>`);
        chessBoard.appendChild(tbl);
        var tr = tbl.insertRow();
        for (var j = 0; j < 8; j++) {
            var td = tr.insertCell();
            td.style.border = '1px solid black';
            td.style.width = '8px';
            td.style.height = '7px';
            if (i % 2 == j % 2) {
                td.className = td.style.backgroundColor = 'black';
            } else {
                td.style.backgroundColor = td.style.backgroundColor = 'white';
            }
        }
    }
    chessGame.style.display = 'flex';
    chessGame.style.flexDirection = 'row';
    chessGame.style.height = '56px';
    numList.style.display = 'flex';
    numList.style.flexDirection = 'column';
    numList.style.fontSize = '11.5px';
    chessWords.style.display = 'flex';
    chessWords.style.flexDirection = 'row';
    chessWords.style.fontSize = '13px';
    chessWords.style.paddingLeft = '10px';
    chessNum.appendChild(numList);
    chessGame.appendChild(chessNum);
    chessGame.appendChild(chessBoard);
}

