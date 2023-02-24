document.getElementById("sendBtn").addEventListener("click", () => {
  const toNumber = document.getElementById("phoneNumberId").value;
  const textMessage = document.getElementById("messageTextarea").value;
  const textData = { toNumber: toNumber, textMessage: textMessage };
  console.log(textData);
  fetch("http://localhost:3000/sendText", {
    method: "POST",    
    headers: { "content-type": "application/json" },
    body: JSON.stringify(textData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
});
