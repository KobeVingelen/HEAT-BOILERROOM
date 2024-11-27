import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone, Ticket } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Ticket Purchase Banner */}
        <div className="mb-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-hot-pink/20 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-hot-pink mb-2">Ready to Experience HEAT?</h3>
            <p className="text-gray-400">Secure your spot at the ultimate boiler room event</p>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-hot-pink rounded-full hover:bg-hot-pink/90 transition-colors"
          >
            <Ticket className="w-5 h-5 mr-2" />
            Buy Tickets Now
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo className="h-12" />
            <p className="text-gray-400 text-sm">
              Experience the ultimate indoor boiler room event with cutting-edge electronic music and immersive atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-hot-pink transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hot-pink transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hot-pink transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hot-pink transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-hot-pink">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-hot-pink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/program" className="text-gray-400 hover:text-hot-pink transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link to="/more" className="text-gray-400 hover:text-hot-pink transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/dj-contest" className="text-gray-400 hover:text-hot-pink transition-colors">
                  DJ Contest
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-hot-pink">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@heat-event.com" className="text-gray-400 hover:text-hot-pink transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@heat-event.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-hot-pink transition-colors flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <span className="text-gray-400 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Industrial District, Underground Boiler Room
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-hot-pink">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-hot-pink transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-hot-pink transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-hot-pink transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} HEAT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;