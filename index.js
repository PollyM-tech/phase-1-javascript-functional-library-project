const myEach = (collection, callback) => {
    if (typeof collection === 'object' && !Array.isArray(collection)) {
      const values = Object.values(collection); // Preserves the original collection
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    } else {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    }
    return collection;
}
const testArr = [1, 2, 3];
const resultArr = myEach(testArr, alert);
console.log(resultArr === testArr);
  
  const myMap = (collection, callback) => {
    if (typeof collection === 'object' && !Array.isArray(collection)) {
      collection = Object.values(collection);
    }
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
    return result;
  };
  
  const myReduce = (collection, callback, acc) => {
    if (typeof collection === 'object' && !Array.isArray(collection)) {
      collection = Object.values(collection);
    }
    let startIdx = 0;
    if (acc === undefined) {
      acc = collection[0];
      startIdx = 1;
    }
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
    return acc;
  };
  
  const myFind = (collection, predicate) => {
    if (typeof collection === 'object' && !Array.isArray(collection)) {
      collection = Object.values(collection);
    }
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  };
  
  const myFilter = (collection, predicate) => {
    if (typeof collection === 'object' && !Array.isArray(collection)) {
      collection = Object.values(collection);
    }
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
    return result;
  };
  
  const mySize = (collection) => {
    if (typeof collection === 'object' && !Array.isArray(collection)) {
      return Object.keys(collection).length;
    }
    return collection.length;
  };
  
  const myFirst = (collection, n) => {
    if (n === undefined) {
      return collection[0];
    }
    return collection.slice(0, n);
  };
  
  const myLast = (collection, n) => {
    if (n === undefined) {
      return collection[collection.length - 1];
    }
    return collection.slice(-n);
  };
  
  const myKeys = (obj) => Object.keys(obj);
  
  const myValues = (obj) => Object.values(obj);
  
  const arraysEqual = (arrA, arrB) => {
    if (arrA.length !== arrB.length) return false;
    for (let idx = 0; idx < arrA.length; idx++) {
      if (Array.isArray(arrA[idx]) && Array.isArray(arrB[idx])) {
        arraysEqual(arrA[idx], arrB[idx]);
      } else if (arrA[idx] !== arrB[idx]) {
        return false;
      }
    }
    return true;
  };
  
  const objectsEqual = (objA, objB) => JSON.stringify(objA) === JSON.stringify(objB);