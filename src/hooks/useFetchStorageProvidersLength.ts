import axios from "axios";
import { API_URL } from "../api";
import { useEffect, useState } from "react";

export const useFetchStorageProvidersLength = () => {
  const [ storageProvidersLength, setStorageProvidersLength ] = useState(0);
  const [ isLoading, setIsLoading ] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await axios.get(API_URL + "/cosmos/auth/v1beta1/accounts");
      setStorageProvidersLength(res.data.pagination.total);
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return { storageProvidersLength, isLoading };
}
