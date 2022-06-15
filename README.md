We are going to be using EmailJs!

This does not include saving information via form to your backend

Service we are using: https://www.emailjs.com/

Step 1: Go to https://www.emailjs.com/ and create a free account.

Step 2: Once you have created an account you will need to connect your email service. I have only used Gmail and I have only tested using gmail.

Step 3: Now you will want to click "Email Templates" on the left side and then click "Create new template". After formatting your template be sure to enter your email on the right side under "To email". Click Test if you want to send a test email or click save.

Step 4: Go back to https://www.emailjs.com/ and click docs at the top

Step 5: After clicking docs scroll down to "Examples" and click React

Step 6: Lines of code to copy are...
1. import emailjs from "emailjs-com";
2. function sendEmail(e) {
e.preventDefault();
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
.then((result) => {
console.log(result.text);
}, (error) => {
console.log(error.text);
});
}
