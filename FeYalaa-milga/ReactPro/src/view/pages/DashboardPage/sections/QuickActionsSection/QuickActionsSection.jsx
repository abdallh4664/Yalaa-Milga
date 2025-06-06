import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const QuickActionsSection = () => {
  // Scholarship data for mapping
  const scholarships = [
    {
      title: "Science Excellence",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-student-in-a-lab-coat-conducting-an-experiment-with-colorful-l.png",
    },
    {
      title: "Arts Innovation",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-colorful-artist-s-workspace-filled-with-paintbrushes--canvases.png",
    },
    {
      title: "Tech Pioneers",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-young-woman-with-glasses-focused-on-a-laptop-in-a-bright--mode.png",
    },
    {
      title: "Global Leaders",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-diverse-group-of-individuals-engaged-in-a-collaborative-discus.png",
    },
    {
      title: "Community Stars",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-group-of-individuals-smiling-and-working-together-on-a-communi.png",
    },
    {
      title: "Entrepreneurial Spirit",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-young-entrepreneur-brainstorming-ideas-in-a-modern-office-spac.png",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-6 py-12 w-full bg-[#f9fff9]">
      <h2 className="text-5xl tracking-[-0.96px] leading-[52px] font-bold text-[#1a271a] [font-family:'Plus_Jakarta_Sans',Helvetica]">
        Scholarship Highlights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {scholarships.map((scholarship, index) => (
          <Card
            key={index}
            className="border-[1.5px] border-transparent rounded-[20px] bg-[#247e2417] overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <CardContent className="p-0">
              <div className="flex flex-col items-center">
                <h3 className="py-4 px-4 w-full text-xl font-bold text-[#1a271a] text-center tracking-[-0.40px] leading-6 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  {scholarship.title}
                </h3>
                <div className="w-full h-[221px] overflow-hidden">
                  <div
                    className="h-[285px] w-full bg-cover bg-center transition-transform duration-300 hover:scale-110"
                    style={{ backgroundImage: `url(${scholarship.image})` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
