describe('Individual Movie Details', () => {
	beforeEach(() => {
		cy.intercept(
			'GET',
			'https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
			{
				statusCode: 201,
				fixtures: 'movieDetails.json'
			}
		)
		cy.visit('http://localhost:3000/tainted-peaches/337401')
	});

	it("Should start the user on the Main Page", () => {
		cy.contains('Tainted Peaches')
	});

	it('Should take the user to a new page when a movie poster is clicked', () => {
		cy.url()
			.should('include', '337401')
	});

	it('Should display that the page is loading if it doesn\'t display immediately', () => {
		cy.get('.error-message')
			.should('contain', 'Loading...')
	});

	it('Should display the Movie Details of the Movie Selected for the user', () => {
		cy.contains('Mulan')
		cy.contains('When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.')
		cy.contains('This movie is named Mulan.').should('not.exist')
		cy.contains('Release Date: September 4, 2020')
		cy.contains('Genre:')
		cy.contains('Action')
		cy.contains('Adventure')
		cy.contains('Drama')
		cy.contains('Fantasy')
		cy.contains('Science Fiction').should('not.exist')
		cy.contains('Runtime: 115')
		cy.contains('Runtime: 89').should('not.exist')
	});

	it('Should show the user a Movie Trailer for the Movie Selected', () => {
		cy.get('.movie-trailer')
			.should('exist', 'iframe')
			.get('iframe')
			.should('have.attr', 'src')
			.should('include', '01ON04GCwKs')
	});

	it('should show ALL movie trailer options as buttons that a user can click to view', () => {
		cy.get('.select-different-trailer-container')
			.get('.movie-trailer-buttons').eq(0)
			.should('have.attr', 'url')
			.should('include', '01ON04GCwKs')

		cy.get('.select-different-trailer-container')
			.get('.movie-trailer-buttons').eq(1)
			.should('have.attr', 'url')
			.should('include', 'KK8FHdFluOQ')

		cy.get('.select-different-trailer-container')
			.get('.movie-trailer-buttons').eq(2)
			.should('have.attr', 'url')
			.should('include', '1UXZEGYSwgg')

		cy.get('.select-different-trailer-container')
			.get('.movie-trailer-buttons').eq(3)
			.should('have.attr', 'url')
			.should('include', 'R-eFm--k21c')

		cy.get('.select-different-trailer-container')
			.get('.movie-trailer-buttons').eq(4)
			.last()
			.should('have.attr', 'url')
			.should('include', 'bJbAZh3fv0g')
	});
});