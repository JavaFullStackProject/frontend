// import React, { useState } from "react";
// import axios from "axios";

// const BusSearch = () => {
//   const [departurePlace, setDeparturePlace] = useState("");
//   const [arrivalPlace, setArrivalPlace] = useState("");
//   const [buses, setBuses] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

//     const options = {
//       method: "GET",
//       url: "https://bus-route.p.rapidapi.com/getroute",
//       params: {
//         departure_place: departurePlace,
//         arrival_place: arrivalPlace,
//       },
//       headers: {
//         "X-Rapidapi-Key": RAPIDAPI_KEY,
//         "X-Rapidapi-Host": "bus-route.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       console.log("API Response:", response.data);
//       if (Array.isArray(response.data)) {
//         setBuses(response.data);
//       } else {
//         console.log("Not an array response:", response.data);
//         setBuses([]);
//       }
//     } catch (err) {
//       console.error("API error:", err);
//       alert("❌ Failed to fetch buses. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5 pt-4">
//       <div className="card p-4 shadow-sm rounded-4">
//         <h4 className="mb-4">🚌 Search Buses</h4>
//         <form onSubmit={handleSearch}>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter Departure City"
//                 value={departurePlace}
//                 onChange={(e) => setDeparturePlace(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="col-md-6">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter Arrival City"
//                 value={arrivalPlace}
//                 onChange={(e) => setArrivalPlace(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <button type="submit" className="btn btn-primary mt-4">
//             🔍 Search Buses
//           </button>
//         </form>
//       </div>

//       {loading ? (
//         <p className="text-center mt-4">Loading buses...</p>
//       ) : (
//         <div className="row mt-4">
//           {buses.length === 0 ? (
//             <p className="text-center">No buses found.</p>
//           ) : (
//             buses.map((bus, index) => (
//               <div className="col-md-4" key={index}>
//                 <div className="card mb-4 shadow-sm">
//                   <img
//                     src="https://img.freepik.com/free-photo/bus-travel-transportation-concept_53876-129396.jpg"
//                     alt="Bus"
//                     className="card-img-top"
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">
//                       {bus.arrival_place || "Unknown Destination"}
//                     </h5>
//                     <p className="card-text">
//                       From: {bus.departure_place} <br />
//                       To: {bus.arrival_place} <br />
//                       Distance: {bus.distance} km
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BusSearch;
import React, { useState } from "react";

const BusSearch = () => {
  const [city, setCity] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/mockBuses.json");
      const data = await response.json();

      const filtered = data.filter(
        (bus) =>
          bus.from.toLowerCase() === city.toLowerCase() &&
          bus.to.toLowerCase() === destination.toLowerCase()
      );

      if (filtered.length === 0) {
        setError("No buses found for the selected city and destination.");
        setBuses([]);
      } else {
        const busesWithExtras = filtered.map((bus) => ({
          ...bus,
          startDate: date || "2025-06-04",
          budget: (Math.random() * 1000 + 500).toFixed(0),
        }));
        setBuses(busesWithExtras);
      }
    } catch (err) {
      console.error(err);
      setError("❌ Failed to fetch buses. Please try again.");
      setBuses([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 pt-4">
      {/* Search Form */}
      <div className="card p-4 shadow-sm rounded-4">
        <h4 className="mb-4">🚌 Search Buses</h4>
        <form onSubmit={handleSearch}>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Departure City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Destination City"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
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

          <button type="submit" className="btn btn-primary mt-4 px-4">
            🔍 Search Buses
          </button>
        </form>
      </div>

      {/* Results */}
      {loading ? (
        <p className="text-center mt-4">Loading buses...</p>
      ) : error ? (
        <p className="text-center text-danger mt-4">{error}</p>
      ) : buses.length === 1 ? (
        <div className="d-flex justify-content-center mt-4">
          <div
            className="card shadow-lg border-0 transition rounded-4"
            style={{
              width: "22rem",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={
                buses[0].image ||
                "https://img.freepik.com/free-photo/bus-travel-transportation-concept_53876-129396.jpg"
              }
              alt={`${buses[0].from} to ${buses[0].to}`}
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">
                {buses[0].from} → {buses[0].to}
              </h5>
              <p className="card-text">
                Date: {buses[0].startDate} <br />
                Budget: ₹{buses[0].budget}
              </p>
              <a href="#" className="btn btn-outline-primary">
                View Details
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="row mt-4">
          {buses.map((bus, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card mb-4 shadow-sm border-0 rounded-4"
                style={{
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={
                    bus.image ||
                    "https://img.freepik.com/free-photo/bus-travel-transportation-concept_53876-129396.jpg"
                  }
                  alt={`${bus.from} to ${bus.to}`}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">
                    {bus.from} → {bus.to}
                  </h5>
                  <p className="card-text">
                    Date: {bus.startDate} <br />
                    Budget: ₹{bus.budget}
                  </p>
                  <a href="#" className="btn btn-outline-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BusSearch;
