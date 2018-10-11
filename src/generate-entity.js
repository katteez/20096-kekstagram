const MAX_SCALE = 100;
const MAX_HASHTAGS_AMOUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const IS_UNIQUE_HASHTAGS = true;
const MAX_DESCR_LENGTH = 140;
const MAX_LIKES_AMOUNT = 1000;
const MAX_COMMENT_LENGTH = 140;
const IS_UNIQUE_COMMENTS = true;
const DAYS = 7;

const EFFECTS = [`none`, `chrome`, `sepia`, `marvin`, `phobos`, `heat`];

const HASHTAGS = [`nice`, `awesome`, `sunset`, `cat`, `meow`, `dog`, `nature`, `sunrise`, `tree`, `justDoIt`,
  `sportIsCool`, `movieNight`, `route66`, `hardwork`, `travel`, `game`, `photo`, `notebook`, `evening`, `goodMorning`];

const TEXT = `Задача организации,
в особенности же реализация намеченных плановых заданий представляет собой интересный эксперимент проверки позиций,
занимаемых участниками в отношении поставленных задач.
Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности
обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
Равным образом укрепление и развитие структуры позволяет оценить значение существенных финансовых и административных условий.
Повседневная практика показывает, что консультация с широким активом обеспечивает широкому кругу (специалистов)
участие в формировании новых предложений.`;

const COMMENTS = [
  `Фокус размыт. Или это просто кто-то заляпал объектив?`,
  `Непонятен один момент: как так-то?!`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках, и у неё получилась фотография лучше.`,
  `Не представляю, как можно сфотографировать закат лучше. Это просто апогей. Теперь можно сжечь все фотоаппараты, т.к. вершина достигнута.`,
  `В целом всё неплохо. Но не всё.`,
  `Всё отлично!`,
  `Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!`,
  `Фига се!`,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.`,
  `Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.`,
  `Кадрирование просто никакое.`,
  `Шоб я так жил!`,
  `Разве это композиция?! Что это за композиция?!`,
  `Горизонт завален.`,
  `Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота, и у меня получилась фотография лучше.`,
  `Я залип на этой фотке и не могу оторваться. Совсем не знаю, что мне делать.`,
  `Нормас.`];

const getRandomNumberFromInterval = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomArrayElement = (array) => array[getRandomNumberFromInterval(0, array.length)];

const getRandomUniqueArray = (array, maxElemLength, isUnique, arrayLength) => {
  let newArrayLength;
  let newArray = [];

  if (arrayLength) {
    newArrayLength = arrayLength;
  } else {
    newArrayLength = getRandomNumberFromInterval(0, array.length);
  }

  while (newArray.length < newArrayLength) {
    let elem = getRandomArrayElement(array);

    while (elem.length > maxElemLength) {
      elem = getRandomArrayElement(array);
    }

    if (isUnique) {
      if (newArray.indexOf(elem) === -1) {
        newArray.push(elem);
      }
    } else {
      newArray.push(elem);
    }
  }

  return newArray;
};

const getRandomHashtags = (array, maxElemLength, isUnique, arrayLength) => {
  const withoutSpaces = array.filter((item) => !item.includes(` `));
  let newArray = getRandomUniqueArray(withoutSpaces, maxElemLength, isUnique, arrayLength);

  return newArray.map((item) => `#${item}`);
};

const getRandomString = (text, maxStringLength) => {
  const words = text.split(` `);
  let newString = ``;

  for (;;) {
    const elem = getRandomArrayElement(words);

    if (newString.length + elem.length + 1 < maxStringLength) {
      newString = `${newString} ${elem}`;
    } else {
      break;
    }
  }

  return newString;
};

const convertDaysToMilliseconds = (days) => days * 24 * 60 * 60 * 1000;

const getRandomDate = (presentDate, daysAgo) => {
  const pastDate = presentDate - convertDaysToMilliseconds(daysAgo);

  return getRandomNumberFromInterval(pastDate, presentDate);
};

const generateEntity = () => ({
  url: `https://picsum.photos/600/?random`,
  scale: getRandomNumberFromInterval(0, MAX_SCALE),
  effect: getRandomArrayElement(EFFECTS),
  hashtags: getRandomHashtags(HASHTAGS, MAX_HASHTAG_LENGTH, IS_UNIQUE_HASHTAGS, MAX_HASHTAGS_AMOUNT),
  description: getRandomString(TEXT, MAX_DESCR_LENGTH),
  likes: getRandomNumberFromInterval(0, MAX_LIKES_AMOUNT),
  comments: getRandomUniqueArray(COMMENTS, MAX_COMMENT_LENGTH, IS_UNIQUE_COMMENTS),
  date: getRandomDate(Date.now(), DAYS),
});

module.exports = {
  generateEntity,
  effects: EFFECTS,
  convertDaysToMilliseconds
};
