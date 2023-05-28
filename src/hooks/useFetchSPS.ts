import { useState, useEffect } from "react"
import axios from "axios"

interface SPSData {
  sps: SPS[];
  pagination: Pagination;
}

interface SPS {
  operator_address: string;
  funding_address: string;
  seal_address: string;
  approval_address: string;
  gc_address: string;
  total_deposit: string;
  status: string;
  endpoint: string;
  description: Description;
}

interface Description {
  moniker: string;
  identity: string;
  website: string;
  security_contact: string;
  details: string;
}

interface Pagination {
  next_key: string;
  total: string;
}

const URL = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org/greenfield/storage_providers?pagination.count_total=true&pagination.reverse=true";

const useFetchSPS = (): {
  data: SPSData | null
  isLoading: boolean
  error: any
  refetch: () => void
} => {
  const [data, setData] = useState<SPSData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<SPSData>(URL);
      setData(response.data);
      setError(null);
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return {
    data,
    isLoading,
    error,
    refetch
  };
}

export default useFetchSPS;
