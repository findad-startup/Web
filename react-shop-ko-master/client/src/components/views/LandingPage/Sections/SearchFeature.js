import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchFeature(props) {
  const [SearchTerm, setSearchTerm] = useState("");

  const searchHandler = (event) => {
    setSearchTerm(event.currentTarget.value);
    props.refreshFunction(event.currentTarget.value);
  };

  return (
    <div>
      <Search
        placeholder="원하는 광고를 검색하세요!"
        onChange={searchHandler}
        style={{ display: "flex" }}
        value={SearchTerm}
      />
    </div>
  );
}

export default SearchFeature;
