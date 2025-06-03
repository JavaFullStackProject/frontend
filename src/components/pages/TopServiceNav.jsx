// import React from "react";
// import {
//   FaPlane,
//   FaHotel,
//   FaBus,
//   FaShip,
//   FaEllipsisH,
//   FaHome,
// } from "react-icons/fa";
// import { AiOutlineFileSearch } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";

// const TopServiceNav = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="d-flex justify-content-center align-items-center gap-4 py-3 bg-light border-bottom">
//       <div className="text-center">
//         <FaPlane
//           size={24}
//           onClick={() => navigate("/flight-search")}
//           style={{ cursor: "pointer" }}
//         />
//         <div>Flights</div>
//       </div>
//       <div className="text-center">
//         <FaHotel
//           size={24}
//           onClick={() => navigate("/hotel-search")}
//           style={{ cursor: "pointer" }}
//         />
//         <div>Hotels</div>
//       </div>
//       <div className="text-center">
//         <AiOutlineFileSearch size={24} />
//         <div>Visa</div>
//       </div>

//       <div className="text-center">
//         <FaBus size={24} />
//         <div>Bus</div>
//       </div>
//       <div className="text-center">
//         <FaShip size={24} />
//         <div>Cruise</div>
//       </div>
//       <div className="text-center">
//         <FaEllipsisH
//           size={24}
//           onClick={() => navigate("/activity-search")}
//           style={{ cursor: "pointer" }}
//         />
//         <div>More</div>
//       </div>
//     </div>
//   );
// };

// export default TopServiceNav;

import React from "react";
import { FaPlane, FaHotel, FaBus, FaShip, FaEllipsisH } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const TopServiceNav = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center gap-4 py-3 bg-light border-bottom">
      <div className="text-center">
        <FaPlane
          size={24}
          onClick={() => navigate("/flight-search")}
          style={{ cursor: "pointer" }}
        />
        <div>Flights</div>
      </div>
      <div className="text-center">
        <FaHotel
          size={24}
          onClick={() => navigate("/hotel-search")}
          style={{ cursor: "pointer" }}
        />
        <div>Hotels</div>
      </div>
      <div className="text-center">
        <AiOutlineFileSearch
          size={24}
          onClick={() => navigate("/visa-search")}
          style={{ cursor: "pointer" }}
        />
        <div>Visa</div>
      </div>
      <div className="text-center">
        <FaBus
          size={24}
          onClick={() => navigate("/bus-search")}
          style={{ cursor: "pointer" }}
        />
        <div>Bus</div>
      </div>
      <div className="text-center">
        <FaShip
          size={24}
          onClick={() => navigate("/cruise-search")}
          style={{ cursor: "pointer" }}
        />
        <div>Cruise</div>
      </div>
      <div className="text-center">
        <FaEllipsisH
          size={24}
          onClick={() => navigate("/activity-search")}
          style={{ cursor: "pointer" }}
        />
        <div>More</div>
      </div>
    </div>
  );
};

export default TopServiceNav;
