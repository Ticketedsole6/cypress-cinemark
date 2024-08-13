import HomePage from '../pages/HomePage'
import CarteleraPage from '../pages/CarteleraPage'
import TipoAsientosPage from '../pages/TipoAsientosPage'
import CommonPage from '../pages/CommonPage'
import SeleccionarAsientosPage from '../pages/SeleccionarAsientosPage'
import ConfiteriaPage from '../pages/ConfiteriaPage'
import PagoPage from '../pages/PagoPage'
import DetallesCompraPage from '../pages/DetallesCompraPage'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
  HomePage.clickClosePopUp()
  HomePage.clickStartSession()
  HomePage.typeUsername(username)
  HomePage.typePassword(password)
  HomePage.clickLogin()
  HomePage.validateUserTitle()
})

Cypress.Commands.add('setCityTheater', () => {
  HomePage.clickBillboard()
  CarteleraPage.clickSelectCityList()
  CarteleraPage.clickSelectCityOption()
  CarteleraPage.clickSelectThearerList()
  CarteleraPage.clickSelectThearerOption()
  CarteleraPage.clickAccept()
})

Cypress.Commands.add('setDateTime', () => {
  CarteleraPage.clickDate()
  CarteleraPage.clickTime()
  CarteleraPage.validateMovieName()
  CarteleraPage.clickConfirm()
})

Cypress.Commands.add('setSeatsNumber', () => {
  TipoAsientosPage.validateModal()
  TipoAsientosPage.clickCloseModal()
  TipoAsientosPage.clickSeatsList()
  TipoAsientosPage.clickSeatsOption()
  CommonPage.clickContinue()
})

Cypress.Commands.add('setSeats', () => {
  SeleccionarAsientosPage.setSeat()
  CommonPage.clickContinue()
  SeleccionarAsientosPage.validateModal()
  SeleccionarAsientosPage.clickConfirm()
})

Cypress.Commands.add('addCombo', () => {
  ConfiteriaPage.addCombo()
  CommonPage.clickContinue()
  cy.wait(2000)
  CommonPage.clickContinue()
})

Cypress.Commands.add(
  'setPersonalData',
  (name, lastName, dni, city, address, phone, email) => {
    PagoPage.clickPersonType()
    PagoPage.typeName(name)
    PagoPage.typeLastName(lastName)
    PagoPage.clickDocumentType()
    PagoPage.typeDni(dni)
    PagoPage.typeCity(city)
    PagoPage.typeAddress(address)
    PagoPage.typePhone(phone)
    PagoPage.typeEmail(email)
  }
)

Cypress.Commands.add('setCardData', (cardNumber, cardName, cvv) => {
  PagoPage.clickNewCard()
  PagoPage.typeCardNumber(cardNumber)
  PagoPage.typeCardName(cardName)
  PagoPage.setExpirationdate()
  PagoPage.typeCvv(cvv)
  PagoPage.setInstallments()
  PagoPage.clickAgreement()
  CommonPage.clickContinue()
})
