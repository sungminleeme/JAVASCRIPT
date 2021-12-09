// A부터 B까지 범위를 지정했을 때 범위 안의 숫자를 모두 곱하는 함수를 만들어보세요.

const multiplyAll = function (start, end) {
  let output = 1;
  for (let i = start; i <= end; i++) {
    output *= i;
  }
  return output;
};

console.log(multiplyAll(1, 2));
console.log(multiplyAll(1, 3));

// 다음 과정에 따라 최대값을 찾는 max()함수를 만들어보세요.
// 매개변수로 max([1,2,3,4])와 같은 배열을 받는 max()함수를 만들어보세요.

const max = function (배열) {
  let output = 배열[0];
  for (const 값 of 배열) {
    if (output < 값) {
      output = 값;
    }
  }
  return output;
};
console.log(max([1, 2, 3, 4]));

// 매개변수로 max(1,2,3,4)와 같이 숫자를 배열로 받는 max()함수를 만들어보세요.

const max = function (...배열) {
  let output = 배열[0];
  for (const 값 of 배열) {
    if (output < 값) {
      output = 값;
    }
  }
  return output;
};
console.log(max(1, 2, 3, 4));

// max([1,2,3,4])와 max(1,2,3,4)형태를 모두 입력할 수 있는 max()함수를 만들어 보세요.

const max = function (첫번째요소, ...나머지) {
  if (Array.isArray(첫번째요소)) {
    let output = 첫번째요소[0];
    for (const 값 of 첫번째요소) {
      if (output < 값) {
        output = 값;
      }
    }
    return output;
  } else {
    let output = 첫번째요소;
    for (const 값 of 나머지) {
      if (output < 값) {
        output = 값;
      }
    }
    return output;
  }
};
console.log(max(1, 2, 3, 4));
console.log(max([1, 2, 3, 4]));
