'use strict';

const fs = require(`fs`);
const chalk = require(`chalk`);
const {
  shuffleFisherYates,
  getRandomInt,
  getRandomDate,
} = require(`../../utils`);
const {ExitCode} = require(`../../constants`);

const DEFAULT_COUNT = 1;
const MAX_COUNT_LIMIT = 1000;
const FILE_NAME = `mock.json`;

const TITLES = [
  `Ёлки. История деревьев`,
  `Как перестать беспокоиться и начать жить`,
  `Как достигнуть успеха не вставая с кресла`,
  `Обзор новейшего смартфона`,
  `Лучше рок-музыканты 20-века`,
  `Как начать программировать`,
  `Учим HTML и CSS`,
  `Что такое золотое сечение`,
  `Как собрать камни бесконечности`,
  `Борьба с прокрастинацией`,
  `Рок — это протест`,
  `Самый лучший музыкальный альбом этого года`,
];

const SENTENCES = [
  `Ёлки — это не просто красивое дерево. Это прочная древесина.`,
  `Первая большая ёлка была установлена только в 1938 году.`,
  `Вы можете достичь всего. Стоит только немного постараться и запастись книгами.`,
  `Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
  `Золотое сечение — соотношение двух величин, гармоническая пропорция.`,
  `Собрать камни бесконечности легко, если вы прирожденный герой.`,
  `Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике.`,
  `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами.`,
  `Программировать не настолько сложно, как об этом говорят.`,
  `Простые ежедневные упражнения помогут достичь успеха.`,
  `Это один из лучших рок-музыкантов.`,
  `Он написал больше 30 хитов.`,
  `Из под его пера вышло 8 платиновых альбомов.`,
  `Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.`,
  `Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле?`,
  `Достичь успеха помогут ежедневные повторения.`,
  `Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
  `Как начать действовать? Для начала просто соберитесь.`,
  `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры.`,
  `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`,
];

const CATEGORIES = [
  `Деревья`,
  `За жизнь`,
  `Без рамки`,
  `Разное`,
  `IT`,
  `Музыка`,
  `Кино`,
  `Программирование`,
  `Железо`,
];

const generatePublications = (count) => (
  Array(count).fill({}).map(() => {
    const titleIndex = getRandomInt(0, TITLES.length - 1);
    const createdDate = getRandomDate(new Date(2020, 1, 1), new Date());
    const announce = shuffleFisherYates(SENTENCES).slice(0, 5);
    const fullText = shuffleFisherYates(SENTENCES).slice(
        0,
        getRandomInt(0, SENTENCES.length - 1),
    );
    const category = shuffleFisherYates(CATEGORIES).slice(
        0,
        getRandomInt(0, CATEGORIES.length - 1),
    );

    return {
      title: TITLES[titleIndex],
      createdDate: createdDate.toLocaleString(),
      announce,
      fullText,
      category,
    };
  })
);

module.exports = {
  name: `--generate`,
  run(args) {
    const [userCount] = args;
    const publicationsAmount = Number.parseFloat(userCount, 10) || DEFAULT_COUNT;

    if (publicationsAmount > MAX_COUNT_LIMIT) {
      console.error(chalk.red(`Not more than 1000 publications allowed`));
      process.exit(ExitCode.ERROR);
    }

    const publications = JSON.stringify(generatePublications(publicationsAmount));

    fs.writeFile(FILE_NAME, publications, (error) => {
      if (error) {
        console.error(chalk.red(`Can't write data to file...`));
        process.exit(ExitCode.ERROR);
      }

      console.log(chalk.green(`File successfully created.`));
    });
  },
};
