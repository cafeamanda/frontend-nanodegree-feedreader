# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# Run the application

1. To get started, clone this repository to create a *local* copy on your computer.
2. Open the `index.html` file using your browser of preference.
3. You can access all feeds by clicking on the `≡` icon at the top-left corner of the page.
4. All jasmine test results can be visualized at the bottom of the page.

# Steps to complete the project

:white_check_mark: Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)
:white_check_mark: Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
:white_check_mark: Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
:white_check_mark: Review the functionality of the application within your browser.
:white_check_mark: Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
:white_check_mark: Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
:white_check_mark: Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
:white_check_mark: Return the `allFeeds` variable to a passing state.
:white_check_mark: Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
:white_check_mark: Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
:white_check_mark: Write a new test suite named `"The menu"`.
:white_check_mark: Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
:white_check_mark: Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
:white_check_mark: Write a test suite named `"Initial Entries"`.
:white_check_mark: Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
:white_check_mark: Write a test suite named `"New Feed Selection"`.
:white_check_mark: Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
:white_check_mark: No test should be dependent on the results of another.
:white_check_mark: Callbacks should be used to ensure that feeds are loaded before they are tested.
:white_check_mark: Implement error handling for undefined variables and out-of-bound array access.
:white_check_mark: When complete - all of your tests should pass.
:white_check_mark: Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.
