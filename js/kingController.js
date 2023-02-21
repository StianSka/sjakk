function kingMove() {
    isInCheck()
}

function findBlackKing() {
    let blackKingPos
    for (let i = 0; i < model.allInPlayPieces.length; i++) {
        if (model.allInPlayPieces[i].id == 'black king e') {
            blackKingPos = model.allInPlayPieces[i].possison
        }
    }
    return blackKingPos
}

function findWhiteKing() {
    let whiteKingPos
    for (let i = 0; i < model.allInPlayPieces.length; i++) {
        if (model.allInPlayPieces[i].id == 'white king e') {
            whiteKingPos = model.allInPlayPieces[i].possison
        }
    }
    return whiteKingPos
}

function isInCheck() {
    let blackKingPos = findBlackKing()
    let whiteKingPos = findWhiteKing()
    console.log(blackKingPos, whiteKingPos)
}