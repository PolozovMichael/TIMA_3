import { Table } from "antd";

interface TableComponentProps {
  dataSource: [];
  columns: [];
  loading: boolean;
  type?: string,
  footer?: string;
  pagination?: boolean;
}

const TableComponent = ({
  dataSource,
  columns,
  loading,
  type = "solid",
  footer,
  pagination = true,
}: TableComponentProps) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      loading={loading}
      style={{ width: "100%" }}
      footer={() => footer}
      className={type}
      pagination={pagination && {
        position: [ "bottomCenter" ],
        pageSize: 10,
      }}
    />
  );
}

export default TableComponent;
