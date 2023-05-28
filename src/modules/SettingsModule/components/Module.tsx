import useFetchStorageParams from "../../../hooks/useFetchStorageParams";
import LoaderComponent from "../../../components/LoaderComponent";
import { transformColumnTitle } from "../../StorageProvidersModule/components/helpers/transformColumnTitle";
import TableComponent from "../../../components/TableComponent";

const Module = () => {
  const { data, isLoading} = useFetchStorageParams();

  if (isLoading) return <LoaderComponent />;

  const paramsData = data?.params?.versioned_params;

  const columns = [
    {
      dataIndex: "attribute",
      key: "attribute",
    },
    {
      dataIndex: "value",
      key: "value",
    },
  ];

  const selectedFields = paramsData && {
    max_segment_size: paramsData.max_segment_size,
    min_charge_size: paramsData.min_charge_size,
    redundant_data_chunk_num: paramsData.redundant_data_chunk_num,
    redundant_parity_chunk_num: paramsData.redundant_parity_chunk_num,
  };

  const transformedData = selectedFields && Object.entries(selectedFields).map(([ attribute, value ]) => ({
    attribute: transformColumnTitle(attribute),
    value,
  }));


  return (
    <section className="section">
      <p className="section__title">Settings Storage Providers</p>

      {paramsData && (
        <TableComponent
          // @ts-ignore
          dataSource={transformedData}
          // @ts-ignore
          columns={columns}
          loading={isLoading}
          type="reverse"
          pagination={false}
          footer={"Settings"}
        />
      )}
    </section>
  );
}

export default Module;
