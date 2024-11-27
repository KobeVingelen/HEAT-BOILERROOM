import React from 'react';
import { Music, Star } from 'lucide-react';
import SoundCloudPlayer from '../components/SoundCloudPlayer';

const contestants = [
  {
    slot: "Slot 1",
    genre: "To be announced",
    image: "https://images.unsplash.com/photo-1571266028243-e4bb35f0a8c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "https://soundcloud.com/davidguetta/sexy-bitch-feat-akon"
  },
  {
    slot: "Slot 2",
    genre: "To be announced",
    image: "https://images.unsplash.com/photo-1598387746216-506f6bd47adb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "https://soundcloud.com/davidguetta/sexy-bitch-feat-akon"
  },
  {
    slot: "Slot 3",
    genre: "To be announced",
    image: "https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "https://soundcloud.com/davidguetta/sexy-bitch-feat-akon"
  },
  {
    slot: "Slot 4",
    genre: "To be announced",
    image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "https://soundcloud.com/davidguetta/sexy-bitch-feat-akon"
  },
  {
    slot: "Slot 5",
    genre: "To be announced",
    image: "https://images.unsplash.com/photo-1574700273608-e885c1e58bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "https://soundcloud.com/davidguetta/sexy-bitch-feat-akon"
  },
  {
    slot: "Slot 6",
    genre: "To be announced",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "https://soundcloud.com/davidguetta/sexy-bitch-feat-akon"
  },
  {
    slot: "Slot 7",
    genre: "To be announced",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "https://soundcloud.com/davidguetta/sexy-bitch-feat-akon"
  },
  {
    slot: "Slot 8",
    genre: "To be announced",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "https://soundcloud.com/davidguetta/sexy-bitch-feat-akon"
  },
  {
    slot: "Slot 9",
    genre: "To be announced",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "https://soundcloud.com/davidguetta/sexy-bitch-feat-akon"
  },
  {
    slot: "Slot 10",
    genre: "To be announced",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "https://soundcloud.com/davidguetta/sexy-bitch-feat-akon"
  }
];

const DJContest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-black pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gradient-pink">
            DJ Contest
          </h1>
          <p className="text-xl text-gray-400 mb-8">Discover the next generation of techno talent</p>
          
          <div className="inline-flex items-center justify-center px-6 py-3 border border-hot-pink rounded-full text-hot-pink hover:bg-hot-pink hover:text-white transition-all duration-300">
            <Star className="w-5 h-5 mr-2" />
            Winner announcement at 01:00
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contestants.map((contestant, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-hot-pink/20 transition-all hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src={contestant.image}
                  alt={contestant.slot}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 grayscale hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-hot-pink/20 border border-hot-pink/30 text-hot-pink text-sm mb-2">
                    <Music className="w-4 h-4 mr-2" />
                    Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{contestant.slot}</h3>
                <p className="text-hot-pink font-medium mb-4">{contestant.genre}</p>
                <SoundCloudPlayer trackUrl={contestant.trackUrl} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h2 className="text-2xl font-bold mb-6 text-hot-pink">Contest Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Rules</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 45-minute set per contestant</li>
                <li>• Must include minimum 3 original tracks</li>
                <li>• Genre: Techno / Industrial / Dark Techno</li>
                <li>• Live performance elements encouraged</li>
                <li>• No pre-recorded sets allowed</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Prizes</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 1st Place: Studio recording session + HEAT residency</li>
                <li>• 2nd Place: Professional DJ equipment package</li>
                <li>• 3rd Place: Featured spot at next HEAT event</li>
                <li>• All finalists receive professional photo/video package</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DJContest;