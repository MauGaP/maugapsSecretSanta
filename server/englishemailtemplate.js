function createSecretSantaEmailEN(receiverName, secretSantaFor) {
  return `
    <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    text-align: center;
                    padding: 20px;
                }
                .container {
                    background-color: #fff;
                    border-radius: 10px;
                    padding: 20px;
                    margin: 20px auto;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    font-size: 24px;
                    color: #d33;
                }
                .message {
                    font-size: 16px;
                }
            </style>
        </head>
            <body>
            <div class="container">
                <div class="header">🎅 Secret Santa Assignment 🎅</div>
                <div class="message">
                    <p>Hello <strong>${receiverName}</strong>,</p>
                    <p>🎄 You have been chosen to be the Secret Santa for: <strong>${secretSantaFor}</strong>!</p>
                    <p>Remember, it's a secret and have fun picking a 🎁gift🎁!!</p>
                    <p>🌟Happy Holidays!🌟</p>
                </div>
            </div>
        </body>
    </html>`;
}

module.exports = createSecretSantaEmailEN;
