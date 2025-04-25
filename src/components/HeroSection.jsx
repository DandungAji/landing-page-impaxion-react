
import React from 'react';

const HeroSection = () => {
  return (
    <section className="text-center px-6 py-20 max-w-4xl mx-auto relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary opacity-30 rounded-full blur-3xl"></div>
      
      <div className="bg-primary text-black text-xs font-medium px-3 py-1 rounded-full inline-flex items-center mb-6">
        <span className="mr-2">New Features</span>
        <span className="bg-black text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Buat Website Impian Anda,<br />Tanpa Ribet.</h1>
      
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Solusi kenyamanan untuk bisnis Anda. Lihat berbagai fitur yang kami tawarkan untuk memaksimalkan performa bisnis Anda.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <button className="bg-primary hover:bg-green-light text-black font-medium py-3 px-6 rounded-full">
          Mulai Sekarang
        </button>
        <button className="text-white border border-gray-700 hover:border-gray-500 font-medium py-3 px-6 rounded-full">
          Pelajari Lebih Lanjut
        </button>
      </div>
      
      <div className="flex justify-center">
        <div className="py-2 px-4 bg-dark-lighter rounded-full flex items-center gap-2 text-sm">
          <span className="text-gray-400">Used by 10,000+ companies</span>
          <div className="flex -space-x-2">
            <img src="https://i.pravatar.cc/32?img=1" alt="" className="w-6 h-6 rounded-full ring-2 ring-dark-lighter" />
            <img src="https://i.pravatar.cc/32?img=2" alt="" className="w-6 h-6 rounded-full ring-2 ring-dark-lighter" />
            <img src="https://i.pravatar.cc/32?img=3" alt="" className="w-6 h-6 rounded-full ring-2 ring-dark-lighter" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
