let chai = require("chai");
let expect = chai.expect;
let Card = require("../lib/card-validator")

describe("card lib", () => {
  describe("cardValidator", () => {
    it("Should return true to string 4539878902538066", () => {
      expect(Card.cardValidator("4539878902538066")).to.equal(true);
    });
    it("Should return true to number 4539878902538066", () => {
      expect(Card.cardValidator(4539878902538066)).to.equal(true);
    });
    it("Return false to number > 16", () => {
      expect(Card.cardValidator("533910046540306022")).to.equal(false);
    });
    it("Return false to empty string", () => {
      expect(Card.cardValidator("")).to.equal(false);
    });
  });
});