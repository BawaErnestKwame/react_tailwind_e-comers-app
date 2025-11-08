import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 px-6 md:px-16 py-10 lg:px-24">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* --- Logo + Description --- */}
        <div className="md:w-1/3">
          <Link to="/">
            <h1 className="text-3xl font-bold mb-3 text-white">
              Gear<span className="text-orange-500 underline">Up</span>
            </h1>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Your trusted destination for quality tech products at unbeatable
            prices. Shop smart. Live better.
          </p>

          <div className="flex gap-4 mt-4 text-gray-400">
            <a href="#">
              <FacebookIcon className="hover:text-orange-500 transition" />
            </a>
            <a href="#">
              <InstagramIcon className="hover:text-orange-500 transition" />
            </a>
            <a href="#">
              <WhatsAppIcon className="hover:text-orange-500 transition" />
            </a>
            <a href="#">
              <YouTubeIcon className="hover:text-orange-500 transition" />
            </a>
          </div>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-orange-500 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/todayDeals" className="hover:text-orange-500 transition">
                Today's Deals
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Categories --- */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">
            Categories
          </h2>
          <ul className="space-y-2">
            <li>
              <Link to="/laptops" className="hover:text-orange-500 transition">
                Laptops
              </Link>
            </li>
            <li>
              <Link to="/headsets" className="hover:text-orange-500 transition">
                Headsets
              </Link>
            </li>
            <li>
              <Link to="/phones" className="hover:text-orange-500 transition">
                Phones
              </Link>
            </li>
            <li>
              <Link to="/sneakers" className="hover:text-orange-500 transition">
                Sneakers
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GearUp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
