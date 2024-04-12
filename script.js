// Function to send verification code
function sendVerificationCode() {
    // Get the phone number from the form
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Generate a random verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    // Display the verification code (for demonstration)
    alert("Your verification code is: " + verificationCode);
}

// Define the function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission

    // Get the verification code from the form
    const enteredVerificationCode = document.getElementById('verificationCode').value;

    // You can add your verification logic here
    // For demonstration purposes, let's just log the verification code to the console
    alert("You are sucessfully Signup");
    console.log("Entered verification code:", enteredVerificationCode);
    window.location.href = "login_after.html";

}

// Attach the event listener to the form's submit event
document.getElementById('verificationForm').addEventListener('submit', handleFormSubmission);

