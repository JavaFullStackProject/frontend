import React, { useState } from "react";
import axios from "axios";
import Api from "../../Api";

const HotelSearch = () => {
  const [city, setCity] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "5ae2e3f221c38a28845f05b677f66b92b5e7167267752179825e0462";

  const hotelImages = {
    "Hotel Royal Plaza":
      "https://gos3.ibcdn.com/1d844e72560711ee9bce0a58a9feac02.jpg",
    "oyo 18652 hotel golden shah":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowb5uEQNPKdRpuWGYIGUPEgpgOMUIexvq9w&s",
    "Royal Plaza Hotel":
      "https://r1imghtlak.mmtcdn.com/6d6922a6-a855-4e9c-bf5f-d17c0b24b0ac.jpg",
    "Hotel Sunrise":
      "https://r1imghtlak.mmtcdn.com/1a5ed73a-0494-49ca-a28c-1d86e7f47074.jpeg",
    "Grand Palace Hotel":
      "https://gos3.ibcdn.com/d959da20bcfc11e493bc5ee5da2daa2a.jfif",
    "Hotel Sunshine":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnC38PVJOHEXphYiUeSSzd1geEzD_5T__RGg&s",
    "Hotel Blue Lagoon":
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/00/0c/aa/caption.jpg?w=900&h=500&s=1",
    "The Green Leaf Hotel":
      "https://gos3.ibcdn.com/970d8448249311eea1660a58a9feac02.jpg",
    "Hotel Paradise Inn":
      "https://gos3.ibcdn.com/65f797e4d1e311ec816b0a58a9feac02.jpg",
    "Dreamland Hotel":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEVJSuJc03sFHhmJfrEjFScdwBdkp3JQ7zw&s",
    "Star View Hotel":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Z__QsendJn-ShbYCK9u-LwkL0g--zXNkrw&s",
    "Comfort Stay":
      "https://content.jdmagicbox.com/v2/comp/adilabad/q4/9999p8732.8732.241012043214.f2q4/catalogue/hotel-comfort-stay-dwaraka-nagar-adilabad-hotels-21mdgs8bdp.jpg",
    "City Inn Hotel":
      "https://pix10.agoda.net/hotelImages/290787/-1/0c535379a3fb6f8d7ade8a6977608c14.jpg?ca=9&ce=1&s=414x232",
    "Sea View Resort":
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/170757820.jpg?k=35f136a980e98c1490feb9dad2f93dba2b1f28bb6ae40c5dcbd3ea4b5654f2a4&o=&hp=1",
    "Hotel Bliss":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4v177zcLJumzE82KLpbbxYM-2CL8YIobfw&s",
    "The Urban Retreat":
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/622856893.jpg?k=6b1022270353ed065736d09fae9c7707f46841bb3ec8dde83943bf6f87871a6f&o=&hp=1",
    "Hilltop Inn":
      "https://b.zmtcdn.com/data/pictures/7/20523547/3b2508a01da7e3a85e33c240b085d2d5.jpg",
    "Heritage Palace":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8EsbqyylF2K4qIgSB8991rrc-xzA-d9cgA&s",
    "The Cozy Nook":
      "https://b.zmtcdn.com/data/pictures/4/21771934/5db20457c8b8191bc33d7303b717ab00.jpg?fit=around|750:500&crop=750:500;*,*",
    "The Orchid Hotel":
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/orchid-hotels/AK_06286_etmuth_mmfz2t",
    "City Comfort":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYFndBZI5zk85AS24rv3tUV1pCE-PFg4Amg&s",
    "Urban Hideaway":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeqkjajABDAoHP7iSJgBJL6j1agM9uAs07A&s",
    "Hotel Silverline":
      "https://pix10.agoda.net/hotelImages/1060591/-1/000ecf3fa4433e5f9313b0a107a44d1d.jpg?ce=0&s=414x232&ar=16x9",
    "The Grand Inn":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-Nbzs8_D14b6HhJerxbCbCmT3HscJX8eqg&s",
    "Natures Nest":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYya39p15K8yOMAmTrNw2Wrvy1F64urRATpQ&s",
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (new Date(checkin) >= new Date(checkout)) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    setLoading(true);
    try {
      const geoRes = await axios.get(
        `https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=${API_KEY}`
      );
      const { lat, lon } = geoRes.data;

      const res = await axios.get(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${lon}&lat=${lat}&kinds=accomodations&limit=10&apikey=${API_KEY}`
      );
      setHotels(res.data.features || []);
      console.log(res.data);
    } catch (err) {
      alert("❌ Failed to fetch hotel data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBook = async (hotel) => {
    const tripId = localStorage.getItem("selectedTripId");

    if (!tripId) {
      alert("No trip selected. Please select a trip to save this booking.");
      return;
    }

    try {
      const bookingData = {
        type: "hotel",
        reference: hotel.id,
        provider: "OpenTripMap",
        details: hotel.properties.name || "Unnamed Hotel",
        startDate: checkin,
        endDate: checkout,
        location: city,
      };

      await Api.post(`/bookings?tripId=${tripId}`, bookingData);
      alert("✅ Hotel booking saved to itinerary!");
    } catch (err) {
      alert("❌ Failed to book hotel.");
      console.error(err);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="card p-4 shadow-sm rounded-4">
        <h4 className="mb-4">🏨 Search Hotels</h4>
        <form onSubmit={handleSearch}>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            🔍 Search Hotels
          </button>
        </form>
      </div>

      {loading ? (
        <p className="text-center mt-4">Loading hotels...</p>
      ) : (
        <div className="row mt-4">
          {hotels.length === 0 ? (
            <p className="text-center">No hotels found.</p>
          ) : (
            hotels.map((hotel) => (
              <div className="col-md-4" key={hotel.id}>
                <div className="card mb-4 shadow-sm">
                  <img
                    src={
                      hotelImages[hotel.properties.name] ||
                      "https://via.placeholder.com/400x200.png?text=Hotel+Image"
                    }
                    alt="Hotel"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {hotel.properties.name || "Unnamed Hotel"}
                    </h5>
                    <p className="card-text">
                      {hotel.properties.kinds?.split(",")[0] || "Accommodation"}
                    </p>
                    <button
                      className="btn btn-success w-100"
                      onClick={() => handleBook(hotel)}
                    >
                      ✅ Book Hotel
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

export default HotelSearch;
