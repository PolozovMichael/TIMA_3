import { useFetchUsersLength } from "../../../hooks/useFetchUsersLength";
import { useFetchBucketsLength } from "../../../hooks/useFetchBucketsLength";
import { useFetchStorageProvidersLength } from "../../../hooks/useFetchStorageProvidersLength";

import { transformColumnTitle } from "../../StorageProvidersModule/components/helpers/transformColumnTitle";
import TableComponent from "../../../components/TableComponent";

import Poster from "./Poster";
import LoaderComponent from "../../../components/LoaderComponent";

const Module = () => {
  const { usersLength } = useFetchUsersLength();
  const { bucketsLength } = useFetchBucketsLength();
  const { storageProvidersLength } = useFetchStorageProvidersLength();

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

  const obj = {
    users_data_amount: usersLength,
    buckets_data_amount: bucketsLength,
    storage_providers_data_amount: storageProvidersLength,
  };

  const isDataLoaded = usersLength !== 0 && bucketsLength !== 0 && storageProvidersLength !== 0;

  const transformedData = isDataLoaded && Object.entries(obj).map(([ attribute, value ]) => ({
    attribute: transformColumnTitle(attribute),
    value,
  }));

  if (!isDataLoaded) return <LoaderComponent />;

  return (
    <>
      <Poster />
      {isDataLoaded && (
        <TableComponent
          // @ts-ignore
          dataSource={transformedData}
          // @ts-ignore
          columns={columns}
          type="reverse"
          pagination={false}
          footer={`Total: ${Number(usersLength) + Number(bucketsLength) + Number(storageProvidersLength)}`}
        />
      )}
    </>
  );
}

export default Module;
