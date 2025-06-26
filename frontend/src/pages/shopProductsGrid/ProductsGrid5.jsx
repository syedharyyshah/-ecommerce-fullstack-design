import React from 'react';
import { FaSearch, FaEdit, FaPlane, FaShieldAlt } from 'react-icons/fa';

const ProductsGrid5 = () => {
  return (
    <div className=" font-sans mt-10 py-6 hidden md:block">
      <div className="container mx-auto px-4">
       {/* Extra Services Section */}
       <h2 className="text-2xl font-bold text-gray-800 mb-6">Our extra services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
         <div className='relative bg-white h-58 rounded-lg'>
         <div className="absolute right-2 top-28 w-16 h-16 flex items-center border border-white justify-center mb-2 bg-blue-50 rounded-full">
              <FaSearch className="text-2xl " />
            </div>
         <img src="https://avatars.mds.yandex.net/i?id=07dbbb7fffe9c4a5f17a36c3b239cb666ddde23d-5527829-images-thumbs&n=13" 
         alt="" 
         className='w-[300px] h-[150px]'
         />
           <div className='m-4'>
            <h3 className='font-semibold text-xl'>Source from <br /> industry hubs</h3>
           </div>
         </div>
         <div className='relative bg-white h-58 rounded-lg'>
         <div className="absolute right-2 top-28 w-16 h-16 flex items-center border border-white justify-center mb-2 bg-blue-50 rounded-full">
              <FaEdit className="text-2xl" />
            </div>
            <img 
            src="https://avatars.mds.yandex.net/i?id=4672c763cbb9882e479aad3de59ee16cb4644323-13461479-images-thumbs&n=13" 
            className='w-[300px] h-[150px]' alt="" />

           <div className='m-4'>
            <h3 className='font-semibold text-xl'>Customize Your <br /> Products</h3>
           </div>
         </div>
         <div className='relative bg-white h-58 rounded-lg'>
         <div className="absolute right-2 top-28 w-16 h-16 flex items-center border border-white justify-center mb-2 bg-blue-50 rounded-full">
              <FaPlane className="text-2xl" />
            </div>
            <img src="https://t3.ftcdn.net/jpg/03/44/54/96/360_F_344549662_d2PXWHDqTRQ4ICujD7sZBNFdwTF5tOyN.jpg"
             className='w-[300px] h-[150px]' alt="" />

           <div className='m-4'>
            <h3 className='font-semibold text-xl'>Fast realible shipping <br /> by ocean or air</h3>
           </div>
         </div>
         <div className='relative bg-white h-58 rounded-lg'>
         <div className="absolute right-2 top-28 w-16 h-16 flex items-center border border-white justify-center mb-2 bg-blue-50 rounded-full">
              <FaShieldAlt className="text-2xl" />
            </div>
         <img src="https://avatars.mds.yandex.net/i?id=07dbbb7fffe9c4a5f17a36c3b239cb666ddde23d-5527829-images-thumbs&n=13"
          className='w-[300px] h-[150px]' alt="" />
           <div className='m-4'>
            <h3 className='font-semibold text-xl'>Product monitoring <br /> and inspection</h3>
           </div>
         </div>










{/* 
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <img src="https://avatars.mds.yandex.net/i?id=4672c763cbb9882e479aad3de59ee16cb4644323-13461479-images-thumbs&n=13" alt="" />
            <div className="w-32 h-32 flex items-center justify-center mb-2 bg-blue-50 rounded-full">
              <FaEdit className="text-blue-400 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 text-center">Customize Your Products</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <img src="https://avatars.mds.yandex.net/i?id=00e0a462de5712f06383717138c30064aa840436-4687669-images-thumbs&n=13" alt="" />
            <div className="w-32 h-32 flex items-center justify-center mb-2 bg-blue-50 rounded-full">
              <FaPlane className="text-blue-400 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 text-center">Fast, reliable shipping by ocean or air</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <img src="https://t3.ftcdn.net/jpg/03/44/54/96/360_F_344549662_d2PXWHDqTRQ4ICujD7sZBNFdwTF5tOyN.jpg" alt="" />
            <div className="w-32 h-32 flex items-center justify-center mb-2 bg-blue-50 rounded-full">
              <FaShieldAlt className="text-blue-400 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 text-center">Product monitoring and inspection</h3>
          </div> */}
        </div>

        {/* Suppliers by Region Section */}
        <h2 className="text-2xl font-bold  mb-6">Suppliers by region</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
            <img src="https://flagcdn.com/w80/ae.png" alt="Arabic Emirates" className="w-10 h-6" />
            <div className='flex flex-col'>
              <span className="text-gray-700">Arabic Emirates</span>
              <a href="https://shopname.ae" className="text-blue-500 hover:underline">shopname.ae</a>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
            <img src="https://flagcdn.com/w80/au.png" alt="Australia" className="w-10 h-6" />
            <div className='flex flex-col'>
              <span className="text-gray-700">Australia</span>
              <a href="https://shopname.au" className="text-blue-500  hover:underline">shopname.au</a>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
            <img src="https://flagcdn.com/w80/us.png" alt="United States" className="w-10 h-6" />
            <div className='flex flex-col'>
              <span className="text-gray-700">United States</span>
              <a href="https://shopname.us" className="text-blue-500 ml-2 hover:underline">shopname.us</a>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
            <img src="https://flagcdn.com/w80/ru.png" alt="Russia" className="w-10 h-6" />
            <div className='flex flex-col'>
              <span className="text-gray-700">Russia</span>
              <a href="https://shopname.ru" className="text-blue-500  hover:underline">shopname.ru</a>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
            <img src="https://flagcdn.com/w80/it.png" alt="Italy" className="w-10 h-6" />
            <div className='flex flex-col'>
              <span className="text-gray-700">Italy</span>
              <a href="https://shopname.it" className="text-blue-500 hover:underline">shopname.it</a>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
            <img src="https://flagcdn.com/w80/dk.png" alt="Denmark" className="w-10 h-6" />
            <div className='flex flex-col'>
              <span className="text-gray-700">Denmark</span>
              <a href="https://shopname.dk" className="text-blue-500  hover:underline">shopname.dk</a>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
            <img src="https://flagcdn.com/w80/fr.png" alt="France" className="w-10 h-6" />
            <div className='flex flex-col'>
              <span className="text-gray-700">France</span>
              <a href="https://shopname.fr" className="text-blue-500  hover:underline">shopname.fr</a>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
            <img src="https://flagcdn.com/w80/gb.png" alt="Great Britain" className="w-10 h-6" />
            <div className='flex flex-col'>
              <span className="text-gray-700">Great Britain</span>
              <a href="https://shopname.co.uk" className="text-blue-500  hover:underline">shopname.co.uk</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid5;