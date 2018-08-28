/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the RSS Feed Reader Application.
 */

/* Using $() function to ensure the tests don't run until the DOM is ready.
 */
$(function() {
    /* Suite 1: RSS Feed. This suite tests the RSS feeds definitions, the allFeeds variable in the application.
    */
    // Suite 1 Success!
    describe('RSS Feeds', () => {
        /* Tests to make sure that the allFeeds variable has been defined and that it sis not empty.
         */
        // Suite 1.1 Success!
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        })


        /* Suite 1.2 Success!
         * Tests that the allFeeds object has a defined URL
         * and that the URL is not empty.
         */

        it('has URL', () =>
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            })
        );

        /* Suite 1.3 Success!
        * Tests that the allFeeds object has a defined name
        * and that the name is not empty.
        */

        it('has name', () =>
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            })
        );

    });


    /* Suite 2: "The menu" */
    // Suite 2 Success!

    describe('The menu', () => {
        // Can use jQuery or Document.querySelector. Each has their own methods.
        let body = document.querySelector('body');
        let menuIcon = document.querySelector('.menu-icon-link');

        // Test the menu element is hidden by default.

        // Reference Stack Overflow for testing for class names
        // https://stackoverflow.com/questions/5898656/test-if-an-element-contains-a-class

        it('is hidden by default', () => {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });


         /* Test that the menu toggles between hidden and visible
          *  when the menu icon is clicked.
          */

        it('toggles between visible and hidden', () => {
            menuIcon.click(); // Built-in DOM function
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* Suite 3: Initial Entries */
    // Suite 3 Success!

    describe('Initial Entries', () => {
        /* Test the loadFeed funciton works when called, and that there is at least  a single .entry element within the .feed container.
         */

        beforeEach((done) => {
            loadFeed(0, done); // Must pass done through the callback prior to beginning test.
        });

        it('has at least one entry in feed', (done) => {
            let feed = document.querySelector('.feed');
            let entry = document.querySelectorAll('.feed .entry'); // Select all entry elements that are children of feed.
            expect(feed).not.toBeNull();
            expect(entry).toBeDefined(); // Expect the entry children of feed to be defined.
            expect(entry.length).toBeGreaterThan(0); // Expect the entry children of feed to have at least 1 element
            done();
        });


    });


    /* Suite 4: New Feed Selection */

    // Suite 4 Success!
    describe('New Feed Selection', () => {

        /* Test that when a new feed is loaded by the loadFeed function that the content actually changes.
         */
        let feed_old = [];
        let feed_new = [];

            beforeEach((done) => { // To ensure tests don't run before async elements are loaded
                loadFeed(0, () => {
                    feed_old = document.querySelector('.feed').innerHTML; // Selects initial feed before it loads the next batch
                    // Use .html to get the content, otherwise it's just a htmlnode

                    loadFeed(1, () => { // loads the second feed inside the first in order to account for asynchronous behavior.
                        feed_new = document.querySelector('.feed').innerHTML;
                        done();
                    });

                });

            });

            it('content is new', (done) => {
                expect(feed_old).not.toBe(feed_new);
                done();
            });

    });

}());
