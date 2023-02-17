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

function openModal() { // Endrer modal modellen så den blir vist
    model.modal = 'block'
    updateView()
}

function closeModal() { // Endrer modal modellen så den blir lukket
    model.modal = 'none';
    updateView()
}