function horseMove() {
    let color = model.inputs.currentlyMovingPiece.color
    let currentPos = model.inputs.currentlyMovingPiece.possison
    let letterIndex = model.arrayLeters.indexOf(currentPos.charAt(0))
    let numberIndex = model.arrayNumbers.indexOf(currentPos.charAt(1))
    horseMoveRight(letterIndex, numberIndex, color)
    horseMoveLeft(letterIndex, numberIndex, color)
    horseMoveUp(letterIndex, numberIndex, color)
    horseMoveDown(letterIndex, numberIndex, color)
}

function horseMoveRight(letterIndex, numberIndex, color){
    for (let i = 0; i < model.board.length; i++) {
        if (model.board[i].id == (model.arrayLeters[(letterIndex + 1)] + model.arrayNumbers[(numberIndex+2)])){
           if(model.board[i].currentPiece.includes(color)) {} 
           else {model.board[i].color = model.legalMoveSquareColor }
        }
        if (model.board[i].id == (model.arrayLeters[(letterIndex - 1)] + model.arrayNumbers[(numberIndex+2)])){
            if(model.board[i].currentPiece.includes(color)) {} 
           else {model.board[i].color = model.legalMoveSquareColor } 
        }
    }
}

function horseMoveLeft(letterIndex, numberIndex, color){
    for (let i = 0; i < model.board.length; i++) {
        if (model.board[i].id == (model.arrayLeters[(letterIndex + 1)] + model.arrayNumbers[(numberIndex-2)])){
           if(model.board[i].currentPiece.includes(color)) {} 
           else {model.board[i].color = model.legalMoveSquareColor }
        }
        if (model.board[i].id == (model.arrayLeters[(letterIndex - 1)] + model.arrayNumbers[(numberIndex-2)])){
            if(model.board[i].currentPiece.includes(color)) {} 
           else {model.board[i].color = model.legalMoveSquareColor } 
        }
    }
}

function horseMoveUp(letterIndex, numberIndex, color){
    for (let i = 0; i < model.board.length; i++) {
        if (model.board[i].id == (model.arrayLeters[(letterIndex - 2)] + model.arrayNumbers[(numberIndex+1)])){
            if(model.board[i].currentPiece.includes(color)) {} 
           else {model.board[i].color = model.legalMoveSquareColor }  
        }
        if (model.board[i].id == (model.arrayLeters[(letterIndex - 2)] + model.arrayNumbers[(numberIndex-1)])){
            if(model.board[i].currentPiece.includes(color)) {} 
           else {model.board[i].color = model.legalMoveSquareColor }  
        }
    }
}

function horseMoveDown(letterIndex, numberIndex, color){
    for (let i = 0; i < model.board.length; i++) {
        if (model.board[i].id == (model.arrayLeters[(letterIndex + 2)] + model.arrayNumbers[(numberIndex+1)])){
            if(model.board[i].currentPiece.includes(color)) {} 
           else {model.board[i].color = model.legalMoveSquareColor }  
        }
        if (model.board[i].id == (model.arrayLeters[(letterIndex + 2)] + model.arrayNumbers[(numberIndex-1)])){
            if(model.board[i].currentPiece.includes(color)) {} 
           else {model.board[i].color = model.legalMoveSquareColor }  
        }
    }
}