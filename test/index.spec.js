/* eslint-disable no-undef */

let chai = require('chai');
let expect = chai.expect;
let Card = require('../lib/index.js');

describe('card lib', () => {
  describe('cardValidator', () => {
    it('Return false to 123456', () => {
      expect(Card.cardValidator('123456')).to.equal(false);
    });
    it('Return false to number > 16', () => {
      expect(Card.cardValidator('533910046540306022')).to.equal(false);
    });
    it('Return false to empty string', () => {
      expect(Card.cardValidator('')).to.equal(false);
    });
    it('Return false to number < 16', () => {
      expect(Card.cardValidator('55914495801')).to.equal(false);
    });
    it('Return true to string 4539878902538066', () => {
      expect(Card.cardValidator('4539878902538066')).to.equal(true);
    });
    it('Return true to number 4539878902538066', () => {
      expect(Card.cardValidator(4539878902538066)).to.equal(true);
    });
    it('Return true to 4539.1269.2938.5982', () => {
      expect(Card.cardValidator('4539.1269.2938.5982')).to.equal(true);
    });
    it('Return false to 4539.1269.2938.5981', () => {
      expect(Card.cardValidator('4539.1269.2938.5981')).to.equal(false);
    });
    it('Return false to @blablakkkk', () => {
      expect(Card.cardValidator('@blablakkkk')).to.equal(false);
    });
    it('Return true to 5239295102753728', () => {
      expect(Card.cardValidator(5239295102753728)).to.equal(true);
    });
  });
});