
import React from 'react';

const FeatureCards = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature Card 1 */}
        <div className="bg-dark-light rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all">
          <h3 className="text-white text-lg font-medium mb-2">Website Pada 1 Login</h3>
          <p className="text-gray-400 text-sm mb-8">
            Akses semua website yang Anda miliki dengan satu klik login. Hemat waktu dan maksimalkan produktivitas.
          </p>
          <div className="h-32 bg-dark-lighter rounded-lg flex items-end overflow-hidden">
            <svg viewBox="0 0 100 50" width="100%" height="100%" preserveAspectRatio="none">
              <path d="M0,50 L10,45 L20,48 L30,40 L40,45 L50,35 L60,38 L70,30 L80,25 L90,20 L100,10" 
                fill="none" stroke="#a1ff69" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        {/* Feature Card 2 */}
        <div className="bg-dark-light rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all">
          <h3 className="text-white text-lg font-medium mb-2">Landing Page Professional</h3>
          <p className="text-gray-400 text-sm mb-8">
            Desain landing page yang menarik dan profesional untuk meningkatkan konversi dan kepercayaan pelanggan.
          </p>
          <div className="h-32 bg-dark-lighter rounded-lg flex items-end overflow-hidden">
            <svg viewBox="0 0 100 50" width="100%" height="100%" preserveAspectRatio="none">
              <path d="M0,40 L10,35 L20,45 L30,30 L40,35 L50,25 L60,40 L70,20 L80,30 L90,25 L100,20" 
                fill="none" stroke="#6987ff" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        {/* Feature Card 3 */}
        <div className="bg-dark-light rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all">
          <h3 className="text-white text-lg font-medium mb-2">Dashboard</h3>
          <p className="text-gray-400 text-sm mb-8">
            Pantau performa bisnis Anda dengan dashboard yang intuitif dan lengkap dengan data real-time.
          </p>
          <div className="h-32 bg-dark-lighter rounded-lg flex items-center justify-center">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/48?img=1" alt="" className="w-12 h-12 rounded-full border-2 border-dark-lighter" />
              <img src="https://i.pravatar.cc/48?img=2" alt="" className="w-12 h-12 rounded-full border-2 border-dark-lighter" />
              <img src="https://i.pravatar.cc/48?img=3" alt="" className="w-12 h-12 rounded-full border-2 border-dark-lighter" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
