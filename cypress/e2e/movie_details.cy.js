describe( 'Individual Movie Details', ( ) => {
	beforeEach( ( ) => {
		cy.visit( 'http://localhost:3000/337401' )
		cy.intercept( 
						'GET', 
						'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', 
						{ 
							statusCode: 201,
							fixtures: 'movieDetails.json'
						} 
					)
	} )

	it( "Should start the user on the Main Page", ( ) => {
		cy.contains( 'Tainted Peaches' )
	} )

	it( 'Should take the user to a new page when a movie poster is clicked', ( ) => {
		cy.url( )
		.should( 'include', '337401' )
	} )

	// it( 'Should display a background image of the Movie Selected for the user', ( ) => {
	// 	cy.get( 'img' )
	// 	.should( 'have.attr', 'src' )
	// 	.should( 'include', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg' )
	// } )
	
	it( 'Should display the Movie Details of the Movie Selected for the user', ( ) => {
		cy.contains( 'Mulan' )
		cy.contains( 'Movie Overview:' )
		cy.contains( 'When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.' )
		// cy.contains( 'Release Date:' )
		cy.contains( 'Release Date: 2020-09-04' )
		cy.contains( 'Genre:' )
		cy.contains( 'Action' )
		cy.contains( 'Adventure' )
		cy.contains( 'Drama' )
		cy.contains( 'Fantasy' )
		cy.contains( 'Runtime: 115' )
		// cy.contains( '115' )
		cy.contains( 'Revenue' ).should( 'not.exist' )
	} )

	it( 'Should show the user a Movie Trailer for the Movie Selected', ( ) => {
		cy.get( 'iframe' ).should( 'exist' )
	} );

	it( 'should show other video options as buttons that a user can click to view instead', ( ) => {
		cy.get( '.select-different-trailer-container' )
	  	.should( 'exist', 'button' )
		.get( 'button' )
		.last( )
		.click( { force: true } ) // DELETE { force: true } after stylilng is fixed. Can't detect, because it's covered by the trailer.
		cy.get( 'iframe' )
		.should( 'have.attr', 'src' )
		.should( 'include', '01ON04GCwKs' )

		// cy.get( '.select-different-trailer-container' )
	  	// .should( 'exist', 'button' )
		// .get( 'button' )
		// .last( )
		// .click( { force: true } ) // DELETE { force: true } after stylilng is fixed. Can't detect, because it's covered by the trailer.
		// cy.get( 'iframe' )
		// .should( 'have.attr', 'src' )
		// .should( 'include', 'KK8FHdFluOQ' )

		// cy.get( '.select-different-trailer-container' )
	  	// .should( 'exist', 'button' )
		// .get( 'button' )
		// .last( )
		// .click( { force: true } ) // DELETE { force: true } after stylilng is fixed. Can't detect, because it's covered by the trailer.
		// cy.get( 'iframe' )
		// .should( 'have.attr', 'src' )
		// .should( 'include', '1UXZEGYSwgg' )

		// cy.get( '.select-different-trailer-container' )
	  	// .should( 'exist', 'button' )
		// .get( 'button' )
		// .last( )
		// .click( { force: true } ) // DELETE { force: true } after stylilng is fixed. Can't detect, because it's covered by the trailer.
		// cy.get( 'iframe' )
		// .should( 'have.attr', 'src' )
		// .should( 'include', 'R-eFm--k21c' )

		cy.get( '.select-different-trailer-container' )
	  	.should( 'exist', 'button' )
		.get( 'button' )
		.last( )
		.click( { force: true } ) // DELETE { force: true } after stylilng is fixed. Can't detect, because it's covered by the trailer.
		cy.get( 'iframe' )
		.should( 'have.attr', 'src' )
		.should( 'include', 'bJbAZh3fv0g' )
	  } );

} )