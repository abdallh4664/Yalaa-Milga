import {
  ChevronDownIcon,
  ChevronRightIcon,
  GridIcon,
  MenuIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Separator } from "../../components/ui/separator";

export const ScholarshipList = () => {
  // Category filter data
  const categories = [
    { id: "undergraduate", label: "Undergraduate" },
    { id: "postgraduate", label: "Postgraduate" },
    { id: "phd", label: "PhD" },
    { id: "shortcourses", label: "Short Courses" },
  ];

  // Filter options data
  const filterOptions = [
    { id: "field", label: "Field" },
    { id: "country", label: "Country" },
    { id: "amount", label: "Amount" },
    { id: "type", label: "Type" },
    { id: "deadline", label: "Deadline" },
  ];

  // Scholarship data
  const scholarships = [
    {
      id: 1,
      name: "Rhodes Scholarship",
      description:
        "A prestigious scholarship for postgraduate study at the University of Oxford.",
      image:
        "https://c.animaapp.com/mbhpnvuwGJdN75/img/a-historic-building-at-the-university-of-oxford-with-intricate-a.png",
    },
    {
      id: 2,
      name: "Fulbright Program",
      description:
        "Provides grants for individually designed study/research projects.",
      image:
        "https://c.animaapp.com/mbhpnvuwGJdN75/img/a-student-sitting-at-a-desk-surrounded-by-books-and-a-laptop--de.png",
    },
    {
      id: 3,
      name: "Chevening Scholarship",
      description:
        "Offers fully-funded scholarships to undertake any master's course at any UK university.",
      image:
        "https://c.animaapp.com/mbhpnvuwGJdN75/img/a-student-sitting-at-a-desk-in-a-university-library--studying-wi.png",
    },
    {
      id: 4,
      name: "Erasmus Mundus Joint Master Degrees",
      description:
        "High-level integrated international study programmes delivered by consortia of higher education institutions.",
      image:
        "https://c.animaapp.com/mbhpnvuwGJdN75/img/a-diverse-group-of-students-collaborating-on-a-project-in-a-mode.png",
    },
    {
      id: 5,
      name: "DAAD Scholarship",
      description:
        "The German Academic Exchange Service (DAAD) provides scholarships for international students.",
      image:
        "https://c.animaapp.com/mbhpnvuwGJdN75/img/a-group-of-international-students-studying-together-on-a-univers.png",
    },
    {
      id: 6,
      name: "Gates Cambridge Scholarship",
      description:
        "Full-cost scholarships for outstanding applicants from countries outside the UK to pursue a full-time postgraduate degree in any subject available at the University of Cambridge.",
      image:
        "https://c.animaapp.com/mbhpnvuwGJdN75/img/a-student-studying-in-a-historic-library-at-a-prestigious-univer.png",
    },
  ];

  // Pagination data
  const paginationItems = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex h-16 items-center justify-between px-6 bg-[#f9fff9] border-b border-[#e0e0e0]">
        <div className="flex items-center gap-6">
          <MenuIcon className="w-6 h-6 text-[#1a271a]" />
          <div className="flex h-8 items-center gap-1">
            <div className="relative w-8 h-8">
              <img
                className="absolute w-[27px] h-[27px] top-[3px] left-[3px]"
                alt="Union"
                src="https://c.animaapp.com/mbhpnvuwGJdN75/img/union.svg"
              />
            </div>
            <div className="font-bold text-[#006400] text-2xl tracking-[-0.96px] leading-6 whitespace-nowrap font-['Sen',Helvetica]">
              Yalaa Milga
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <SearchIcon className="w-6 h-6 text-[#1a271a]" />
          <GridIcon className="w-6 h-6 text-[#1a271a]" />
          <div
            className="w-10 h-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://c.animaapp.com/mbhpnvuwGJdN75/img/a-young-adult-with-short-black-hair-smiling-warmly-while-wearing.png)",
            }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-[#f9fff9] border-r border-[#e0e0e0]">
          <div className="flex flex-col items-start gap-6 p-6">
            <div className="flex flex-col items-start gap-4 w-full">
              <h3 className="font-medium text-[#1a271a] text-[15px] leading-5">
                Filter by Category
              </h3>

              <div className="flex flex-col w-full gap-2">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center gap-2 w-full"
                  >
                    <Checkbox
                      id={category.id}
                      className="w-6 h-6 rounded-sm border-[#1a271a]"
                    />
                    <label
                      htmlFor={category.id}
                      className="flex-1 font-normal text-[#1a271a] text-[15px] tracking-[-0.07px] leading-5"
                    >
                      {category.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <Separator className="w-full bg-[#e0e0e0]" />
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 bg-[#f9fff9] p-6 flex flex-col gap-8">
          {/* Title and Filters */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-xl tracking-[-0.50px] leading-6 text-[#1a271a] font-normal">
              Available Scholarships
            </h2>

            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-3">
                {filterOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    className="flex items-center gap-2 pl-4 pr-3 py-2 bg-[#f9fff9] rounded-lg border-[1.5px] border-[#496e4933] h-auto"
                  >
                    <span className="font-medium text-[#1a271a] text-[15px] leading-5">
                      {option.label}
                    </span>
                    <ChevronDownIcon className="w-4 h-4 text-[#1a271a]" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Scholarship Cards */}
          <div className="flex flex-col gap-4 w-full">
            {scholarships.map((scholarship) => (
              <Card
                key={scholarship.id}
                className="flex items-center bg-[#247e2417] rounded-lg overflow-hidden border-[1.5px] border-transparent"
              >
                <div
                  className="relative self-stretch w-[168px] h-auto border-[1.5px] border-transparent bg-cover bg-center"
                  style={{ backgroundImage: `url(${scholarship.image})` }}
                />
                <CardContent className="flex flex-col justify-around gap-8 p-4 flex-1">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[17px] tracking-[-0.09px] leading-6 text-[#1a271a] font-normal">
                      {scholarship.name}
                    </h3>
                    <p className="text-[15px] tracking-[-0.07px] leading-5 text-[#1a271a] font-normal">
                      {scholarship.description}
                    </p>
                  </div>
                  <div className="flex items-end w-full">
                    <Button className="bg-[#006400] text-[#f9fff9] hover:bg-[#005000]">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center">
            {paginationItems.map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "ghost"}
                className={`p-2 rounded-lg ${
                  page === 1
                    ? "bg-[#006400] text-[#f9fff9]"
                    : "text-[#132e139e]"
                }`}
              >
                <span className="w-5 text-center font-medium text-[15px] leading-5">
                  {page}
                </span>
              </Button>
            ))}
            <Button variant="ghost" className="p-2 rounded-lg">
              <ChevronRightIcon className="w-5 h-5 text-[#1a271a]" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="h-12 bg-[#f9fff9] border-t border-[#e0e0e0]" />
    </div>
  );
};
