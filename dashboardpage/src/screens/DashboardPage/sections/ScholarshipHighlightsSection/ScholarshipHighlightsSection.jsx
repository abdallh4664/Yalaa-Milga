import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ScholarshipHighlightsSection = () => {
  const scholarshipData = {
    title: "Science Excellence Scholarship",
    description:
      "This scholarship is designed to support students pursuing excellence in science. It offers $5,000 in funding and the deadline to apply is Jan 10, 2025.",
    imageUrl:
      "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-student-wearing-safety-goggles-and-a-lab-coat-mixing-colorful-.png",
  };

  return (
    <section className="py-6 w-full z-[3]">
      <Card className="flex items-center rounded-[28px] overflow-hidden border border-solid border-transparent [background:linear-gradient(178deg,rgba(37,126,37,0.06)_26%,rgba(39,134,39,0.11)_100%)] transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
        <div className="relative w-[560px] h-[560px] overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-300 hover:scale-110"
            style={{ backgroundImage: `url(${scholarshipData.imageUrl})` }}
          />
        </div>

        <CardContent className="flex flex-col items-start gap-4 py-6 pr-16 pl-8 flex-1">
          <h2 className="self-stretch mt-[-1.00px] font-['Domine',Helvetica] font-bold text-[#1a271a] text-5xl tracking-[-0.48px] leading-[52px]">
            {scholarshipData.title}
          </h2>

          <p className="text-[#1a271a] self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-normal text-2xl tracking-[-0.12px] leading-8">
            {scholarshipData.description}
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
