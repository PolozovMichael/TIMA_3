import axios from "axios";
import { API_URL } from "../api";
import { useEffect, useState } from "react";

export const useFetchBucketsLength = () => {
  const [ bucketsLength, setBucketsLength ] = useState(0);
  const [ isLoading, setIsLoading ] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await axios.get(API_URL + "/greenfield/storage/list_buckets?pagination.count_total=true&pagination.reverse=true");
      setBucketsLength(res.data.pagination.total);
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return { bucketsLength, isLoading };
}
