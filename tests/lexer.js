describe("Test lexer", function () {
    'use strict';

    // Test constructor
    it("tracks that the lexer was created", function () {
        // Create lexer
        var lexer = new Lexer();

        // Ensure lexer created
        expect(lexer).toBeDefined();

        // Ensure tokens created
        expect(lexer.tokens).toBeDefined();
    });
});
