function kingMove() {
    isInCheck()
}

function isInCheck() {
    let blackKingPos = model.board[model.currentIndexOfBlackKing].id
    let blackKingIndex = model.currentIndexOfBlackKing
    let blackKingLetter = model.board[model.currentIndexOfBlackKing].id.charAt(0)

    let whiteKingPos = model.board[model.currentIndexOfWhiteKing].id
    let whiteKingIndex = model.currentIndexOfWhiteKing
    let whiteKingLetter = model.board[model.currentIndexOfWhiteKing].id.charAt(0)

    if (blackKingPos.includes('8') == false) {
        lookForCheksRight('black', blackKingIndex, blackKingLetter)
    }
    if (whiteKingPos.includes('8') == false) {
        lookForCheksRight('white', whiteKingIndex, whiteKingLetter)
    }
    if (blackKingPos.includes('1') == false) {
        lookForCheksLeft('black', blackKingIndex, blackKingLetter)
    }
    if (whiteKingPos.includes('1') == false) {
        lookForCheksLeft('white', whiteKingIndex, whiteKingLetter)
    }
    if (blackKingPos.includes('a') == false) {
        lookForCheksUp('black', blackKingIndex, blackKingLetter)
    }
    if (whiteKingPos.includes('a') == false) {
        lookForCheksUp('white', whiteKingIndex, whiteKingLetter)
    }
}

function lookForCheksLeft(color, posIndex, currentLetter) {
    let i = (posIndex - 1)
    let hasHitPiece = false
    while (hasHitPiece == false && model.board[i].id.includes(currentLetter) == true) {

        if (model.board[i].currentPiece != '') {
            if (model.board[i].currentPiece.includes(color) == false) {
                if (model.board[i].currentPiece.includes('rook')) {
                    setKingInCheck(color)
                }
                if (model.board[i].currentPiece.includes('queen')) {
                    setKingInCheck(color)
                }
            }
            hasHitPiece = true
        }
        i--
    }

}

function lookForCheksRight(color, posIndex, currentLetter) {
    let i = (posIndex + 1)
    let hasHitPiece = false
    while (hasHitPiece == false && model.board[i].id.includes(currentLetter) == true) {

        if (model.board[i].currentPiece != '') {
            if (model.board[i].currentPiece.includes(color) == false) {
                if (model.board[i].currentPiece.includes('rook')) {
                    setKingInCheck(color)
                }
                if (model.board[i].currentPiece.includes('queen')) {
                    setKingInCheck(color)
                }
            }
            hasHitPiece = true
        }
        i++
    }
}

function lookForCheksUp(color, posIndex) {
    let i = (posIndex - 8)
    let hasHitPiece = false
    while (hasHitPiece == false && i >= 0) {
        console.log(model.board[i].id)
        if (model.board[i].currentPiece != '') {
            if (model.board[i].currentPiece.includes(color) == false) {
                if (model.board[i].currentPiece.includes('rook')) {
                    setKingInCheck(color)
                }
                if (model.board[i].currentPiece.includes('queen')) {
                    setKingInCheck(color)
                }
            }
            hasHitPiece = true
        }
        i = i - 8
    }
}

function lookForCheksDown(color, posIndex) {
    let i = (posIndex + 8)
    let hasHitPiece = false
    while (hasHitPiece == false && i < model.board.length) {
        console.log(model.board[i].id)
        if (model.board[i].currentPiece != '') {
            if (model.board[i].currentPiece.includes(color) == false) {
                if (model.board[i].currentPiece.includes('rook')) {
                    setKingInCheck(color)
                }
                if (model.board[i].currentPiece.includes('queen')) {
                    setKingInCheck(color)
                }
            }
            hasHitPiece = true
        }
        i = i + 8
    }
}

function setKingInCheck(color) {
    if (color == 'black') { model.blackIsInCheck = true }
    if (color == 'white') { model.whiteIsInCheck = true }
}