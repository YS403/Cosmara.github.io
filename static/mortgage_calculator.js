// add event listener to the button with id "calculate-btn", to trigger calculations when clicked.
document.getElementById("calculate-btn").addEventListener("click",function (e){
// Retrieve and parse the user input values for loan amount, loan term, and monthly income through DOM.
    var loan_amount = parseFloat(document.getElementById("loan_amount").value);
    var loan_term = parseFloat(document.getElementById("loan_term").value);
    var monthly_income = parseFloat(document.getElementById("monthly_income").value);
 // Validate the loan amount input
    if (isNaN(loan_amount) || loan_amount <= 0) {
        alert("Please enter a valid loan amount.");
        return;
    }
 // Validate the loan term input
    if (isNaN(loan_term) || loan_term <= 0) {
        alert("Please enter a valid loan term (in years).");
        return;
    }
  // Validate the monthly income input.
    if (isNaN(monthly_income) || monthly_income <= 0) {
        alert("Please enter a valid monthly income.");
        return;
    }
// Define the annual interest rate (fixed at 4.5% therefore as constant) and calculate the monthly interest rate.
    const annual_interest_rate = 4.5 / 100; 
    var monthly_interest_rate = annual_interest_rate / 12; 

// Calculate the total number of payments based on the loan term
    var number_of_payments = loan_term * 12;
    
// numerator = P * r * (1 + r)^n
// denominator = (1 + r)^n - 1
    var numerator = loan_amount * monthly_interest_rate * ((1+monthly_interest_rate) ** number_of_payments);
    var denominator = ((1+monthly_interest_rate)** number_of_payments) - 1;
    var monthly_payment = numerator / denominator;
    
// assign the affordability threshold as 30% of the monthly income.
    var threshold = monthly_income * 0.30;

// check If the calculated monthly payment exceeds the affordability threshold:
    if (monthly_payment > threshold) {
          // Hide the bank information and payment result sections.
        document.getElementById("bank-info").style.display = "none"
        document.getElementById("payment-result").style.display = "none"
        // Display the denial message section to show that the loan is unaffordable.
        document.getElementById("denial-message").style.display = "block"
        return;
    }
        // If the loan is affordable:

    else{
        // Update the payment result with the formatted monthly payment value.
        document.getElementById("monthly_payment").innerHTML = monthly_payment.toFixed(2);
        // Hide the bank information and denial message sections.
        document.getElementById("bank-info").style.display = "none"
        document.getElementById("denial-message").style.display = "none"
        // Display the payment result section to show the user the monthly payment details.
        document.getElementById("payment-result").style.display = "block"

        
    
    }



    
});

