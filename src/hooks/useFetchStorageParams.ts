import { useEffect, useState } from "react"
import { API_URL } from "../api";
import axios from "axios";

interface VersionedParams {
  max_segment_size: string
  redundant_data_chunk_num: number
  redundant_parity_chunk_num: number
  min_charge_size: string
}

interface Params {
  versioned_params: VersionedParams
  max_payload_size: string
  mirror_bucket_relayer_fee: string
  mirror_bucket_ack_relayer_fee: string
  mirror_object_relayer_fee: string
  mirror_object_ack_relayer_fee: string
  mirror_group_relayer_fee: string
  mirror_group_ack_relayer_fee: string
  max_buckets_per_account: number
  discontinue_counting_window: string
  discontinue_object_max: string
  discontinue_bucket_max: string
  discontinue_confirm_period: string
  discontinue_deletion_max: string
  stale_policy_cleanup_max: string
}

interface Data {
  params: Params
}

const useFetchStorageParams = (): {
  data: Data | null
  isLoading: boolean
  error: any
  refetch: () => void
} => {
  const [data, setData] = useState<Data | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get<Data>(API_URL + "/greenfield/storage/params")
      setData(response.data)
      setError(null)
    } catch (error: any) {
      setError(error)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

export default useFetchStorageParams
