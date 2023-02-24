// Set your app credentials
const credentials = {
  apiKey: "e5b5ea0d41dbd46733d8abdf4d30b05c6cd4d5923523559dd1ebaee7bab76d34",
  username: "alexkemboi97",
};

// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/sendText", (req, res) => {
  const toNumber = req.body.toNumber;
  const textMessage = req.body.textMessage;
  // code to handle form data
  const options = {
    // Set the numbers you want to send to in international format
    to: [toNumber],
    // Set your message
    message: textMessage,
    // Set your shortCode or senderId
    //from: 'XXYYZZ'
  };

  // That’s it, hit send and we’ll take care of the rest
  sms.send(options).then(console.log).catch(console.log);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
