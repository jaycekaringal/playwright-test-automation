# Run all BDD tests: npm run test:bdd
# Just this file: npx cucumber-js tests/features/login.feature
Feature: Login flow
  As a customer
  I want to sign in with my credentials
  So that I can access my account

  Scenario Outline: A user can open the login form with the documented credentials
    Given the user opens the sign in page
    When the user enters the "<role>" email and password
    Then the login form should accept the "<role>" values

    Examples:
      | role      |
      | admin     |
      | customer  |
      | customer2 |
