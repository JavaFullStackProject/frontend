import React from "react";

const UpcomingTrips = () => {
  return (
    <div className="mb-5">
      <h4 className="mb-3">Upcoming Trips</h4>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          <span>Paris Vacation</span>
          <span className="text-muted">Jun 20 - Jun 28</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Goa Weekend</span>
          <span className="text-muted">Jul 5 - Jul 7</span>
        </li>
      </ul>
    </div>
  );
};

export default UpcomingTrips;
