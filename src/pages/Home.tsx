import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SoundCloudPlayer from '../components/SoundCloudPlayer';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&sat=-100")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-pink">
              HEAT
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-8">
              The Ultimate Indoor Boiler Room Experience
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Join us for an unforgettable night of electronic music in an authentic industrial setting.
              Feel the bass, embrace the atmosphere, become part of the movement.
            </p>
            <Link
              to="/program"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-hot-pink rounded-full hover:bg-hot-pink/90 transition-colors"
            >
              View Program <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Event Details */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-hot-pink/20 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-hot-pink">Location</h3>
              <p className="text-gray-400">Industrial District<br />Underground Boiler Room</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-hot-pink/20 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-hot-pink">Date & Time</h3>
              <p className="text-gray-400">Saturday, March 30th<br />22:00 - 06:00</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-hot-pink/20 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-hot-pink">Tickets</h3>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white bg-hot-pink rounded-full hover:bg-hot-pink/90 transition-colors"
              >
                Buy Tickets <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;