/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let takerArr = path.split('.');
  return function taker(prod) {
    let ArrDigger = Object.assign({}, prod);
    try {
      takerArr.forEach(element => ArrDigger = ArrDigger[element]);
      return ArrDigger
    }catch (err){
      return
    }
  }
}
