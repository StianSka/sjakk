function bishopMove() {
    let color = model.inputs.currentlyMovingPiece.color
    let currentPos = model.inputs.currentlyMovingPiece.possison
    diagonalUpRight(currentPos, color,)
    diagonalUpLeft(currentPos, color,)
    diagonalDownRight(currentPos, color,)
    diagonalDownLeft(currentPos, color,)
}

