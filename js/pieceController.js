function movePiece(div) {
    let divId = div.id
    model.inputs.pieceIsPrimed = false
    primePieceToMove(divId)
    movePrimedPiece(divId)
    updateView()
}

function primePieceToMove(divId) {
    if (model.inputs.currentlyMovingPiece == '') {
        for (let i = 0; i < model.allInPlayPieces.length; i++) {
            if (divId == model.allInPlayPieces[i].possison
                && model.allInPlayPieces[i].color == model.colorToMove) {
                model.inputs.currentlyMovingPiece = model.allInPlayPieces[i]
                model.inputs.pieceIsPrimed = true
                for (let j = 0; j < model.board.length; j++) {
                    if (model.board[j].id == divId) {
                        model.board[j].color = '#5db549'
                        getPieceType()
                    }
                }
            }
        }
    }
}

function movePrimedPiece(divId) {
    let clikedSquareIndex = ''
    if (model.inputs.currentlyMovingPiece != '' && model.inputs.pieceIsPrimed == false) {
        clikedSquareIndex = findClickedScuare(divId)
        if (model.board[clikedSquareIndex].color == model.legalMoveSquareColor) {
            makeMockMove(clikedSquareIndex, divId)
        }
        else {
            model.inputs.currentlyMovingPiece = ''
            applyColors()
        }
    }
}

function makeMockMove(squareToMoveTo, divId) {
    let square = squareToMoveTo
    let squareToEmpty = model.inputs.currentlyMovingPiece.possison

    model.inputs.currentlyMovingPiece.possison = divId
    if (model.inputs.currentlyMovingPiece.hasMoved != undefined) {
        model.inputs.currentlyMovingPiece.hasMoved = true
    }
    if (model.board[square].currentPiece != '') { capturePiece(square) }
    model.board[square].currentPiece = model.inputs.currentlyMovingPiece.id
    checkIfPawn()
    applyMove(squareToEmpty)
}

function applyMove(squareToEmpty) {
    for (let i = 0; i < model.board.length; i++) {
        if (squareToEmpty == model.board[i].id) {
            model.board[i].currentPiece = ''
        }

    }
    for (let i = 0; i < model.allInPlayPieces.length; i++) {
        if (model.allInPlayPieces[i].id == model.inputs.currentlyMovingPiece.id) {
            if (model.inputs.currentlyMovingPiece.id.includes('king') == true) {
                changeKingIndex(model.inputs.currentlyMovingPiece.possison)
            }
            model.allInPlayPieces[i] = model.inputs.currentlyMovingPiece
            model.lastMovedPieceIndex = i
        }
    }
    model.inputs.currentlyMovingPiece = ''
    applyColors()
}

function changeKingIndex(square) {
    let boardPosIndex = findCurrentPosisonIndex(square)
    if (model.inputs.currentlyMovingPiece.color == 'black') {
        model.currentIndexOfBlackKing = boardPosIndex
    }
    else {model.currentIndexOfWhiteKing = boardPosIndex}
}

function checkIfPawn() {
    if (model.inputs.currentlyMovingPiece.id.includes('pawn') == true &&
        model.inputs.currentlyMovingPiece.possison.includes('8') == true) {
        openModal()
    }
    if (model.inputs.currentlyMovingPiece.id.includes('pawn') == true &&
        model.inputs.currentlyMovingPiece.possison.includes('1') == true) {
        openModal()
    }
}

function findClickedScuare(divId) {
    let square = ''
    for (let i = 0; i < model.board.length; i++) {
        if (model.board[i].id == divId) {
            square = model.board[i].index
        }
    }
    return square
}

function getPieceType() {
    let piece = model.inputs.currentlyMovingPiece.id
    if (piece.includes('pawn') == true) {
        pawnMove()
    }
    if (piece.includes('rook') == true) {
        rookMove()
    }
    if (piece.includes('horse') == true) {
        horseMove()
    }
    if (piece.includes('bishop') == true) {
        bishopMove()
    }
    if (piece.includes('queen') == true) {
        queenMove()
    }
    if (piece.includes('king') == true) {
        kingMove()
    }
}


function checkForPiece(index) {
    if (model.board[index].currentPiece == '') { return false }
    else { return true }
}

function getPieceCollor(index) {
    if (model.board[index].currentPiece.includes('white') == true) { return 'white' }
    else { return 'black' }
}

function checkPieceColor() {
    return model.inputs.currentlyMovingPiece.color
}

function capturePiece(index) {
    for (let i = 0; i < model.allInPlayPieces.length; i++) {
        if (model.board[index].currentPiece == model.allInPlayPieces[i].id) {
            model.allInPlayPieces.splice(i, 1)
        }
    }
}

function findCurrentPosisonIndex(currentPos) {
    let index = 0
    for (let i = 0; i < model.board.length; i++) {
        if (model.board[i].id == currentPos) {
            index = i
        }
    }
    return index
}




