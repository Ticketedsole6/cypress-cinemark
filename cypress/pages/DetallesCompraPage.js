class DetallesCompraPage {
  elements = {
    qrImage: () => cy.get('.qr', { timeout: 120000 }),
  }

  validateQr() {
    this.elements.qrImage().should('be.visible')
  }
}

module.exports = new DetallesCompraPage()
