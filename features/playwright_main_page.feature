Feature: Visit page and click something

    Scenario: Visit page and click something
        Given Go to the playwright website
        Then Verify that the hero title is "Playwright enables reliable end-to-end testing for modern web apps."
        When Click get started button

