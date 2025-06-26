import React, { useEffect, useState } from 'react';

const ProductsGrid = () => {
  const [timer, setTimer] = useState({ days: 4, hours: 13, minutes: 34, seconds: 56 });
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        let { days, hours, minutes, seconds } = prevTimer;
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        if (days < 0) {
          clearInterval(countdown);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="bg-background gap-x-4 mt-10 rounded-lg flex flex-col md:flex-row justify-center border border-border">
      <div className="flex flex-col justify-center items-center p-4 mb-5">
        <div className='mb-5'>
        <h2 className="text-2xl font-bold text-foreground">Deals and Offers</h2>
        <h2 className="text-lg font-sm text-gray-400">Hygiene equipments</h2>
        </div>
        <div className="flex space-x-3 text-lg font-semibold text-foreground">
          <div className='flex flex-col items-center justify-center bg-black/80 text-white px-3 py-1 rounded-md shadow-sm'>
            <div>{timer.days}</div>
            <div><h3 className='text-sm text-sm'>Days</h3></div>
          </div>
          <div className='flex flex-col items-center justify-center bg-black/80 text-white px-3 py-1 rounded-md shadow-sm'>
            <div>{timer.hours}</div>
            <div><h3 className='text-sm text-sm'>Hours</h3></div>
          </div>
          <div className='flex flex-col items-center justify-center bg-black/80 text-white px-3 py-1 rounded-md shadow-sm'>
            <div>{timer.minutes}</div>
            <div><h3 className='text-sm text-sm'>Minutes</h3></div>
          </div>
          <div className='flex flex-col items-center justify-center bg-black/80 text-white px-3 py-1 rounded-md shadow-sm'>
            <div>{timer.seconds}</div>
            <div><h3 className='text-sm text-sm'>Seconds</h3></div>
          </div>
        </div>
      </div>

      <div className="flex md:grid md:grid-cols-5 overflow ">
      <div className="group bg-card border border-border py-3 sm:py-4 px-1 sm:px-2 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img 
              src="https://avatars.mds.yandex.net/i?id=3ee3eec0e95bb2e3e36f87b28a9e710df57183d2-3906494-images-thumbs&n=13" 
              alt="Smart watches" 
              className="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">Smart Watches</h3>
          <span className="text-primary font-bold text-xs sm:text-sm rounded-full bg-red-200 text-red-600 px-3 sm:px-4 py-1 sm:py-2">-25%</span>
        </div>

        <div className="group bg-card border border-border py-3 sm:py-4 px-1 sm:px-2 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img 
              src="https://avatars.mds.yandex.net/i?id=bea1cc8379f74fcffa3c39c975044683388666a4-5112030-images-thumbs&n=13" 
              alt="GoPro cameras" 
              className="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">GoPro Cameras</h3>
          <span className="text-primary font-bold text-xs sm:text-sm rounded-full bg-red-200 text-red-600 px-3 sm:px-4 py-1 sm:py-2">-40%</span>
        </div>

        <div className="group bg-card border border-border py-3 sm:py-4 px-1 sm:px-2 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img 
              src="https://avatars.mds.yandex.net/i?id=eae62f519cf9f186d3700898a2bc6df4f734248b-10836362-images-thumbs&n=13" 
              alt="Canon cameras" 
              className="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">Canon Cameras</h3>
          <span className="text-primary font-bold text-xs sm:text-sm rounded-full bg-red-200 text-red-600 px-3 sm:px-4 py-1 sm:py-2">-25%</span>
        </div>

        <div className="group bg-card border border-border py-3 sm:py-4 px-1 sm:px-2 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img 
              src="https://avatars.mds.yandex.net/i?id=71b8d983ce756162c5f55276ef53e543fa6be311-5334983-images-thumbs&n=13" 
              alt="Headphones" 
              className="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">Headphones</h3>
          <span className="text-primary font-bold text-xs sm:text-sm rounded-full bg-red-200 text-red-600 px-3 sm:px-4 py-1 sm:py-2">-15%</span>
        </div>

        <div className="group bg-card border border-border py-3 sm:py-4 px-1 sm:px-2 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img 
              src="https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UF1000,1000_QL80_.jpg" 
              alt="Laptops" 
              className="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">Laptops</h3>
          <span className="text-primary font-bold text-xs sm:text-sm rounded-full bg-red-200 text-red-600 px-3 sm:px-4 py-1 sm:py-2">-15%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;