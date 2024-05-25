# :pushpin: 리액트 넷플릿스 클론코딩 앱
> TMDB(The Movie DB Api)를 활용한 넷플릭스 앱. </br>
> URL: [https://react-netflix-65fce.web.app/](https://react-netflix-65fce.web.app/) 

</br>

## 1. 참여 인원
- 개인 프로젝트 

</br>

## 2. 사용 기술
#### `Front-end`
  - React.js
  - Sass

#### `기타`
  -반응형웹

</br>


## 3. 핵심 기능
이 서비스의 핵심 기능은 인기 영화, TOP20 영화, 장르 영화 등의 정보, 평점 예고편의 정보를 제공합니다.
사용자는 영화 이미지를 검색하거나 메인 페이지에서 영화를 클릭하시면 상세 정보를 확인하실 수 있습니다.  

<br/>


## 4. 프로젝트 제작을 하면서 느낀점
### SASS를 활용
- CSS 전처리기 SASS를 처음으로 프로젝트에 활용하며 mixins로 css 일부 레이아웃을 모듈화 또는 반응형 셋팅을 네이밍을 하여 설정해 가독성을 높이고, 코드의 중복을 줄이고, 유지보수를 쉽게 하는 편리함을 느낄 수 있었습니다.

### Custom Hooks의 편리함 
- 리액트에서 기본적으로 제공하는 useState, useEffect 등의 베이직 hooks가 아닌 특정 요소 외부를 클릭했을 때 특정요소를 닫거나, 입력란 입력을 할 때 한글자 입력할 때마다 데이터를 가지고 오는게 아닌 입력후 일정 설정한 시간 후에 입력란의 값을 할당
하게 할 수있는 custom hook를 제작하여 여러 컴포넌트에서 import해서 사용 할 수 있었음에 편리함을 느꼈습니다.
  
 ```
//입력후 일정 설정한 시간 후에 입력란의 값을 할당
import React, {useState, useEffect} from 'react';

const useDebounce = (value, delay) => {
    const [debounceVal, setDebounceVal] = useState("");

    useEffect(() => {
      const timer = setTimeout(()=> {
        setDebounceVal(value);
      }, delay);
    
      return () => {
        clearTimeout(timer);
      }
    }, [value]);

    return debounceVal;
}

export default useDebounce;

```


```
//모달창 밖을 클릭했을 때 모달을 닫게하는 hooks
import React, { useEffect, useState, useCallback, useRef, }  from 'react'

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {

        //modal밖을 클릭했을 때 모달을 닫게 해주는 함수
        const listener = (event) => {
           
            //현재 클릭한 요소의 ref가 존재하지 않거나 ref의 자식 요소면 모달을 안 닫는다.
            if(!ref.current || ref.current.contains(event.target)) {
                return;
            }

            //모달 밖에 요소니 모달을 닫아준다.
            handler();
        };
        
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      }
    }, [ref, handler])
}

```

```
//화면 리사이즈를 감지하는 hooks
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
```

