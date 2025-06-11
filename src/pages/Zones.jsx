import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapPin } from 'react-icons/fa';
import './zones.css';

const zones = [
  { id: 1, name: 'KALIMI ZONE', location: 'Kalimi Mohallah', capacity: 'Total Capacity: 3000', link: '/zones/kalimi' },
  { id: 2, name: 'KALIMI-DOME ZONE', location: 'Dawoodi Bohra Qabrastan', capacity: 'Total Capacity: 10,400', link: '/zones/kalimi-dome' },
  { id: 3, name: 'SAIFEE ZONE', location: 'Saify Mohalla Chandnichowk', capacity: 'Total Capacity: 4300', link: '/zones/saifee' },
  { id: 4, name: 'BURHANI ZONE', location: 'Burhani Masjid Bharawa ki kui', capacity: 'Total Capacity: 1800', link: '/zones/burhani' },
  { id: 5, name: 'NAJMI ZONE', location: 'Najampura Kotawala Baugh', capacity: 'Total Capacity: 1500', link: '/zones/najmi' }
];

const Zones = () => {
  return (
    <div>
      {/* Foreground zones content */}
      <div className="zones-container">
        <h1 className="zones-title">List of Zones</h1>
        <div className="zones-grid">
          {zones.map((zone) => (
            <div key={zone.id} className="zone-card">
              <div className="zone-header">
                <span className="zone-icon"><FaMapPin /></span>
                <h3 className="zone-name">{zone.name}</h3>
              </div>
              <p className="zone-location">{zone.location}</p>
              <p className="zone-capacity">{zone.capacity}</p>
              <div className="zone-footer">
                <Link to={zone.link} className="zone-link" title={`Go to ${zone.name}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24" fill="none" stroke="goldenrod" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
  
  );
};

export default Zones;
