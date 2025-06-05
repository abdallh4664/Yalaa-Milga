import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const StudentGreetingSection = () => {
  return (
    <section className="w-full py-6 bg-[#f9fff9]">
      <Card className="border-0 bg-transparent">
        <CardContent className="flex flex-col md:flex-row justify-between gap-6 p-0">
          <h2 className="font-bold text-4xl md:text-5xl text-[#1a271a] tracking-[-0.96px] leading-[52px] font-['Plus_Jakarta_Sans',Helvetica]">
            Quick Actions
          </h2>

          <div className="md:max-w-[60%]">
            <p className="text-xl md:text-2xl text-[#1a271a] leading-8 font-['Plus_Jakarta_Sans',Helvetica]">
              Browse All Scholarships, Saved Scholarships, Notifications, My
              Profile
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
