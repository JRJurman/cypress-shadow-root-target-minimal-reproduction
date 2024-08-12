This Project is a minimal reproduction of a test failure detected in the Tram-Deco project.
For the purposes of this reproduction, we use no libraries other than the original Web Platform APIs.

To run the project locally, install the dependencies and then run the tests:
```sh
npm ci
npm test
```

`npm test` will kick off cypress, and you can run the `spec.cy.js` file in `e2e` to see the failing test.
