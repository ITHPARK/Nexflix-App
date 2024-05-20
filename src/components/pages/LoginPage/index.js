import React,{useState} from 'react'
import LoginModal from '../../LoginModal';


const LoginPage = () => {

  const [loginModal, setLoginModal] = useState(false);
  const [loginState, setLoginState] = useState(false);

  const handleClickLogin = () => {
    setLoginModal(true);
  }

  return (
    <div className='login'>
      <button className='ssoLogin' onClick={handleClickLogin}>Login</button>
      <div className='new_account'>
        <h2>영화, 시리즈 등을 무제한으로</h2>
        <p>어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.</p>
        <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
        <div className='form'>
          <input type="text" />
          <button>시작하기</button>
        </div>
      </div>

      {
        loginModal && 
        <LoginModal
          setLoginModal = {setLoginModal}
        />
      }
    </div>
  )
}

export default LoginPage 