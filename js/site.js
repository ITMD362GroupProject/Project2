// Menu button js
function redirectToShop() {
    // Replace the URL with the desired destination
    window.location.href = "https://thebigbeansevernapark.square.site/s/shop";
  }
//Contact Us Form Autofill
document.addEventListener("DOMContentLoaded", function () {

  let storedName = localStorage.getItem("name");
  let storedEmail = localStorage.getItem("email");
  let storedSubject = localStorage.getItem("subject");
  let storedMessage = localStorage.getItem("message");

  if (storedName) document.getElementById("name").value = storedName;
  if (storedEmail) document.getElementById("email").value = storedEmail;
  if (storedSubject) document.getElementById("subject").value = storedSubject;
  if (storedMessage) document.getElementById("message").value = storedMessage;
});
//Form Validation for Incomplete Fields
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
    alert("Please fill in all required fields");
    return false;
  }
  return true;
}
// Add an event listener
document.getElementById("contact-form").addEventListener("submit", function(event) {
  if (!validateForm()) {
  event.preventDefault(); 
  }
}
