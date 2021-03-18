/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let arri = [];
    for(let i=0; i<Object.entries(obj).length; i++){
      if (!fields.includes(Object.keys(obj)[i])){
        arri.push(Object.entries(obj)[i])
      }
    }
    return Object.fromEntries(arri);
};
