'use client'
import { useState } from 'react';

const TimeFilterButton = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filterOptions = [
    '1 วัน',
    '7 วัน',
    '1 เดือน',
    '6 เดือน',
    '1 ปี',
    'ทั้งหมด'
  ];

  return (
    <div className="flex items-center space-x-1 p-1 rounded-lg w-fit shadow-sm/20">
      {filterOptions.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 font-medium rounded-md transition-all duration-200 ${
            activeFilter === filter
              ? 'bg-primary text-white shadow-sm'
              : 'text-primary hover:text-primary/75 hover:bg-gray-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TimeFilterButton;