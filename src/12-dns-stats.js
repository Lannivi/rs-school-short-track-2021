/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const domReverse = [];
  domains.forEach((item) => {
    domReverse.push(item.split('.').reverse());
  });

  for (let i = 0; i < domReverse.length; i++) {
    let str = '';
    for (let j = 0; j < domReverse[i].length; j++) {
      str += `.${domReverse[i][j]}`;

      if (obj[str] > 0) {
        ++obj[str];
      } else {
        obj[str] = 1;
      }
    }
  } return obj;
}

module.exports = getDNSStats;
