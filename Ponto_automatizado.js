
cy.visit('https://app.pmovel.com.br/registers');

cy.get('.btn btn-success');
cy.get('.btn btn-success').click();
cy.wait(5000);
cy.get('.btn btn-success').click();
