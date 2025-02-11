import { useState } from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPinterest } from "react-icons/fa";

export default function Footer() {
  const [region, setRegion] = useState("India (English)");

  return (
    <footer className="bg-gradient-to-r from-pink-400 to-orange-300 animate-slidedown animate-gradient py-8 px-6 md:px-16">
      {/* Acknowledgment of Country */}
      <div className="border-b border-gray-500 pb-4">
        <h3 className="text-lg font-semibold">Acknowledgement of Country</h3>
        <p className="mt-2 text-sm">
          We acknowledge the Traditional Aboriginal and Torres Strait Islander Owners of the land, 
          sea and waters of the Australian continent, and recognise their custodianship of culture 
          and Country for over 60,000 years.{" "}
          <a href="#" className="text-blue-300 hover:underline">Read more →</a>
        </p>
      </div>

      {/* Region Selection & Social Media */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Region Selection */}
        <div>
          <label className="text-sm font-semibold">Change your region and language</label>
          <div className="mt-2 bg-white text-black px-4 py-2 rounded-md cursor-pointer">
            {region} ▼
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="#" aria-label="Facebook"><FaFacebook className="text-white hover:text-blue-400" /></a>
          <a href="#" aria-label="YouTube"><FaYoutube className="text-white hover:text-red-400" /></a>
          <a href="#" aria-label="Twitter"><FaTwitter className="text-white hover:text-blue-400" /></a>
          <a href="#" aria-label="Instagram"><FaInstagram className="text-white hover:text-pink-400" /></a>
          <a href="#" aria-label="Pinterest"><FaPinterest className="text-white hover:text-red-400" /></a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About this Site */}
        <div>
          <h4 className="font-semibold">About this site</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>

        {/* Other Sites */}
        <div>
          <h4 className="font-semibold">Other sites</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Media & Industry</a></li>
            <li><a href="#" className="hover:underline">Business Events</a></li>
            <li><a href="#" className="hover:underline">Tourism Investment</a></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-300">
          <p>© Happy Trails 2025</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 text-xs text-gray-400">
        <p>
        *Product Disclaimer: Happy Trails provides travel destination recommendations based on 
          AI-driven emotional analysis. While we strive to offer the best suggestions, these 
          recommendations are generated algorithmically and may not always be accurate or suitable 
          for all users. Travel preferences and emotional states vary, and we encourage users to 
          conduct their own research before making travel plans. Happy Trails is not responsible 
          for any bookings, travel arrangements, or third-party services listed on this website.
        </p>
      </div>
    </footer>
  );
}


