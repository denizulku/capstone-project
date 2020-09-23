/// <reference types="cypress" />

context('Create Habit', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000//Create')
  })
  it('submits a new habit', () => {
    cy.get('[data-cy=create]')

    cy.get('[data-cy=habits]').type('TestHabit')

    cy.get('[data-cy=category]')
      .contains('category')
      .get('select')
      .select('Fitness')
      .should('have.value', 'Fitness')

    cy.get('.circle-picker')
  })
})
