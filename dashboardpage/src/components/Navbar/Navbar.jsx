import React from "react";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#f9fff9] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="relative w-8 h-8 mr-1">
                <img
                  className="w-[27px] h-[27px] absolute top-[3px] left-[3px]"
                  alt="Yalaa Logo"
                  src="https://c.animaapp.com/mbhpqda7dSDBGE/img/union.svg"
                />
              </div>
              <div className="font-bold text-2xl text-[#006400] tracking-[-0.96px] font-['Sen',Helvetica]">
                Yalaa Milga
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-[#1a271a] hover:text-[#006400] font-semibold">Profile</a>
            <a href="#" className="text-[#1a271a] hover:text-[#006400] font-semibold flex items-center">
              Saved Scholarships <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="text-[#1a271a] hover:text-[#006400] font-semibold flex items-center">
              Settings <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="text-[#1a271a] hover:text-[#006400] font-semibold flex items-center">
              Logout <ChevronDown className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
