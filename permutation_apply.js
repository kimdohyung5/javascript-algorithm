const count = 4;
const total = 100;
const getRandom = (size) => Math.floor(Math.random() * size) + 1;
const getRandomArray = (total, maxSize = 100) => {
  if (total > maxSize) throw new Error('total은 max를 넘을수 없어요..');
  const array = [];
  while (array.length < total) {
    const num = getRandom(maxSize);
    const index = array.indexOf(num);
    if (index === -1) array.push(num);
  }
  return array;
};
const getAbsoluteDistance = (arrInput) => {
  let sum = 0;
  for (let i = 0; i < arrInput.length - 1; i++) {
    sum += Math.abs(arrInput[i] - arrInput[i + 1]);
  }
  return sum;
};
const permutation = (array, sumResult, moved = []) => {
  if (array.length <= 1) {
    sumResult.push([...moved, ...array]);
    return sumResult;
  }

  for (let i = 0; i < array.length; i++) {
    const copied = [...array];
    const getA = copied.splice(i, 1);
    const movedArray = [...moved, ...getA];
    permutation(copied, sumResult, movedArray);
  }
};

let inputs = getRandomArray(3, 10);
inputs = [1, 4, 8, 10, 15, 20];

console.log('inputs', inputs);

const results = getAbsoluteDistance(inputs);
console.log('results', results);

const bruteForceMethod = (arrInput) => {
  const permuteResult = [];
  permutation(arrInput, permuteResult);

  let max = 0;

  for (let i = 0; i < permuteResult.length; i++) {
    const ans = getAbsoluteDistance(permuteResult[i]);
    if (ans > max) max = ans;
    console.log('i', i, 'permuteResult', permuteResult[i], ans);
  }

  console.log('max', max);

  console.log('bruteForceMethod', permuteResult);
};

const cleverMethod = (arrInput) => {
  console.log('cleverMethod');
};

bruteForceMethod(inputs);
cleverMethod(inputs);
// const serialTest = (arrInput) => {};
