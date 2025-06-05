import React, { useState, useEffect } from "react";
import { LatestNotificationsSection } from "./sections/LatestNotificationsSection/LatestNotificationsSection";
import { QuickActionsSection } from "./sections/QuickActionsSection/QuickActionsSection";
import { ScholarshipHighlightsSection } from "./sections/ScholarshipHighlightsSection/ScholarshipHighlightsSection";
import { StudentGreetingSection } from "./sections/StudentGreetingSection/StudentGreetingSection";
import { WelcomeBannerSection } from "./sections/WelcomeBannerSection/WelcomeBannerSection";
import { Navbar } from "../../components/Navbar/Navbar";

export const DashboardPage = () => {
  const [studentName, setStudentName] = useState("Loading...");

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      setStudentName("John Doe");
    }, 1000);
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-[#f9fff9] min-w-[1200px]">
      <Navbar />

      {/* Spacer to account for fixed navbar */}
      <div className="h-16 w-full bg-[#f9fff9]" />

      {/* Main content container */}
      <div className="px-12 pt-4 pb-12 w-full flex-grow">
        <div className="flex flex-col w-full max-w-7xl mx-auto">
          {/* Hero section with welcome message */}
          <div className="relative w-full mb-16">
            <div className="flex flex-col w-full items-center pt-24 pb-16 
              [background:radial-gradient(50%_50%_at_50%_-2%,rgba(250,255,250,0.7)_31%,rgba(0,173,0,0.11)_100%),linear-gradient(0deg,rgba(250,255,250,1)_0%,rgba(250,255,250,1)_100%)]">
              <h1 className="w-full mt-[-1.00px] font-bold text-[#1a271a] text-8xl text-center tracking-[-2.40px] leading-tight font-['Plus_Jakarta_Sans',Helvetica]">
                Welcome, {studentName}!
              </h1>
            </div>
          </div>

          {/* Dashboard sections */}
          <div className="space-y-16">
            <WelcomeBannerSection />
            <ScholarshipHighlightsSection />
            <QuickActionsSection />
            <StudentGreetingSection />
            <LatestNotificationsSection />
          </div>
        </div>
      </div>
    </main>
  );
};
