import React, { useState } from "react";

function FlightSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Search flights from ${from} to ${to} on ${date}`);
    // integrate API call on Day 12
  };

  return (
    <div className="card p-4 shadow-sm rounded-4 mt-5 pt-5">
      <h4>✈ Search Flights</h4>
      <form onSubmit={handleSearch}>
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Search Flights
        </button>
      </form>
    </div>
  );
}

export default FlightSearch;