// 배열등과 함께 사용하는 녀석
const 배열 = ["바나나", "사과", "귤"];
for (const 요소 of 배열) {
  console.log(요소);
}

for (const 인덱스 in 배열) {
  console.log(인덱스, 배열[인덱스]);
}

// 그냥 범용적으로 사용하는 녀석
for (let i = 0; i < array.length; i++) {
  const element = array[i];
}
for (let i = 0; i < 5; i++) {
  console.log(` ${i}번쨰 반복입니다.`);
}
for (let i = 0; i < 10; i += 2) {
  console.log(`${i}번쨰 반복입니다.`);
}

// 역 반복문
for (let i = 20; i >= 10; i--) {
  console.log(`${i}번째 반복입니다`);
}

// while 반복문
let i = 0;
while (true) {
  alert(`$(i)번쨰 반복입니다.`);
  i++;
}

let i = 0;
while (confirm("계속 진행하시겠습니까?")) {
  alert(`$(i)번쨰 반복입니다.`);
  i++;
}
// 1.불린 표현식을 확인한다.
// 2.true라면 본문을 실행하고 1번으로 돌아간다.
// 3.false라면 종료
