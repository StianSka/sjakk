function kingMove() {
    let color = model.inputs.currentlyMovingPiece.color
    let currentPos = model.inputs.currentlyMovingPiece.possison
    kingGoUp(currentPos, color, 7)
    kingGoUp(currentPos, color, 8)
    kingGoUp(currentPos, color, 9)
    kingGoDown(currentPos, color, 7)
    kingGoDown(currentPos, color, 8)
    kingGoDown(currentPos, color, 9)
    kingGoRight(currentPos, color)
    kingGoLeft(currentPos, color)
    isInCheck()
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
    if (model.board[i].currentPiece == '') {
        model.board[i].color = model.legalMoveSquareColor
    }
    if (model.board[i].currentPiece != '') {
        if (model.board[i].currentPiece.includes(color) == false) {
            model.board[i].color = model.legalMoveSquareColor
        }
    }
}
