Feature: Catalog shopping flow
  As a customer
  I want to browse the catalog and purchase an item
  So that I can complete a checkout

  Scenario: Selecting a product, adding it to the cart, and checking out
    Given the user opens the home page
    When the user opens the Hand Tools category
    And the user selects the first product
    And the user adds it to the cart
    Then the cart should contain the selected product
    And the user should be able to continue to checkout
