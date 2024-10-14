'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const stringSplitted = sourceString.split(';');

  const filtered = stringSplitted.filter((item) => item.trim().length);

  const dividedWords = filtered.map((words) => words.split(':'));

  dividedWords.forEach(([key, value]) => {
    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
