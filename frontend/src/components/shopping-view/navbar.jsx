import React, { useState } from 'react';
import { FiMenu, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { categoriesWithBrands, shoppingViewHeaderMenuItems } from '@/config'; 

const ShoppingNavbar = () => {
  const navigate = useNavigate();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isShipOpen, setIsShipOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English, USD');
  const [selectedCountry, setSelectedCountry] = useState('Germany');
  const [selectedLangFlag, setSelectedLangFlag] = useState('https://flagcdn.com/us.svg');
  const [selectedCountryFlag, setSelectedCountryFlag] = useState('https://flagcdn.com/de.svg');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const languages = [
    { label: 'English, USD', flag: 'https://flagcdn.com/us.svg', alt: 'United States' },
    { label: 'Deutsch, EUR', flag: 'https://flagcdn.com/de.svg', alt: 'Germany' },
    { label: 'Français, EUR', flag: 'https://flagcdn.com/fr.svg', alt: 'France' },
  ];

  const countries = [
    { label: 'United States', flag: 'https://flagcdn.com/us.svg', alt: 'United States' },
    { label: 'Germany', flag: 'https://flagcdn.com/de.svg', alt: 'Germany' },
    { label: 'Japan', flag: 'https://flagcdn.com/jp.svg', alt: 'Japan' },
    { label: 'Brazil', flag: 'https://flagcdn.com/br.svg', alt: 'Brazil' },
    { label: 'Pakistan', flag: 'https://flagcdn.com/pk.svg', alt: 'Pakistan' },
    { label: 'Australia', flag: 'https://flagcdn.com/au.svg', alt: 'Australia' },
    { label: 'Canada', flag: 'https://flagcdn.com/ca.svg', alt: 'Canada' },
    { label: 'France', flag: 'https://flagcdn.com/fr.svg', alt: 'France' },
    { label: 'South Africa', flag: 'https://flagcdn.com/za.svg', alt: 'South Africa' },
    { label: 'Mexico', flag: 'https://flagcdn.com/mx.svg', alt: 'Mexico' },
  ];

  const handleLangSelect = (lang) => {
    setSelectedLang(lang.label);
    setSelectedLangFlag(lang.flag);
    setIsLangOpen(false);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country.label);
    setSelectedCountryFlag(country.flag);
    setIsShipOpen(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.label);
    setIsCategoryOpen(false);
    // Navigate to product listing with category filter
    if (category.id === 'all') {
      navigate('/shop/listing');
    } else {
      navigate(`/shop/listing?category=${category.id}`);
    }
  };

  const handleMenuItemClick = (menuItem) => {
    const currentFilter = menuItem.id !== 'home' && menuItem.id !== 'products' && menuItem.id !== 'search'
      ? { category: [menuItem.id] }
      : null;

    sessionStorage.setItem('filters', JSON.stringify(currentFilter));
    navigate(menuItem.path);
  };

  // Filter menu items to only show home, products, and search
  const filteredMenuItems = shoppingViewHeaderMenuItems.filter(item => 
    ['home', 'products', 'search'].includes(item.id)
  );

  return (
    <div className="hidden md:block">
      <hr />
      <div className="flex justify-between text-medium font-normal text-black items-center px-21 py-3">
        {/* Left Nav Items */}
        <div className="flex space-x-5">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center space-x-1 cursor-pointer"
            >
              <FiMenu className="text-lg" />
              <span>{selectedCategory}</span>
            </button>
            {isCategoryOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                <div className="p-2 border-b flex justify-between items-center">
                  <span className="font-medium">Categories</span>
                  <button onClick={() => setIsCategoryOpen(false)}>
                    <FiX className="text-gray-500" />
                  </button>
                </div>
                <div
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                    selectedCategory === 'All Categories' ? 'bg-gray-100 font-medium' : ''
                  }`}
                  onClick={() => handleCategorySelect({ id: 'all', label: 'All Categories' })}
                >
                  All Categories
                </div>
                {categoriesWithBrands.map((category) => (
                  <div
                    key={category.id}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      selectedCategory === category.label ? 'bg-gray-100 font-medium' : ''
                    }`}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Filtered Menu Items - only home, products, and search */}
          {filteredMenuItems.map((menuItem) => (
            <div 
              key={menuItem.id} 
              className="cursor-pointer"
              onClick={() => handleMenuItemClick(menuItem)}
            >
              {menuItem.label}
            </div>
          ))}

          <div className="flex items-center cursor-pointer">
            <select className="bg-transparent border-none focus:outline-none">
              <option>Help</option>
              <option>FAQ</option>
              <option>Contact</option>
            </select>
          </div>
        </div>

        {/* Right Lang/Country */}
        <div className="flex space-x-5 text-sm text-black relative">
          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-1"
            >
              <span>{selectedLang}</span>
              <img src={selectedLangFlag} alt="Selected Language Flag" className="w-5 h-4 ml-1" />
              {isLangOpen ? (
                <FiChevronUp className="text-xs text-gray-500" />
              ) : (
                <FiChevronDown className="text-xs text-gray-500" />
              )}
            </button>
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                {languages.map((lang) => (
                  <div
                    key={lang.label}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                    onClick={() => handleLangSelect(lang)}
                  >
                    <img src={lang.flag} alt={lang.alt} className="w-5 h-4" />
                    <span>{lang.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Country */}
          <div className="relative">
            <button
              onClick={() => setIsShipOpen(!isShipOpen)}
              className="flex items-center space-x-1"
            >
              <span>Ship to</span>
              <img src={selectedCountryFlag} alt="Selected Country Flag" className="w-5 h-4 ml-1" />
              {isShipOpen ? (
                <FiChevronUp className="text-xs text-gray-500" />
              ) : (
                <FiChevronDown className="text-xs text-gray-500" />
              )}
            </button>
            {isShipOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10 max-h-60 overflow-y-auto">
                {countries.map((country) => (
                  <div
                    key={country.label}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                    onClick={() => handleCountrySelect(country)}
                  >
                    <img src={country.flag} alt={country.alt} className="w-5 h-4" />
                    <span>{country.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ShoppingNavbar;