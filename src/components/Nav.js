import React, {useState, u, useEffect} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import SearchPage from './pages/SearchPage';
import useResizeWidth from '../hooks/useResizeWidth';

const Nav = () => {


    const [inputState, setInputState] = useState(false);
    const [searchVal, setSearchVal] = useState("");
    const [wScrollY, setWScrollY] = useState(false);
    const [navOn, setNavOn] = useState(false);
    const [mobileNavState, setMobileNavState] = useState(false);
    const [observeSize, setObserveSize] = useState(0);

    const path = useLocation();
    const navigate = useNavigate();
    const size = useResizeWidth();

    useEffect(()=> {
        setObserveSize(size);
    },[size])

    useEffect(() => {
        if(path.pathname === "/login") {
            setNavOn(true);
        }else {
            setNavOn(false);
        }
    },[]);

    const handleClick =() => {
        if(inputState){
            navigate("/");
        }
        setInputState(!inputState);
        setSearchVal("");
        
    }

    const handleClickMobileMenuState = () => {
        setMobileNavState(!mobileNavState);
    }

    const debouncedSearchVal = useDebounce(searchVal, 1000);

    const handleChange = (e) => { 
        setSearchVal(e.target.value);

        //검색어를 입력할 때 마다 /search 경로로 이동시켜줌
        navigate(`/search?q=${e.target.value}`);

    }

    const handleSearchReset = () => {
        setSearchVal("");
        
        
    }

    window.addEventListener("scroll", ()=> {
        if(window.scrollY > 50) {
            setWScrollY(true);
        }else {
            setWScrollY(false);
        }
    });

  return (
    <nav className={(wScrollY || inputState ? "on " : " ")  +  (navOn ? "off " : " ")}>
        <div className='nav_left'>
            <h2 className='Logo'>
                <Link to="/" class="logoLink"> 
                    <img src="/images/icons/Logo.png" alt="netflix"/>
                </Link>
            </h2>
            

            <div className='menu'>
                <button className='menu_open' onClick={handleClickMobileMenuState}>메뉴</button>

                <ul className={`menu_list ${mobileNavState ? "on" : "" }` }>
                    <li><Link to="/"><span>홈</span></Link></li>
                    <li><Link to=""><span>시리즈</span></Link></li>
                    <li><Link to=""><span>요즘 대세 콘텐츠</span></Link></li>
                </ul>
            </div>
        </div>

        <div className={`nav_right  ${(observeSize < 641) && inputState ? " mobile" : " "} `}>
            <div className={`search_box ${inputState ? "active" : "" }`}>
                <span className='search_icon' onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%" viewBox="0 0 24 24" role="img" aria-hidden="true" class="search-icon"><path fillRule="evenodd" clipRule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path></svg>
                </span>
                <div className='input_box'>
                    <input type="text" value={searchVal}  onChange={handleChange} placeholder='장르, 이름'/>
                </div>
                <button className={`search_reset ${searchVal.length ? "on" : ""}`} onClick={handleSearchReset}>
                    <img src="/images/icons/ico_close.png" alt="close"/>
                </button>
            </div>
        </div>

        
    </nav>
  )
}

export default Nav