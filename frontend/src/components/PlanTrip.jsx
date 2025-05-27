import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Api from '../Api';

const PlanTrip = () => {
    const [destination,setDestination] = useState("");
    const [startDate, setStartDate] = useState("");
    const [budget, setBudget] = useState("");
    const [endDate, setEndDate] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const trip = {destination,startDate,endDate,budget};

        try{
            const token = localStorage.getItem("token");
            await Api.post("/trips", trip, {
              headers: {
                 Authorization: `Bearer ${token}`,
              },
            });

          alert("Trip planned successfully!");
          navigate("/dashboard");
        }catch(err){
            alert("Error: " + (err.response?.data || err.message));
        }
    }

  return (
    <div className="container mt-4">
      <h2>Plan a New Trip</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Destination</label>
          <input
            className="form-control"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Start Date</label>
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>End Date</label>
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Budget (₹)</label>
          <input
            type="number"
            className="form-control"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary">Plan Trip</button>
      </form>
    </div>
  )
}

export default PlanTrip;