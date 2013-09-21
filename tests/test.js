describe("Test non-characters", function () {
    'use strict';

    // Track the constructor
    it("tracks that the shell session was created", function () {
        // Spy on the prototype
        spyOn(window, 'ShellSession');

        // Initialise the object
        var shell = new ShellSession();

        // Ensure it has been called
        expect(shell.constructor).toHaveBeenCalled();
    });
});
