import React, {useState, useEffect, } from 'react'

const useResizeWidth = () => {

    const [resizeWidth, setResizeWidth] = useState(window.innerWidth);

    useEffect(() => {
       
      const handleResize =() => {
        setResizeWidth(window.innerWidth);
      }
  
      //ResizeObserver는 브라우저api로 화면의 크기 변화를 감지하는 기능이다.
      //화면 크기 변화가 감지되면 handleResize함수를 실행한다.
      const resizeObserver = new ResizeObserver(handleResize);
  
      //observe는 감지할 대상을 지정하는것이다.
      resizeObserver.observe(document.documentElement);
  
      return () => {
        //컴포넌트 언마운트 될 때 지정된 관찰대상을 해제한다.
        resizeObserver.disconnect();
      }
    }, [])
    
    return resizeWidth;
  
}

export default useResizeWidth