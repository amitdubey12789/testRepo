$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/demo.feature");
formatter.feature({
  "name": "Demo feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Opening the Google Home Page and Verifying logo",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User has the access to google page",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoDefinitions.user_has_the_access_to_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the google url and hits enter",
  "keyword": "When "
});
formatter.match({
  "location": "DemoDefinitions.user_enters_the_google_url_and_hits_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USer should be able to se the Google home page with Logo",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoDefinitions.user_should_be_able_to_se_the_Google_home_page_with_Logo()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.10.0\u0027, revision: \u0027176b4a9\u0027, time: \u00272018-03-02T19:03:16.397Z\u0027\nSystem info: host: \u0027LAPTOP-FNF86JGT\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.128, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\amit\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:65242}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b82971bf09c8e478d238734421c8dded\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getWindowHandle(RemoteWebDriver.java:518)\r\n\tat Utility.MyUnitTest.searchContent(MyUnitTest.java:77)\r\n\tat stepdefs.DemoDefinitions.user_should_be_able_to_se_the_Google_home_page_with_Logo(DemoDefinitions.java:32)\r\n\tat ✽.USer should be able to se the Google home page with Logo(src/test/resource/demo.feature:5)\r\n",
  "status": "failed"
});
});