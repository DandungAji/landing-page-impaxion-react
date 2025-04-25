
import React from 'react';
import { Check } from 'lucide-react';

const PricingPlans = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-24 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary opacity-20 rounded-full blur-3xl"></div>
      
      <h2 className="text-white text-3xl font-bold text-center mb-2">Find the right plan</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Temukan paket layanan yang sesuai dengan kebutuhan dan anggaran Anda. Semua paket dapat disesuaikan untuk memenuhi kebutuhan spesifik bisnis Anda.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Plan */}
        <div className="bg-dark-light rounded-xl p-6 border border-gray-800 flex flex-col relative">
          <div className="mb-6">
            <h3 className="text-white text-xl font-bold mb-1">Basic</h3>
            <p className="text-gray-400 text-sm mb-4">Perfect for small businesses</p>
            <div className="flex items-end">
              <span className="text-white text-3xl font-bold">$499</span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
          </div>
          
          <div className="space-y-3 mb-8 flex-grow">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">All standard features</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">Basic reporting and analytics</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">Up to 5 team members</span>
            </div>
          </div>
          
          <button className="bg-dark-lighter hover:bg-dark-light border border-gray-700 hover:border-gray-600 text-white font-medium py-3 px-6 rounded-full w-full">
            Get started
          </button>
        </div>
        
        {/* Pro Plan */}
        <div className="bg-dark-light rounded-xl p-6 border border-primary/30 flex flex-col relative transform scale-105 shadow-lg shadow-primary/10">
          <div className="absolute -top-3 right-6 bg-primary text-black text-xs font-medium px-2 py-1 rounded-md">
            Popular
          </div>
          
          <div className="mb-6">
            <h3 className="text-white text-xl font-bold mb-1">Pro</h3>
            <p className="text-gray-400 text-sm mb-4">For growing businesses</p>
            <div className="flex items-end">
              <span className="text-white text-3xl font-bold">$499</span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
          </div>
          
          <div className="space-y-3 mb-8 flex-grow">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">All in Basic plan plus...</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">Advanced reporting</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">Up to 20 team members</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">Advanced integrations</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">Dedicated support</span>
            </div>
          </div>
          
          <button className="bg-primary hover:bg-green-light text-black font-medium py-3 px-6 rounded-full w-full">
            Get Pro Now
          </button>
        </div>
        
        {/* Enterprise Plan */}
        <div className="bg-dark-light rounded-xl p-6 border border-gray-800 flex flex-col relative">
          <div className="mb-6">
            <h3 className="text-white text-xl font-bold mb-1">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-4">For large organizations</p>
            <div className="flex items-end">
              <span className="text-white text-3xl font-bold">$999</span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
          </div>
          
          <div className="space-y-3 mb-8 flex-grow">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">All in Pro plan plus...</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">Custom reporting</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">Unlimited team members</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">Advanced security</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-300 text-sm">Priority support</span>
            </div>
          </div>
          
          <button className="bg-dark-lighter hover:bg-dark-light border border-gray-700 hover:border-gray-600 text-white font-medium py-3 px-6 rounded-full w-full">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
