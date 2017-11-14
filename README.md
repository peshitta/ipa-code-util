# ipa-code-util

[![npm version](https://badge.fury.io/js/ipa-code-util.svg)](https://badge.fury.io/js/ipa-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/ipa-code-util.svg)](https://www.npmjs.org/package/ipa-code-util)
[![Build Status](https://travis-ci.org/peshitta/ipa-code-util.svg?branch=master)](https://travis-ci.org/peshitta/ipa-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/ipa-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/ipa-code-util.svg)](https://david-dm.org/peshitta/ipa-code-util)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/ipa-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/ipa-code-util?branch=master)
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

IPA Unicode utilities

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install ipa-code-util --save
```

Following bundles are available:
* `ipa-code-util.js` - UMD ES5 version for use in browser, node, etc.
* `ipa-code-util.min.js` - minified version of `ipa-code-util.js`
* `ipa-code-util.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/ipa-code-util/-/ipa-code-util-1.0.5.tgz](https://registry.npmjs.org/ipa-code-util/-/ipa-code-util-1.0.5.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[IPA](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/ipa-code-util/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/ipa-code-util/issues).

To read quick updates about Peshitta app or post questions or feedback, follow
[@peshittap](https://www.twitter.com/peshittap)
at [![@peshittap](http://i.imgur.com/wWzX9uB.png "@peshittap")](https://www.twitter.com/peshittap)or
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [ipaCodeUtil](#module_ipaCodeUtil)
    * [.consonantsByName](#module_ipaCodeUtil.consonantsByName) : <code>Object.&lt;string, string&gt;</code>
    * [.consonants](#module_ipaCodeUtil.consonants) : <code>Array.&lt;string&gt;</code>
    * [.begadkepatConsonants](#module_ipaCodeUtil.begadkepatConsonants) : <code>Array.&lt;string&gt;</code>
    * [.veghadhkhefathConsonants](#module_ipaCodeUtil.veghadhkhefathConsonants) : <code>Array.&lt;string&gt;</code>
    * [.begadkepatMap](#module_ipaCodeUtil.begadkepatMap) : <code>Object.&lt;string, string&gt;</code>
    * [.extraConsonants](#module_ipaCodeUtil.extraConsonants) : <code>Array.&lt;string&gt;</code>
    * [.allConsonants](#module_ipaCodeUtil.allConsonants) : <code>Array.&lt;string&gt;</code>
    * [.vowelsByName](#module_ipaCodeUtil.vowelsByName) : <code>Object.&lt;string, string&gt;</code>
    * [.commonVowels](#module_ipaCodeUtil.commonVowels) : <code>Array.&lt;string&gt;</code>
    * [.easternVowels](#module_ipaCodeUtil.easternVowels) : <code>Array.&lt;string&gt;</code>
    * [.otherVowels](#module_ipaCodeUtil.otherVowels) : <code>Array.&lt;string&gt;</code>
    * [.allVowels](#module_ipaCodeUtil.allVowels) : <code>Array.&lt;string&gt;</code>
    * [.silent](#module_ipaCodeUtil.silent) : <code>string</code>
    * [.isConsonant](#module_ipaCodeUtil.isConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_ipaCodeUtil.isVowel) ⇒ <code>boolean</code>
    * [.isDotted](#module_ipaCodeUtil.isDotted) ⇒ <code>boolean</code>
    * [.removeVowels](#module_ipaCodeUtil.removeVowels) ⇒ <code>string</code>
    * [.isBegadkepat](#module_ipaCodeUtil.isBegadkepat) ⇒ <code>boolean</code>
    * [.isVeghadhkhefath](#module_ipaCodeUtil.isVeghadhkhefath) ⇒ <code>boolean</code>

<a name="module_ipaCodeUtil.consonantsByName"></a>

### ipaCodeUtil.consonantsByName : <code>Object.&lt;string, string&gt;</code>
IPA consonant name to value map

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.consonants"></a>

### ipaCodeUtil.consonants : <code>Array.&lt;string&gt;</code>
Semitic 22 base consonants

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.begadkepatConsonants"></a>

### ipaCodeUtil.begadkepatConsonants : <code>Array.&lt;string&gt;</code>
Begadkepat consonants

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.veghadhkhefathConsonants"></a>

### ipaCodeUtil.veghadhkhefathConsonants : <code>Array.&lt;string&gt;</code>
Veghadhkhefath consonants

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.begadkepatMap"></a>

### ipaCodeUtil.begadkepatMap : <code>Object.&lt;string, string&gt;</code>
Begadkepat to veghadhkhefath map

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.extraConsonants"></a>

### ipaCodeUtil.extraConsonants : <code>Array.&lt;string&gt;</code>
Other semitic consonants

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.allConsonants"></a>

### ipaCodeUtil.allConsonants : <code>Array.&lt;string&gt;</code>
All consonants concatenated

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.vowelsByName"></a>

### ipaCodeUtil.vowelsByName : <code>Object.&lt;string, string&gt;</code>
IPA vowel name to value map

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.commonVowels"></a>

### ipaCodeUtil.commonVowels : <code>Array.&lt;string&gt;</code>
Common aramaic vowels

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.easternVowels"></a>

### ipaCodeUtil.easternVowels : <code>Array.&lt;string&gt;</code>
Eastern/hebrew only vowels

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.otherVowels"></a>

### ipaCodeUtil.otherVowels : <code>Array.&lt;string&gt;</code>
Other semitic vowels

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.allVowels"></a>

### ipaCodeUtil.allVowels : <code>Array.&lt;string&gt;</code>
Semitic vowels including Eastern/Hebrew ones and other short vowels.

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.silent"></a>

### ipaCodeUtil.silent : <code>string</code>
The silent letter symbol

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
<a name="module_ipaCodeUtil.isConsonant"></a>

### ipaCodeUtil.isConsonant ⇒ <code>boolean</code>
Is character c a semitic consonant

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
**Returns**: <code>boolean</code> - true if c is semitic consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_ipaCodeUtil.isVowel"></a>

### ipaCodeUtil.isVowel ⇒ <code>boolean</code>
Is character c a semitic vowel

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
**Returns**: <code>boolean</code> - true if c is semitic vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_ipaCodeUtil.isDotted"></a>

### ipaCodeUtil.isDotted ⇒ <code>boolean</code>
Return true if input word has vowels or diacritics

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
**Returns**: <code>boolean</code> - true if word has vowels or diacritics  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word |

<a name="module_ipaCodeUtil.removeVowels"></a>

### ipaCodeUtil.removeVowels ⇒ <code>string</code>
Remove vowels, leaving consonantal word only.

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
**Returns**: <code>string</code> - consonantal word  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word to be processed |

<a name="module_ipaCodeUtil.isBegadkepat"></a>

### ipaCodeUtil.isBegadkepat ⇒ <code>boolean</code>
Returns true if c is a begadkepat consonant

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
**Returns**: <code>boolean</code> - true if c is a begadkepat consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_ipaCodeUtil.isVeghadhkhefath"></a>

### ipaCodeUtil.isVeghadhkhefath ⇒ <code>boolean</code>
Returns true if c is a veghadhkhefath consonant

**Kind**: static constant of [<code>ipaCodeUtil</code>](#module_ipaCodeUtil)  
**Returns**: <code>boolean</code> - true if c is a veghadhkhefath consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

