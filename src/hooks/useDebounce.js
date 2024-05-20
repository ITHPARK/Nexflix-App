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

