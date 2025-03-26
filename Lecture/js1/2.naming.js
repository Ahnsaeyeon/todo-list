/** 변수 이름 (식별자) 작성 시 주의사항
 *
 * 라틴 문자 (0-9. a-z, A-Z), 숫자, 언더스코어(_), 달러 기호($)로 구성
 * 대소문자 구훈함
 * 카멜 케이스(camelCase)로 작성 userName // 파스칼 케이스 (PascalCase)로 작성 UserName (클래스 이름, 생성자 함수, 리액트 파일명)
 * 한국어 사용 가능하지만 권장하지 않음
 * 예약어 사용 불가 (let, const, function, return, if, else, for, while, switch, case, default, break, continue, instanceof, typeof, new, this, null, undefined, true, false)
 * 숫자로 시작 불가
 * 공백 사용 불가
 * 특수문자로 시작 불가
 * 여러개의 변수를 1,2,3 숫자로 구분은 가능한 지양
 *
 */

let 함수 = () => {
  console.log("함수");
};
