document.getElementById('donate-btn').addEventListener('click',function(){
    const donateAmount = document.getElementById('input-field').value;
    const currentAmount = document.getElementById('current-amount').innerText;
    const donateAmountNumber = parseFloat(donateAmount)
    const currentAmountNumber = parseFloat(currentAmount)

    const newAmount = donateAmountNumber + currentAmountNumber

    document.getElementById('current-amount').innerText = newAmount
    
    document.getElementById('input-field').value = ''
    
    
})