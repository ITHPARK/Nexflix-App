const request = {
    
    setMovieNowPlaying: "movie/now_playing", //지금 상영중인 영화
    setMoviePopular: "movie/popular", //인기 있는 영화
    setMovieTopRated: "movie/top_rated", //최고순위 영화

    //장르별 영화 정보 가져오기
    setMovieAction: "/discover/movie?with_genres=28",
    setMovieComedy: "/discover/movie?with_genres=35",
    setMovieHorror: "/discover/movie?with_genres=27",
    setMovieRomance: "/discover/movie?with_genres=10749",
    setMovieDocumentaries: "/discover/movie?with_genres=99"
    
}

export default request;