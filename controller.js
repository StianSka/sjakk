function switchPage(location){
    model.curentPage = location
    show()
}

function applyColors(){
    model.selectedColorBlack = model.inputs.blackColor;
    model.selectedColorWhite = model.inputs.whiteColor;
    colorBoard()
    updateView()
}

function toogleSquareId(){
    if(model.inputs.showSquareId == false){
        model.inputs.showSquareId = true
    } else {
        model.inputs.showSquareId = false
    }
    updateView()
}
