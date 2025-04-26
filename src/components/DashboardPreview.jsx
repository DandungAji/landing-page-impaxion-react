import React from "react";

const DashboardPreview = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-24 relative">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full h-40 bg-primary opacity-10 blur-3xl rounded-full"></div>

      {/* Dashboard Preview */}
      <div className="bg-dark-light rounded-xl p-4 shadow-lg overflow-hidden relative z-10">
        <div className="grid grid-cols-12 gap-4">
          {/* Left Panel */}
          <div className="col-span-3 bg-dark-lighter rounded-lg p-4">
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-xs mb-1">Total Keuntungan</p>
                <h3 className="text-white text-2xl font-bold">$350,240</h3>
                <div className="h-1 w-20 bg-chart-green mt-2"></div>
              </div>

              <div className="pt-4">
                <p className="text-gray-400 text-xs mb-1">Penjualan Hari Ini</p>
                <h3 className="text-white text-xl font-bold">$5500</h3>
                <div className="bg-dark-light rounded p-1 mt-1">
                  <div className="bg-chart-green h-1 w-3/4 rounded"></div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-gray-400 text-xs mb-1">Bulan Ini</p>
                <h3 className="text-white text-xl font-bold">$320.0</h3>
                <div className="bg-dark-light rounded p-1 mt-1">
                  <div className="bg-chart-green h-1 w-3/5 rounded"></div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-gray-400 text-xs mb-1">Triwulan Ini</p>
                <h3 className="text-white text-xl font-bold">$220.0</h3>
                <div className="bg-dark-light rounded p-1 mt-1">
                  <div className="bg-chart-green h-1 w-5/6 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Panel */}
          <div className="col-span-6 space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-gray-400 text-xs mb-1">Hari Ini</p>
                <h3 className="text-white text-2xl font-bold">$40,690</h3>
                <div className="h-1 w-16 bg-chart-red mt-2"></div>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Pekan</p>
                <h3 className="text-white text-2xl font-bold">$290,000</h3>
                <div className="h-1 w-16 bg-chart-green mt-2"></div>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Bulan</p>
                <h3 className="text-white text-2xl font-bold">$200,000</h3>
                <div className="h-1 w-16 bg-chart-blue mt-2"></div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="h-60 bg-dark-lighter rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 400 100"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                className="p-4"
              >
                <path
                  d="M0,50 C50,30 100,70 150,50 C200,30 250,70 300,50 C350,30 400,50 400,50"
                  fill="none"
                  stroke="#a1ff69"
                  strokeWidth="2"
                  className="opacity-70"
                />
                <path
                  d="M0,70 C50,50 100,90 150,70 C200,50 250,90 300,70 C350,50 400,70 400,70"
                  fill="none"
                  stroke="#6987ff"
                  strokeWidth="2"
                  className="opacity-70"
                />
              </svg>
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-span-3 bg-dark-lighter rounded-lg p-4 space-y-4">
            <p className="text-gray-400 text-xs">Produk Populer</p>

            <div className="space-y-3">
              <div className="bg-dark-light rounded-md p-2">
                <p className="text-white text-sm">Produk #1</p>
              </div>
              <div className="bg-dark-light rounded-md p-2">
                <p className="text-white text-sm">Produk #2</p>
              </div>
              <div className="bg-dark-light rounded-md p-2">
                <p className="text-white text-sm">Produk #3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex justify-center">
          <div className="bg-dark-lighter rounded-full p-1 flex gap-1">
            <button className="px-3 py-1 rounded-full text-white text-xs">
              Kemarin
            </button>
            <button className="px-3 py-1 rounded-full text-white text-xs">
              Hari Ini
            </button>
            <button className="px-3 py-1 rounded-full text-white text-xs">
              Pekan Ini
            </button>
            <button className="px-3 py-1 bg-primary text-black rounded-full text-xs">
              Bulan Ini
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
