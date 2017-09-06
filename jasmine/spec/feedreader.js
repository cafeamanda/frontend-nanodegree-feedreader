/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds
         * array and ensures it has a URL defined and that
         * the URL is not empty.
         */
        it ('Ensures every object inside allFeeds has a URL', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });


        /* This test loops through each feed in the allFeeds
         * array and ensures it has a name defined and that
         * the name is not empty.
         */
         it ('Ensures every object inside allFeeds has a name', function() {
             for (var i = 0; i < allFeeds.length; i++) {
                 expect(allFeeds[i].name).toBeDefined();
                 expect(allFeeds[i].name).not.toBe('');
             }
         });
    });


    /* This is our second test suite. This suite is all about the
     * menu definitions, the feedList variable in our application.
     */
    describe('The Menu', function() {

        var body, menu, icon;

        beforeEach(function() {
            body = $('body');
            menu = $('.slide-menu');
            menuIcon = $('.menu-icon-link');
        });

        /* This test ensures the menu element is hidden by default.
         */
        it ('Ensures that the menu element is hidden by default', function() {
            expect(body.attr('class')).toBe('menu-hidden');
        });

        /* This test ensures the menu changes visibility when
         * the menu icon is clicked. This test should have two
         * xpectations: does the menu display when clicked and
         * does it hide when clicked again.
         */
        it ('should ensure the menu changes visibility when the menu icon is clicked', function() {
            /* Given that the menu element is hidden by default,
             * when menuIcon is clicked the first time,
             * body.hasClass('menu-hidden') returns false.
             */
            menuIcon.trigger('click');
            expect(body.attr('class')).not.toBe('menu-hidden');
            /* Following the same logic, when menuIcon is clicked
             * the second time, body.hasClass('menu-hidden')
             * returns true.
             */
            menuIcon.trigger('click');
            expect(body.attr('class')).toBe('menu-hidden');
        });

    });

    /* This is our third test suite. This suite is all the feed
     * initial $('.entry')s definitions.
     */
    describe('Initial Entries', function() {

        /* This test ensures when loadFeed() is called and completes
         * its work, there is at least a single .entry element within
         * the .feed container. Remember, loadFeed() is asynchronous
         * so this test will require the use of Jasmine's beforeEach
         * and asynchronous done() function.
         */
        var allFeedElements;

        beforeEach(function(done) {
            loadFeed(0, function() {
                allFeedElements = $('.feed').find('.entry');
                done();
            });
        });

        it ('Ensures there\'s at least one .entry element within the .feed container when loadFeed() completes its work', function(done) {
            expect(allFeedElements.length).toBeGreaterThan(0);
            done();
        });
    });



    /* This is our fourth test suite. This suite is all about
     * making sure the selection of a new feed runs successfully.
     */
    describe('New Feed Selection', function() {

        /* This test ensures that when a new feed is loaded by loadFeed()
         * the content actually changes. Remember, loadFeed() is
         * asynchronous.
         */
        var previousFeed,
            nextFeed;

        beforeEach(function(done) {
            loadFeed(1, function() {
                previousFeed = $('.feed').html();
                done();
            });
        });

        it ('Ensures that the content actually changes when a next feed is loaded by loadFeed()', function(done) {
            loadFeed(0, function() {
                nextFeed = $('.feed').html();
                expect(nextFeed).not.toEqual(previousFeed);
                done();
            });
        });

     });

}());
