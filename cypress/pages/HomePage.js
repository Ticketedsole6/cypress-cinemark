class HomePage {
  elements = {
    closePopUpButton: () =>
      cy.get('button .ant-modal-close-x', { timeout: 60000 }),
    startSessionButton: () =>
      cy.get('span div button').filter('[title="INICIAR SESIÓN"]'),
    usernameInput: () => cy.get('#MemberEmail'),
    passwordInput: () => cy.get('#MemberPassword'),
    loginButton: () => cy.get('button').filter('[title="Ingresar"]'),
    userTitleText: () =>
      cy
        .get('span')
        .filter('[title="Sundevs QA Automation BC"]', { timeout: 60000 }),
    billboardButton: () => cy.get('span').contains('cartelera'),
  }

  clickClosePopUp() {
    this.elements.closePopUpButton().click()
  }

  clickStartSession() {
    this.elements.startSessionButton().click()
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username)
  }

  typePassword(password) {
    this.elements.passwordInput().type(password)
  }

  clickLogin() {
    this.elements.loginButton().click()
  }

  validateUserTitle(userTitle) {
    this.elements.userTitleText().should('exist')
  }

  clickBillboard() {
    this.elements.billboardButton().click()
  }
}

module.exports = new HomePage()
