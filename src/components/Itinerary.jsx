import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Api from "../Api";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Itinerary = () => {
  const { tripId } = useParams();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const itineraryRef = useRef();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await Api.get(`/bookings?tripId=${tripId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(res.data);
    } catch (err) {
      alert("❌ Failed to load itinerary.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = () => {
    const input = itineraryRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("itinerary.pdf");
    });
  };

  return (
    <div className="position-relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-fixed top-0 start-0 w-100 h-100 object-fit-cover"
        style={{ zIndex: -1 }}
      >
        <source
          src="https://cdn.pixabay.com/video/2023/07/27/173522-849651812_tiny.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className="container mt-5 pt-5"
        style={{
          minHeight: "90vh",
          padding: "2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="d-flex justify-content-center align-items-center mb-4">
          <h3
            className="fw-bold text-primary d-flex align-items-center gap-2"
            style={{
              letterSpacing: 1,
              fontSize: "2rem",
              textShadow: "0 2px 8px #e0e7ff",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5218/5218982.png"
              alt="Itinerary"
              width={40}
              height={40}
              style={{
                borderRadius: "10px",
                boxShadow: "0 2px 8px #e0e7ff",
                background: "#fff",
              }}
            />
            Trip Itinerary
          </h3>
        </div>

        {loading ? (
          <div className="d-flex align-items-center">
            <div className="spinner-border text-primary me-2" role="status" />
            <span>Loading itinerary...</span>
          </div>
        ) : bookings.length === 0 ? (
          <div className="alert alert-info shadow-sm rounded-4">
            No bookings added yet.
          </div>
        ) : (
          <div ref={itineraryRef}>
            <div className="row g-4 justify-content-center">
              {bookings.map((b, idx) => (
                <div className="col-md-6" key={b.id}>
                  <div
                    className="card shadow rounded-4 p-0 border-0 position-relative h-100 overflow-hidden d-flex flex-column"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      border: "1px solid #e0e7ff",
                      boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.10)",
                      minHeight: 300,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.025)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 32px 0 rgba(31, 38, 135, 0.18)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 24px 0 rgba(31, 38, 135, 0.10)";
                    }}
                  >
                    {/* Mode of transport badge */}
                    <div
                      className="w-100 d-flex align-items-center justify-content-end px-4 pt-3"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 11,
                      }}
                    >
                      <span
                        className={`badge px-3 py-2 fs-6 ${
                          b.type === "bus"
                            ? "bg-info text-dark"
                            : b.type === "hotel"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                        style={{
                          borderRadius: "12px",
                          fontSize: "1rem",
                          boxShadow: "0 2px 8px #e0e7ff",
                          letterSpacing: "0.5px",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        {b.type === "bus" ? (
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOLJJ-PjAUKcJmQc41ePIGddlIu41axi3Rg&s"
                            alt="Bus"
                            width={22}
                            className="me-1"
                          />
                        ) : b.type === "hotel" ? (
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/139/139899.png"
                            alt="Hotel"
                            width={22}
                            className="me-1"
                          />
                        ) : (
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/69/69906.png"
                            alt="Flight"
                            width={22}
                            className="me-1"
                          />
                        )}
                        {b.type.charAt(0).toUpperCase() + b.type.slice(1)}
                      </span>
                    </div>

                    <div className="p-4 flex-grow-1 d-flex flex-column">
                      <h5
                        className="card-title mb-3 fw-semibold d-flex align-items-center gap-2"
                        style={{
                          color: "#2563eb",
                          fontWeight: 700,
                          fontSize: "1.2rem",
                          letterSpacing: "0.5px",
                        }}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/854/854878.png"
                          alt="Booking"
                          width={24}
                          height={24}
                          style={{
                            borderRadius: "6px",
                            boxShadow: "0 1px 4px #e0e7ff",
                            background: "#fff",
                          }}
                        />
                        {b.details || "Booking"}
                      </h5>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2 d-flex align-items-center">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/684/684908.png"
                            alt="Location"
                            width={20}
                            className="me-2"
                          />
                          <strong>Location:</strong>&nbsp;
                          <span style={{ color: "#2563eb" }}>
                            {b.location || "—"}
                          </span>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
                            alt="Provider"
                            width={20}
                            className="me-2"
                          />
                          <strong>Provider:</strong>&nbsp;
                          <span style={{ color: "#059669" }}>
                            {b.provider || "—"}
                          </span>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png"
                            alt="Reference"
                            width={20}
                            className="me-2"
                          />
                          <strong>Booking Ref:</strong>&nbsp;
                          <span style={{ color: "#f59e42" }}>
                            {b.reference || "—"}
                          </span>
                        </li>
                        <li className="d-flex align-items-center">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/747/747310.png"
                            alt="Date"
                            width={20}
                            className="me-2"
                          />
                          <strong>From:</strong>&nbsp;
                          <span style={{ color: "#6366f1" }}>
                            {b.startDate}
                          </span>
                          &nbsp;<strong>To:</strong>&nbsp;
                          <span style={{ color: "#6366f1" }}>{b.endDate}</span>
                        </li>
                      </ul>

                      <div className="mt-auto pt-3 d-flex justify-content-between">
                        <button
                          className="btn btn-outline-danger"
                          onClick={async () => {
                            if (
                              window.confirm(
                                "Are you sure you want to delete this booking?"
                              )
                            ) {
                              try {
                                const token = localStorage.getItem("token");
                                await Api.delete(`/bookings/${b.id}`, {
                                  headers: {
                                    Authorization: `Bearer ${token}`,
                                  },
                                });
                                setBookings((prev) =>
                                  prev.filter((booking) => booking.id !== b.id)
                                );
                              } catch (err) {
                                alert("❌ Failed to delete booking.");
                                console.error(err);
                              }
                            }
                          }}
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                            alt="Delete"
                            width={20}
                            height={20}
                            className="me-2"
                          />
                          Delete
                        </button>

                        <button
                          className="btn btn-outline-success"
                          onClick={async (e) => {
                            const btn = e.currentTarget;
                            btn.style.visibility = "hidden";
                            await new Promise((res) => setTimeout(res, 100));
                            const cardElem =
                              document.getElementsByClassName("card")[idx];
                            html2canvas(cardElem, { scale: 2 }).then(
                              (canvas) => {
                                const imgData = canvas.toDataURL("image/png");
                                const pdf = new jsPDF("p", "mm", "a4");
                                const pdfWidth =
                                  pdf.internal.pageSize.getWidth();
                                const pdfHeight =
                                  (canvas.height * pdfWidth) / canvas.width;
                                pdf.addImage(
                                  imgData,
                                  "PNG",
                                  0,
                                  0,
                                  pdfWidth,
                                  pdfHeight
                                );
                                pdf.save(`booking-${b.id}.pdf`);
                                btn.style.visibility = "visible";
                              }
                            );
                          }}
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/337/337946.png"
                            alt="Download"
                            width={20}
                            height={20}
                            className="me-2"
                          />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Itinerary;
