package stepdefs;
import static org.testng.Assert.assertEquals;
import Utility.MyUnitTest;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class DemoDefinitions {

    MyUnitTest MUT = new MyUnitTest();

    String PageTitle;
    @Given("^User has the access to google page$")
    public void user_has_the_access_to_google_page() throws Exception {
       MUT.initiateBrowser();

    }

    @When("^User enters the google url and hits enter$")
    public void user_enters_the_google_url_and_hits_enter() throws Exception {
        PageTitle = MUT.openTheSite();
        //MUT.searchContent();


    }

    @Then("^USer should be able to se the Google home page with Logo$")
    public void user_should_be_able_to_se_the_Google_home_page_with_Logo() throws Exception {
//assertEquals("Google",PageTitle);
        MUT.searchContent();

     // MUT.closeBrowser();
    }


}
