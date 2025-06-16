// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const isLoggedIn = !!localStorage.getItem("token");

//   Don't show Navbar on login/register pages
//   const hideOnAuthPages = ["/login", "/register"].includes(location.pathname);

//   if (hideOnAuthPages) return null;

//   return (
//     <nav className="navbar navbar-expand-lg bg-light shadow-sm py-2 fixed-top">
//       <div className="container">
//         <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
//           <img
//             src="https://tse1.mm.bing.net/th?id=OIP.SwIDVKwmelzQy2sz59hPmwHaJ3&pid=Api&P=0&h=180"
//             alt="Travel Logo"
//             style={{ height: "36px", width: "auto" }}
//           />
//           <span className="fs-4 fw-semibold text-primary">Travel Planner</span>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="navbar-nav ms-auto align-items-center gap-lg-3">
//             <li className="nav-item">
//               <Link className="nav-link fw-medium" to="/trips">
//                 Trips
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link fw-medium" to="/dashboard">
//                 Dashboard
//               </Link>
//             </li>
//             {!isLoggedIn ? (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link fw-medium" to="/register">
//                     Register
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link fw-medium" to="/login">
//                     Login
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle fw-medium"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                 >
//                   Account
//                 </a>
//                 <ul className="dropdown-menu dropdown-menu-end">
//                   <li>
//                     <Link className="dropdown-item" to="/dashboard">
//                       Profile
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/logout">
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("token");

  // Don't show Navbar on login/register pages
  const hideOnAuthPages = ["/login", "/register"].includes(location.pathname);

  if (hideOnAuthPages) return null;

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm py-2 fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.SwIDVKwmelzQy2sz59hPmwHaJ3&pid=Api&P=0&h=180"
            alt="Travel Logo"
            style={{ height: "36px", width: "auto" }}
          />
          <span className="fs-4 fw-semibold text-primary">Travel Planner</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-center gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/trips">
                Trips
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/how-it-works">
                How It Works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/dashboard">
                Dashboard
              </Link>
            </li>
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link fw-medium" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-medium" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-medium"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Account
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/logout">
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
