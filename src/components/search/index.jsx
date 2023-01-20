import React from "react";
import { Input, message } from "antd";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../../redux/action/movie.action";

const SearchComp = () => {
  const { Search } = Input;
  const [messageApi, contextHolder] = message.useMessage();
  const loading = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "Input Value is Empty",
    });
  };

  const onSearch = (value) => {
    if (value.length === 0) {
      warning();
    } else {
      dispatch(searchData(value));
    }
  };

  return (
    <div>
      {contextHolder}
      <Search
        loading={loading?.loading}
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </div>
  );
};

export default SearchComp;
