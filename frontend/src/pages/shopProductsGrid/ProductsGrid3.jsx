import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: "Laptops",
    price: 122,
    imageUrl: "https://avatars.mds.yandex.net/i?id=f645e689e61b7363e68b9ce965a7bdbb464439dd-8182686-images-thumbs&n=13"
  },
  {
    id: 2,
    title: "Headphones",
    price: 19,
    imageUrl: "https://avatars.mds.yandex.net/i?id=46f0b666b43d185a5ffc56c1e45bd1049bb31cd2-7041172-images-thumbs&n=13"
  },
  {
    id: 3,
    title: "Drone",
    price: 220,
    imageUrl: "https://avatars.mds.yandex.net/i?id=10d4c903df5a0f41c029f47d5ccbfe8f405d792b-5249900-images-thumbs&n=13"
  },
  {
    id: 4,
    title: "Smart watches",
    price: 191,
    imageUrl: "https://avatars.mds.yandex.net/i?id=ef67494f9b871d026f7681f815abd12ffbe57b49-5220773-images-thumbs&n=13"
  },
  {
    id: 5,
    title: "Gimble",
    price: 100,
    imageUrl: "https://avatars.mds.yandex.net/i?id=5fe73c851c4d77de3e31c82f855aee6ae85a633f-5229540-images-thumbs&n=13"
  },
  {
    id: 6,
    title: "Pods",
    price: 392,
    imageUrl: "https://avatars.mds.yandex.net/i?id=826be4ec60cafb7b3913f8d7c2e7d6bb7fb7049f-3591326-images-thumbs&n=13"
  },
  {
    id: 7,
    title: "Speakers",
    price: 119,
    imageUrl: "https://avatars.mds.yandex.net/i?id=5f7422b524d8d9db76ad484ae550b7021acd95ab-5713591-images-thumbs&n=13"
  },
  {
    id: 8,
    title: "Screen",
    price: 1110,
    imageUrl: "https://avatars.mds.yandex.net/i?id=e6634b95b0f78f29799ee9767b845ddfcb0cfdfb-4907709-images-thumbs&n=13"
  }
];

const ProductsGrid3 = () => {
  return (
    <div className="bg-white mt-10 rounded-lg flex flex-col md:flex-row justify-center border overflow-hidden shadow-sm">
      {/* Left Section */}
      <div 
        className="flex flex-col justify-center items-start p-6 w-full md:w-1/2 relative bg-[#f5f5f5]"
        style={{
          backgroundImage: "linear-gradient(to bottom, white, transparent),url('https://avatars.mds.yandex.net/i?id=33bd81f7dc3a0764b4afb48099ebfcae60cbaf61-8243435-images-thumbs&n=13')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px'
        }}
      >
        <div className="z-10 md:mb-32 text-black">
          <h3 className="text-xl font-bold text-black mb-2">Consumer<br /> elctronics and <br />gadgets</h3>
          <Link to="/shop/listing" className="mt-4 bg-white text-black font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition">
            Source now
          </Link>
        </div>
      </div>

      {/* Right Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-4  w-full">
        {products.map((product) => (
          <div 
            key={product.id}
            className="group border border-gray-100 p-4 hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="text-sm font-medium text-gray-800">{product.title}</div>
            <div className="text-xs text-gray-500 mt-1">From</div>
            <div className="text-sm font-semibold text-gray-700">USD {product.price}</div>
            <div className="flex justify-center items-end mt-auto h-20">
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid3;
