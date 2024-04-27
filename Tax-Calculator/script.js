// Function to calculate tax and redirect to result.html with tax amount
function calculateTax() {
    // Retrieve input values
    var grossIncome = parseFloat(document.getElementById("grossIncome").value);
    var extraIncome = parseFloat(document.getElementById("extraIncome").value);
    var ageGroup = document.getElementById("ageGroup").value;
    var deduction = parseFloat(document.getElementById("deduction").value);

    // Calculate total income
    var totalIncome = grossIncome + extraIncome;

    // Calculate taxable income after deductions
    var taxableIncome = totalIncome - deduction;

    // Determine tax rate based on age group
    var taxRate;
    switch (ageGroup) {
        case "<40":
            taxRate = 0.3; // Tax rate for age group <40 (30%)
            break;
        case "≥ 40 & < 60":
            taxRate = 0.4; // Tax rate for age group ≥40 & <60 (40%)
            break;
        case "≥ 60":
            taxRate = 0.1; // Tax rate for age group ≥60 (10%)
            break;
        default:
            taxRate = 0.2; // Default tax rate (20%)
            break;
    }

    // Calculate tax amount
    var taxAmount = taxableIncome * taxRate;

    // Redirect to result.html with tax amount as query parameter
    window.location.href = "result.html?tax=" + taxAmount.toFixed(2);
}

// Event listener for form submission
document.getElementById("taxForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Array of input field IDs
    var inputFields = ["grossIncome", "extraIncome", "deduction"];

    // Validate each input field
    var isError = false;
    var errors = document.getElementsByClassName("error-tooltip");
    for (var i = 0; i < inputFields.length; i++) {
        var field = inputFields[i];
        var value = document.getElementById(field).value.trim();
        var errorElement = document.getElementById(field + "Error");
        if (value === "" || isNaN(value)) {
            errors[i].classList.remove("hide"); // Show the error icon
            isError = true;
        } else {
            errors[i].classList.add("hide"); // Hide the error icon
        }
    }

    // If any input field has an error, stop the process
    if (isError) {
        return;
    }

    // If no errors, proceed to calculate tax and redirect
    calculateTax();
});
