import { Link, useParams } from "react-router-dom";

import LoaderComponent from "../../../components/LoaderComponent";
import TableComponent from "../../../components/TableComponent";
import { transformColumnTitle } from "../../StorageProvidersModule/components/helpers/transformColumnTitle";
import { useFetchBucketByName } from "../../../hooks/useFetchBucketByName";

const Module = () => {
  const { bucketId } = useParams();

  // @ts-ignore
  const { data, isLoading } = useFetchBucketByName(bucketId);
  console.log("data", data);

  if (isLoading) return <LoaderComponent />;

  const bucketData = data?.bucket_info;
  console.log("bucketData", bucketData);
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

  const selectedFields = bucketData && {
    owner: bucketData.owner,
    bucket_name: bucketData.bucket_name,
    bucket_status: bucketData.bucket_status,
    create_at: bucketData.create_at,
    payment_address: bucketData.payment_address,
    primary_sp_address: bucketData.primary_sp_address,
  };

  const transformedData = selectedFields && bucketId && Object.entries(selectedFields).map(([ attribute, value ]) => ({
    attribute: transformColumnTitle(attribute),
    value,
  }));


  return (
    <>
      <section className="go-back">
        <Link to="/users">
          {"<"} Bucket Information
        </Link>
      </section>
      <section className="section">
        <p className="section__title">Overview</p>

        {bucketData && (
          <TableComponent
            // @ts-ignore
            dataSource={transformedData}
            // @ts-ignore
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
