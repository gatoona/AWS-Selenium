var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var firefox = require('selenium-webdriver/firefox');

var options = new firefox.Options();
options.addArguments("-headless");

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .build();
vars = {};

console.log("Loading Site");
driver.get("https://www.google.com");
console.log("Grabbing Site Title");
driver.sleep(1000).then(function() {
  driver.getTitle().then(function(title) {
    console.log(title);
  });
});

driver.quit();
