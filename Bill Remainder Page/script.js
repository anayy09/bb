// Get the form and table body elements
const billForm = document.getElementById("bill-form");
const tableBody = document.getElementById("bill-list");

// Add a submit event listener to the form
billForm.addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent form submission
	
	// Get the form input values
	const productName = document.getElementById("product-name").value;
	const amount = document.getElementById("amount").value;
	const dueDate = document.getElementById("due-date").value;
	
	// Calculate the days left until the due date
	const today = new Date();
	const dueDateObj = new Date(dueDate);
	const daysLeft = Math.ceil((dueDateObj - today) / (1000 * 60 * 60 * 24));
	
	// Create a new table row
	const newRow = tableBody.insertRow(-1);
	
	// Insert cells in the row
	const productNameCell = newRow.insertCell(0);
	const amountCell = newRow.insertCell(1);
	const dueDateCell = newRow.insertCell(2);
	const daysLeftCell = newRow.insertCell(3);
	
	// Set the cell values
	productNameCell.innerHTML = productName;
	amountCell.innerHTML = amount;
	dueDateCell.innerHTML = dueDate;
	daysLeftCell.innerHTML = daysLeft;
	
	// Reset the form
	billForm.reset();
});
