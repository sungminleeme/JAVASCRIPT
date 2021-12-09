const isLeapYear = function (연도) {
  return (
    (연도 % 4 === 0 && //윤년
      연도 % 100 !== 0) || //윤년x
    연도 % 400 === 0
  ); //윤년
};
console.log(`2020년은 윤년일까?===${isLeapYear(2020)}`);
console.log(`2010년은 윤년일까?===${isLeapYear(2010)}`);
console.log(`2000년은 윤년일까?===${isLeapYear(2000)}`);
console.log(`1900년은 윤년일까?===${isLeapYear(1900)}`);
