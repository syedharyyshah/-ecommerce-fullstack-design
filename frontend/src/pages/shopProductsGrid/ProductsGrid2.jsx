import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: "Soft chairs",
    price: 19,
    imageUrl: "https://avatars.mds.yandex.net/i?id=3b5800a51e542303350b31a16ea29633dce6700c-9459824-images-thumbs&n=13"
  },
  {
    id: 2,
    title: "Lamp",
    price: 19,
    imageUrl: "https://avatars.mds.yandex.net/i?id=f03f2fa9b24b951a4b008756b9f0e4cff58a8763-5220930-images-thumbs&n=13"
  },
  {
    id: 3,
    title: "Kitchen dishes",
    price: 19,
    imageUrl: "https://avatars.mds.yandex.net/i?id=1caeeb9e8fc8dbf26af9bbe15f013058ab41ee35-8497316-images-thumbs&n=13"
  },
  {
    id: 4,
    title: "Cutter",
    price: 19,
    imageUrl: "https://avatars.mds.yandex.net/i?id=0d4eb419d72d833178f016b08a6b64b1be4248bc-11380463-images-thumbs&n=13"
  },
  {
    id: 5,
    title: "Kitchen mixer",
    price: 100,
    imageUrl: "https://avatars.mds.yandex.net/i?id=d30a0912301f1e1456f36884987430b85679bda8-2856395-images-thumbs&n=13"
  },
  {
    id: 6,
    title: "Blenders",
    price: 39,
    imageUrl: "https://avatars.mds.yandex.net/i?id=188c4d5439e4de3fcf87f7b4e7e59257e2a71168-12920861-images-thumbs&n=13"
  },
  {
    id: 7,
    title: "Home appliance",
    price: 19,
    imageUrl: "https://avatars.mds.yandex.net/i?id=ed8a8557311e5f7e69f0f78e258ab39ef8740b0c-8497208-images-thumbs&n=13"
  },
  {
    id: 8,
    title: "Coffee maker",
    price: 10,
    imageUrl: "https://avatars.mds.yandex.net/i?id=49c11a7d26f20fd12bc6c09a87bc12feae018095-5570459-images-thumbs&n=13"
  }
];

const ProductsGrid2 = () => {
  return (
    <div className="bg-white mt-10 rounded-lg flex flex-col md:flex-row justify-center border overflow-hidden shadow-sm">
      {/* Left Section */}
      <div 
        className="flex flex-col justify-center items-start p-6 w-full md:w-1/2 relative bg-[#f5f5f5]"
        style={{
          backgroundImage: "linear-gradient(to bottom, white, transparent),url('https://m.media-amazon.com/images/I/81ovYX2b71L.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px'
        }}
      >
        <div className="z-10 md:mb-32 text-black">
          <h3 className="text-xl font-bold text-black mb-2">Home and<br />outdoor</h3>
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

export default ProductsGrid2;
