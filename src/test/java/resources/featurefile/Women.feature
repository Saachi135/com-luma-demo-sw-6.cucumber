@regression
Feature: Women Test

  Background: I open Url = https://magento.softwaretestingboard.com/
    Given : I am on homepage
    When Mouse Hover on Women Menu
    And  Mouse Hover on Tops
    And   Click on Jackets

  @smoke
  Scenario: Verify The Sort By Product Name Filter

    And   Select Sort By filter “Product Name”
    Then  Verify the products name display in alphabetical order

  @sanity
  Scenario: Verify The Sort By Price Filter

    And Select Sort By filter “Price Filter”
    Then Verify the products name display by price low to high
