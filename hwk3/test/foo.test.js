const foo = require("../foo.js");

test("Testing foo function", () =>{
    expect(foo()).toBe("bar");
});