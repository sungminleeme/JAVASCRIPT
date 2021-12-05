// 비교

// 아래 표현식들의 결과를 예측해보세요.

5 > 4; //true
"apple" > "pineapple"; //false
"2" > "12"; // false 두 피연산자는 문자열이므로, 사전순으로 비교가 이뤄집니다.
//왼쪽 피연산자의 첫 번째 글자 "2"는 오른쪽 피연산자의 첫 번째 글자 "1"보다 큽니다.
undefined == null; //true
undefined === null; //false
null == "\n0\n"; //false
null === +"\n0\n"; //false
