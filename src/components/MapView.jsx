import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Helper to fit map to all markers
function FitBounds({ bounds }) {
  const map = useMap();
  useEffect(() => {
    if (bounds && bounds.length > 0) {
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [bounds, map]);
  return null;
}

function MapView({ trips }) {
  const validTrips = trips.filter(
    (trip) =>
      trip.lat !== null &&
      trip.lng !== null &&
      typeof trip.lat === "number" &&
      typeof trip.lng === "number"
  );

  if (validTrips.length === 0) {
    return (
      <div className="d-flex align-items-center justify-content-center h-100">
        <p className="text-muted fs-5">No valid trip coordinates to display on the map.</p>
      </div>
    );
  }

  // Calculate bounds for all markers
  const bounds = validTrips.map((trip) => [trip.lat, trip.lng]);

  return (
    <div className="my-4 rounded-4 overflow-hidden shadow" style={{ height: "400px" }}>
      <MapContainer
        center={bounds[0]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <FitBounds bounds={bounds} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {validTrips.map((trip) => (
          <Marker position={[trip.lat, trip.lng]} key={trip.id}>
            <Popup>
              <div>
                <strong>{trip.destination}</strong>
                <br />
                <span>
                  <b>Dates:</b> {trip.startDate} → {trip.endDate}
                  <br />
                  <b>Budget:</b> ₹{trip.budget}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
