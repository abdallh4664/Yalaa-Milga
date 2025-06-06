import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WelcomeBannerSection = () => {
  return (
    <div className="flex items-center py-6 w-full">
      <Card className="flex items-center w-full rounded-[28px] border border-transparent bg-gradient-to-b from-[rgba(37,126,37,0.06)] to-[rgba(39,134,39,0.11)]">
        <div className="relative w-[560px] h-[180px] overflow-hidden">
          <div className="relative w-[720px] h-[720px] -left-40 bg-[url(https://c.animaapp.com/mbhpqda7dSDBGE/img/an-artist-painting-on-a-canvas-in-a-bright-studio-filled-with-ar.png)] bg-cover bg-center" />
        </div>

        <CardContent className="flex flex-col items-start gap-4 flex-1 py-6 pr-16">
          <h2 className="font-['Domine',Helvetica] font-bold text-black text-5xl tracking-[-0.48px] leading-[52px]">
            Tech Pioneers Scholarship
          </h2>

          <p className="text-black font-['Plus_Jakarta_Sans',Helvetica] font-normal text-2xl tracking-[-0.12px] leading-8">
            This scholarship supports pioneering students in technology. It
            offers $5,000 in funding and the deadline to apply is Jan 10, 2025.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
