function calculateEPF() {
    const monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
    const investmentDuration = parseFloat(document.getElementById('investmentDuration').value);

    if (!monthlyContribution || !annualInterestRate || !investmentDuration) {
        alert('Please fill all fields');
        return;
    }

    const monthlyInterestRate = (annualInterestRate / 12) / 100;

    const numberOfMonths = investmentDuration * 12;

    let totalAmount = 0;
    for (let i = 0; i < numberOfMonths; i++) {
        totalAmount = (totalAmount + monthlyContribution) * (1 + monthlyInterestRate);
    }

    document.getElementById('epfAmount').innerText = totalAmount.toFixed(2);
    document.getElementById('result').style.display = 'block';
}