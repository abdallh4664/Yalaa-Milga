import { CheckIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

export const ScholarshipDetail = () => {
  // Scholarship description points
  const descriptionPoints = [
    "The Yalaa Milga Scholarship is designed to support students pursuing higher education in various fields of study.",
    "This scholarship covers tuition fees, living expenses, and provides mentorship opportunities.",
    "Students from all backgrounds are encouraged to apply.",
  ];

  // Eligibility criteria
  const eligibilityCriteria = [
    "Must be enrolled in an accredited university",
    "Minimum GPA of 3.0",
    "Demonstrated financial need",
    "Commitment to community service",
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f9fff9]">
      {/* Navigation Bar */}
      <header className="flex items-center justify-between px-12 py-5 w-full bg-[#f9fff9]">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1">
            <div className="relative w-8 h-8">
              <img
                className="absolute w-[27px] h-[27px] top-[3px] left-[3px]"
                alt="Union"
                src="https://c.animaapp.com/mbhpkpamOcBmdv/img/union.svg"
              />
            </div>
            <div className="w-fit [font-family:'Sen',Helvetica] text-[#006400] text-2xl leading-6 whitespace-nowrap font-bold tracking-[-0.96px]">
              Yalaa Milga
            </div>
          </div>
        </div>

        <nav className="flex items-start gap-10">
          <div className="[font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-[28px] tracking-[-0.56px] leading-8">
            Home
          </div>
          <div className="[font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-[28px] tracking-[-0.56px] leading-8">
            About
          </div>
          <div className="[font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-[28px] tracking-[-0.56px] leading-8">
            Scholarships
          </div>
          <div className="[font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-[28px] tracking-[-0.56px] leading-8">
            Contact
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col px-12 py-12 w-full">
        {/* Scholarship Header */}
        <section className="flex flex-col items-start gap-8 py-8 w-full">
          <div className="[font-family:'Public_Sans',Helvetica] font-medium text-[#006400] text-[15px] leading-5">
            Scholarship, Education, Funding
          </div>

          <h1 className="self-stretch [font-family:'Public_Sans',Helvetica] text-[#1a271a] text-5xl leading-[52px] font-bold tracking-[-0.96px]">
            Yalaa Milga Scholarship
          </h1>

          <div className="[font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-xl tracking-[-0.10px] leading-6">
            Provided by Yalaa Foundation
          </div>

          {/* Scholarship Image and Details */}
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center py-8 w-full">
              <div
                className="w-full h-[549px] rounded-2xl border-[1.5px] border-solid border-transparent bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://c.animaapp.com/mbhpkpamOcBmdv/img/a-student-sitting-at-a-desk-surrounded-by-books-and-a-laptop--st.png)",
                }}
              />
              <div className="self-stretch text-[#132e139e] text-[13px] tracking-[-0.07px] leading-4 [font-family:'Public_Sans',Helvetica] font-normal mt-2.5">
                Scholarship details
              </div>
            </div>

            <div className="flex flex-col gap-5 w-full">
              <div className="[font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-[15px] tracking-[-0.07px] leading-5">
                Deadline: December 31, 2023
              </div>

              <div className="flex items-center gap-3 w-full">
                <Avatar className="w-9 h-9">
                  <AvatarImage
                    src="https://c.animaapp.com/mbhpkpamOcBmdv/img/a-professional-woman-with-shoulder-length-dark-hair-wearing-a-bl.png"
                    alt="Dr. Aaliyah Novak"
                  />
                  <AvatarFallback>AN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="[font-family:'Public_Sans',Helvetica] font-bold text-[#1a271a] text-[13px] tracking-[-0.07px] leading-4">
                    Dr. Aaliyah Novak
                  </div>
                  <div className="text-[#132e139e] text-[13px] tracking-[-0.07px] leading-4 [font-family:'Public_Sans',Helvetica] font-normal">
                    Scholarship Coordinator
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarship Description */}
        <section className="flex flex-col gap-3.5 py-8 w-full">
          <h2 className="[font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-[28px] tracking-[-0.56px] leading-8">
            Scholarship Description
          </h2>

          {descriptionPoints.map((point, index) => (
            <div key={index} className="flex items-baseline gap-2.5 w-full">
              <div className="w-8 [font-family:'Public_Sans',Helvetica] font-bold text-[#1a271a] text-[17px] text-right tracking-[-0.09px] leading-6">
                {index + 1}.
              </div>
              <div className="flex-1 [font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-[17px] tracking-[-0.09px] leading-7">
                {point}
              </div>
            </div>
          ))}
        </section>

        {/* Eligibility Criteria */}
        <section className="flex flex-col gap-3.5 py-8 w-full">
          <h2 className="[font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-[28px] tracking-[-0.56px] leading-8">
            Eligibility Criteria
          </h2>

          {eligibilityCriteria.map((criterion, index) => (
            <div key={index} className="flex items-center gap-2.5 w-full">
              <CheckIcon className="w-6 h-6 text-[#1a271a]" />
              <div className="flex-1 [font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-[17px] tracking-[-0.09px] leading-7">
                {criterion}
              </div>
            </div>
          ))}
        </section>

        {/* Funding Details */}
        <section className="flex items-start gap-24 py-24 w-full">
          <div className="flex items-start gap-24 py-[52px] flex-1">
            <h2 className="flex-1 [font-family:'Public_Sans',Helvetica] font-bold text-[#1a271a] text-5xl tracking-[-0.96px] leading-[52px]">
              Funding Details
            </h2>
            <div className="flex-1 pt-2.5">
              <div className="[font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-2xl tracking-[-0.12px] leading-8">
                Scholarship funding amount: $10,000
              </div>
            </div>
          </div>
        </section>

        <Separator className="w-full" />

        {/* Field of Study */}
        <section className="flex items-start gap-24 py-24 w-full">
          <div className="flex items-start gap-24 py-[52px] flex-1">
            <h2 className="flex-1 [font-family:'Public_Sans',Helvetica] font-bold text-[#1a271a] text-5xl tracking-[-0.96px] leading-[52px]">
              Field of Study
            </h2>
            <div className="flex-1 pt-2.5">
              <div className="[font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-2xl tracking-[-0.12px] leading-8">
                Related field of study: Engineering, Science, Arts
              </div>
            </div>
          </div>
        </section>

        <Separator className="w-full" />

        {/* Apply Now Section */}
        <section className="flex flex-col items-start gap-[52px] py-[52px] w-full">
          <div className="flex flex-col items-center gap-[52px] w-full">
            <div className="flex flex-col items-start gap-5 w-full max-w-[1260px]">
              <h2 className="self-stretch [font-family:'Public_Sans',Helvetica] font-bold text-[#1a271a] text-[64px] text-center tracking-[-1.28px] leading-[68px]">
                Apply Now
              </h2>
              <p className="self-stretch [font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-2xl text-center tracking-[-0.12px] leading-8">
                Apply for the scholarship before the deadline to secure your
                chance at receiving financial support for your education.
              </p>
            </div>

            <Button className="px-8 py-3.5 bg-[#006400] rounded-2xl">
              <span className="[font-family:'Public_Sans',Helvetica] font-medium text-[#f9fff9] text-xl leading-6">
                Apply
              </span>
            </Button>
          </div>

          <div
            className="w-full h-[756px] rounded-[20px] border-[1.5px] border-solid border-transparent bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://c.animaapp.com/mbhpkpamOcBmdv/img/a-student-sitting-at-a-desk-with-a-laptop-open--reviewing-applic.png)",
            }}
          />
        </section>

        <Separator className="w-full" />

        {/* Save for Later Section */}
        <section className="flex flex-col items-start gap-[52px] py-[52px] w-full">
          <div className="flex flex-col items-center gap-[52px] w-full">
            <div className="flex flex-col items-start gap-5 w-full max-w-[1260px]">
              <h2 className="self-stretch [font-family:'Public_Sans',Helvetica] font-bold text-[#1a271a] text-[64px] text-center tracking-[-1.28px] leading-[68px]">
                Save for Later
              </h2>
              <p className="self-stretch [font-family:'Public_Sans',Helvetica] font-normal text-[#1a271a] text-2xl text-center tracking-[-0.12px] leading-8">
                Save this scholarship to your profile for easy access and
                updates.
              </p>
            </div>

            <Button className="px-8 py-3.5 bg-[#006400] rounded-2xl">
              <span className="[font-family:'Public_Sans',Helvetica] font-medium text-[#f9fff9] text-xl leading-6">
                Save
              </span>
            </Button>
          </div>

          <div
            className="w-full h-[756px] rounded-[20px] border-[1.5px] border-solid border-transparent bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://c.animaapp.com/mbhpkpamOcBmdv/img/a-young-woman-sitting-at-a-desk--using-a-laptop-to-save-scholars.png)",
            }}
          />
        </section>
      </main>

      {/* Footer Spacer */}
      <div className="w-full h-12 bg-[#f9fff9]" />
    </div>
  );
};
