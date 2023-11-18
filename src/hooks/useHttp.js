import {useState, useCallback} from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url,  method = 'GET',  body = null, headers = {}) => { // используем useCallback чтобы реакт не входил в рекурсию
    setLoading(true)
   
    try {
      if (body  ) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }
console.log("URL"+url)
      const response = await fetch(url, {method, body, headers})
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так')
      }

      setLoading(false)

      return data
    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return { loading, request, error, clearError }
}  


/*
import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);  

  const request = useCallback(
  //  async (url: string, method = 'GET', body: string | null = null, headers = {}) => {
    async (url: string, method = 'GET', body: any = null, headers = {}) => {
      setLoading(true);

      try {
        if (body !== null) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Что-то пошло не так');
        }

        setLoading(false);

        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
 */