
function pawnMove() {
    let currentPos = model.inputs.currentlyMovingPiece.possison
    let currentPosIndex = findCurrentPosisonIndex(currentPos)
    if (model.inputs.currentlyMovingPiece.color == 'white') { getWhitePawnMoves(currentPosIndex) }
    else { getBlackPawnMoves(currentPosIndex) }
}

function getWhitePawnMoves(currentPosIndex) {
    whitePawnCapture(currentPosIndex)
    if (model.inputs.currentlyMovingPiece.hasMoved == false) { whitePawnDoubleMowe(currentPosIndex) }
    else { whitePawnSingleMowe(currentPosIndex) }
}

function whitePawnDoubleMowe(currentPosIndex) {
    let hasHitPiece = false
    if (currentPosIndex + 1 <= model.board.length) {
        if (checkForPiece(currentPosIndex + 1) == true) { hasHitPiece = true }
        else { model.board[(currentPosIndex + 1)].color = model.legalMoveSquareColor }
    }
    if (currentPosIndex + 2 <= model.board.length) {
        if (checkForPiece(currentPosIndex + 2) == false && hasHitPiece == false) {
            model.board[(currentPosIndex + 2)].color = model.legalMoveSquareColor
        }
    }
}

function whitePawnSingleMowe(currentPosIndex) {
    if (currentPosIndex + 1 <= model.board.length) {
        if (checkForPiece(currentPosIndex + 1) == false) {
            model.board[(currentPosIndex + 1)].color = model.legalMoveSquareColor
        }
    }
}

function whitePawnCapture(currentPosIndex) {
    if (currentPosIndex - 7 >= 0) {
        if (checkForPiece(currentPosIndex - 7) == true &&
            getPieceCollor(currentPosIndex - 7) != model.inputs.currentlyMovingPiece.color) {
            model.board[(currentPosIndex - 7)].color = model.legalMoveSquareColor
        }
    }
    if (currentPosIndex + 9 <= model.board.length) {
        if (checkForPiece(currentPosIndex + 9) == true &&
            getPieceCollor(currentPosIndex + 9) != model.inputs.currentlyMovingPiece.color) {
            model.board[(currentPosIndex + 9)].color = model.legalMoveSquareColor
        }
    }
}

function getBlackPawnMoves(currentPosIndex) {
    blackPawnCapture(currentPosIndex)
    if (model.inputs.currentlyMovingPiece.hasMoved == false) { blackPawnDoubleMowe(currentPosIndex) }
    else { blackPawnSingleMowe(currentPosIndex) }
}

function blackPawnDoubleMowe(currentPosIndex) {
    let hasHitPiece = false
    if (currentPosIndex - 1 >= 0) {
        if (checkForPiece(currentPosIndex - 1) == true) { hasHitPiece = true }
        else { model.board[(currentPosIndex - 1)].color = model.legalMoveSquareColor }
    }
    if (currentPosIndex - 2 >= 0) {
        if (checkForPiece(currentPosIndex - 2) == false && hasHitPiece == false) {
            model.board[(currentPosIndex - 2)].color = model.legalMoveSquareColor
        }
    }
}

function blackPawnSingleMowe(currentPosIndex) {
    if (currentPosIndex - 1 >= 0) {
        if (checkForPiece(currentPosIndex - 1) == false) {
            model.board[(currentPosIndex - 1)].color = model.legalMoveSquareColor
        }
    }
}

function blackPawnCapture(currentPosIndex) {
    if (currentPosIndex - 9 >= 0) {
        if (checkForPiece(currentPosIndex - 9) == true &&
            getPieceCollor(currentPosIndex - 9) != model.inputs.currentlyMovingPiece.color) {
            model.board[(currentPosIndex - 9)].color = model.legalMoveSquareColor
        }
    }
    if (currentPosIndex + 7 <= model.board.length) {
        if (checkForPiece(currentPosIndex + 7) == true &&
            getPieceCollor(currentPosIndex + 7) != model.inputs.currentlyMovingPiece.color) {
            model.board[(currentPosIndex + 7)].color = model.legalMoveSquareColor
        }
    }
}

function promotePawn(toPiece, imageIndex) {
    let pawn = model.allInPlayPieces[model.lastMovedPieceIndex]
    model.allInPlayPieces[model.lastMovedPieceIndex].id = pawn.id.replace('pawn', toPiece)
    if (pawn.color == 'black') { pawn.imageLink = model.promoteBlackImg[imageIndex] }
    else { pawn.imageLink = model.promoteWhiteImg[imageIndex] }
    closeModal()
}
