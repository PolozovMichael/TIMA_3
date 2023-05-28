import type { ColumnsType } from "antd/es/table";

import { DataType } from "../data/interfaces";

import useFetchSPS from "../../../hooks/useFetchSPS";
import TableComponent from "../../../components/TableComponent";
import { useAddress } from "../../../hooks/useAddress";
import LoaderComponent from "../../../components/LoaderComponent";

const Desk = () => {
  const {
    data,
    isLoading,
  } = useFetchSPS();

  const columns: ColumnsType<DataType> = [
    {
      title: "SP Name",
      dataIndex: "moniker",
      key: "moniker",
    },
    {
      title: "Operator Address",
      dataIndex: "operator_address",
      key: "operator_address",
      render: (text) => useAddress(text),
    },
    {
      title: "Seal Address",
      dataIndex: "seal_address",
      key: "seal_address",
      render: (text) => useAddress(text),
    },
    {
      title: "Total Deposit",
      dataIndex: "total_deposit",
      key: "total_deposit",
      render: (text) => `${text/1000000000000000000} BNB`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        const isActive = text === "STATUS_IN_SERVICE";
        return (
          <div className={isActive ? "ant-table-tag ant-table-tag--active" : "ant-table-tag"}>
            {isActive ? "Active" : "Inactive"}
          </div>
        )
      },
    }
  ];
  const dataSource: null | DataType[] = data && data?.sps.map(({
    description,
    operator_address,
    seal_address,
    total_deposit,
    status,
  }) => {
    // name
    const { moniker }: any = description;
    return {
      key: moniker,
      moniker,
      operator_address,
      seal_address,
      total_deposit,
      status,
    };
  });

  if (isLoading) return <LoaderComponent />;

  return (
    <section className="section">
      <p className="section__title">Storage Providers</p>
      {data && (
        <TableComponent
          dataSource={dataSource}
          columns={columns}
          loading={isLoading}
          footer={`A total of ${dataSource?.length} storage providers`}
        />
      )}
    </section>
  );
}

export default Desk;
