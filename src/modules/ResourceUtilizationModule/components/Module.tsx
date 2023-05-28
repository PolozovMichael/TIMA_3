import Poster from "./Poster";
import { useFetchAllBuckets } from "../../../hooks/useFetchAllBuckets";
import TableComponent from "../../../components/TableComponent";
import LoaderComponent from "../../../components/LoaderComponent";
import { useFetchBucketsLength } from "../../../hooks/useFetchBucketsLength";

const Module = () => {
  const { data, isLoading } = useFetchAllBuckets();
  const { bucketsLength } = useFetchBucketsLength();

  const columns = [
    {
      title: "Buckets amount",
      dataIndex: "bucketsLength",
      key: "bucketsLength",
    },
    {
      title: "Average bucket size",
      dataIndex: "avgBucketSize",
      key: "avgBucketSize",
    },
    {
      title: "All buckets size",
      dataIndex: "allBucketsSize",
      key: "allBucketsSize",
    },
  ];
  const bucketSizes = data && data.bucket_infos.reduce(
    (accumulator, obj) => {
      if (obj.billing_info && obj.billing_info.total_charge_size) {
        const chargeSize = parseFloat(obj.billing_info.total_charge_size);
        accumulator.totalChargeSizeSum += chargeSize;
        accumulator.bucketCount++;
      }
      return accumulator;
    },
    { totalChargeSizeSum: 0, bucketCount: 0 }
  );
  const dataSource = bucketSizes?.totalChargeSizeSum !== 0 && [ {
    bucketsLength,
    avgBucketSize: "10 GB",
    allBucketsSize: bucketSizes?.totalChargeSizeSum,
  } ];

  if (isLoading) return <LoaderComponent />;

  return (
    <>
      <Poster />
      <TableComponent
        // @ts-ignore
        dataSource={dataSource}
        // @ts-ignore
        columns={columns}
        loading={isLoading}
        type="dashed"
        pagination={false}
        footer="Buckets resources"
      />
    </>
  );
}

export default Module;
