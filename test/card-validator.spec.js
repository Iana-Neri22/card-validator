let chai = require("chai");
let expect = chai.expect;
let Card = require("../lib/card-validator")

describe("card lib", () => {
  describe("cardValidator", () => {
    it("Should return true to 4539878902538066", () => {
      expect(Card.cardValidator("4539878902538066")).to.equal(true);
    });
  });
});