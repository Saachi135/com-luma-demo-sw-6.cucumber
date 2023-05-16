$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Gear.feature");
formatter.feature({
  "line": 2,
  "name": "Gear Test",
  "description": "",
  "id": "gear-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "duration": 15264010500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should be able to Add Product SuccessFully To Shopping Cart",
  "description": "",
  "id": "gear-test;user-should-be-able-to-add-product-successfully-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Mouse Hover on Gear Menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Bags",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Product Name Overnight Duffle",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Verifies text Overnight Duffle",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User changes quantity to 3",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User verifies the text You added Overnight Duffle to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks onShopping cart link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User verifies Product name",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User verifies Product Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Verifies Product price",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User changed quantity from 3 to 5",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User updated Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User verifies Product total price",
  "keyword": "Then "
});
formatter.match({
  "location": "GearSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 551260100,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userMouseHoverOnGearMenu()"
});
formatter.result({
  "duration": 760217200,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userClicksOnBags()"
});
formatter.result({
  "duration": 2747071800,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userClickOnProductNameOvernightDuffle()"
});
formatter.result({
  "duration": 2395861400,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userVerifiesTextOvernightDuffle()"
});
formatter.result({
  "duration": 821687700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "GearSteps.userChangesQuantityTo(int)"
});
formatter.result({
  "duration": 306502000,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userClicksOnAddToCartButton()"
});
formatter.result({
  "duration": 439650000,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userVerifiesTheTextYouAddedOvernightDuffleToYourShoppingCart()"
});
formatter.result({
  "duration": 1475194600,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userClicksOnShoppingCartLink()"
});
formatter.result({
  "duration": 2331389100,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userVerifiesProductName()"
});
formatter.result({
  "duration": 425125900,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userVerifiesProductQuantity()"
});
formatter.result({
  "duration": 521354100,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userVerifiesProductPrice()"
});
formatter.result({
  "duration": 340588900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    },
    {
      "val": "5",
      "offset": 32
    }
  ],
  "location": "GearSteps.userChangedQuantityFromTo(int,int)"
});
formatter.result({
  "duration": 171322100,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userUpdatedShoppingCart()"
});
formatter.result({
  "duration": 198284700,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userVerifiesProductTotalPrice()"
});
formatter.result({
  "duration": 4399089000,
  "status": "passed"
});
formatter.after({
  "duration": 1598961300,
  "status": "passed"
});
formatter.uri("Women.feature");
formatter.feature({
  "line": 2,
  "name": "Women Test",
  "description": "",
  "id": "women-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 8655847900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I open Url \u003d https://magento.softwaretestingboard.com/",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": ": I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Mouse Hover on Women Menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Mouse Hover on Tops",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Jackets",
  "keyword": "And "
});
formatter.match({
  "location": "WomenSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 84900,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.mouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 813261500,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.mouseHoverOnTops()"
});
formatter.result({
  "duration": 263523800,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.clickOnJackets()"
});
formatter.result({
  "duration": 2816581400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify The Sort By Price Filter",
  "description": "",
  "id": "women-test;verify-the-sort-by-price-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Select Sort By filter “Price Filter”",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the products name display by price low to high",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.selectSortByFilterPriceFilter()"
});
formatter.result({
  "duration": 3005542300,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.verifyTheProductsNameDisplayByPriceLowToHigh()"
});
formatter.result({
  "duration": 1343470200,
  "status": "passed"
});
formatter.after({
  "duration": 1387913800,
  "status": "passed"
});
});