class PagoPage {
  elements = {
    personTypeList: () =>
      cy.get('#payment_type', { timeout: 20000 }).find('.ant-select-selection'),
    personTypeOption: () =>
      cy.get('.ant-select-dropdown-menu li').contains('Natural'),
    nameInput: () => cy.get('#payment_name'),
    lastNameInput: () => cy.get('#payment_lastName'),
    documentTypeList: () =>
      cy.get('#payment_documentType').find('.ant-select-selection'),
    documentTypeOption: () =>
      cy.get('.ant-select-dropdown-menu li').contains('Cédula de ciudadanía'),
    dniNumberInput: () => cy.get('#payment_dniNumber'),
    cityList: () => cy.get('#payment_city').find('input'),
    cityOption: () =>
      cy.get('.ant-select-dropdown-menu li').contains('BOGOTA D.C., BOGOTÁ'),
    addressInput: () => cy.get('#payment_address'),
    phoneInput: () => cy.get('#payment_contactPhone'),
    emailInput: () => cy.get('#payment_emailAddress'),
    cardButton: () => cy.get('.ant-collapse-item').first(),
    cardNumberInput: () =>
      cy.get('input').filter('[id="payment_creditCard.number"]'),
    cardNameInput: () =>
      cy.get('input').filter('[id="payment_creditCard.name"]'),
    expirationDateInput: () =>
      cy
        .get('span')
        .filter('[id="payment_creditCard.expirationDate"]')
        .find('input'),
    nextYearButton: () => cy.get('.ant-calendar-month-panel-next-year-btn'),
    monthBotton: () =>
      cy.get('.ant-calendar-month-panel-month').contains('may.'),
    cvvInput: () =>
      cy.get('input').filter('[id="payment_creditCard.securityCode"]'),
    installmentsList: () =>
      cy
        .get('div')
        .filter('[id="payment_creditCard.installments"]')
        .find('.ant-select-selection'),
    installmentsOption: () =>
      cy.get('.ant-select-dropdown-menu li').contains('1'),
    agreementCheck: () => cy.get('#payment_agreement'),
    alertModal: () =>
      cy
        .get('.ant-modal .ant-modal-body')
        .find('h3')
        .contains('¿Estás seguro de realizar el pago?'),
    acceptButton: () => cy.get('button').filter('[title="ACEPTAR"]'),
  }

  clickPersonType() {
    this.elements.personTypeList().click()
    this.elements.personTypeOption().click()
  }

  typeName(name) {
    this.elements.nameInput().clear().type(name)
  }

  typeLastName(lastName) {
    this.elements.lastNameInput().clear().type(lastName)
  }

  clickDocumentType() {
    this.elements.documentTypeList().click()
    this.elements.documentTypeOption().click()
  }

  typeDni(dni) {
    this.elements.dniNumberInput().clear().type(dni)
  }

  typeCity(city) {
    this.elements.cityList().clear().type(city)
    this.elements.cityOption().click()
  }

  typeAddress(address) {
    this.elements.addressInput().clear().type(address)
  }

  typePhone(phone) {
    this.elements.phoneInput().clear().type(phone)
  }

  typeEmail(email) {
    this.elements.emailInput().clear().type(email)
  }

  clickNewCard() {
    this.elements.cardButton().click()
  }

  typeCardNumber(cardNumber) {
    this.elements.cardNumberInput().clear().type(cardNumber)
  }

  typeCardName(cardName) {
    this.elements.cardNameInput().clear().type(cardName)
  }

  setExpirationdate() {
    this.elements.expirationDateInput().click()
    this.elements.nextYearButton().click({ force: true })
    this.elements.monthBotton().click()
  }

  typeCvv(cvv) {
    this.elements.cvvInput().clear().type(cvv)
  }

  setInstallments() {
    this.elements.installmentsList().click()
    this.elements.installmentsOption().click()
  }

  clickAgreement() {
    this.elements.agreementCheck().click()
  }

  clickAcceptPayment() {
    this.elements.alertModal().should('be.visible')
    this.elements.acceptButton().click()
  }
}

module.exports = new PagoPage()
