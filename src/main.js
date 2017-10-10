/** @module ipaCodeUtil */
/**
 * Semitic 22 base consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  // abgad
  'ʔ', // Ālaph - Glottal Stop
  'b', // Bēth - Voiced bilabial stop
  'g', // Gāmal - Voiced velar stop
  'd', // Dālath - Voiced alveolar stop

  // hawaz
  'h', // Hē - Voiceless glottal fricative
  'w', // Waw - Voiced labio-velar approximant
  'z', // Zain - Voiced alveolar fricative

  // ḥaṭy
  // hi-jacking tilde ~ strike-through symbols to indicate pharyngealization,
  // velarization and uvularization to be indicated with diacritic chars instead
  'ħ', // Ḥēth - Voiceless pharyngeal fricative
  'ᵵ', // Ṭēth - Emphatic pharyngealized T
  'j', // Yodh - Voiced palatal approximant

  // kalman
  'k', // Kāph - Voiceless velar stop
  'l', // Lāmadh - Alveolar lateral approximant
  'm', // Mem - Bilabial nasal
  'n', // Nun - Alveolar nasal

  // saʿpac
  's', // Semkath - Voiceless alveolar fricative
  'ʕ', // ʿĒ - Voiced pharyngeal fricative
  'p', // Pē - Voiceless bilabial stop
  'ᵴ', // Ṣādhē - Emphatic pharyngealized S, ~ strike-through for pharyngealization

  // qarshat
  'q', // Qoph - Voiceless uvular stop
  'r', // Rēsh - Alveolar trill
  'ʃ', // Shin - Voiceless palato-alveolar sibilant
  't' // Taw - Voiceless alveolar stop
]);

/**
 * Begadkepat consonants
 * @constant
 * @type { string[] }
 */
export const begadkepatConsonants = [
  'b', // Bēth - Voiced bilabial stop
  'g', // Gāmal - Voiced velar stop
  'd', // Dālath - Voiced alveolar stop
  'k', // Kāph - Voiceless velar stop
  'p', // Pē - Voiceless bilabial stop
  't' // Taw - Voiceless alveolar stop
];

/**
 * Veghadhkhefath consonants
 * @constant
 * @type { string[] }
 */
export const veghadhkhefathConsonants = [
  'v', // Vēth - Voiced labiodental fricative
  'ɣ', // Ghāmal - Voiced velar fricative
  'ð', // Dhālath - Voiced dental fricative
  'x', // Khāph - Voiceless velar fricative
  'f', // Fē - voiceless labiodental fricative
  'θ' // // Thaw - Voiceless dental fricative
];

/**
 * Other semitic consonants
 * @constant
 * @type { string[] }
 */
export const extraConsonants = [
  'ɬ', // Śin - Voiceless alveolar lateral fricative
  'ᵭ', // Ḍād - Emphatic pharyngealized D, ~ strike-through for pharyngealization
  'ᵶ' // Ẓā’ - Emphatic pharyngealized Dh, ~ strike-through for pharyngealization
];

/**
 * All consonants concatenated
 * @constant
 * @type { string[] }
 */
export const allConsonants = Object.freeze(
  consonants.concat(veghadhkhefathConsonants).concat(extraConsonants)
);

/**
 * Common aramaic vowels
 * @constant
 * @type { string[] }
*/
export const commonVowels = Object.freeze([
  'a', // Pthāḥā - Open front unrounded vowel
  'ɑ', // Zqāphā - Open back unrounded vowel
  'e', // Zlāmā qašyā - Close-mid front unrounded vowel
  'i', // Ḥḇāṣā - Close front unrounded vowel
  'u' // Rvāṣā - Close back rounded vowel
]);

/**
 * Eastern/hebrew only vowels
 * @constant
 * @type { string[] }
*/
export const easternVowels = Object.freeze([
  'ɛ', // Zlāmā pšīqā - Open-mid front unrounded - short version of e
  'o' // Rwāḥā - Close-mid back rounded vowel
]);

/**
 * Other semitic vowels
 * @constant
 * @type { string[] }
*/
export const otherVowels = Object.freeze([
  'ʊ', // Near-close near-back rounded vowel. Short version of u.
  'ɪ', // Near-close near-front unrounded vowel. Short version of i.
  'ɔ' // Open-mid back rounded vowel. Short version of o.
]);

/**
 * Semitic vowels including Eastern/Hebrew ones and other short vowels.
 * @constant
 * @type { string[] }
*/
export const allVowels = Object.freeze(
  commonVowels.concat(easternVowels).concat(otherVowels)
);

/**
 * The silent letter symbol
 * @const
 * @type { string }
 */
export const silent = '∅';

/**
 * Is character c a semitic consonant
 * @param { string } c input character
 * @returns { boolean } true if c is semitic consonant
 */
export const isConsonant = c => allConsonants.indexOf(c) > -1;

/**
 * Is character c a semitic vowel
 * @param { string } c input character
 * @returns { boolean } true if c is semitic vowel
 */
export const isVowel = c => allVowels.indexOf(c) > -1;

/**
 * Remove vowels, leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeVowels = word => {
  if (!word) {
    return word;
  }

  let hasVowels = false;
  const stack = [];
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    if (isVowel(c)) {
      hasVowels = true;
    } else {
      stack.push(c);
    }
  }
  return hasVowels ? stack.join('') : word;
};

/**
 * Returns true if c is a begadkepat consonant
 * @param { string } c input character
 * @returns { boolean } true if c is a begadkepat consonant
 */
export const isBegadkepat = c => begadkepatConsonants.indexOf(c) > -1;

/**
 * Returns true if c is a veghadhkhefath consonant
 * @param { string } c input character
 * @returns { boolean } true if c is a veghadhkhefath consonant
 */
export const isVeghadhkhefath = c => veghadhkhefathConsonants.indexOf(c) > -1;
