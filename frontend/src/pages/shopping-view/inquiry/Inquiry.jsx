import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const InquiryForm = () => (
  <div className="bg-white text-black rounded-md p-6 w-full max-w-sm shadow-md">
    <h3 className="text-lg font-semibold mb-4">Send quote to suppliers</h3>

    <input
      type="text"
      placeholder="What item you need?"
      className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <textarea
      placeholder="Type more details"
      className="w-full border border-gray-300 rounded px-3 py-2 mb-3 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <div className="flex space-x-2 mb-3">
      <input
        type="number"
        placeholder="Quantity"
        className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Pcs</option>
        <option>Kg</option>
        <option>Liters</option>
      </select>
    </div>

    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded">
      Send inquiry
    </button>
  </div>
);

const Inquiry = () => {
  return (
    <div
      className="relative bg-cover bg-center rounded-md overflow-hidden mt-10"
      style={{
        backgroundImage: "linear-gradient(to right, blue,transparent ), url('https://lunainc.com/sites/default/files/assets/images/solutions/iStock-511106946_0.jpg')",
      }}
    >
      {/* Gradient overlay */}
      <div className="" />

      {/* Content container */}
      <div className="relative z-20 p-6 md:p-12 flex flex-col md:flex-row items-center justify-between text-white">
        {/* Left text section - hidden on small screens */}
        <div className="max-w-md mb-8 md:mb-0 hidden md:block">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            An easy way to send<br />requests to all suppliers
          </h2>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Form for large screens */}
        <div className="hidden md:block">
          <InquiryForm />
        </div>

        {/* Small screen: Button that opens dialog */}
        <div className="md:hidden w-full text-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow">
                Send inquiry
              </button>
            </DialogTrigger>
            <DialogContent className="w-[90%] rounded-lg">
              <InquiryForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
