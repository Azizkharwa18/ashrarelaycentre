import React from 'react';
import './Announcements.css';
import { FaBullhorn } from 'react-icons/fa';

const Announcements = () => {
  const announcements = [
      {
    title: 'Accomodation Verification',
    message: (
      <div>
        <p>
          Je sagla Mumineen ne potana gharo ma Olkhaan wala <strong>RAZA</strong> si aavnaar Mumineen ne utaaro aapwu hoi ye sagla si iltemas chhe:
        </p>
        <ul>
          <li>Mehmaano na ITS ID</li>
          <li>Potano HOF ITS ID</li>
          <li>Mehmaano ni Raza no ITS no Screenshot lai le</li>
        </ul>
        <p>
          Sagla Mehmaano na ITS par RAZA verify thaaya pachhi HOF na ghare utaaro allocate karwa ma aavse.
        </p>
        <ul>
          <li>18mi Tarikh pehla lag aa details Accomodation Office ma aavi ne verify karavi le</li>
          <li>Mehmaan na Ratlam Allocation no ITS no Screenshot bhi saathe laave</li>
          <li>Accomodation na Khidmatguzaro Fajere 09:00 si 10:00 ane raate 9:00 si 11:00 waaje Saifee Jamaat Office ma haazir rehse</li>
        </ul>
        <p><strong>Zone-wise Contacts:</strong></p>
        <ul>
          <li><strong>Saifee Zone:</strong> Mulla Juzer Lokhandwala – 📞 +91 88397 72050</li>
          <li><strong>Burhani Zone:</strong> Shabbir Bhai Sethji – 📞 +91 98930 03110</li>
          <li><strong>Najmi Zone:</strong> Mulla Shabbir Bhai Mukadam – 📞 +91 94259 26886</li>
          <li><strong>Kalimi Zone:</strong> Aamir Bhai Mhowwala – 📞 +91 80858 87052</li>
        </ul>
      </div>
    ),
    date: '11th June 2025',
  },
    {
      title: 'Relay Center Allocation',
      message: (
        <p>
          Relay Center selection will start at 14mi Zilhijjatil Haram - 10th June 2025, 11 AM (IST) on{' '}
          <a href="https://miqaat.its52.com" target="_blank" rel="noopener noreferrer">
            miqaat.its52.com
          </a>.
        </p>
      ),
      date: '10th June 2025',
    },
    {
      title: 'Raza Notice ',
      message: 'Mumineen must make travel arrangements only after receiving Raza for Ashara Mubarakah 1447H at Ratlam Relay Centre.',
      date: '9th June 2025',
    },
    
  ];

  return (
    <div>
      {/* Move this outside overlay so it's not affected by transparency */}
      <div className="announcements-container">
        <h2 className="section-title"><FaBullhorn /> Announcements</h2>
        <div className="announcement-list">
          {announcements.map((item, index) => (
            <div key={index} className="announcement-card">
              <h3 className="announcement-title">{item.title}</h3>
              <div className="announcement-message">{item.message}</div>
              <p className="announcement-date">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
       </div> 
  );
};

export default Announcements;
