# AWS Selenium

This build will help with quickly getting Selenium setup and running on an AWS instance (Ubuntu 18.04 LTS x64).

# Requirements

The following packages were installed on the server. You can run the [install.sh](install.sh) script to install the following:

| Name |Version |
| ------ | ------ |
| firefox | 71.0 |
| nodejs | 8.10.0 |
| npm | 3.5.2 |
| geckodriver | 0.26.0-linux64 |

# Installation

```sh
$ sudo apt-get update -y
$ sudo apt-get install firefox nodejs npm git -y
$ git clone https://github.com/gatoona/AWS-Selenium.git
$ cd AWS-Selenium
$ npm install
$ wget -c https://github.com/mozilla/geckodriver/releases/download/v0.26.0/geckodriver-v0.26.0-linux64.tar.gz -O - | tar -xz
```

# Testing

The test script provided should run Selenium via a headless Firefox and open google.com and retrieve the page's title.

```sh
$ node selenium-test.js
```

