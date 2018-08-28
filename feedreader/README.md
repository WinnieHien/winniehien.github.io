# Project Overview

Testing is an integral part of application creation. This project utilizes Jasmine test suites to ensure a RSS feedreader meets requirements such as having defined feed urls, can load initial feed content, and load new content.


# Test Suites

Test Suite 1 - RSS Feeds: Tests each feed in the `allFeeds` object has a defined URL (3 specs).

Test Suite 2: - The Menu Tests `The menu` to ensure it stays hidden unless clicked, and returns to hidden mode if clicked a second time (2 specs).

Test Suite 3 - Initial Entries: Tests the `feed` initial entries are loaded and are non-Empty (1 spec).

Test Suite 4 - New Feed Selection: Tests subsequent `feed` entries after the initial feed load are different (1 spec).

Initial Entries and New Feed Selection make use of asynchronous testing.

# How To Run

Open the index.html in a browser. Jasmine specs will display at the bottom of the page. There are four categories, with 7 specs total. If all 7 specs succeed, the specs will display in green. If any of the specs fail, it will display red.   

## Dependencies
Jasmine 2.1.2 or higher
