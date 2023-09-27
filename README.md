# 🌟 Embassy Appointment Slot Notifier

**Description:** This project automates the process of checking for available appointment slots on the Embassy's services website. When available slots are found, it sends an email notification to the specified address.

## Table of Contents

- [Support](#support)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Disclaimer](#Disclaimer)

## Support

This project provides support for finding appointment slots at both the Finnish Embassy and the German Embassy. Whether you're looking for Finnish Embassy appointment slots or German Embassy slots for summer or any other specific requirements, this project is designed to automate the process and notify you when slots become available.

- **Finnish Embassy Slots**: You can configure this project to find and notify you about available appointment slots at the Finnish Embassy. Customize the settings in `cypress.env.json` to match your Finnish Embassy portal details.

- **German Embassy Slots**: Additionally, this project extends its support to find German Embassy appointment slots.

This dual support makes the Embassy Appointment Slot Notifier versatile and suitable for various appointment needs, whether it's for travel, study, or any other purpose.

✨ **What's New?**

- Enhanced reliability and flexibility in slot checking.
- Support for both Finnish and German Embassy appointment slots.
- Improved email notifications to keep you informed.
- Seamless integration with your personal email for notifications.

Don't miss out on the enhanced capabilities and ease of use. We recommend transitioning to the this latest Cypress-based version for an even smoother experience. Explore the project and stay ahead in your appointment scheduling journey! 🤖✨

## Prerequisites

Before you begin, ensure you have met the following requirements:

1. **Node.js and npm**: Ensure you have Node.js and npm (Node Package Manager) installed on your system. If not, you can download and install them from the official [Node.js website](https://nodejs.org/).

2. **Python (>=3.x)**: You'll need Python (version 3.x or higher) installed on your system. If you don't have Python already, you can download and install it from the official [Python website](https://www.python.org/downloads/). For Windows users, make sure to select the "Add Python to PATH" option during installation.

3. **Git**: Ensure you have Git installed on your system. If not, you can download and install it from the official Git website.

4. **SendGrid account**: Set up a free SendGrid account and obtain an API key to enable email notifications. Ensure that your personal email address used for notifications is verified on SendGrid.

## Getting Started

To get started with this project, follow these steps:

- Clone this repository to your local machine:
  ```shell
  git clone git@github.com:AliTahir-101/slot-notifier-cypress.git
  ```
- Navigate to the project directory:
  ```shell
  cd slot-notifier-cypress
  ```
- You should have Cypress and the Cypress XPath plugin installed in your Cypress project. You can install them using the following command within your slot-notifier-cypress project directory:
  ```bash
  npm install cypress cypress-xpath --save-dev
  ```

## Usage

To use this project, follow these steps:

- Update the configuration variables in `cypress.env.json` to match your requirements.
  ```shell
  {
    "globalVariables": {
        "notificationEmailAddress": "your_personal_email_verified_on_sendgrid",
        "sendGridToken": "your_sendgrid_token"
    },
    "forFinnishEmbassyAppointmentSlot": {
        "vfsGlobalUsername": "your_portal_email",
        "vfsGlobalPassword": "your_portal_pass"
    }
  }
  ```
- Open a Terminal: Open a terminal or command prompt.
- Navigate to the Project Root: Navigate to the root directory of your Cypress project (where main.py is located).
- From within slot-notifier-cypress project directory Run the Python Script: Run the Python script using the following command: (you can use python or python3 as per your installation)
  ```shell
  python main.py
  ```
- Choose a Test Script: The script will prompt you to choose a Cypress test script to run. Enter the corresponding number for your selected test script.
- Specify Wait Interval: Specify the wait interval (in minutes) between test runs. This interval helps avoid IP bans when repeatedly accessing a website.
- Automated Execution: The selected Cypress test script will run in headless mode, and the script will wait for the specified interval before running it again.
- Continuous Execution: The script will continue running the selected test script at the specified interval until you manually stop it.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

- Fork the project and create a new branch for your feature or bug fix.

- Make your changes and ensure they are well-tested.

- Create a pull request with a clear description of your changes.

- Follow the project's code of conduct and respect the contribution guidelines.

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](https://github.com/AliTahir-101/slot-notifier-cypress/blob/main/LICENSE) file for details.

## Disclaimer

This project is provided for educational and demonstration purposes only. It should be used responsibly and in compliance with the terms of service and policies of any websites or services it interacts with. Unauthorized scraping or any other activity that violates the terms of service of third-party websites is not condoned and should be avoided.

Before using this project, please review and respect the terms of service, privacy policies, and usage guidelines of any websites or services you intend to interact with. The author of this project is not responsible for any misuse or violations of such terms.

Use this project responsibly and ensure that your actions align with legal and ethical standards.
