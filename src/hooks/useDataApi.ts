import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL }  from '../config/config';

export const useDataApi = (apiUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const url = API_URL + apiUrl;
  useEffect(() => {
    const fetchData = async () => {

      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  return [ data, isLoading, isError];
};
