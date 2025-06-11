import React from 'react';

const DashboardCard = ({ title, content, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-[#2c3e50]">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default DashboardCard;
