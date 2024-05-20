import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from '../api/axios';
import request from '../api/request';
import MovieModal from './MoiveModal'

const TopBanner = () => {

  const [movie, setMovie] = useState([]);
  const [bannerPreview, setBannerPreview] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [bannerModal, setBannerModal] = useState(false);
  const [isBanner, setIsBanner] = useState(1);

  const handleOverview = () => {
    setBannerModal(true);
    setBannerPreview(movie);
  }
  

  useEffect(() => {
    //새로 고침할때마다 새로 갱신
    fetchData();

  }, [])
  


  const fetchData = async () => {

    //현재 상영중인 영화 정보를 가져오기 requset 객체의 url을 가져와서 요청을 보낸다.
    const response = await axios.get(request.setMovieNowPlaying);


    //현재 상영중인 영화 정보를 배열을 가져온다음 난수를 생성해 무작위로 배열의 인덱스를 선택한다.
    const movieId = response.data.results[Math.floor(Math.random() * response.data.results.length) ].id;

    //무작위로 고른 영화의 정보를 담고있는 객체를 요청
    const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
      params: {
        append_to_response: "videos"
      }
    });
    setMovie(movieDetail);
  };

  const truncate = (str, len) => {
      return str?.length > len? str.substr(0, len) + "..." : str;
  }

  const handlePreview = () => {
    setIsClick(!isClick);
  }

  if(isClick) {

    return (
      <div className='preview'>
      <div className='inner_preview'>
        <div className='iframe_wrap'>
          <iframe 
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=1&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            width="100%"
            height="100%"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <button className='exit_preview' onClick={handlePreview}>
        <div className='img_wrap'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%" viewBox="0 0 24 24" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" fill="currentColor"></path></svg>
        </div>
        
      </button>
    </div>
    )

  }else {
    return (
      <div 
        className='banner' 
        style ={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover"
        }}
      >
        <div className='info_box'>
          <h3 className='content_title'>
            {movie.title}
          </h3>
          <p className='content_introduce'>{truncate(movie.overview, 100)}</p>
          <div className='button_wrap'>
            {movie.videos?.results.length > 0 ?
              <button className='preview_play' onClick={handlePreview}>
                <div className='img_wrap'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%" viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="#000"></path></svg>
                </div>
                <span>예고편</span>
              </button>  :
              ""
            }
            <button className='detail_view' onClick={handleOverview}>
              <div className='img_wrap'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%" viewBox="0 0 24 24" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
              </div>
              <span>상세정보</span>
            </button>  
          </div>
          
        </div>

        {
          bannerModal && 
          <MovieModal
            {...bannerPreview}
            setBannerModal = {setBannerModal}
            isBanner = {isBanner}

          />
        }
      </div>
    )
  }
}

export default TopBanner