// 어떻게 작성을 할까?
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

const data = ['kimdo', 'is', 'good', 'xxx'];
const sumResult = [];
permutation(data, sumResult);
console.log('results', sumResult);
