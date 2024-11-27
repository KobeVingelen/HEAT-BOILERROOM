import React from 'react';
import { Clock } from 'lucide-react';

const artists = [
  {
    name: "Techno Thunder",
    time: "22:00 - 23:30",
    genre: "Industrial Techno",
    image: "https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100"
  },
  {
    name: "Bass Reactor",
    time: "23:30 - 01:00",
    genre: "Hard Techno",
    image: "https://images.unsplash.com/photo-1571266028243-e4bb35f0a8c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100"
  },
  {
    name: "Pulse Engine",
    time: "01:00 - 02:30",
    genre: "Dark Techno",
    image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100"
  },
  {
    name: "Steam Punk",
    time: "02:30 - 04:00",
    genre: "Acid Techno",
    image: "https://images.unsplash.com/photo-1574700273608-e885c1e58bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100"
  },
  {
    name: "Circuit Breaker",
    time: "04:00 - 06:00",
    genre: "Peak Time Techno",
    image: "https://images.unsplash.com/photo-1598387746216-506f6bd47adb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100"
  }
];

const Program = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-black pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gradient-pink">
            Artist Program
          </h1>
          <p className="text-xl text-gray-400">Experience a carefully curated lineup of underground techno artists</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-hot-pink/20 transition-all hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-hot-pink">{artist.name}</h3>
                <div className="flex items-center text-gray-400 mb-2">
                  <Clock className="w-4 h-4 mr-2 text-hot-pink" />
                  {artist.time}
                </div>
                <p className="text-hot-pink font-medium">{artist.genre}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-hot-pink/20 transition-colors">
          <h2 className="text-2xl font-bold mb-4 text-hot-pink">Additional Information</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Doors open at 21:30</li>
            <li>• Valid ID required for entry</li>
            <li>• 21+ event</li>
            <li>• Professional sound system by Funktion-One</li>
            <li>• Coat check available</li>
            <li>• No photography or video recording allowed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Program;