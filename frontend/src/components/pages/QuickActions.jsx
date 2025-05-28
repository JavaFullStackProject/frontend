// import React from "react";

// const QuickActions = () => {
//   return (
//     <div className="row text-center mb-4">
//       <div className="col-md-4 mb-3">
//         <div className="card shadow-sm">
//           <div className="card-body">
//             <h5 className="card-title">Travel Guides</h5>
//             <p className="card-text">Find places, tips and ideas.</p>
//             <button className="btn btn-outline-primary">Explore</button>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-4 mb-3">
//         <div className="card shadow-sm">
//           <div className="card-body">
//             <h5 className="card-title">Upcoming Trips</h5>
//             <p className="card-text">See what's coming up soon.</p>
//             <button className="btn btn-outline-primary">View Trips</button>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-4 mb-3">
//         <div className="card shadow-sm">
//           <div className="card-body">
//             <h5 className="card-title">Settings</h5>
//             <p className="card-text">Customize your experience.</p>
//             <button className="btn btn-outline-primary">Manage</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuickActions;

import React from "react";

const QuickActions = () => {
  return (
    <div
      id="quick-actions"
      className="row row-cols-1 row-cols-md-3 g-4 text-center mb-4 mt-4"
    >
      <div className="col ">
        <div className="card shadow-sm quick-card h-100">
          <div className="card-body">
            <h5 className="card-title">Travel Guides</h5>
            <p className="card-text">Find places, tips and ideas.</p>
            <button className="btn btn-primary">Explore</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm quick-card h-100">
          <div className="card-body">
            <h5 className="card-title">Upcoming Trips</h5>
            <p className="card-text">See what's coming up soon.</p>
            <button className="btn btn-primary">View Trips</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm quick-card h-100">
          <div className="card-body">
            <h5 className="card-title">Settings</h5>
            <p className="card-text">Customize your experience.</p>
            <button className="btn btn-primary">Manage</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
