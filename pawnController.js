function pawnMove() {
    let pieceCollor = checkPieceColor()
    getLegalPawnMoves(pieceCollor)
} 

function checkPieceColor() {
    return model.inputs.currentlyMovingPiece.color
}

function getLegalPawnMoves(pieceCollor) {
    if (pieceCollor == 'white') {
        getlegaleWhitePawnMoves()
    }
    if (pieceCollor == 'black') {
        getlegaleBlackPawnMoves()
    }
}

function getlegaleWhitePawnMoves() {
    let moveOnePosible = false
    let currentPos = model.inputs.currentlyMovingPiece.possison
    let letterIndex = model.arrayLeters.indexOf(currentPos.charAt(0))
    let numberIndex = model.arrayNumbers.indexOf(currentPos.charAt(1))
   
    let forwardMove = (model.arrayLeters[letterIndex] + model.arrayNumbers[(numberIndex + 1)])
    let takeUp = (model.arrayLeters[(letterIndex - 1)] + model.arrayNumbers[(numberIndex + 1)])
    let takeDown = (model.arrayLeters[(letterIndex + 1)] + model.arrayNumbers[(numberIndex + 1)])

    if (model.inputs.currentlyMovingPiece.hasMoved == false) {
        let legalFirstMove = (model.arrayLeters[letterIndex] + model.arrayNumbers[(numberIndex + 2)])
        for (let i = 0; i < model.board.length; i++) {
            if (model.board[i].id == forwardMove && model.board[i].currentPiece == '') {
                model.board[i].color = model.legalMoveSquareColor
                moveOnePosible = true
            }
            if (model.board[i].id == legalFirstMove && model.board[i].currentPiece == '' && moveOnePosible == true) {
                model.board[i].color = model.legalMoveSquareColor
            }
            if (model.board[i].id == takeUp && model.board[i].currentPiece.includes('black')) {
                model.board[i].color = model.legalMoveSquareColor
            }
            if (model.board[i].id == takeDown && model.board[i].currentPiece.includes('black')) {
                model.board[i].color = model.legalMoveSquareColor
            }
        }
    } else {
        for (let i = 0; i < model.board.length; i++) {
            if (model.board[i].id == forwardMove && model.board[i].currentPiece == '') {
                model.board[i].color = model.legalMoveSquareColor
            }
            if (model.board[i].id == takeUp && model.board[i].currentPiece.includes('black')) {
                model.board[i].color = model.legalMoveSquareColor
            }
            if (model.board[i].id == takeDown && model.board[i].currentPiece.includes('black')) {
                model.board[i].color = model.legalMoveSquareColor
            }
        }
    }
}

function getlegaleBlackPawnMoves() {
    let currentPos = model.inputs.currentlyMovingPiece.possison
    let letterIndex = model.arrayLeters.indexOf(currentPos.charAt(0))
    let numberIndex = model.arrayNumbers.indexOf(currentPos.charAt(1))
   
    let forwardMove = (model.arrayLeters[letterIndex] + model.arrayNumbers[(numberIndex - 1)])
    let takeUp = (model.arrayLeters[(letterIndex - 1)] + model.arrayNumbers[(numberIndex - 1)])
    let takeDown = (model.arrayLeters[(letterIndex + 1)] + model.arrayNumbers[(numberIndex - 1)])

    if (model.inputs.currentlyMovingPiece.hasMoved == false) {
        let legalFirstMove = (model.arrayLeters[letterIndex] + model.arrayNumbers[(numberIndex - 2)])
        for (let i = 0; i < model.board.length; i++) {
            if (model.board[i].id == forwardMove && model.board[i].currentPiece == '') {
                model.board[i].color = model.legalMoveSquareColor
            }
            if (model.board[i].id == legalFirstMove && model.board[i].currentPiece == '' && model.board[(i+1)].currentPiece == '') {
                model.board[i].color = model.legalMoveSquareColor
            }
            if (model.board[i].id == takeUp && model.board[i].currentPiece.includes('white')) {
                model.board[i].color = model.legalMoveSquareColor
            }
            if (model.board[i].id == takeDown && model.board[i].currentPiece.includes('white')) {
                model.board[i].color = model.legalMoveSquareColor
            }
        }
    } else {
        for (let i = 0; i < model.board.length; i++) {
            if (model.board[i].id == forwardMove && model.board[i].currentPiece == '') {
                model.board[i].color = model.legalMoveSquareColor
            }
            if (model.board[i].id == takeUp && model.board[i].currentPiece.includes('white')) {
                model.board[i].color = model.legalMoveSquareColor
            }
            if (model.board[i].id == takeDown && model.board[i].currentPiece.includes('white')) {
                model.board[i].color = model.legalMoveSquareColor
            }
        }
    }
}