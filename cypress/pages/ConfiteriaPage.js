import RandomNumGen from '../utils/RandomNumGen'

class ConfiteriaPage {
  elements = {
    combosBox: () => cy.get('#Combos .candy-store__item', { timeout: 20000 }),
    plusButton: () => '.candy-store__btn-control--left-space',
  }

  addCombo() {
    this.elements
      .combosBox()
      .its('length')
      .then((combos) => {
        this.elements
          .combosBox()
          .eq(RandomNumGen.getRandNum(combos))
          .find(this.elements.plusButton())
          .click({ force: true })
      })
  }
}

module.exports = new ConfiteriaPage()
