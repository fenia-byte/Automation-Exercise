import { postReq } from "../fixtures/jsonPlaceholderPostReq.json";


Cypress.Commands.add(
    "createPost",
    (number=101) => {
      cy.fixture("jsonPlaceholderPostReq").then(() => {
        postReq.id = number;
        postReq.title="Quality"
       cy.request({
          method: "POST",
          url: "https://jsonplaceholder.typicode.com/posts",
           body: postReq,
        }).then((resp) => {
          return  resp;
        });
      });
    }
  );