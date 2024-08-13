import RandomNumGen from '../utils/RandomNumGen'

class SeleccionarAsientosPage {
  elements = {
    seatAvailableButton: () => cy.get('button').filter('.seat-item--available'),
    body: () => cy.get('body'),
    popUpButton: () => cy.get('.ant-modal .ant-modal-body').find('button'),
    popUpModal: () => cy.get('.ant-modal-content').find('.ant-modal-body'),
    confirmModalButton: () =>
      cy.get('.ant-modal-body div button').filter('[title="confirmar"]'),
  }

  clickSeatAvailable() {
    this.elements
      .seatAvailableButton()
      .its('length')
      .then((seats) => {
        this.elements
          .seatAvailableButton()
          .eq(RandomNumGen.getRandNum(seats))
          .click()
      })
  }

  clickModalError() {
    this.elements.body().then(($body) => {
      const elementExist = $body.find('.ant-modal .ant-modal-body')
      if (elementExist.is(':visible')) {
        this.elements.popUpButton().click({ force: true })
        this.setSeat()
      }
    })
  }

  setSeat() {
    this.clickSeatAvailable()
    cy.wait(2000)
    this.clickModalError()
  }

  validateModal() {
    this.elements.popUpModal().should('be.visible')
  }

  clickConfirm() {
    this.elements.confirmModalButton().click()
  }
}

module.exports = new SeleccionarAsientosPage()
