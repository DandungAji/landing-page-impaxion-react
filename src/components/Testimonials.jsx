
import React from 'react';

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-24">
      <h2 className="text-white text-3xl font-bold text-center mb-2">What are people saying</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Pengguna dari berbagai industri telah membuktikan manfaat menggunakan layanan kami. Berikut adalah testimonial dari beberapa pengguna FinBiz.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-dark-light rounded-xl p-6 border border-gray-800">
          <p className="text-gray-300 mb-6">
            "I really like the system of this application. I love recommending this software to you guys."
          </p>
          
          <div className="flex items-center">
            <img src="https://i.pravatar.cc/48?img=11" alt="Avatar" className="w-12 h-12 rounded-full mr-3" />
            <div>
              <h4 className="text-white font-medium">Alberto John</h4>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial 2 */}
        <div className="bg-dark-light rounded-xl p-6 border border-gray-800">
          <p className="text-gray-300 mb-6">
            "We enjoy our experience with the services which is why our offering is becoming our referral."
          </p>
          
          <div className="flex items-center">
            <img src="https://i.pravatar.cc/48?img=32" alt="Avatar" className="w-12 h-12 rounded-full mr-3" />
            <div>
              <h4 className="text-white font-medium">Jenny John</h4>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial 3 */}
        <div className="bg-dark-light rounded-xl p-6 border border-gray-800">
          <p className="text-gray-300 mb-6">
            "I really like the system of this application. I love recommending this product to you guys."
          </p>
          
          <div className="flex items-center">
            <img src="https://i.pravatar.cc/48?img=41" alt="Avatar" className="w-12 h-12 rounded-full mr-3" />
            <div>
              <h4 className="text-white font-medium">Agungson</h4>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-10">
        <div className="flex gap-2">
          <button className="w-2 h-2 rounded-full bg-gray-700"></button>
          <button className="w-2 h-2 rounded-full bg-primary"></button>
          <button className="w-2 h-2 rounded-full bg-gray-700"></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
