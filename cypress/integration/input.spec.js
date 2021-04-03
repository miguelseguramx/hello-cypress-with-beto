describe('Mi Pagina funciona', () => {
  it('Puedo entrar correctamente', () => {
    cy.visit('/')
  })
  it('Mi pagina se renderiza correctament', () => {
    cy.get('#name-input')
      .should('exist')
    cy.get('#name-btn')
      .should('exist')
  })
  it('La pagina me saluda', () => {
    cy.get('#name-input')
      .type('Random')
    cy.get('#name-btn')
      .click()
    cy.get('#name')
      .should('have.text', 'Hola, Bienvenido a Cypress Random')
  })
})

