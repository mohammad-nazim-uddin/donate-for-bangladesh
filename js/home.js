document.getElementById('donate-btn').addEventListener('click', function () {
    const donateAmount = getInputFieldById('input-field')
    const currentAmount = getTextFieldById('current-amount')

    const remainingAmount = getTextFieldById('remaining-amount')

    if (isNaN(donateAmount) || donateAmount <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    const newAmount = donateAmount + currentAmount

    const newRemainingAmount = remainingAmount - newAmount

    document.getElementById('current-amount').innerText = newAmount

    document.getElementById('input-field').value = ''

    document.getElementById('remaining-amount').innerText = newRemainingAmount

    alert(`Your money added to the fund`)

    const p = document.createElement('p');
    p.innerText = `donate amount ${donateAmount} successfully`;

    document.getElementById('donation-history').appendChild(p)

})

