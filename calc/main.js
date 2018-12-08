document.getElementById('loan-form').addEventListener('submit', calcLoanResults);

function calcLoanResults(e) {

    const amount = document.getElementById("amount"),
          interest = document.getElementById("interest"),
          years = document.getElementById("years");
          
    const monthlyPayment = document.getElementById("monthly-payment"),
          totalPayment = document.getElementById("total-payment"),
          totalInterest = document.getElementById("total-interest");

    const calcPrinciple = parseFloat(amount.value),
          calcInterest = parseFloat(interest.value) / 100 / 12,
          calcPayment = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calcInterest, calcPayment);
    const monthly = (calcPrinciple * x * calcInterest) / (x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calcPayment).toFixed(2);
        totalInterest.value = ((monthly * calcPayment) - calcPrinciple).toFixed(2);
    } else {
        //console.log('Please check numbers');
        showError('Please check your numbers');
    }
    e.preventDefault();
}

function showError(error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));

    const card = document.querySelector(".card"),
          heading = document.querySelector(".heading");

    card.insertBefore(errorDiv, heading);
}
