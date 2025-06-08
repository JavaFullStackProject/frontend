// import React, { useState } from "react";
// import axios from "axios";

// const CruiseSearch = () => {
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");
//   const [cruises, setCruises] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.get(
//         "https://dreams-travel-agency.p.rapidapi.com/voyages",
//         {
//           headers: {
//             "X-RapidAPI-Key":
//               "fb1e45cfa7msh0ff00830e9844a3p15a702jsn3651d2b7f20b",
//             "X-RapidAPI-Host": "dreams-travel-agency.p.rapidapi.com",
//           },
//         }
//       );

//       console.log("API Response:", response.data);

//       const data = Array.isArray(response.data) ? response.data : [];

//       const filteredCruises = data.filter((voyage) => {
//         const matchDestination = destination
//           ? voyage.destination
//               ?.toLowerCase()
//               .includes(destination.toLowerCase())
//           : true;

//         const matchDate = date
//           ? voyage.depart?.includes(date.split("-").reverse().join("/")) // converting YYYY-MM-DD to DD/MM/YYYY
//           : true;

//         return matchDestination && matchDate;
//       });

//       setCruises(filteredCruises);
//     } catch (err) {
//       console.error(err);
//       alert("❌ Failed to fetch cruises. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5 pt-4">
//       <div className="card p-4 shadow-sm rounded-4">
//         <h4 className="mb-4">🚢 Search Cruises</h4>
//         <form onSubmit={handleSearch}>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter Destination"
//                 value={destination}
//                 onChange={(e) => setDestination(e.target.value)}
//               />
//             </div>
//             <div className="col-md-6">
//               <input
//                 type="date"
//                 className="form-control"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>
//           </div>
//           <button type="submit" className="btn btn-primary mt-4">
//             🔍 Search Cruises
//           </button>
//         </form>
//       </div>

//       {loading ? (
//         <p className="text-center mt-4">Loading cruises...</p>
//       ) : (
//         <div className="row mt-4">
//           {cruises.length === 0 ? (
//             <p className="text-center">No cruises found.</p>
//           ) : (
//             cruises.map((cruise, index) => (
//               <div className="col-md-4" key={index}>
//                 <div className="card mb-4 shadow-sm">
//                   <img
//                     src={
//                       cruise.photo ||
//                       "https://img.freepik.com/free-photo/cruise-ship-ocean_23-2149053831.jpg"
//                     }
//                     alt="Cruise"
//                     className="card-img-top"
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{cruise.nom}</h5>
//                     <p className="card-text">
//                       Destination: {cruise.destination || "N/A"} <br />
//                       Departure: {cruise.depart || "TBD"} <br />
//                       Duration: {cruise.duree || "Unknown"} days <br />
//                       From: ₹{cruise.prix?.[0] || "N/A"} ({cruise.remise}% off)
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

// export default CruiseSearch;
import React, { useState } from "react";
import axios from "axios";

const CruiseSearch = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [cruises, setCruises] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        "https://dreams-travel-agency.p.rapidapi.com/voyages",
        {
          headers: {
            "X-RapidAPI-Key":
              "fb1e45cfa7msh0ff00830e9844a3p15a702jsn3651d2b7f20b",
            "X-RapidAPI-Host": "dreams-travel-agency.p.rapidapi.com",
          },
        }
      );

      const data = Array.isArray(response.data) ? response.data : [];

      const filteredCruises = data.filter((voyage) => {
        const matchDestination = destination
          ? voyage.destination
              ?.toLowerCase()
              .includes(destination.toLowerCase())
          : true;

        const matchDate = date
          ? voyage.depart?.includes(date.split("-").reverse().join("/"))
          : true;

        return matchDestination && matchDate;
      });

      setCruises(filteredCruises);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to fetch cruises. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBook = async (cruise) => {
    const tripId = localStorage.getItem("selectedTripId");
    const token = localStorage.getItem("token");

    if (!tripId || !token) {
      alert("Please select a trip from the Trip List first.");
      return;
    }

    const newCruise = {
      name: cruise.nom,
      destination: cruise.destination,
      departureDate: cruise.depart,
      duration: cruise.duree,
      price: cruise.prix?.[0],
      discount: cruise.remise,
      photo: cruise.photo || "",
    };

    try {
      // You may need to change this URL to match your backend's endpoint
      await axios.post(
        `http://localhost:8080/api/trips/${tripId}/cruises`,
        newCruise,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Cruise booked successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Booking failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="card p-4 shadow-sm rounded-4">
        <h4 className="mb-4">🚢 Search Cruises</h4>
        <form onSubmit={handleSearch}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            🔍 Search Cruises
          </button>
        </form>
      </div>

      {loading ? (
        <p className="text-center mt-4">Loading cruises...</p>
      ) : (
        <div className="row mt-4">
          {cruises.length === 0 ? (
            <p className="text-center">No cruises found.</p>
          ) : (
            cruises.map((cruise, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-4 shadow-sm">
                  <img
                    src={
                      cruise.photo ||
                      "https://img.freepik.com/free-photo/cruise-ship-ocean_23-2149053831.jpg"
                    }
                    alt="Cruise"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{cruise.nom}</h5>
                    <p className="card-text">
                      Destination: {cruise.destination || "N/A"} <br />
                      Departure: {cruise.depart || "TBD"} <br />
                      Duration: {cruise.duree || "Unknown"} days <br />
                      From: ₹{cruise.prix?.[0] || "N/A"} ({cruise.remise}% off)
                    </p>
                    <button
                      className="btn btn-success"
                      onClick={() => handleBook(cruise)}
                    >
                      📦 Book Cruise
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CruiseSearch;
