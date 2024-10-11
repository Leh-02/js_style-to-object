'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const stringArray = sourceString.split(';');
  const filterArray = stringArray.filter((item) => item.trim().length);

  for (const words of filterArray) {
    const [key, value] = words.split(':');

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
