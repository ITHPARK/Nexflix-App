import React, {useRef} from 'react'
import { useOnClickOutside } from '../../hooks/useOnClickOutsie';

const MovieModal = ({
  
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
  setBannerModal,
  isBanner
}) => {

  console.log(isBanner)

  //div.modal의 DOM에 직접 접근하기 위한 ref
  const ref = useRef();

  //모달 밖을 클릭했을 때 모달창을 닫게해주는 custom hooks
  useOnClickOutside(ref, () => {

      //이게 handler
      isBanner ? 
      setBannerModal(false)
      :
      setModalOpen(false);

  });


  return (
    <div className='modal'>      
      <div className='modal_wrapper'>
        <div className='modal_content' ref={ref}> 

          <button className='modal_close'  onClick={()=> {
            isBanner ? setBannerModal(false) : setModalOpen(false);
          }}>
            <div className='img_wrap'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%" viewBox="0 0 24 24" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" fill="currentColor"></path></svg>
            </div>
          </button>

          <div className='img_box'>
            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={title} />
          </div>

          <div className='text_box'>
              <h3>
                {title}
              </h3>
              <div className='info'>
                <span className='info_row'><span className='tit'>개봉일 : </span> {release_date}</span>
                <span className='info_row'><span className='tit'>평점 : </span>{vote_average}</span>
              </div>
              <p>
                {overview}
              </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MovieModal