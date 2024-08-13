class CommonPage {
  elements = {
    continueButton: () => cy.get('button').filter('[title="continuar"]'),
    document: () => cy.document(),
  }

  clickContinue() {
    this.elements.continueButton().click()
  }

  valCompleteLoad() {
    this.elements.document().its('readyState').should('eq', 'complete')
  }
}

module.exports = new CommonPage()
