describe('tainted peaches main display page', () => {
  it('Should load the page', () => {
    cy.visit('http://localhost:3000/');
  })

  it('Should contain the title', () => {
    cy.contains("Tainted Peaches")
  })

  it('Should populate the page with all of the movies', () =>{
    cy.get(".individual-movie-card")
  })
})