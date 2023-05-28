import { useEffect, useState } from "react"
import { API_URL } from "../api";
import axios from "axios";

interface BucketInfo {
  owner: string;
  bucket_name: string;
  visibility: string;
  id: string;
  source_type: string;
  create_at: string;
  payment_address: string;
  primary_sp_address: string;
  charged_read_quota: string;
  billing_info: {
    price_time: string;
    total_charge_size: string;
    secondary_sp_objects_size: {
      sp_address: string;
      total_charge_size: string;
    }[];
  };
  bucket_status: string;
}

interface Data {
  bucket_info: BucketInfo;
}

export const useFetchBucketByName = (
  name: string
): {
  data: Data | null
  isLoading: boolean
  error: any
  refetch: () => void
} => {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<Data>(API_URL + "/greenfield/storage/head_bucket/" + name);
      setData(response.data);
      setError(null);
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch };
};
