import { Link, useParams } from "react-router-dom";
import { useFetchSPS } from "../../../hooks/useFetchSPS";

import LoaderComponent from "../../../components/LoaderComponent";
import TableComponent from "../../../components/TableComponent";
import { transformColumnTitle } from "../../StorageProvidersModule/components/helpers/transformColumnTitle";


const Module = () => {
  const { spId } = useParams();

  const { data, isLoading } = useFetchSPS();

  if (isLoading) return <LoaderComponent />;

  const spData = data?.sps
    .filter(({ description }) => spId === description.moniker)
    .map(({
      description,
      seal_address,
      funding_address,
      operator_address,
      approval_address,
      total_deposit,
      status,
    }) => {
      const { moniker } = description;
      return {
        sp_name: moniker,
        seal_address,
        funding_address,
        operator_address,
        approval_address,
        total_deposit,
        status,
      };
    });
  const columns = [
    {
      dataIndex: "attribute",
      key: "attribute",
      // render: (text) => <strong>{text}</strong>,
    },
    {
      dataIndex: "value",
      key: "value",
    },
  ];

  const transformedData = spData && Object.entries(spData[0]).map(([ attribute, value ]) => ({
    attribute: transformColumnTitle(attribute),
    value,
  }));
  return (
    <>
      <section className="go-back">
        <Link to="/storage-providers">
          {"<"} Bucket Storage
        </Link>
      </section>
      <section className="section">
        <p className="section__title">SP Address Information</p>
        {spData && (
          <TableComponent
            dataSource={transformedData}
            columns={columns}
            loading={isLoading}
            type="reverse"
            pagination={false}
          />
        )}
      </section>
    </>
  );
}

export default Module;
