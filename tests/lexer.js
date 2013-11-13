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
        expect(lexer.tokens.whitespace).toBeDefined();
        expect(lexer.tokens.number).toBeDefined();
        expect(lexer.tokens.word).toBeDefined();
        expect(lexer.tokens.add).toBeDefined();
        expect(lexer.tokens.subtract).toBeDefined();
        expect(lexer.tokens.multiply).toBeDefined();
        expect(lexer.tokens.divide).toBeDefined();
        expect(lexer.tokens.modulo).toBeDefined();
        expect(lexer.tokens.equal).toBeDefined();
        expect(lexer.tokens.leftbracket).toBeDefined();
        expect(lexer.tokens.rightbracket).toBeDefined();
        expect(lexer.tokens.lt).toBeDefined();
        expect(lexer.tokens.gt).toBeDefined();
        expect(lexer.tokens.dollar).toBeDefined();
        expect(lexer.tokens.semicolon).toBeDefined();
        expect(lexer.tokens.comma).toBeDefined();
        expect(lexer.tokens.singlequotes).toBeDefined();
        expect(lexer.tokens.doublequotes).toBeDefined();
        expect(lexer.tokens.hash).toBeDefined();
        expect(lexer.tokens.bang).toBeDefined();
        expect(lexer.tokens.amp).toBeDefined();
        expect(lexer.tokens.pipe).toBeDefined();
        expect(lexer.tokens.tilde).toBeDefined();
        expect(lexer.tokens.backslash).toBeDefined();
        expect(lexer.tokens.dot).toBeDefined();
        expect(lexer.tokens.colon).toBeDefined();
        expect(lexer.tokens.unwanted).toBeDefined();
    });
});
