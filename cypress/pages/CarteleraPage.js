import CommonPage from './CommonPage'

class CarteleraPage {
  elements = {
    selectCityList: () =>
      cy
        .get('.ant-select-selection__placeholder')
        .contains('Seleccionar ciudad'),
    selectCityOption: () => cy.get('.ant-select-dropdown-menu').find('li'),
    selectThearerList: () =>
      cy
        .get('.ant-select-selection-selected-value')
        .contains('Todos los teatros'),
    selectThearerOption: () =>
      cy
        .get('.ant-select-dropdown-menu')
        .find('li')
        .contains('Lab v5 Multiplaza'),
    acceptButton: () => cy.get('div .content-btn-submit').find('button'),
    dateButton: () =>
      cy.get('.week', { timeout: 30000 }).find('.week__day').eq(1),
    sectionScheduleButton: () =>
      cy
        .get('div')
        .filter('.section-detail__schedule', { timeout: 20000 })
        .find('.section-detail__title')
        .contains('Wifi Ralph')
        .parents('.section-detail__schedule'),
    movieNameText: () =>
      cy.get('.detail-session__movie').find('.detail-session__movie-name'),
    confirmButton: () => cy.get('button').contains('CONFIRMAR'),
  }

  clickSelectCityList() {
    this.elements.selectCityList().click()
  }

  clickSelectCityOption() {
    this.elements.selectCityOption().click({ force: true })
  }

  clickSelectThearerList() {
    this.elements.selectThearerList().click()
  }

  clickSelectThearerOption() {
    this.elements.selectThearerOption().click({ force: true })
  }

  clickAccept() {
    this.elements.acceptButton().click()
  }

  clickDate() {
    CommonPage.valCompleteLoad()
    this.elements.dateButton().click({ force: true })
  }

  clickTime() {
    CommonPage.valCompleteLoad()
    this.elements
      .sectionScheduleButton()
      .should('exist')
      .then(($parent) => {
        cy.get($parent)
          .find('.sessions__button--runtime')
          .eq(0)
          .click({ force: true })
      })
  }

  validateMovieName() {
    this.elements.movieNameText().should('have.text', 'Wifi Ralph')
  }

  clickConfirm() {
    this.elements.confirmButton().click({ force: true })
  }
}

module.exports = new CarteleraPage()
