import React from "react";
import { Phone, Mail, MessageCircle, User } from "lucide-react";

export default function FloatingContacts() {
  return (
    <>
      {/* Sidebar buttons */}
      <div className="fixed top-1/3 right-2 flex flex-col space-y-3 z-50 ">
        
      {/* Phone */}
      <div className="group relative flex items-center">
        <span className="absolute right-12 bg-black text-white px-3 py-1 rounded-lg opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          +91 9862098737
        </span>
        <a
          href="tel:+919876543210"
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg 
                     hover:scale-110 transition-transform duration-300 
                     hover:bg-gradient-to-r hover:from-gray-700 hover:to-black 
                     hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.3)]"
        >
          <Phone size={24} />
        </a>
      </div>

        {/* Email */}
        <div className="group relative flex items-center">
        <span className="absolute right-12 bg-black text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
          rairanjit603@gmail.com
        </span>
        <a
          href="mailto:info@yourelec.com"
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg 
                     hover:scale-110 transition-transform duration-300 
                     hover:bg-gradient-to-r hover:from-gray-700 hover:to-black 
                     hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.3) animate-pulse-glow]"
        >
          <Mail size={24} />
        </a>
      </div>

        {/* WhatsApp */}
        <div className="group relative flex items-center">
            <span className="absolute right-12 bg-black text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
            Chat on WhatsApp
            </span>
            <a
            href="https://wa.me/919862098737"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg 
                     hover:scale-110 transition-transform duration-300 
                     hover:bg-gradient-to-r hover:from-gray-700 hover:to-black 
                     hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.3)]"
            >
            <MessageCircle size={24} />
            </a>
      </div>

        
      </div>

      {/* Chat Now bubble */}
      <div className="fixed bottom-4 right-4 flex items-center space-x-3 bg-white shadow-lg rounded-full px-3 py-2 border z-50">
        <a href="https://wa.me/919862098737">
        <img
          src= {'/re.jpg'}
          
          className="w-10 h-10 rounded-full border"
        />
        </a>
        <a
        href="https://wa.me/919862098737" >
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-800">Chat Now</span>
        </div>
        </a>
      </div>
    </>
  );
}
