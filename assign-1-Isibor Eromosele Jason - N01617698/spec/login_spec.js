describe("md5Encrypt function", function () {
    it("should return a 32 character hexadecimal string for the given username", function () {
        var usernameHash = md5Encrypt("jason1");
        expect(usernameHash).toMatch(/^[a-f0-9]{32}$/i);
    });

    it("should return a 32 character hexadecimal string for the given password", function () {
        var passwordHash = md5Encrypt("command");
        expect(passwordHash).toMatch(/^[a-f0-9]{32}$/i);
    });
});
describe("checkLogin function", function () {
    // Test to pass checks for Boolean true.
    it("Correct username and correct password should return a boolean true.", function () {
        expect(checkLogin("jason1", "command")).toBe(true);
      });
    // Test to fail checks for all specified error messages and instances.
    it('should return "No username entered." if username is missing', function () {
        expect(checkLogin("", "command")).toBe("No username entered.");
    });

    it('should return "No password entered." if password is missing', function () {
        expect(checkLogin("jason1", "")).toBe("No password entered.");
    });

    it('should return "Invalid Username or Password." if username is correct but password is incorrect', function () {
        expect(checkLogin("username", "wrongpassword")).toBe("Invalid Username or Password.");
    });

    it('should return "Invalid Username or Password." if username is incorrect but password is correct', function () {
        expect(checkLogin("wronguser", "password")).toBe("Invalid Username or Password.");
    });
});