import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import useDebounce from '../../../hooks/useDebounce';
import axios from '../../../api/axios';



const SearchPage = () => {

  const [searchResults, setsearchResults] = useState([]);

  
  const useQuery = () => {
    //해당 코드는 현재 url에서 search 부분에 q=asdasd를 반환해줄것이다.
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  //반환받은 q=asdasd에서 q의 값인 asdasd만 골라내는 모듈
  const values = query.get('q');

  const deBounceValues = useDebounce(values, 500);

  useEffect(() => {
    //deBounceValues 값이 있을 때 fetchMovies 함수를 실행해서 api 요청을 보낸다.
    if(deBounceValues){
      fetchMovies(values);
    }
  }, [deBounceValues]);


  const fetchMovies = async(values) => {
    try {
      const res = await axios.get(`/search/multi?include_adult=false&query=${values}`);
      setsearchResults(res.data.results);
    }catch (error) {
      console.error(error);
    }
  }

  return(
    <div className='container search'> 
      <div className='inner'>
        {
           searchResults.length > 0 ? 
            searchResults.map((items) => {
              if(items.backdrop_path !== null && items.media_type !== "person") {
                const imgUrl = "https://image.tmdb.org/t/p/w500" + items.backdrop_path;
                return (
                  <div className='movie' key={items.id}>
                    <div className='movie_column'>
                      <img src={imgUrl} alt="movie"/>
                    </div>  
                  </div>
                )
              }
            })
          :
          
          <p>검색결과가 없습니다.</p>
        }
      </div>
    </div>
  )
  
  // if(searchResults.length > 0){
  //   return (
  //     <div className='container search'>
        
  //       {
  //         searchResults.map((items) => {
  //           if(items.backdrop_path !== null && items.media_type !== "person") {
  //             const imgUrl = "https://image.tmdb.org/t/p/w500" + items.backdrop_path;
  //             return (
  //               <div className='movie' key={items.id}>
  //                 <div className='movie_column'>
  //                   <img src={imgUrl} alt="movie"/>
  //                 </div>  
  //               </div>
  //             )
  //           }
  //           <div>
              
  //           </div>
  //         })
  //       }
  //     </div>
  //   )
  // }else {
  //   return (
  //     <div>

  //     </div>
  //   )
  // }

  
}

export default SearchPage