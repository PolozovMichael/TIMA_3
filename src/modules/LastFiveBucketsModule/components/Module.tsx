import { ColumnsType } from "antd/es/table";

import { DataType } from "../data/interfaces";
import { useFetchAllBuckets } from "../../../hooks/useFetchAllBuckets";
import { useAddress } from "../../../hooks/useAddress";

import LoaderComponent from "../../../components/LoaderComponent";
import TableComponent from "../../../components/TableComponent";
import { Link } from "react-router-dom";

const Module = () => {
  const {
    data,
    isLoading,
  } = useFetchAllBuckets();
  const sortedData = data && data.bucket_infos.slice(0, 5);

  const columns: ColumnsType<DataType> = [
    {
      title: "Bucket Name",
      dataIndex: "bucket_name",
      key: "bucket_name",
      render: (text) => <Link to={`/buckets/${text}`}>{text}</Link>
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
      render: (text) => useAddress(text),
    },
    {
      title: "Primary SP Address",
      dataIndex: "primary_sp_address",
      key: "primary_sp_address",
      render: (text) => useAddress(text),
    },
    {
      title: "Payment Address",
      dataIndex: "payment_address",
      key: "payment_address",
      render: (text) => useAddress(text),
    }
  ];
  const dataSource: null | DataType[] = sortedData && sortedData.map(({
    owner,
    bucket_name,
    primary_sp_address,
    payment_address,
  }) => {
    return {
      key: owner,
      owner,
      bucket_name,
      primary_sp_address,
      payment_address,
    };
  });

  if (isLoading) return <LoaderComponent />;


  return (
    <section className="section">
      <p className="section__title">Latest 5 Created Buckets</p>
      {sortedData && (
        <TableComponent
          // @ts-ignore
          dataSource={dataSource}
          // @ts-ignore
          columns={columns}
          loading={isLoading}
          type="dashed"
          pagination={false}
        />
      )}
    </section>
  );
}

export default Module;
