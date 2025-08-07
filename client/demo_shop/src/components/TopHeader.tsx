import React, {useState} from 'react'

import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,  
} from "lucide-react";
import { Link } from "react-router";
import {LoginModal} from '@/components/LoginModal';
import { Button } from './ui/button';

export function TopHeader() {
  const [open, setOpen] = useState(false)  
  return (
    <div className="w-full border-b text-sm text-black px-4 py-2 bg-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left Icons */}
        <div className="flex gap-3">
          <a href="#" aria-label="Facebook"><FacebookIcon className="w-4 h-4" /></a>
          <a href="#" aria-label="Instagram"><InstagramIcon className="w-4 h-4" /></a>
          <a href="#" aria-label="YouTube"><YoutubeIcon className="w-4 h-4" /></a>        
        </div>

        {/* Center Message */}
        <div>
          <span className="font-semibold">Special Offer:</span> Free Shipping on all the orders above $100
        </div>

        {/* Right Links */}
        <div className="flex gap-4">
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/cart" className="hover:underline">Cart</Link>
          <Link to="#" className="hover:underline" onClick={() => setOpen(!open)}>Login</Link>
        </div>
      </div>
      <LoginModal open={open} onOpenChange={setOpen}/>
    </div>
  );
}
