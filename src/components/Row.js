import React, {useCallback, useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from '../api/axios';
import MovieModal from './MoiveModal';

//스와이퍼 플러그인
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Row = ({title, id, getUrl }) => {

  const [movies, setMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  //api 호출
  const fetchMovies = useCallback(async () => {
    const response = await axios.get(getUrl);
      setMovies(response.data.results);
  },[getUrl]);
  
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]); // getUrl이 변경될 때마다 데이터를 다시 가져옴


  //모달창 열기
  const hadleModalOpen = (items) => {
    setModalOpen(true);

    //내가 선택한 영화의 정보를 전달
    setSelectMovie(items);
  }


  return (
    <div className='row'>

      <h2>{title}</h2>
      <Swiper
        //install Swiper modules
        
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}//loop 기능 사용 여부
        navigation //arrow 버튼 사용 유무
        pagination={{clickable: true}} //페이지 버튼 보이게 할지
        speed={800}
        breakpoints={{
          1378: { //너비가 1378xp보다 클 때 
            slidesPerView: 6, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 4,
          },
          430: {
            slidesPerView: 3, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 3,
          },
          0 :{
            slidesPerView: 2, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 2,
          }
        }}
      >
        {
          movies.map((items) => {
            return (
              <SwiperSlide key={items.id}>
                  <div className='slide_wrap'>
                    {/* 각 영화의 정보를 모달로 전달하기위해서 items을 함수의 인수로 전달 */}
                    <div className='img_box' onClick={() => hadleModalOpen(items)}>
                      <img src={`https://image.tmdb.org/t/p/original${items.backdrop_path}`} alt={items.title} />
                    </div>
                  </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>

      {modalOpen  && 
       <MovieModal
        //배열을 참조하지말고 새로운 배열 복사해서 넣어주기
        {...selectMovie}
         setModalOpen = {setModalOpen}

       />
      }
        
    </div>
  )
}

export default Row