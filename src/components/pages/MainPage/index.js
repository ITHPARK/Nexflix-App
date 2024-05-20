import React from 'react'
import TopBanner from '../../TopBanner'
import request from '../../../api/request';
import Row from '../../Row';
import Footer from '../../Footer'

const MainPage = () => {
  return (
    <div className='container'>
      <TopBanner/>
      <div className='row_section'>
          <Row title="Top20 영화" id="TR" getUrl={request.setMovieTopRated}/>
          <Row title="유명한 영화" id="TR" getUrl={request.setMoviePopular}/>
          <Row title="액션" id="AM" getUrl={request.setMovieAction}/>
          <Row title="코미디" id="CM" getUrl={request.setMovieComedy}/>
          <Row title="공포, 호러" id="CM" getUrl={request.setMovieHorror}/>
      </div>
      <Footer/>
    </div>
  )
}

export default MainPage