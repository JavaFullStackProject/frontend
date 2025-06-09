import React, { useEffect, useState } from "react";
import Api from "../Api";

const BudgetTracker = ({ tripId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, [tripId]);

  const fetchBookings = async () => {
  try {
    const res = await Api.get(`/bookings`, {
      params: { tripId }
    });

    // Add default cost fields if missing
    const bookingsWithCost = res.data.map(b => ({
      ...b,
      estimatedCost: b.estimatedCost || "",
      actualCost: b.actualCost || ""
    }));

    setBookings(bookingsWithCost);
  } catch (err) {
    alert("Failed to load bookings");
  }
};

  const handleChange = (index, field, value) => {
  const updated = [...bookings];
  if (!updated[index]) return;
  updated[index] = {
    ...updated[index],
    [field]: value,
    estimatedCost: updated[index].estimatedCost || "",
    actualCost: updated[index].actualCost || "",
  };
  setBookings(updated);
};

  const totalEstimated = bookings.reduce((sum, b) => sum + (parseFloat(b.estimatedCost) || 0), 0);
  const totalActual = bookings.reduce((sum, b) => sum + (parseFloat(b.actualCost) || 0), 0);

  return (
    <div className="container mt-5">
      <h4>💰 Budget Tracker</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Type</th>
            <th>Provider</th>
            <th>Estimated</th>
            <th>Actual</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={b.id}>
              <td>{b.type}</td>
              <td>{b.provider}</td>
              <td>
                <input
                  type="number"
                  value={b.estimatedCost || ""}
                  onChange={(e) => handleChange(i, "estimatedCost", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={b.actualCost || ""}
                  onChange={(e) => handleChange(i, "actualCost", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p><strong>Total Estimated:</strong> ₹{totalEstimated}</p>
      <p><strong>Total Actual:</strong> ₹{totalActual}</p>
    </div>
  );
};

export default BudgetTracker;