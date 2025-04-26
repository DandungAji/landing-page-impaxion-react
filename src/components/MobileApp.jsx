import React from "react";

const MobileApp = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Side */}
      <div className="flex flex-col justify-center">
        <h2 className="text-white text-3xl font-bold mb-4">
          Aplikasi Mobile Sesuai Kebutuhanmu
        </h2>
        <p className="text-gray-400 mb-8">
          Ingin hadir di genggaman pengguna? Kami bantu bangun aplikasi Android
          & iOS sesuai kebutuhanmu — dari desain sampai publish.
        </p>

        <div className="space-y-6">
          <div className="flex items-center">
            <span className="bg-purple-500 p-1.5 rounded-full mr-3"></span>
            <div>
              <h4 className="text-white font-medium">UI Dashboard Design</h4>
              <p className="text-gray-400 text-sm">$1653.00</p>
            </div>
          </div>

          <div className="flex items-center">
            <span className="bg-pink-500 p-1.5 rounded-full mr-3"></span>
            <div>
              <h4 className="text-white font-medium">Mobile App Development</h4>
              <p className="text-gray-400 text-sm">$1800.00</p>
            </div>
          </div>

          <div className="flex items-center">
            <span className="bg-green-500 p-1.5 rounded-full mr-3"></span>
            <div>
              <h4 className="text-white font-medium">Website Development</h4>
              <p className="text-gray-400 text-sm">$1200.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center">
        <h2 className="text-white text-3xl font-bold mb-4">
          Bingung Mulai?
          <br />
          Konsultasi Dulu Aja!
        </h2>
        <p className="text-gray-400 mb-8">
          Belum yakin mulai dari mana? Tenang, kamu bisa tanya-tanya dulu tanpa
          biaya. Kami bantu arahkan solusi terbaik sesuai kebutuhanmu.
        </p>

        <button className="bg-primary hover:bg-green-light text-black font-medium py-3 px-6 rounded-full w-max">
          Hubungi Kami
        </button>
      </div>
    </section>
  );
};

export default MobileApp;
