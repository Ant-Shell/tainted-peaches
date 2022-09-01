describe('Main movie card display page', () => {
  it('Should load the page', () => {
    cy.visit('http://localhost:3000/');
  })

  it('Should have a nav bar', () =>{
    cy.get('.navbar')
  })

  it('Should display the logo',  () => {
    cy.get('.tainted-peach-image')
  })

  it('Should contain the title', () => {
    cy.contains("Tainted Peaches")
  })

  it('Should populate the page with all of the movies', () =>{
    cy.get('.individual-movie-card')
  })

  it('Should populate with movie images', () => {
    cy.get('.movie-card-image')
  })

  it('Should populate with a collection of movies', () => {
    cy.get('.movie-card-collection')
  })

  it('Should be able to click a movie', () => {
    cy.get('img[id=694919]')
    .click()
    cy.go('back')
  })

  it('Should not have a Take Me Home button', () => {
    cy.get('button').should('not.exist')
  })

  it('Should have a footer', () => {
    cy.get('.footer-container')
  })

  it('Should display developers names', () => {
    cy.contains('Jordan Farelli')
    cy.contains('Anthony Shellman')
  })

  it('Should have icons', () => {
    cy.get('.linkedin-icon')
    cy.get('.github-icon')
  })

  // it ('Should verify links', () => {
    // Github link verification
    // Linkedin link verification
  // })
  
})