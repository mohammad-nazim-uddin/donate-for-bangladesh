
function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber
}

function getTextFieldById(id){
    const textValue = document.getElementById(id).innerText
    const textNumber = parseFloat(textValue);
    return textNumber
}


function showSectionById(id){
    document.getElementById('donation-home').classList.add('hidden')
    document.getElementById('donation-history').classList.add('hidden')
    
    document.getElementById(id).classList.remove('hidden')
}