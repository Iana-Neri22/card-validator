let chai = require('chai');
let expect = chai.expect;
let Card = require('../lib/card-validator');

describe('card lib', () => {
  describe('checkLength', () => {
    it('Return false to 123456', () => {
      expect(Card.checkLength("123456")).to.equal(false);
    });
    it('Return false to number > 16', () => {
      expect(Card.checkLength('533910046540306022')).to.equal(false);
    });
    it('Return false to empty string', () => {
      expect(Card.checkLength('')).to.equal(false);
    });
    it('Return false to number < 16', () => {
      expect(Card.checkLength('55914495801')).to.equal(false);
    });
  })
  describe('cardValidator', () => {
    it('Return true to string 4539878902538066', () => {
      expect(Card.cardValidator('4539878902538066')).to.equal(true);
    });
    it('Should return true to number 4539878902538066', () => {
      expect(Card.cardValidator(4539878902538066)).to.equal(true);
    });
    it('Return true to 4539.1269.2938.5982', () => {
      expect(Card.cardValidator('4539.1269.2938.5982')).to.equal(true);
    });
  });
});