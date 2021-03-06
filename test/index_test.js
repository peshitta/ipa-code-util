const test = require('assert');
const sut = require('../build/ipa-code-util');

describe('IPA', () => {
  describe('Util', () => {
    it('Is Ipa Consonant', () => {
      test.ok(sut.isConsonant('b'), 'b  isConsonant');
      test.ok(sut.isConsonant('ʃ'), '$ isConsonant');
      test.ok(sut.isConsonant('ʔ'), ') isConsonant');
      test.ok(sut.isConsonant('ʃ'), '( isConsonant');
      test.ok(sut.isConsonant('g'), 'g isConsonant');
      test.ok(sut.isConsonant('f'), 'P isConsonant');
      test.ok(sut.isConsonant('ɬ'), '& isConsonant');
      test.ok(!sut.isConsonant('B'), 'B isConsonant');
      test.ok(!sut.isConsonant('G'), 'G isConsonant');
      test.ok(!sut.isConsonant('u'), 'u isConsonant');
    });
    it('Is Begadkepat Consonant', () => {
      test.ok(sut.isBegadkepat('b'), 'b isBegadkepat');
      test.ok(sut.isBegadkepat('g'), 'g isBegadkepat');
      test.ok(sut.isBegadkepat('d'), 'd isBegadkepat');
      test.ok(sut.isBegadkepat('k'), 'k isBegadkepat');
      test.ok(sut.isBegadkepat('p'), 'p isBegadkepat');
      test.ok(sut.isBegadkepat('t'), 't isBegadkepat');
      test.ok(!sut.isBegadkepat('ś'), '& isBegadkepat');
      test.ok(!sut.isBegadkepat('B'), 'B isBegadkepat');
      test.ok(!sut.isBegadkepat('G'), 'G isBegadkepat');
      test.ok(!sut.isBegadkepat('u'), 'u isBegadkepat');
      test.ok(!sut.isBegadkepat('v'), 'v isBegadkepat');
      test.ok(!sut.isBegadkepat('ɣ'), 'ɣ isBegadkepat');
      test.ok(!sut.isBegadkepat('ð'), 'ð isBegadkepat');
    });
    it('Is Veghadhkhefath Consonant', () => {
      test.ok(sut.isVeghadhkhefath('v'), 'v isVeghadhkhefath');
      test.ok(sut.isVeghadhkhefath('ɣ'), 'ɣ isVeghadhkhefath');
      test.ok(sut.isVeghadhkhefath('ð'), 'ð isVeghadhkhefath');
      test.ok(sut.isVeghadhkhefath('x'), 'x isVeghadhkhefath');
      test.ok(sut.isVeghadhkhefath('f'), 'f isVeghadhkhefath');
      test.ok(sut.isVeghadhkhefath('θ'), 'θ isVeghadhkhefath');
      test.ok(!sut.isVeghadhkhefath('ś'), '& isVeghadhkhefath');
      test.ok(!sut.isVeghadhkhefath('B'), 'B isVeghadhkhefath');
      test.ok(!sut.isVeghadhkhefath('G'), 'G isVeghadhkhefath');
      test.ok(!sut.isVeghadhkhefath('u'), 'u isVeghadhkhefath');
      test.ok(!sut.isVeghadhkhefath('d'), 'd isVeghadhkhefath');
      test.ok(!sut.isVeghadhkhefath('k'), 'k isVeghadhkhefath');
      test.ok(!sut.isVeghadhkhefath('p'), 'p isVeghadhkhefath');
    });
    it('Is Ipa vowel', () => {
      test.ok(sut.isVowel('a'), 'a isVowel');
      test.ok(sut.isVowel('o'), 'o isVowel');
      test.ok(sut.isVowel('e'), 'e isVowel');
      test.ok(sut.isVowel('i'), 'i isVowel');
      test.ok(sut.isVowel('u'), 'u isVowel');
      test.ok(sut.isVowel('ɛ'), 'ɛ isVowel');
      test.ok(sut.isVowel('ɑ'), 'ɑ isVowel');
      test.ok(!sut.isVowel('A'), 'A isVowel');
      test.ok(!sut.isVowel('I'), 'I isVowel');
      test.ok(!sut.isVowel('U'), 'U isVowel');
      test.ok(!sut.isVowel(''), "'' isVowel");
    });
  });
});

describe('IPA', () => {
  const { removeVowels } = sut;

  describe('removeVowels', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = removeVowels('lmθbʕ');
      const vocalised = removeVowels('lmeθbaʕ');
      const wordExpected = 'lmθbʕ';
      test.strictEqual(word, wordExpected, 'removeVowels_generic consonant');
      test.strictEqual(
        vocalised,
        wordExpected,
        'removeVowels_generic vocalised'
      );
    });
    it('General case usage, un-mapped symbols', () => {
      const word = removeVowels('<lʔðnh>');
      const vocalised = removeVowels('<leʔðneh>');
      const wordExpected = '<lʔðnh>';
      test.strictEqual(
        word,
        wordExpected,
        'removeVowels consonant with unmapped'
      );
      test.strictEqual(
        vocalised,
        wordExpected,
        'removeVowels vocalised with unmapped'
      );
    });
    it('Another one-to-one mapping', () => {
      const word = removeVowels('ʔvhwhy');
      const vocalised = removeVowels('ʔavohawhy');
      const wordExpected = 'ʔvhwhy';
      test.strictEqual(word, wordExpected, 'removeVowels_wu consonant');
      test.strictEqual(vocalised, wordExpected, 'removeVowels_wu vocalised');
    });
    it('Word with (i;) => (yi) mapping', () => {
      const word = removeVowels('dylyðwθh');
      const vocalised = removeVowels('dyilyiðwuθeh');
      const wordExpected = 'dylyðwθh';
      test.strictEqual(word, wordExpected, 'removeVowels_yi consonant');
      test.strictEqual(vocalised, wordExpected, 'removeVowels_yi vocalised');
    });
    it('Blank word returns blank', () => {
      const word = removeVowels('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'removeVowels_blank');
    });
    it('Null word returns null', () => {
      const word = removeVowels(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'removeVowels_null');
    });
    it('Undefined word returns undefined', () => {
      const word = removeVowels(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'removeVowels_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = removeVowels(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'removeVowels_zero');
    });
  });
});
