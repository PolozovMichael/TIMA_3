import { Table } from "antd";

interface TableComponentProps {
  dataSource: [];
  columns: [];
  loading: boolean;
  type?: string,
  footer?: string;
}

const TableComponent = ({
  dataSource,
  columns,
  loading,
  type = "solid",
  footer,
}: TableComponentProps) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      loading={loading}
      style={{ width: "100%" }}
      footer={() => footer}
      className={type}
      pagination={{
        position: [ "bottomCenter" ],
        pageSize: 10,
      }}
    />
  );
}

export default TableComponent;
