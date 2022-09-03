
describe('Main movie card display page', () => {
  it('Should load the page', () => {
    cy.visit('http://localhost:3000/');
  })

  it('Should show an error message on the page if the servers are down', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
      {
        statusCode: 401
      }
    )
      .get('h1')
      .should('contain', 'Our apologies, but our servers are temporarily down. Please try again later.')
  });

  it('Should have a nav bar', () => {
    cy.get('.navbar')
  })

  it('Should display the logo', () => {
    cy.get('.tainted-peach-image')
  })

  it('Should contain the title', () => {
    cy.contains("Tainted Peaches")
  })

  it('Should populate the page with all of the movies', () => {
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
  })

  it('Should be able to go back to main page by clicking back button', () => {
    cy.go('back')
      .url().should("include", "/")
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

  it('Should have links', () => {
    cy.get('[href="https://www.linkedin.com/in/jordan-farelli/"]')
    cy.get('[href="https://github.com/jfarelli"]')
    cy.get('[href="https://www.linkedin.com/in/anthonyshellman/"]')
    cy.get('[href="https://github.com/Ant-Shell"]')
  })
})