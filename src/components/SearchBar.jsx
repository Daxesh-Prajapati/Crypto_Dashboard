import React from 'react';

export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      className="form-control mb-4"
      placeholder="Search by name or price"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}