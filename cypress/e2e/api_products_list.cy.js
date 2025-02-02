
describe('API Test: GET /api/productsList', () => {
    it('Should return a list of products', () => {
      cy.fixture('productsList.json').then((fixtureData) => {
        cy.log('Fixture Data:', JSON.stringify(fixtureData, null, 2));
            
        cy.request('GET', 'https://automationexercise.com/api/productsList')
          .then((response) => {
            cy.log('API Response:', JSON.stringify(response.body, null, 2));
            expect(response.status).to.eq(200);
  
            expect(response.body).to.have.property('responseCode', fixtureData.responseCode);
            expect(response.body).to.have.property('products').to.be.an('array');
  
            const firstProduct = response.body.products[0];
            expect(firstProduct).to.deep.equal(fixtureData.products[0]);
  
            const secondProduct = response.body.products[1];
            expect(secondProduct).to.deep.equal(fixtureData.products[1]);
          });
      });
    });
  });