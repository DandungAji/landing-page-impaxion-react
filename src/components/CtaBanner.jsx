
import React from 'react';

const CtaBanner = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-24">
      <div className="bg-dark-light rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-white text-3xl font-bold mb-4">
              Let's Upgrade your finances experience by using FinBiz
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="bg-primary hover:bg-green-light text-black font-medium py-3 px-6 rounded-full">
                Start for Free
              </button>
              <button className="text-white border border-gray-700 hover:border-gray-500 font-medium py-3 px-6 rounded-full">
                Book a Demo
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/f2c4ea79-298c-4395-8711-93743e63487a.png" 
              alt="Finance Dashboard" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
