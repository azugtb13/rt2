import React, { useState } from 'react';
import { Car, Calendar, MapPin, Crown, Shield, Trophy, Users, Clock } from 'lucide-react';

function App() {
  const [isReturn, setIsReturn] = useState(true);
  const [passengers, setPassengers] = useState(1);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Crown className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold tracking-tight">ROYAL TRANSFER</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#destinations" className="text-gray-700 hover:text-blue-600">Destinations</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
              <a href="#partner" className="text-gray-700 hover:text-blue-600">Partner</a>
              <a href="#rent" className="text-gray-700 hover:text-blue-600">Rent a Car</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="h-[60vh] relative flex items-center"
        style={{
          backgroundImage: 'url(https://i.imgur.com/Y7GtfwS.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              The road is part of the adventure
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Enjoy the trip - we'll handle the rest.
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative -mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden">
            {/* Trip Type and Passenger Controls */}
            <div className="flex flex-col md:flex-row justify-between items-stretch">
              <div className="flex">
                <button
                  className={`px-8 h-12 transition-colors rounded-tl-xl ${isReturn ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setIsReturn(true)}
                >
                  With return
                </button>
                <button
                  className={`px-8 h-12 transition-colors ${!isReturn ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setIsReturn(false)}
                >
                  One Way
                </button>
              </div>
              
              <div className="flex items-center gap-3 bg-gray-50 rounded-tr-xl px-6 h-12">
                <Users className="h-5 w-5 text-gray-400" />
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-gray-200 active:bg-blue-600 active:text-white"
                  onClick={() => setPassengers(Math.max(1, passengers - 1))}
                >
                  -
                </button>
                <div className="flex items-center whitespace-nowrap">
                  <span className="font-medium">{passengers}</span>
                  <span className="ml-1">Passenger{passengers !== 1 ? 's' : ''}</span>
                </div>
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-gray-200 active:bg-blue-600 active:text-white"
                  onClick={() => setPassengers(passengers + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Main Search Panel */}
            <div className="p-6">
              {/* Search Fields */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="From"
                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="To"
                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Departure"
                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Return"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${!isReturn ? 'opacity-50' : ''}`}
                    disabled={!isReturn}
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex justify-center">
                <button className="bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                  See Prices
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold">Trusted by Thousands</h3>
                <p className="text-sm text-gray-600">Happy customers worldwide</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Trophy className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold">15+ Years Experience</h3>
                <p className="text-sm text-gray-600">Industry veterans</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold">Safety & Reliability</h3>
                <p className="text-sm text-gray-600">Your security is our priority</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Clock className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-gray-600">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Royal Transfer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;