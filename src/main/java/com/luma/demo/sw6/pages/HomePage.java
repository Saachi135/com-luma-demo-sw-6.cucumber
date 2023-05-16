package com.luma.demo.sw6.pages;

import com.luma.demo.sw6.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage(){
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(css = "a[id='ui-id-4'] span:nth-child(2)")
    WebElement womenMenu;
    @CacheLookup
    @FindBy(css = "a[id='ui-id-9'] span:nth-child(1)")
    WebElement womenTops;
    @CacheLookup
    @FindBy(css = "a[id='ui-id-11'] span:nth-child(1)")
    WebElement womenJackets;
    @CacheLookup
    @FindBy(css = "li.level0.nav-3>a.level-top.ui-corner-all>span:nth-of-type(1)")
    WebElement menMenu;
    @CacheLookup
    @FindBy(css = "#ui-id-18 span")
    WebElement menBottoms;
    @CacheLookup
    @FindBy(css = "#ui-id-23 span")
    WebElement menPants;
    @CacheLookup
    @FindBy(css = "a[id='ui-id-6'] span:nth-child(2)")
    WebElement gearMenu;
    @CacheLookup
    @FindBy(css = "a[id='ui-id-25'] span")
    WebElement bags;

    public void hoverOnGearMenu() {
        mouseHoverToElement(gearMenu);
    }

    public void clickOnBags() {
        clickOnElement(bags);
    }

    public void mouseHoverToWomenMenu() {
        mouseHoverToElement(womenMenu);

    }

    public void mouseHoverToWomenTops() {
        mouseHoverToElement(womenTops);
    }

    public void clickOnJackets() {
        clickOnElement(womenJackets);
    }

    public void mouseHoverToMenMenu() {
        mouseHoverToElement(menMenu);
    }

    public void mouseHoverToMenTops() {
        mouseHoverToElement(menBottoms);
    }

    public void clickOnPants() {
        clickOnElement(menPants);
    }
}
