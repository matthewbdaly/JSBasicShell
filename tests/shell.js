describe("Test non-characters", function () {
    'use strict';

    // Track the constructor
    it("tracks that the shell session was created", function () {
        // Spy on the prototype
        spyOn(window, 'ShellSession').andCallThrough();

        // Initialise the object
        var shell = new ShellSession();

        // Ensure it has been called
        expect(shell.constructor).toHaveBeenCalled();

        // Ensure it has the required attributes
        expect(shell.loadmessage).toBe('JS Basic 1.0');
        expect(shell.prompt).toBe('> ');
        expect(shell.pointer).toBe(null);
        expect(shell.history.length).toBe(0);
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

    // Track up arrow key being pressed
    it("tracks that the up arrow key was pressed", function () {
        // Spy on the captureKey and backHistory methods
        spyOn(ShellSession.prototype, 'captureKey').andCallThrough();
        spyOn(ShellSession.prototype, 'backHistory');

        // Create the event
        var e = $.Event('keyup');
        e.which = 38;
        $(document).trigger(e);

        // Ensure captureKey has been called
        expect(ShellSession.prototype.captureKey).toHaveBeenCalled();

        // Ensure backHistory has been called
        expect(ShellSession.prototype.backHistory).toHaveBeenCalled();
    });

    // Track down arrow key being pressed
    it("tracks that the down arrow key was pressed", function () {
        // Spy on the captureKey and forwardHistory methods
        spyOn(ShellSession.prototype, 'captureKey').andCallThrough();
        spyOn(ShellSession.prototype, 'forwardHistory');

        // Create the event
        var e = $.Event('keyup');
        e.which = 40;
        $(document).trigger(e);

        // Ensure captureKey has been called
        expect(ShellSession.prototype.captureKey).toHaveBeenCalled();

        // Ensure forwardHistory has been called
        expect(ShellSession.prototype.forwardHistory).toHaveBeenCalled();
    });

    // Track other keys being pressed
    it("tracks that the A key was pressed", function () {
        // Spy on the captureChar and echoText methods
        spyOn(ShellSession.prototype, 'captureChar').andCallThrough();
        spyOn(ShellSession.prototype, 'echoText');

        // Create the event
        var e = $.Event('keypress');
        e.which = 65;
        $(document).trigger(e);

        // Ensure captureChar has been called
        expect(ShellSession.prototype.captureChar).toHaveBeenCalled();

        // Ensure echoText has been called
        expect(ShellSession.prototype.echoText).toHaveBeenCalled();
    });

    it("tracks that the E key was pressed", function () {
        // Spy on the captureChar and echoText methods
        spyOn(ShellSession.prototype, 'captureChar').andCallThrough();
        spyOn(ShellSession.prototype, 'echoText');

        // Create the event
        var e = $.Event('keypress');
        e.which = 69;
        $(document).trigger(e);

        // Ensure captureChar has been called
        expect(ShellSession.prototype.captureChar).toHaveBeenCalled();

        // Ensure echoText has been called
        expect(ShellSession.prototype.echoText).toHaveBeenCalled();
    });

    it("tracks that the 7 key was pressed", function () {
        // Spy on the captureChar and echoText methods
        spyOn(ShellSession.prototype, 'captureChar').andCallThrough();
        spyOn(ShellSession.prototype, 'echoText');

        // Create the event
        var e = $.Event('keypress');
        e.which = 55;
        $(document).trigger(e);

        // Ensure captureChar has been called
        expect(ShellSession.prototype.captureChar).toHaveBeenCalled();

        // Ensure echoText has been called
        expect(ShellSession.prototype.echoText).toHaveBeenCalled();
    });
});
