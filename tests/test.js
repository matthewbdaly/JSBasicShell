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

    // Track enter being pressed
    it("tracks that the enter key was pressed", function () {
        // Spy on the captureKey and enter methods
        spyOn(ShellSession.prototype, 'captureKey').andCallThrough();
        spyOn(ShellSession.prototype, 'enter');

        // Create the event
        var e = $.Event('keyup');
        e.which = 13;
        $(document).trigger(e);

        // Ensure captureKey has been called
        expect(ShellSession.prototype.captureKey).toHaveBeenCalled();

        // Ensure enter has been called
        expect(ShellSession.prototype.enter).toHaveBeenCalled();
    });

    // Track backspace being pressed
    it("tracks that the backspace key was pressed", function () {
        // Spy on the captureKey and backspace methods
        spyOn(ShellSession.prototype, 'captureKey').andCallThrough();
        spyOn(ShellSession.prototype, 'backspace');

        // Create the event
        var e = $.Event('keyup');
        e.which = 8;
        $(document).trigger(e);

        // Ensure captureKey has been called
        expect(ShellSession.prototype.captureKey).toHaveBeenCalled();

        // Ensure backspace has been called
        expect(ShellSession.prototype.backspace).toHaveBeenCalled();
    });

});
