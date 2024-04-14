// Function to add the salary amount
function addSalary() {
    // Get currency selection
    const currency = document.getElementById("currency").value;

    // Get salary input
    const salary = parseFloat(document.getElementById("salary").value);

    // Validate input
    if (isNaN(salary) || salary <= 0) {
        alert("Please enter a valid salary amount.");
        return;
    }

    // Display salary amount with currency
    document.getElementById("remainingAmount").textContent = "Remaining Amount: " + currency + " " + salary.toFixed(2);
}

// Function to add a new expense row to the table
function addExpense() {
    // Get expense name and amount from input fields
    const expenseName = document.getElementById("expenseName").value;
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

    // Validate input
    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }

    // Check if maximum number of expenses reached
    const tableBody = document.getElementById("expenseTable").getElementsByTagName("tbody")[0];
    if (tableBody.rows.length >= 20) {
        alert("Maximum number of expenses reached (10).");
        return;
    }

    // Create new row
    const newRow = tableBody.insertRow();

    // Insert cells into the new row
    const cellName = newRow.insertCell(0);
    const cellAmount = newRow.insertCell(1);

    // Set the cell values
    cellName.textContent = expenseName;
    cellAmount.textContent = expenseAmount.toFixed(2);

    // Clear input fields
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}

// Function to calculate the remaining budget
function calculateBudget() {
    // Get currency selection
    const currency = document.getElementById("currency").value;

    // Get salary input
    const salary = parseFloat(document.getElementById("salary").value);

    // Get total expenses
    let totalExpenses = 0;
    const expenseRows = document.getElementById("expenseTable").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    for (let i = 0; i < expenseRows.length; i++) {
        totalExpenses += parseFloat(expenseRows[i].cells[1].textContent);
    }

    // Calculate remaining budget
    const remainingBudget = salary - totalExpenses;

    // Display remaining budget with currency
    document.getElementById("remainingAmount").textContent = "Remaining Amount: " + currency + " " + remainingBudget.toFixed(2);
}

// Event listeners
document.getElementById("addSalaryBtn").addEventListener("click", addSalary);
document.getElementById("addExpenseBtn").addEventListener("click", addExpense);
document.getElementById("calculateBtn").addEventListener("click", calculateBudget);
