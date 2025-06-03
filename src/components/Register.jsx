import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../Api";
import { Eye, EyeSlash, ArrowRight } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, password };

    try {
      const res = await Api.post("/auth/register", formData);
      localStorage.setItem("token", res.data);
      alert("Registered successfully!");
      navigate("/dashboard");
    } catch (err) {
      alert("Registration failed: " + (err.response?.data || err.message));
    }
  };

  return (
    <div className="container-fluid vh-100 bg-light">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="row g-0">
              {/* Left Side - Branding */}
              <div className="col-md-5 d-none d-md-flex bg-primary text-white p-5 flex-column justify-content-center">
                <div className="text-center">
                  <div className="bg-white rounded-circle d-inline-flex p-3 mb-3">
                    <ArrowRight className="text-primary fs-4" />
                  </div>
                  <h2 className="mb-3">Travel Connect</h2>
                  <p className="small">
                    Join us to plan and manage your dream trips.
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="col-md-7">
                <div className="card-body p-4 p-md-5">
                  <h2 className="mb-3">Create Account</h2>
                  <p className="text-muted mb-4">Sign up to get started</p>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Password</label>
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeSlash /> : <Eye />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 mb-3"
                    >
                      Register <ArrowRight className="ms-2" />
                    </button>

                    <div className="text-center">
                      <a href="/login" className="text-decoration-none small">
                        Already have an account? Sign in
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
