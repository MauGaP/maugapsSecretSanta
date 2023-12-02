# Secret Santa Application

## Overview

This Secret Santa application facilitates the organization of a Secret Santa gift exchange. It allows participants to be added, assigns Secret Santas randomly, and sends email notifications with assignments. The application supports both English and Spanish languages.

## Features

- **Participant Management**: Add and manage participants with names, emails, and exclusion lists.
- **Secret Santa Assignment**: Randomly assign Secret Santas among participants, ensuring that no one gets their excluded individuals or themselves.
- **Multilingual Support**: Seamlessly switch between English and Spanish.
- **Email Notifications**: Automatically send personalized email notifications to each participant with their Secret Santa assignment.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js
- **Email Service**: Nodemailer with Hotmail
- **Localization**: Support for both English and Spanish languages

## Setup and Installation

0. **Install Node.js**

1. **Clone the Repository**

`git clone https://github.com/MauGaP/maugapsSecretSanta`

2. **Install Dependencies**

`cd [project_directory]`

`npm install`

3. **Set Up Environment Variables**

Create a `.env` file in the root directory with the following content:

```
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

## Running the Application

1. **Start the Server**

`node ./server/server.js`

2. **Open the Application**

Access `index.html` in a web browser.

## Usage

1. **Add Participants**: Enter participant names, emails, and exclusion criteria.
2. **Assign Secret Santas**: Secret Santas are automatically assigned every time a field is modified.
3. **Send Email Notifications**: Notify participants of their assignments via email.

## Language Switching

The application allows users to switch between English and Spanish using a language selector.

## Contributing

Contributions are welcome. Please adhere to the standard fork, branch, and pull request workflow.

## License

MIT

## Contact

For inquiries or contributions, please contact MauGaP at linkedin.com/in/maugap.
