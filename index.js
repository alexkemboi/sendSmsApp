// Set your app credentials
const credentials = {
  apiKey: "e5b5ea0d41dbd46733d8abdf4d30b05c6cd4d5923523559dd1ebaee7bab76d34",
  username: "alexkemboi97",
};

// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage(message) {
  const options = {
    // Set the numbers you want to send to in international format
    to: ["+254726837210"],
    // Set your message
    message: message,
    // Set your shortCode or senderId
    //from: 'XXYYZZ'
  };

  // That’s it, hit send and we’ll take care of the rest
  sms.send(options).then(console.log).catch(console.log);
}
const message = "Congratulations you sent your first message";

sendMessage(message);
