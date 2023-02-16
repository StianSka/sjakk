function queenMove() {
    let color = model.inputs.currentlyMovingPiece.color
    let currentPos = model.inputs.currentlyMovingPiece.possison
    let numberIndex = model.arrayNumbers.indexOf(currentPos.charAt(1))
    horizontalMoveRight(currentPos, color)
    horizontalMoveLeft(currentPos, color)
    verticalMoveDown(numberIndex, currentPos, color)
    verticalMoveUp(numberIndex, currentPos, color)
    diagonalUpRight(currentPos, color,)
    diagonalUpRight(currentPos, color,)
    diagonalUpLeft(currentPos, color,)
    diagonalDownRight(currentPos, color,)
    diagonalDownLeft(currentPos, color,)
}




