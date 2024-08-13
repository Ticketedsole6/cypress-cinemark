import PagoPage from '../pages/PagoPage'
import DetallesCompraPage from '../pages/DetallesCompraPage'

const loginData = require('../fixtures/login.json')
const personalData = require('../fixtures/personalData.json')
const cardData = require('../fixtures/cardData.json')

describe('Buy cinema ticket', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should display QR purchase confirmation', () => {
    //login
    cy.login(loginData.username, loginData.password)

    // select city and theater
    cy.setCityTheater()

    // select date and time
    cy.setDateTime()

    // select seats number
    cy.setSeatsNumber()

    // select seats
    cy.setSeats()

    //add combo
    cy.addCombo()

    // set personal data
    cy.setPersonalData(
      personalData.name,
      personalData.lastName,
      personalData.dni,
      personalData.city,
      personalData.address,
      personalData.phone,
      personalData.email
    )

    // set card data
    cy.setCardData(cardData.cardNumber, cardData.cardName, cardData.cvv)

    // payment confirm
    PagoPage.clickAcceptPayment()

    // validate qr
    DetallesCompraPage.validateQr()
  })
})
