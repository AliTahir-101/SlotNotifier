import 'cypress-xpath';

Cypress.Commands.add('getByXPath', (xpath) => {
  cy.xpath(xpath, { timeout: 30000 }).should('exist').clickByXPath();
});

Cypress.Commands.add('clickByXPath', { prevSubject: 'element' }, ($element) => {
  cy.wrap($element).click({ force: true });
});

Cypress.Commands.add("sendEmail", (subject, msg) => {
  const globalVariables = Cypress.env('globalVariables');
  const emailAddress = globalVariables.notificationEmailAddress;
  const sendGridToken = globalVariables.sendGridToken;
  cy.request({
    method: 'POST',
    url: 'https://api.sendgrid.com/v3/mail/send',
    headers: {
      'Authorization': 'Bearer ' + sendGridToken,
      'Content-Type': 'application/json'
    },
    body: {
      personalizations: [
        {
          to: [
            { email: emailAddress }
          ]
        }
      ],
      from: { email: emailAddress },
      subject: subject,
      content: [
        {
          type: 'text/plain',
          value: msg
        }
      ]
    }
  });
});
  
  