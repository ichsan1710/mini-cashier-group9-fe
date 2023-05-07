import React, { useState } from 'react';

const TransFilter = ({ handleFilterClick }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const startDateHandler = (event) => {
    setStartDate(event.target.value);
  };

  const endDateHandler = (event) => {
    setEndDate(event.target.value);
  };

  const handleFilter = () => {
    handleFilterClick(startDate, endDate);
  };

  return (
    <div className="date-filter">
      <label>Start Date</label>
      <input type="date" name="start-date" onChange={startDateHandler} />
      <label>End Date</label>
      <input type="date" name="end-date" onChange={endDateHandler} />
      <button className="filter-btn" onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default TransFilter;
