
@regression
Feature: Men Test

  Background: I open Url = https://magento.softwaretestingboard.com/
    Given : I am on homepage
@smoke
  Scenario: User Should Add Product SuccessFully To ShoppinCart
  When  Mouse Hover on Men Menu
  And   Mouse Hover on Bottoms
  And   Click on Pants
  And   Mouse Hover on product Name
  And   Mouse Hover on product Colour
  And   Mouse Hover on product and Add to Cart Button
  Then  Verity the Text you added cronus Yoga Pant to your shopping Cart
  And   Click on Shopping Cart Link into message
  Then  Verify The text Shopping Cart
  Then  Verity The Prodcut Name Cronus Yoga Pant
  Then  Verify Product Size 32
  Then  Verufy Product colour Black
