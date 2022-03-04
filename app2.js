const outArr2 = [];
const permute = (array, eachElements, outArr) => {
  let chr;

  for (let i = 0; i < eachElements.length; i++) {
    chr = eachElements.splice(i, 1)[0]; // i위치에서 1만큼 제거한 배열의 0번 요소
    array.push(chr);

    if (eachElements.length == 0) {
      outArr.push(array.slice());
    }

    permute(array, eachElements, outArr);
    eachElements.splice(i, 0, chr); // i 위치에서 0만큼 제거(=아무것도 안함)한 뒤 chr을 i 위치에 삽입
    array.pop();
  }
  return;
};

const cases = ['A', 'B', 'C'];
permute([], cases, outArr2);
console.log(outArr2.map((_) => _.join('')));
