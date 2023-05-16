package com.luma.demo.sw6.steps;

import com.luma.demo.sw6.pages.HomePage;
import com.luma.demo.sw6.pages.WomenPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WomenSteps {

    @Given("^: I am on homepage$")
    public void iAmOnHomepage() {
    }

    @Given("^Mouse Hover on Women Menu$")
    public void mouseHoverOnWomenMenu() {
      new HomePage().mouseHoverToWomenMenu();

    }
    @When("^Mouse Hover on Tops$")
    public void mouseHoverOnTops() {
        new HomePage().mouseHoverToWomenTops();

    }

    @And("^Click on Jackets$")
    public void clickOnJackets() {
        new HomePage().clickOnJackets();
    }

    @And("^Select Sort By filter “Product Name”$")
    public void selectSortByFilterProductName() {
        new WomenPage().selectSortByFilterProductName();
    }

    @Then("^Verify the products name display in alphabetical order$")
    public void verifyTheProductsNameDisplayInAlphabeticalOrder() {
        new WomenPage().verifyProductsNameAlphabeticalOrder();
    }

    @And("^Select Sort By filter “Price Filter”$")
    public void selectSortByFilterPriceFilter() {
        new WomenPage().selectSortByFilterPrice();
    }

    @Then("^Verify the products name display by price low to high$")
    public void verifyTheProductsNameDisplayByPriceLowToHigh() {
        new WomenPage().verifyProductsPriceLowToHigh();
    }
}
