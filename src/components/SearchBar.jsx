import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../features/coins/coinSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.coins.searchQuery);

  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search by name or price..."
      value={query}
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
    />
  );
};

export default SearchBar;
