function horizontalMoveRight(currentPos, color) {
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let hasHitPieceRight = false
    let indexRight = 0
    for (let i = (boardPosIndex + 1); i < model.board.length; i++) {
        if (model.board[i].id.includes(currentPos.charAt(0)) == true && model.board[i].currentPiece == '' && hasHitPieceRight == false) {
            model.board[i].color = model.legalMoveSquareColor
        }
        if (model.board[i].currentPiece != '' && model.board[i].id.includes(currentPos.charAt(0)) == true && hasHitPieceRight == false) {
            hasHitPieceRight = true;
            indexRight = i;
        }
    }
    if (indexRight != 0) {
        if (model.board[indexRight].currentPiece.includes(color) == false && model.board[indexRight].id.includes(currentPos.charAt(0)) == true) {
            model.board[indexRight].color = model.legalMoveSquareColor
        }
    }
}


function horizontalMoveLeft(currentPos, color) {
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let hasHitPieceLeft = false
    let indexLeft = 0
    for (let i = (boardPosIndex - 1); i > 0; i--) {
        if (model.board[i].id.includes(currentPos.charAt(0)) == true && model.board[i].currentPiece == '' && hasHitPieceLeft == false) {
            model.board[i].color = model.legalMoveSquareColor
        }
        if (model.board[i].currentPiece != '' && model.board[i].id.includes(currentPos.charAt(0)) == true && hasHitPieceLeft == false) {
            hasHitPieceLeft = true;
            indexLeft = i;
        }
    }

    if (model.board[indexLeft].currentPiece.includes(color) == false && model.board[indexLeft].id.includes(currentPos.charAt(0)) == true) {
        model.board[indexLeft].color = model.legalMoveSquareColor
    }

}


function verticalMoveDown(numberIndex, currentPos, color) {
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let hasHitPieceDown = false
    let indexDown = 0
    numberIndex++
    for (let i = boardPosIndex + 1; i < model.board.length; i++) {
        if (model.board[i].id.includes(numberIndex) == true && model.board[i].currentPiece == '' && hasHitPieceDown == false) {
            model.board[i].color = model.legalMoveSquareColor
        }
        if (model.board[i].currentPiece != '' && model.board[i].id.includes(numberIndex) == true && hasHitPieceDown == false) {
            hasHitPieceDown = true;
            indexDown = i;
        }
    }
    if (indexDown != 0) {
        if (model.board[indexDown].currentPiece.includes(color) == false && model.board[indexDown].id.includes(numberIndex) == true) {
            model.board[indexDown].color = model.legalMoveSquareColor
        }
    }
}

function verticalMoveUp(numberIndex, currentPos, color) {
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let hasHitPieceUp = false
    let indexUp = 0
    numberIndex++
    for (let i = boardPosIndex - 1; i >= 0; i--) {
        if (model.board[i].id.includes(numberIndex) == true && model.board[i].currentPiece == '' && hasHitPieceUp == false) {
            model.board[i].color = model.legalMoveSquareColor
        }
        if (model.board[i].currentPiece != '' && model.board[i].id.includes(numberIndex) == true && hasHitPieceUp == false) {
            hasHitPieceUp = true;
            indexUp = i;
        }
    }
    if (indexUp != 0) {
        if (model.board[indexUp].currentPiece.includes(color) == false && model.board[indexUp].id.includes(numberIndex) == true) {
            model.board[indexUp].color = model.legalMoveSquareColor
        }
    }
    if (indexUp == 0 && hasHitPieceUp == true) {
        if (model.board[indexUp].currentPiece.includes(color) == false && model.board[indexUp].id.includes(numberIndex) == true) {
            model.board[indexUp].color = model.legalMoveSquareColor
        }
    }
}


