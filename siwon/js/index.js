/*
  이벤트 핸들러 함수를 정의하는 부분입니다.
  로그인 버튼이 클릭되었을 경우 실행될 함수를 미리 정의하고, 이후에 함수를 이벤트에 등록하게 됩니다.
*/
const handleClickLoginBtn = function () {
  /*
  DOM요소를 조작하기 위해서 html 태그를 가져옵니다.
  여러가지 방법이 있지만 가장 간단한 방법으로 태그에 부여한 id를 통해서 가져옵니다.
  */
  const idInput = document.getElementById('id');
  const pwInput = document.getElementById('pw');

  /*
  자주 사용할 것 같은 내용을 변수에 저장합니다.
  선택한 DOM요소는 input이며 input요소는 value라는 프로퍼티를 가지고 있습니다.
  value 프로퍼티를 사용하면 유저가 입력한 값을 string으로 얻을 수 있습니다.
  */
  const idInputValue = idInput.value;
  const pwInputValue = pwInput.value;

  /*
  유저가 입력한 값이 유효한지 확인하기 위해서 validation check를 합니다.
  id, pw가 양식에 맞는 값을 입력했는지 여부를 저장할 변수를 생성하고, 기본 값으로 false를 저장합니다.
  */
  let isIdPassed = false;
  let isPwPassed = false;

  /*
  id, pw 조건 확인하는 로직입니다. 조건이 충족한다면 변수에 true를 저장합니다.
  */
  if (idInputValue.length > 6) {
    isIdPassed = true;
  }

  if (pwInputValue.length > 6) {
    isPwPassed = true;
  }

  /*
  조건이 맞지 않았을 경우 어떤 반응을 실행 할 지 정하는 부분입니다.
  id, pw 각각 상황에 맞는 안내 메시지를 보여줍니다.
  return을 하면 함수가 여기서 종료됩니다.
  */

  // id 조건이 틀린 경우
  if (!isIdPassed) {
    return alert('아이디는 6자리 이상이어야 합니다.');
  }

  // pw 조건이 틀린 경우
  if (!isPwPassed) {
    return alert('비밀번호는 6자리 이상이어야 합니다.');
  }

  /*
  위 조건문을 지나서 함수가 종료되지 않았다는 것은 모든 조건이 충족되었다는 의미입니다.
  조건을 통과하였으므로 로그인 메시지를 보여주고 페이지를 이동시킵니다.
  여기서는 템플릿리터럴이라는 ES6문법을 사용합니다. 
  익숙하지 않다면 MDN에 검색하여 익숙해지도록 합시다.
  */

  // 모든 조건이 충족된 경우
  alert(`환영합니다! ${idInputValue}님!`);
  location.href = `/siwon/welcome.html?id=${idInputValue}`;
};

/*
DOM요소를 선택하고, 선택된 DOM요소에 이벤트 리스너를 등록하는 부분입니다.
html태그를 자바스크립트로 조작할 수 있도록 만들어 놓은 자료구조를 DOM, DOM트리 라고 부릅니다.
html태그를 자바스크립트 DOM의 세계관에서는 DOM요소라고 부릅니다. 
여기서는 태그에 부여해둔 id를 통해서 버튼을 선택합니다. 
*/
const loginBtn = document.getElementById('loginBtn');

/*
선택한 요소에 이벤트리스너를 등록합니다. 
이벤트리스너는 지정한 이벤트가 발생하면 콜백함수를 실행시켜줍니다.

addEventListener함수의 첫번째 인자에는 이벤트의 종류를 넣습니다. 
'click'이외에도 여러가지 이벤트가 있으며 감지 가능한 이벤트의 종류는 MDN등을 참고합니다.

두번째 인자에는 이밴트가 발생할 경우 실행할 콜백함수를 입력합니다. 
인자입력 부분에서 함수를 정의해도 좋지만, 가독성을 위해 미리 정의된 함수를 변수를 통해서 입력하는 것이 좋습니다.
*/
loginBtn.addEventListener('click', handleClickLoginBtn);
