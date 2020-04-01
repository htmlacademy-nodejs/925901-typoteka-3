'use strict';

const shuffleFisherYates = (originalArray) => {
  const resultArray = [...originalArray];

  for (let i = resultArray.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [resultArray[i], resultArray[randomIndex]] = [resultArray[randomIndex], resultArray[i]];
  }

  return resultArray;
};

const getRandomInt = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const addLead0ToNum = (number) => (number < 10) ? `0${number}` : number;

const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

module.exports = {
  shuffleFisherYates,
  getRandomInt,
  addLead0ToNum,
  getRandomDate,
};
