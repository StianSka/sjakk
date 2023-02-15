function diagonalUpRight(currentPos, color,) {
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let hasHitPiece = false
    for (let i = (boardPosIndex - 7); i >= 0; i = i - 7) {
        if(currentPos.charAt(1) == 8 ) {break}
        if (model.board[i].currentPiece == '' && hasHitPiece == false && model.board[i].id.charAt(0) != currentPos.charAt(0)) {
            model.board[i].color = model.legalMoveSquareColor
        }
        if (model.board[i].currentPiece != '' && hasHitPiece == false && model.board[i].id.charAt(0) != currentPos.charAt(0)) {
            if (model.board[i].currentPiece.includes(color) == true) {
                hasHitPiece = true
            } else {
                model.board[i].color = model.legalMoveSquareColor
                hasHitPiece = true
            }
        }
        if(model.board[i].id.charAt(1) == 8 ) {break}
    }
}

function diagonalUpLeft(currentPos, color,){
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let hasHitPiece = false
    for (let i = (boardPosIndex - 9); i >= 0; i = i - 9) {
        if(currentPos.charAt(1) == 1 ) {break}
        if (model.board[i].currentPiece == '' && hasHitPiece == false) {
            model.board[i].color = model.legalMoveSquareColor
        }
        if (model.board[i].currentPiece != '' && hasHitPiece == false) {
            if (model.board[i].currentPiece.includes(color) == true) {
                hasHitPiece = true
            } else {
                model.board[i].color = model.legalMoveSquareColor
                hasHitPiece = true
            }
        }
        if(model.board[i].id.charAt(1) == 1 ) {break}
    }
}

function diagonalDownRight(currentPos, color,){
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let hasHitPiece = false
    for (let i = boardPosIndex + 9; i < model.board.length; i = i + 9) {
        if(currentPos.charAt(1) == 8 ) {break}
        if (model.board[i].currentPiece == '' && hasHitPiece == false) {  
            model.board[i].color = model.legalMoveSquareColor
        }
        if (model.board[i].currentPiece != '' && hasHitPiece == false) {
            if (model.board[i].currentPiece.includes(color) == true) {
                hasHitPiece = true
            } else {
                model.board[i].color = model.legalMoveSquareColor
                hasHitPiece = true
            }
        }
        if(model.board[i].id.charAt(1) == 8 ) {break}
    }
}
function diagonalDownLeft(currentPos, color,){
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let hasHitPiece = false
    for (let i = boardPosIndex + 7; i < model.board.length; i = i + 7) {
        if(currentPos.charAt(1) == 1 ) {break}
        if (model.board[i].currentPiece == '' && hasHitPiece == false && model.board[i].id.charAt(0) != currentPos.charAt(0)) {  
            model.board[i].color = model.legalMoveSquareColor
        }
        if (model.board[i].currentPiece != '' && hasHitPiece == false && model.board[i].id.charAt(0) != currentPos.charAt(0)) {
            if (model.board[i].currentPiece.includes(color) == true) {
                hasHitPiece = true
            } else {
                model.board[i].color = model.legalMoveSquareColor
                hasHitPiece = true
            }
        }
        if(model.board[i].id.charAt(1) == 1 ) {break}
    }
}

