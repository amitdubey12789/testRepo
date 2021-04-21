/*
This comment is for Testing purpose
 */


package Utility;
//import org.junit.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Reporter;
import org.testng.annotations.Test;

//import static org.junit.Assert.assertEquals;
//import static org.graalvm.compiler.nodeinfo.Verbosity.Name;
import java.util.Iterator;
import java.util.Set;

import static org.openqa.selenium.By.*;
import static org.testng.Assert.assertEquals;

public class MyUnitTest {

    WebDriver driver;

    public void initiateBrowser() {

        System.setProperty("webdriver.chrome.driver", "C:\\Users\\amit\\Downloads\\chromedriver_win32\\chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    public String openTheSite() {

        driver.get("https://www.geeksforgeeks.org/");
        return driver.getTitle();
    }

    public void searchContent() throws InterruptedException {
        //driver.findElement(By.className("gfg-icon gfg-icon_search header--search__input-icon gfg-icon_search-gcse cursor-p")).click();
        driver.findElement(By.xpath("/html/body/div[1]/div[1]/ul[2]/li[1]/i[1]")).click();
        driver.findElement(By.id("gsc-i-id1")).sendKeys("Java");
        //driver.wait(30);
        //driver.findElement(By.id("gsc-i-id1")).submit();
        driver.findElement(By.id("gsc-i-id1")).sendKeys(Keys.ENTER);

        WebDriverWait wait2 = new WebDriverWait(driver, 10);
        wait2.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"___gcse_0\"]/div/div/div[1]/div[1]")));
        driver.findElement(By.xpath("//*[@id=\"___gcse_0\"]/div/div/div[1]/div[1]")).click();
        driver.close();












        //WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(30));
        //wait.Until(ExpectedConditions.ElementIsVisible(By.xpath("//*[@id=\"___gcse_0\"]/div/div/div[1]/div[1]")));
//        driver.wait(30);
        //driver.findElement(By.xpath("//div[@class='gsc-results-close-btn gsc-results-close-btn-visible']")).click();
        //driver.findElement(By.name("q")).sendKeys("UBS");
        //driver.findElement(By.name("q")).submit();
        //driver.wait(6000);
         String parent = driver.getWindowHandle();
        System.out.println("Parent Window ID is " + " " +parent);

        Set<String> pops = driver.getWindowHandles();
        System.out.println("Size of the Set is " + pops.size());

        //driver.findElement(By.xpath("//*[@id=\"___gcse_0\"]/div/div/div[1]/div[1]")).click();


        Iterator<String> it = pops.iterator();
        while (it.hasNext()) {

            String popupHandle = it.next().toString();
            if (popupHandle.contains(parent)) {
                driver.switchTo().window(popupHandle);
                System.out.println("Pop Up Title: " + driver.switchTo().window(popupHandle).getTitle());
               // driver.findElement(By.className("gsc-results-close-btn gsc-results-close-btn-visible")).click();
            }
        }
    }
    public void closeBrowser () {

           driver.quit();
        }


    }