const assert = require(`assert`);
const {generateEntity, effects, convertDaysToMilliseconds} = require(`../src/generate-entity.js`);

const isString = (item) => typeof item === `string`;

describe(`Data`, () => {
  it(`is an object`, function () {
    assert.equal(typeof generateEntity(), `object`);
  });

  describe(`Url field`, () => {
    it(`is a string`, () => {
      assert.equal(typeof generateEntity().url, `string`);
    });
  });

  describe(`Scale field`, () => {
    const {scale} = generateEntity();

    it(`is a number`, () => {
      assert.equal(typeof scale, `number`);
    });

    it(`is in range from 0 to 100`, () => {
      assert(scale >= 0 && scale <= 100);
    });
  });

  describe(`Effect field`, () => {
    const {effect} = generateEntity();

    it(`is a string`, () => {
      assert.equal(typeof effect, `string`);
    });

    it(`is in effects array`, () => {
      assert(effects.includes(effect));
    });
  });

  describe(`Hashtags field`, () => {
    const {hashtags} = generateEntity();
    const isHashtag = (item) => item[0] === `#`;
    const isWithoutWhitespaces = (item) => !item.includes(` `);
    const isUnique = (item, index, arr) => arr.indexOf(item) === index;
    const isMaxOf20Chars = (item) => item.length <= 20;

    it(`is an array`, () => {
      assert(Array.isArray(hashtags));
    });

    it(`has a max of 5 elements`, () => {
      assert(hashtags.length <= 5);
    });

    it(`contains string-elements`, () => {
      assert(hashtags.every(isString));
    });

    it(`begins with #`, () => {
      assert(hashtags.every(isHashtag));
    });

    it(`has not whitespaces`, () => {
      assert(hashtags.every(isWithoutWhitespaces));
    });

    it(`contains unique elements`, () => {
      const lowerCaseHashtags = hashtags.map((item) => item.toLowerCase());

      assert(lowerCaseHashtags.every(isUnique));
    });

    it(`contains elements with a max of 20 chars`, () => {
      assert(hashtags.every(isMaxOf20Chars));
    });
  });

  describe(`Description field`, () => {
    const {description} = generateEntity();

    it(`is a string`, () => {
      assert.equal(typeof description, `string`);
    });

    it(`has a max of 140 chars`, () => {
      assert(description.length <= 140);
    });
  });

  describe(`Likes field`, () => {
    const {likes} = generateEntity();

    it(`is a number`, () => {
      assert.equal(typeof likes, `number`);
    });

    it(`is in range from 0 to 1000`, () => {
      assert(likes >= 0 && likes <= 1000);
    });
  });

  describe(`Comments field`, () => {
    const {comments} = generateEntity();
    const isMaxOf140Chars = (item) => item.length <= 140;

    it(`is an array`, () => {
      assert(Array.isArray(comments));
    });

    it(`contains 'string'-elements`, () => {
      assert(comments.every(isString));
    });

    it(`contains elements with a max of 140 chars`, () => {
      assert(comments.every(isMaxOf140Chars));
    });
  });

  describe(`Date field`, () => {
    const {date} = generateEntity();

    it(`is a number`, () => {
      assert.equal(typeof date, `number`);
    });

    it(`is in the correct range`, () => {
      const now = Date.now();

      assert(date >= now - convertDaysToMilliseconds(7) && date <= now);
    });
  });
});
