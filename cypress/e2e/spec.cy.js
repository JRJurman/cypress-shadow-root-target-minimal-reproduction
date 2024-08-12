describe('template spec', () => {
  it('tests counter buttons', () => {
    cy.visit('../../example.html');

    // works on all browsers
    cy.get('my-counter#a').should('have.attr', 'count', '0');
		cy.get('my-counter#a').shadow().find('button').click();
		cy.get('my-counter#a').should('have.attr', 'count', '1');

    // does not work on chromium browsers
    cy.get('my-counter#b').should('have.attr', 'count', '0');
		cy.get('my-counter#b').shadow().find('button').click();
		cy.get('my-counter#b').should('have.attr', 'count', '1');
  })
})
