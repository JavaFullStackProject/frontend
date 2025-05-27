import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ trips }) {
  // ✅ Filter out trips with missing lat/lng
  const validTrips = trips.filter(
    (trip) =>
      trip.lat !== null &&
      trip.lng !== null &&
      typeof trip.lat === "number" &&
      typeof trip.lng === "number"
  );

  if (validTrips.length === 0) {
    return <p className="text-muted">No valid trip coordinates to display on map.</p>;
  }

  const center = [validTrips[0].lat, validTrips[0].lng];

  return (
    <div className="my-4" style={{ height: "400px" }}>
      <MapContainer center={center} zoom={5} scrollWheelZoom={false} style={{ height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {validTrips.map((trip) => (
          <Marker position={[trip.lat, trip.lng]} key={trip.id}>
            <Popup>
              <strong>{trip.destination}</strong><br />
                 {trip.startDate} → {trip.endDate}<br />
                  Budget: ₹{trip.budget}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
