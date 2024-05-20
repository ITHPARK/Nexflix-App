import React from 'react'
import axios from 'axios';


//the movie db의 api를 여러번 요청해야하기 떄문에 기본 baseUrl과 내 api키를 인스턴스화 한다.
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  //url뒤에 들어갈 파라미터 값들 기본적으로 요청을 보낼 때 axios.get(url)이 다음에 들어간다.
  params: {
    api_key: '69bf1f447f3bdac5074462e26161b1a4', //내 api키
    language: "ko-KR",
  },
});

export default instance;
