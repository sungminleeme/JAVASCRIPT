const 테스트 = function (배열, 콜백함수) {
  for (const 값 of 배열) {
    콜백함수(값);
  }
};

// ----
테스트([52, 273, 103, 32], function (콜백함수의_매개변수) {
  console.log(`${콜백함수의_매개변수}번쨰 안녕하세요`);
});

// ----
const 함수 = function (콜백함수의_매개변수) {
  console.log(`${콜백함수의_매개변수}번쨰 안녕하세요`);
};
테스트([52, 273, 103, 32], 함수);

const 배열 = [273, 52, 103, 32, 57];
배열.forEach(function (value, index) {
  console.log(`${index}번쨰의 값은${value}`);
});

let 배열 = [273, 52, 103, 32, 57];
배열 = 배열.filter(function (value, index) {
  return value % 2 === 0;
});
console.log(배열);

let 배열 = [273, 52, 103, 32, 57];
배열 = 배열.map(function (value, index) {
  return value + "!!";
});
console.log(배열);

//화살표 함수
let 배열 = [273, 52, 103, 32, 57];
배열 = 배열.map((value, index) => value + "!!");
console.log(배열);

const myForEach = function (배열, 콜백함수) {
  for (let i = 0; i < 배열.length; i++) {
    const element = 배열[i];
    콜백함수(element, i);
  }
};

const myFilter = function (배열, 콜백함수) {
  const output = [];
  for (let i = 0; i < 배열.length; i++) {
    const element = 배열[i];
    if (콜백함수(element, i, 배열)) {
      output.push(element);
    }
  }
  return output;
};
