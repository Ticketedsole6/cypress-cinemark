class TipoAsientosPage {
  elements = {
    popUpModal: () =>
      cy.get('.ant-modal-content', { timeout: 60000 }).find('.ant-modal-body'),
    closeModalButton: () => cy.get('span').filter('.ant-modal-close-x'),
    seatsList: () =>
      cy.get('.select-seats').find('.ant-select-selection').eq(3),
    seatsOption: () => cy.get('.ant-select-dropdown-menu-item').contains('1'),
  }

  validateModal() {
    this.elements.popUpModal().should('be.visible')
  }

  clickCloseModal() {
    this.elements.closeModalButton().click({ force: true })
  }

  clickSeatsList() {
    this.elements.seatsList().click()
  }

  clickSeatsOption() {
    this.elements.seatsOption().click({ force: true })
  }
}

module.exports = new TipoAsientosPage()
