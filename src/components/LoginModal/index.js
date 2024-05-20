import React, {useState, useEffect, useRef} from 'react'
import { useOnClickOutside } from '../../hooks/useOnClickOutsie';
import { useLocation, useNavigate } from 'react-router-dom';



const LoginModal = ({setLoginModal}) => {

    const ref = useRef();

    useOnClickOutside(ref, () => {

        //이게 handler
        setLoginModal(false);

    });


  return (
    <div className='loginModal'>
        <div className='content' ref={ref}>
            <button className='modalClose' onClick={() => setLoginModal(false)}>
                <img src="/images/icons/ico_close_black.png" alt="close"/>
            </button>
            <h3>로그인</h3>
            <div className='button_wrap'>
                
            </div>
           
        </div>
    </div>
  )
  
}

export default LoginModal