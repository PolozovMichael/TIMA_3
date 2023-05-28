import TableComponent from "../../../components/TableComponent";

const Module = () => {
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

export default Module;
