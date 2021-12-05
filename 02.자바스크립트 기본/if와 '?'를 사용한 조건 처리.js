// if와 문자열 0

// 아래 코드에서 alert는 실행될까요? yes

if ("0") {
  alert("Hello");
}

// 자바스크립트의 공식 이름

// if..else 구조를 이용해 "자바스크립트의 ‘공식’ 이름은 무엇일까요?"라는 질문을 하는 코드를 작성해 보세요.
// 사용자가 'ECMAScript’를 입력했다면 ‘정답입니다!’, 아니라면 '모르셨나요? 정답은 ECMAScript입니다!'라는 메시지를 보여주세요.

let javascript = prompt("자바스크립트의 ‘공식’ 이름은 무엇일까요?", "");

if (javascript == "ECMAScript") {
  alert("정답입니다!");
} else {
  alert("모르셨나요? 정답은 ECMAScript입니다!");
}

// 'if..else'를 '?'로 교체하기

// 조건부 연산자 '?'를 사용해 if..else문이 사용된 아래 코드를 변형해보세요. 동작 결과는 동일해야 합니다.
// 가독성을 위해 표현식을 여러 줄로 분할해 작성해 보시길 바랍니다.

let message;

if (login == "직원") {
  message = "안녕하세요.";
} else if (login == "임원") {
  message = "환영합니다.";
} else if (login == "") {
  message = "로그인이 필요합니다.";
} else {
  message = "";
}

////////////////////////////////

let message =
  login == "직원"
    ? "안녕하세요."
    : login == "임원"
    ? "환영합니다"
    : login == ""
    ? "로그인이 필요합니다."
    : "";
