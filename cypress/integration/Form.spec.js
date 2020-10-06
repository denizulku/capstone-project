/// <reference types="cypress" />

context('Create Habit', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Create')
  })
  it('creates a new habit', () => {
    cy.get('[data-cy=create]')

    cy.get('[data-cy=habits]').type('Swimming')

    cy.get('[data-cy=category]')
      .contains('category')
      .get('select')
      .select('Fitness')
      .should('have.value', 'Fitness')

    cy.get('.circle-picker').get('span').find('div')

    cy.get('button').click()
    cy.visit('http://localhost:3000/Dashboard')
  })
})
