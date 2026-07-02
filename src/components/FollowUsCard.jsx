import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

/**
 * FollowUsCard
 * - Uses Tailwind CSS classes
 * - Shows Instagram and Facebook icons centered
 * - Icons open links in a new tab and have accessible labels
 */
export default function FollowUsCard() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 flex flex-col items-center">
        <h3 className="text-sm font-extrabold">Follow Us</h3>
        <p className="text-xs text-slate-200 mt-1 mb-4 text-center">Stay connected with us on social media.</p>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/SCoRWWOvijayawada/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white transform transition-all duration-300 ease-out hover:scale-110 hover:bg-gradient-to-br hover:from-[#E1306C] hover:via-[#C13584] hover:to-[#833AB4]"
          >
            <FaInstagram className="w-5 h-5" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61579587494329"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white transform transition-all duration-300 ease-out hover:scale-110 hover:bg-[#1877F2]"
          >
            <FaFacebookF className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
