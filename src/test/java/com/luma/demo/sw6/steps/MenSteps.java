package com.luma.demo.sw6.steps;

import com.luma.demo.sw6.pages.HomePage;
import com.luma.demo.sw6.pages.MensPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class MenSteps {
    @When("^Mouse Hover on Men Menu$")
    public void mouseHoverOnMenMenu() {
        new HomePage().mouseHoverToMenMenu();
    }

    @And("^Mouse Hover on Bottoms$")
    public void mouseHoverOnBottoms() {
        new HomePage().mouseHoverToMenTops();
    }

    @And("^Click on Pants$")
    public void clickOnPants() {
        new HomePage().clickOnPants();
    }

    @And("^Mouse Hover on product Name$")
    public void mouseHoverOnProductName() {
        new MensPage().hoverAndClickProduct();
    }

    @And("^Mouse Hover on product Colour$")
    public void mouseHoverOnProductColour() {
        new MensPage().hoverAndClickProductColour();
    }

    @And("^Mouse Hover on product and Add to Cart Button$")
    public void mouseHoverOnProductAndAddToCartButton() {
        new MensPage().hoverAndClickOnAddToCartButton();
    }

    @Then("^Verity the Text you added cronus Yoga Pant to your shopping Cart$")
    public void verityTheTextYouAddedCronusYogaPantToYourShoppingCart() {
        Assert.assertEquals(new MensPage().getTextAddedPantToShoppingCart(),"You added Cronus Yoga Pant to your shopping cart.","Error");

    }

    @And("^Click on Shopping Cart Link into message$")
    public void clickOnShoppingCartLinkIntoMessage() {
        new MensPage().clickOnShoppingCart();
    }

    @Then("^Verify The text Shopping Cart$")
    public void verifyTheTextShoppingCart() {
        Assert.assertEquals(new MensPage().getTextShoppingCart(), "Shopping Cart", "Error");
    }

    @Then("^Verity The Prodcut Name Cronus Yoga Pant$")
    public void verityTheProdcutNameCronusYogaPant() {
        Assert.assertEquals(new MensPage().getTextCronusYogaPant(),"Cronus Yoga Pant","Error");

    }

    @Then("^Verify Product Size (\\d+)$")
    public void verifyProductSize(int arg0) {
        Assert.assertEquals(new MensPage().getTextSize32(),"32","Error");

    }

    @Then("^Verufy Product colour Black$")
    public void verufyProductColourBlack() {
        Assert.assertEquals(new MensPage().getTextBlack(),"Black","Error");

    }
}
