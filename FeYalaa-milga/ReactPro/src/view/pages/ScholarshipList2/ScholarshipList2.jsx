import { ChevronDownIcon, MoreHorizontalIcon, StarIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "../../components/ui/pagination";

export const ScholarshipList = () => {
  // Scholarship data
  const scholarships = [
    {
      id: 1,
      title: "International Excellence Scholarship",
      amount: "$5000",
      image:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-group-of-students-collaborating-on-a-project-at-a-table-filled.png",
    },
    {
      id: 2,
      title: "STEM Scholarship",
      amount: "$3000",
      image:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-student-wearing-safety-goggles-and-a-lab-coat-conducting-an-ex.png",
    },
    {
      id: 3,
      title: "Community Leadership Award",
      amount: "$2000",
      image:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-group-of-individuals-working-together-to-plant-trees-in-a-comm.png",
    },
  ];

  // Notification data
  const notifications = [
    {
      id: 1,
      name: "Mariam Al-Badry",
      username: "@mariam",
      avatar:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-young-woman-with-long-dark-hair-and-a-warm-smile-wearing-a-cas.png",
    },
    {
      id: 2,
      name: "Ahmed El-Sayed",
      username: "@ahmed",
      avatar:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-young-man-with-short-black-hair-and-a-friendly-smile-wearing-a.png",
    },
    {
      id: 3,
      name: "Fatima Hassan",
      username: "@fatima",
      avatar:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-young-woman-with-long-dark-hair-and-a-warm-smile-looking-direc.png",
    },
    {
      id: 4,
      name: "Omar Khaled",
      username: "@omar",
      avatar:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-young-man-with-short-black-hair-and-a-friendly-smile-wearing-a-1.png",
    },
    {
      id: 5,
      name: "Layla Saeed",
      username: "@layla",
      avatar:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-young-woman-with-long-dark-hair-and-a-friendly-smile-sitting-a.png",
    },
    {
      id: 6,
      name: "Youssef Nabil",
      username: "@youssef",
      avatar:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-young-male-student-with-short-black-hair-wearing-glasses--sitt.png",
    },
    {
      id: 7,
      name: "Sara Mahmoud",
      username: "@sara",
      avatar:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-young-woman-with-long-dark-hair-and-a-warm-smile-wearing-a-cas-1.png",
    },
  ];

  // Avatar group data
  const avatarGroup = [
    {
      id: 1,
      image:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-young-student-with-short-black-hair-smiling-while-sitting-at-a.png",
    },
    {
      id: 2,
      image:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-young-student-with-short-black-hair-smiling-while-sitting-at-a-1.png",
    },
    {
      id: 3,
      image:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-young-student-with-short-black-hair-wearing-glasses-and-a-casu.png",
    },
    {
      id: 4,
      image:
        "https://c.animaapp.com/mbhq8i1nC6xZXy/img/a-young-student-with-short-black-hair-smiling-while-sitting-at-a-2.png",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-white w-full">
      <div className="flex flex-col w-full max-w-[1440px] items-start px-12 py-0 bg-white">
        {/* Header */}
        <header className="flex items-center justify-between py-4 relative self-stretch w-full z-[2] bg-white">
          <div className="flex items-center gap-12">
            <div className="flex h-8 items-center gap-1">
              <div className="relative w-8 h-8">
                <img
                  className="absolute w-[27px] h-[27px] top-[3px] left-[3px]"
                  alt="Union"
                  src="https://c.animaapp.com/mbhq8i1nC6xZXy/img/union.svg"
                />
              </div>
              <div className="[font-family:'DotGothic16',Helvetica] font-normal text-[#204f0a] text-2xl tracking-[-0.96px] leading-6 whitespace-nowrap">
                Yalaa Milga
              </div>
            </div>

            <nav className="flex items-start gap-8">
              <div className="flex items-center gap-1">
                <div className="[font-family:'Archivo_Narrow',Helvetica] font-medium text-black text-[15px] leading-5 whitespace-nowrap">
                  Profile
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div className="[font-family:'Archivo_Narrow',Helvetica] font-medium text-black text-[15px] leading-5 whitespace-nowrap">
                  Saved Scholarships
                </div>
                <ChevronDownIcon className="w-4 h-4" />
              </div>

              <div className="flex items-center gap-1">
                <div className="[font-family:'Archivo_Narrow',Helvetica] font-medium text-black text-[15px] leading-5 whitespace-nowrap">
                  Settings
                </div>
                <ChevronDownIcon className="w-4 h-4" />
              </div>

              <div className="flex items-center gap-1">
                <div className="[font-family:'Archivo_Narrow',Helvetica] font-medium text-black text-[15px] leading-5 whitespace-nowrap">
                  Logout
                </div>
                <ChevronDownIcon className="w-4 h-4" />
              </div>
            </nav>
          </div>

          <img
            className="absolute w-full h-px top-16 -left-0 object-cover"
            alt="Divider"
            src="https://c.animaapp.com/mbhq8i1nC6xZXy/img/divider.svg"
          />
        </header>

        <div className="h-12 w-full bg-white" />

        <main className="flex items-start py-12 self-stretch w-full relative">
          <div className="flex flex-col items-start w-full">
            {/* Welcome Section */}
            <section className="flex flex-col items-start gap-6 py-6 w-full bg-white z-[2]">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="[font-family:'DotGothic16',Helvetica] font-normal text-black text-[34px] tracking-[-0.34px] leading-10 whitespace-nowrap">
                      Welcome to Yalaa Milga
                    </div>
                    <StarIcon className="w-6 h-6" />
                  </div>

                  <Badge className="flex items-center gap-2 px-2 py-1 bg-white border border-black rounded-none">
                    <div className="w-1.5 h-1.5 bg-[#0cc349] rounded-[3px]" />
                    <span className="[font-family:'Archivo_Narrow',Helvetica] font-medium text-black text-[15px] text-center leading-5">
                      Active
                    </span>
                  </Badge>
                </div>

                <div className="flex items-start gap-3">
                  <Button className="px-4 py-2 bg-[#204f0a] rounded-none hover:bg-[#2a6a0e]">
                    <span className="[font-family:'Archivo_Narrow',Helvetica] font-medium text-white text-[15px] leading-5">
                      Share
                    </span>
                  </Button>

                  <Button
                    variant="outline"
                    className="p-2 bg-white border border-black rounded-none hover:bg-gray-100"
                  >
                    <MoreHorizontalIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-start">
                  {avatarGroup.map((avatar, index) => (
                    <Avatar
                      key={avatar.id}
                      className={`w-9 h-9 ${index > 0 ? "-ml-1.5" : ""} z-[${3 - index}] rounded-full border-2 border-white`}
                    >
                      <AvatarImage
                        src={avatar.image}
                        className="w-8 h-8 rounded-full border border-transparent"
                      />
                    </Avatar>
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <div className="[font-family:'Archivo',Helvetica] font-normal text-black text-[15px] leading-5 whitespace-nowrap">
                    {""}
                  </div>
                  <div className="[font-family:'Archivo',Helvetica] font-normal text-black text-[15px] leading-5 whitespace-nowrap">
                    +12 others
                  </div>
                </div>
              </div>
            </section>

            {/* Scholarships Section */}
            <section className="flex flex-col items-start pt-0 pb-12 w-full bg-white z-[1]">
              <div className="flex flex-col items-start justify-center gap-6 py-6 w-full bg-white z-[2]">
                <div className="flex items-baseline gap-2 w-full">
                  <h2 className="[font-family:'DotGothic16',Helvetica] font-normal text-black text-xl leading-6 whitespace-nowrap">
                    Top Scholarships
                  </h2>
                </div>
              </div>

              <div className="flex flex-col items-start gap-12 w-full">
                <div className="flex items-start gap-6 w-full">
                  {scholarships.map((scholarship) => (
                    <Card
                      key={scholarship.id}
                      className="flex flex-col items-start gap-3 flex-1 border-none"
                    >
                      <CardContent className="p-0 w-full">
                        <div
                          className="w-full h-[432px] border border-transparent bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${scholarship.image})`,
                          }}
                        />

                        <div className="flex flex-col items-start mt-3 w-full">
                          <div className="[font-family:'Archivo',Helvetica] font-extrabold text-black text-[15px] leading-5 w-full">
                            {scholarship.title}
                          </div>
                          <div className="[font-family:'Archivo',Helvetica] font-normal text-black text-[15px] leading-5 w-full">
                            {scholarship.amount}
                          </div>
                        </div>

                        <div className="flex h-8 items-center gap-3 mt-3">
                          <div className="relative w-8 h-6">
                            <div className="relative w-[30px] h-[30px] top-[-3px] left-px rounded-[15px]">
                              <div className="absolute w-6 h-6 top-[3px] left-[3px] bg-[#557a12] rounded-xl border border-solid border-black" />
                              <div className="absolute w-[30px] h-[30px] top-0 left-0 rounded-[15px] border border-solid border-[#48670f]" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Pagination className="flex items-start justify-end pt-16 pb-0 w-full">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink className="p-2 bg-[#204f0a] text-white [font-family:'Archivo_Narrow',Helvetica] font-medium text-[15px] text-center w-5 h-9 rounded-none">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className="p-2 text-black [font-family:'Archivo_Narrow',Helvetica] font-medium text-[15px] text-center w-5 h-9 rounded-none">
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className="p-2 text-black [font-family:'Archivo_Narrow',Helvetica] font-medium text-[15px] text-center w-5 h-9 rounded-none">
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className="p-2 text-black [font-family:'Archivo_Narrow',Helvetica] font-medium text-[15px] text-center w-5 h-9 rounded-none">
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className="p-2 text-black [font-family:'Archivo_Narrow',Helvetica] font-medium text-[15px] text-center w-5 h-9 rounded-none">
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext className="p-2 bg-white rounded-none" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </section>

            {/* Notifications Section */}
            <section className="flex flex-col items-start gap-2 py-6 w-full bg-white z-0">
              <h2 className="[font-family:'DotGothic16',Helvetica] font-normal text-black text-xl leading-6 w-full">
                Notifications
              </h2>

              <div className="flex flex-col items-start w-full">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-center justify-between py-2 w-full bg-white"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <Avatar className="w-10 h-10 rounded-full">
                        <AvatarImage
                          src={notification.avatar}
                          className="bg-cover"
                        />
                      </Avatar>
                      <div className="flex flex-col items-start flex-1 self-stretch">
                        <div className="[font-family:'Archivo',Helvetica] font-extrabold text-black text-[15px] leading-5 w-full">
                          {notification.name}
                        </div>
                        <div className="[font-family:'Archivo',Helvetica] font-normal text-black text-[13px] leading-4 w-full">
                          {notification.username}
                        </div>
                      </div>
                    </div>
                    <Button className="px-4 py-2 bg-[#204f0a] rounded-none hover:bg-[#2a6a0e]">
                      <span className="[font-family:'Archivo_Narrow',Helvetica] font-medium text-white text-[15px] leading-5 whitespace-nowrap">
                        View
                      </span>
                    </Button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};
