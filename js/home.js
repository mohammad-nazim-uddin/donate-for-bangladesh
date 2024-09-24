document.getElementById('donate-btn').addEventListener('click',function(){
    const donateAmount = getInputFieldById('input-field')
    const currentAmount = getTextFieldById('current-amount')

    const remainingAmount = getTextFieldById('remaining-amount')

    const newAmount = donateAmount + currentAmount

    const newRemainingAmount = remainingAmount - newAmount

    document.getElementById('current-amount').innerText = newAmount
    
    document.getElementById('input-field').value = ''

    document.getElementById('remaining-amount').innerText = newRemainingAmount
})

