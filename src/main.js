/** @module ipaCodeUtil */
import { hasDotting, clearDotting } from 'aramaic-mapper';

/**
 * IPA consonant name to value map
 * @constant
 * @type { Object.<string, string> }
*/
export const consonantsByName = Object.freeze(
  Object.create(null, {
    alaph: { value: 'ʔ', enumerable: true },
    beth: { value: 'b', enumerable: true },
    gamal: { value: 'g', enumerable: true },
    dalath: { value: 'd', enumerable: true },

    he: { value: 'h', enumerable: true },
    waw: { value: 'w', enumerable: true },
    zayn: { value: 'z', enumerable: true },

    heth: { value: 'ħ', enumerable: true },
    teth: { value: 'ᵵ', enumerable: true },
    yod: { value: 'j', enumerable: true },

    kaph: { value: 'k', enumerable: true },
    lamadh: { value: 'l', enumerable: true },
    mim: { value: 'm', enumerable: true },
    nun: { value: 'n', enumerable: true },

    semkath: { value: 's', enumerable: true },
    e: { value: 'ʕ', enumerable: true },
    pe: { value: 'p', enumerable: true },
    sadhe: { value: 'ᵴ', enumerable: true },

    qoph: { value: 'q', enumerable: true },
    resh: { value: 'r', enumerable: true },
    shin: { value: 'ʃ', enumerable: true },
    taw: { value: 't', enumerable: true }
  })
);

const l = consonantsByName;
/**
 * Semitic 22 base consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  // abgad
  l.alaph, // 'ʔ', Ālaph - Glottal Stop
  l.beth, // 'b', Bēth - Voiced bilabial stop
  l.gamal, // 'g', Gāmal - Voiced velar stop
  l.dalath, // 'd', Dālath - Voiced alveolar stop

  // hawaz
  l.he, // 'h', Hē - Voiceless glottal fricative
  l.waw, // 'w', Waw - Voiced labio-velar approximant
  l.zayn, // 'z', Zain - Voiced alveolar fricative

  // ḥaṭy
  // hi-jacking tilde ~ strike-through symbols to indicate pharyngealization,
  // velarization and uvularization to be indicated with diacritic chars instead
  l.heth, // 'ħ', Ḥēth - Voiceless pharyngeal fricative
  l.teth, // 'ᵵ', Ṭēth - Emphatic pharyngealized T
  l.yod, // 'j', Yodh - Voiced palatal approximant

  // kalman
  l.kaph, // 'k', Kāph - Voiceless velar stop
  l.lamadh, // 'l', Lāmadh - Alveolar lateral approximant
  l.mem, // 'm', Mem - Bilabial nasal
  l.nun, // 'n', Nun - Alveolar nasal

  // saʿpac
  l.semkath, // 's', Semkath - Voiceless alveolar fricative
  l.e, // 'ʕ', ʿĒ - Voiced pharyngeal fricative
  l.pe, // 'p', Pē - Voiceless bilabial stop
  l.sadhe, // 'ᵴ', Ṣādhē - Emphatic pharyngealized S, ~ strike-through for pharyngealization

  // qarshat
  l.qoph, // 'q', Qoph - Voiceless uvular stop
  l.resh, // 'r', Rēsh - Alveolar trill
  l.shin, // 'ʃ', Shin - Voiceless palato-alveolar sibilant
  l.taw // 't', Taw - Voiceless alveolar stop
]);

/**
 * Begadkepat consonants
 * @constant
 * @type { string[] }
 */
export const begadkepatConsonants = [
  l.beth, // 'b', Bēth - Voiced bilabial stop
  l.gamal, // 'g', Gāmal - Voiced velar stop
  l.dalath, // 'd', Dālath - Voiced alveolar stop
  l.kaph, // 'k', Kāph - Voiceless velar stop
  l.pe, // 'p', Pē - Voiceless bilabial stop
  l.taw // 't,' Taw - Voiceless alveolar stop
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
  'θ' // Thaw - Voiceless dental fricative
];

/**
 * Begadkepat to veghadhkhefath map
 * @const
 * @type { Object.<string, string> }
 */
export const begadkepatMap = Object.freeze(
  Object.create(null, {
    b: { value: 'v', enumerable: true },
    g: { value: 'ɣ', enumerable: true },
    d: { value: 'ð', enumerable: true },
    k: { value: 'x', enumerable: true },
    p: { value: 'f', enumerable: true },
    t: { value: 'θ', enumerable: true }
  })
);

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
 * IPA vowel name to value map
 * @constant
 * @type { Object.<string, string> }
*/
export const vowelsByName = Object.freeze(
  Object.create(null, {
    pthaha: { value: 'a', enumerable: true },
    zqapha: { value: 'ɑ', enumerable: true },
    rbasa: { value: 'e', enumerable: true },
    hbasa: { value: 'i', enumerable: true },
    esasa: { value: 'u', enumerable: true },

    zlama: { value: 'ɛ', enumerable: true },
    rwaha: { value: 'o', enumerable: true }
  })
);

const v = vowelsByName;
/**
 * Common aramaic vowels
 * @constant
 * @type { string[] }
*/
export const commonVowels = Object.freeze([
  v.pthaha, // 'a', Pthāḥā - Open front unrounded vowel
  v.zqapha, // 'ɑ', Zqāphā - Open back unrounded vowel
  v.rbasa, // 'e', Zlāmā qašyā - Close-mid front unrounded vowel
  v.hbasa, // 'i', Ḥḇāṣā - Close front unrounded vowel
  v.esasa // 'u' Rvāṣā - Close back rounded vowel
]);

/**
 * Eastern/hebrew only vowels
 * @constant
 * @type { string[] }
*/
export const easternVowels = Object.freeze([
  v.zlama, // 'ɛ', Zlāmā pšīqā - Open-mid front unrounded - short version of e
  v.rwaha // 'o' Rwāḥā - Close-mid back rounded vowel
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
 * Return true if input word has vowels or diacritics
 * @param { string } word input word
 * @returns { boolean } true if word has vowels or diacritics
 */
export const isDotted = hasDotting(isVowel);

/**
 * Remove vowels, leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeVowels = clearDotting(isVowel);

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
