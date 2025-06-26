import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoriesWithBrands } from '@/config';

const LeftSide = () => {
  const [showAll, setShowAll] = useState(false);
  const maxVisibleCategories = 7;
  const navigate = useNavigate();

  const visibleCategories = showAll 
    ? categoriesWithBrands 
    : categoriesWithBrands.slice(0, maxVisibleCategories);

  function handleNavigateToListingPage(getCurrentItem) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      category: [getCurrentItem.id],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  return (
    <div className="bg-white p-4 rounded-lg hidden md:block w-68">
      <h3 className="text-lg font-semibold">Categories</h3>
      <ul className="space-y-1">
        {visibleCategories.map((category) => (
          <li key={category.id}>
            <button 
              onClick={() => handleNavigateToListingPage(category)}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-gray-700 hover:text-black"
            >
              {category.label}
            </button>
          </li>
        ))}
        
        {categoriesWithBrands.length > maxVisibleCategories && (
          <li>
            <button 
              onClick={() => setShowAll(!showAll)}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-gray-500 hover:text-black"
            >
              {showAll ? 'Show less' : 'More category'}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default LeftSide;