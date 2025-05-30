import React from 'react';
import { FaPlane, FaHotel, FaBus, FaShip, FaEllipsisH, FaHome } from 'react-icons/fa';
import { AiOutlineFileSearch } from 'react-icons/ai';

const TopServiceNav = () => (
    <div className="d-flex justify-content-center align-items-center gap-4 py-3 bg-light border-bottom"    >

        
        <div className="text-center">
            <FaPlane size={24} />
            <div>Flights</div>
        </div>
        <div className="text-center">
            <FaHotel size={24} />
            <div>Hotels</div>
        </div>
        <div className="text-center">
            <AiOutlineFileSearch size={24} />
            <div>Visa</div>
        </div>
        <div className="text-center text-primary fw-bold">
            <FaHome size={24} />
            <div>Holidays</div>
        </div>
        <div className="text-center">
            <FaBus size={24} />
            <div>Bus</div>
        </div>
        <div className="text-center">
            <FaShip size={24} />
            <div>Cruise</div>
        </div>
        <div className="text-center">
            <FaEllipsisH size={24} />
            <div>More</div>
        </div>
    </div>
);

export default TopServiceNav;
