Feature: Search a repository on github

  Scenario: Puppeteer should be on a first result
    Given user is on "https://github.com/" page
    When user typing "puppeteer" into search
    Then user sees first link as "puppeteer/puppeteer"

  Scenario: Jest should be on a first search result
    Given user is on "https://github.com/" page
    When user typing "jest" into search
    Then user sees first link as "facebook/jest"
