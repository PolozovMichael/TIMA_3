import { List, Typography } from "antd";

import Poster from "./Poster";

const data = [
  "When the number of buckets exceeds 500, 8 storage providers may not be able to handle the load",
  "When the size of the bucket exceeds 10 gb, the data from the bucket will take longer to be retrieved",
  "When several storage providers become inactive at the same time, the data from the bucket will take longer to be retrieved",
];

const { Title, Text } = Typography;
const Module = () => {
  return (
    <>
      <Poster />
      <List
        header={<Title level={2}>When your system will slow down?</Title>}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Text style={{fontSize: 18}}>
              <span style={{color: "#6EFCB1"}}>●</span>
              {" "} {item}
            </Text>
          </List.Item>
        )}
      />
    </>
  );
}

export default Module;
