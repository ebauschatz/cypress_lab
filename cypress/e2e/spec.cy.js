describe('the test site', () => {
  it('can be accessed', () => {
    cy.visit('http://localhost:3000/')
    cy.get('p')
    cy.get('.App-link')
      .contains('Learn React')
    cy.get('button').click()
  })
})