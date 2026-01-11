document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('fd-form');
    const result = document.getElementById('result');
    const maturityAmountSpan = document.getElementById('maturity-amount');
    const interestEarnedSpan = document.getElementById('interest-earned');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get input values
        const principal = parseFloat(document.getElementById('amount').value);
        const years = parseFloat(document.getElementById('years').value);
        const rate = parseFloat(document.getElementById('rate').value);

        // Calculate interest and maturity amount
        const interest = (principal * rate * years) / 100;
        const maturityAmount = principal + interest;

        // Display results
        result.classList.remove('hidden');
        maturityAmountSpan.textContent = maturityAmount.toFixed(2);
        interestEarnedSpan.textContent = interest.toFixed(2);
    });
});