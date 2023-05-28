import { useFetchAllBuckets } from "../../../hooks/useFetchAllBuckets";

import LoaderComponent from "../../../components/LoaderComponent";

const Module = () => {
  const {
    data,
    isLoading,
  } = useFetchAllBuckets();
  // const columns: ColumnsType<DataType> = [
  //   {
  //     title: "SP Name",
  //     dataIndex: "moniker",
  //     key: "moniker",
  //   },
  //   {
  //     title: "Operator Address",
  //     dataIndex: "operator_address",
  //     key: "operator_address",
  //     render: (text) => useAddress(text),
  //   },
  //   {
  //     title: "Seal Address",
  //     dataIndex: "seal_address",
  //     key: "seal_address",
  //     render: (text) => useAddress(text),
  //   },
  //   {
  //     title: "Total Deposit",
  //     dataIndex: "total_deposit",
  //     key: "total_deposit",
  //     render: (text) => `${text/1000000000000000000} BNB`,
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "status",
  //     key: "status",
  //     render: (text) => {
  //       const isActive = text === "STATUS_IN_SERVICE";
  //       return (
  //         <div className={isActive ? "ant-table-tag ant-table-tag--active" : "ant-table-tag"}>
  //           {isActive ? "Active" : "Inactive"}
  //         </div>
  //       )
  //     },
  //   }
  // ];
  // const dataSource: null | DataType[] = data && data?.sps.map(({
  //   description,
  //   operator_address,
  //   seal_address,
  //   total_deposit,
  //   status,
  // }) => {
  //   // name
  //   const { moniker }: any = description;
  //   return {
  //     key: moniker,
  //     moniker,
  //     operator_address,
  //     seal_address,
  //     total_deposit,
  //     status,
  //   };
  // });

  if (isLoading) return <LoaderComponent />;


  console.log("data", data);
  const sortedArr = data && data.bucket_infos.sort((a, b) => parseInt(b.create_at) - parseInt(a.create_at));
  const sortedData = sortedArr && sortedArr.slice(0, 5);

  console.log("sortedData", sortedData);
  return (
    <section className="section">
      <p className="section__title">Latest 5 Created Buckets</p>
      {/*{data && (*/}
      {/*  <TableComponent*/}
      {/*    dataSource={dataSource}*/}
      {/*    columns={columns}*/}
      {/*    loading={isLoading}*/}
      {/*    footer={`A total of ${dataSource?.length} storage providers`}*/}
      {/*  />*/}
      {/*)}*/}
    </section>
  );
}

export default Module;
