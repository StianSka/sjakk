function kingMove() {
    let color = model.inputs.currentlyMovingPiece.color
    let currentPos = model.inputs.currentlyMovingPiece.possison
    console.log(currentPos)
    if (currentPos.includes('a') == false) {
        kingGoUp(currentPos, color, 8)
    }
    if (currentPos.includes('a') == false && currentPos.includes(1) == false) {
        kingGoUp(currentPos, color, 9)
    }
    if (currentPos.includes('a') == false && currentPos.includes(8) == false) {
        kingGoUp(currentPos, color, 7)
    }
    if (currentPos.includes('h') == false) {
        kingGoDown(currentPos, color, 8)
    }
    if (currentPos.includes('h') == false && currentPos.includes(1) == false) {
        kingGoDown(currentPos, color, 7)
    }
    if (currentPos.includes('h') == false && currentPos.includes(8) == false) {
        kingGoDown(currentPos, color, 9)
    }
    if (currentPos.includes(8) == false) {
        kingGoRight(currentPos, color)
    }
    if (currentPos.includes(1) == false) {
        kingGoLeft(currentPos, color)
    }
    // isInCheck()
}

function kingGoRight(currentPos, color) {
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let i = (boardPosIndex + 1)
    if (model.board[i].currentPiece == '') {
        model.board[i].color = model.legalMoveSquareColor
    }
    if (model.board[i].currentPiece != '') {
        if (model.board[i].currentPiece.includes(color) == false) {
            model.board[i].color = model.legalMoveSquareColor
        }
    }
}

function kingGoLeft(currentPos, color) {
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let i = (boardPosIndex - 1)
    if (model.board[i].currentPiece == '') {
        model.board[i].color = model.legalMoveSquareColor
    }
    if (model.board[i].currentPiece != '') {
        if (model.board[i].currentPiece.includes(color) == false) {
            model.board[i].color = model.legalMoveSquareColor
        }
    }
}

function kingGoUp(currentPos, color, direction) {
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let i = (boardPosIndex - direction)
    if (model.board[i].currentPiece == '') {
        model.board[i].color = model.legalMoveSquareColor
    }
    if (model.board[i].currentPiece != '') {
        if (model.board[i].currentPiece.includes(color) == false) {
            model.board[i].color = model.legalMoveSquareColor
        }
    }
}

function kingGoDown(currentPos, color, direction) {
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let i = (boardPosIndex + direction)
    if (i < 64) {
        if (model.board[i].currentPiece == '') {
            model.board[i].color = model.legalMoveSquareColor
        }
        if (model.board[i].currentPiece != '') {
            if (model.board[i].currentPiece.includes(color) == false) {
                model.board[i].color = model.legalMoveSquareColor
            }
        }
    }
}
