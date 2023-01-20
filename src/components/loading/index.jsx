import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./index.scss";

const LoadingComp = () => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 50,
      }}
      spin
    />
  );

  return (
    <div>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default LoadingComp;
