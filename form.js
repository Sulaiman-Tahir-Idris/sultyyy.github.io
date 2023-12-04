/* form.js */

// Add your form-specific scripts here
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Add logic to handle form submission (e.g., sending data to a server)
    alert("Form submitted!"); // Example alert, replace with your form submission code
    // You can also close or hide the form after submission if needed
    document.getElementById("hire-form").style.display = "none";
});

function openHireForm() {
    // Add logic to show or open the form
    document.getElementById("hire-form").style.display = "block";
}
// form.js

// Add your form-specific scripts here
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Add logic to handle form submission (e.g., sending data to a server)
    alert("Form submitted successfully!"); // Example alert, replace with your form submission code
    // Hide the form after submission
    document.getElementById("hire-form").style.display = "none";
    // Show a success message or confirmation
    document.getElementById("success-message").style.display = "block";
});

function openHireForm() {
    // Add logic to show or open the form
    document.getElementById("hire-form").style.display = "block";
    // Hide the success message if it was displayed previously
    document.getElementById("success-message").style.display = "none";
}

// Function to navigate back to the index page
function navigateToIndex() {
    window.location.href = "index.html";
}
