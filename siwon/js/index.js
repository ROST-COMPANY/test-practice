// 이벤트 핸들러 함수 정의
const handleClickLoginBtn = function () {
  const idInput = document.getElementById('id');
  const pwInput = document.getElementById('pw');
  const idInputValue = idInput.value;
  const pwInputValue = pwInput.value;

  let isIdPassed = false;
  let isPwPassed = false;

  // id, pw 조건 확인
  if (idInputValue.length > 6) {
    isIdPassed = true;
  }

  if (pwInputValue.length > 6) {
    isPwPassed = true;
  }

  // id 조건이 틀린 경우
  if (!isIdPassed) {
    return alert('아이디는 6자리 이상이어야 합니다.');
  }

  // pw 조건이 틀린 경우
  if (!isPwPassed) {
    return alert('비밀번호는 6자리 이상이어야 합니다.');
  }

  // 모든 조건이 충족된 경우
  alert(`환영합니다! ${idInputValue}님!`);
  location.href = `/siwon/welcome.html?id=${idInputValue}`;
};

// 이벤트 리스너 등록
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', handleClickLoginBtn);
