import {
  ChevronDownIcon,
  GridIcon,
  MenuIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardTitle } from "../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export const AdminKpiDashboard = () => {
  // Data for metric cards
  const metricCards = [
    {
      title: "Total registered students",
      value: "12,340",
      change: "+5%",
      isPositive: true,
    },
    {
      title: "Total scholarships posted",
      value: "245",
      change: "+2%",
      isPositive: true,
    },
    {
      title: "Applications submitted",
      value: "9,876",
      change: "+8%",
      isPositive: true,
    },
    {
      title: "Upcoming deadlines",
      value: "15",
      change: "-1%",
      isPositive: false,
    },
  ];

  // Data for horizontal bar chart
  const barChartData = [
    { label: "Label", value: 163 },
    { label: "Label", value: 253 },
    { label: "Label", value: 378 },
    { label: "Label", value: 418 },
    { label: "Label", value: 366 },
    { label: "Label", value: 496 },
  ];

  // Data for vertical bar chart
  const fieldDistributionData = [
    { field: "Business", value: 252 },
    { field: "Engineering", value: 141 },
    { field: "Medicine", value: 74 },
    { field: "Law", value: 46 },
    { field: "Arts", value: 26 },
    { field: "Science", value: 12 },
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Amina",
      image:
        "https://c.animaapp.com/mbhqj0s5GmcEQe/img/a-professional-woman-with-shoulder-length-dark-hair-wearing-a-bu.png",
    },
    {
      name: "Karim",
      image:
        "https://c.animaapp.com/mbhqj0s5GmcEQe/img/a-professional-man-with-short-black-hair-wearing-a-blue-shirt-an.png",
    },
    {
      name: "Team Member 3",
      image:
        "https://c.animaapp.com/mbhqj0s5GmcEQe/img/a-professional-man-with-short-black-hair-and-glasses-sitting-at-.png",
    },
    {
      name: "Team Member 4",
      image:
        "https://c.animaapp.com/mbhqj0s5GmcEQe/img/a-professional-woman-with-shoulder-length-dark-hair-wearing-a-bu-1.png",
    },
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <div className="flex flex-col min-h-[900px] bg-[#f9fff9] w-full">
        {/* Header */}
        <header className="flex items-center justify-between py-3.5 px-12 bg-[#f9fff9] z-[1]">
          <div className="flex items-center gap-8">
            <MenuIcon className="w-6 h-6" />
            <div className="flex h-8 items-center gap-1">
              <div className="font-bold text-[#006400] text-[28px] tracking-[-1.12px] leading-7 whitespace-nowrap [font-family:'Sen',Helvetica]">
                YalaaMilga
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-8">
            <SearchIcon className="w-6 h-6" />
            <GridIcon className="w-6 h-6" />
            <Avatar className="w-10 h-10">
              <AvatarImage
                src="https://c.animaapp.com/mbhqj0s5GmcEQe/img/a-professional-individual-with-short-black-hair-wearing-a-blue-s.png"
                alt="User avatar"
              />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex items-start px-12 py-12 w-full">
          <div className="flex flex-col items-start w-full">
            {/* Dashboard Header */}
            <div className="flex flex-col gap-8 py-8 w-full bg-[#f9fff9] z-[2]">
              {/* Title and Actions */}
              <div className="flex items-start justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <h1 className="font-bold text-[#1a271a] text-[34px] tracking-[-0.68px] leading-10 whitespace-nowrap [font-family:'Public_Sans',Helvetica]">
                      KPI Dashboard
                    </h1>
                    <ChevronDownIcon className="w-6 h-6" />
                  </div>
                  <Badge className="bg-[#247e2417] text-[#1a271a] rounded-2xl border-transparent flex items-center gap-2.5 px-2.5 py-1.5">
                    <div className="w-1.5 h-1.5 bg-[#087b2e] rounded-[3px]" />
                    <span className="font-medium text-[15px]">Active</span>
                  </Badge>
                </div>

                <div className="flex items-start gap-3.5">
                  <Button className="bg-[#006400] text-[#f9fff9] rounded-2xl px-5 py-2.5">
                    Share
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-[#f9fff9] rounded-2xl border-[1.5px] border-[#496e4933] p-2.5"
                      >
                        <MoreHorizontalIcon className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Team Members */}
              <div className="flex items-center gap-3">
                <div className="flex items-start">
                  {teamMembers.map((member, index) => (
                    <Avatar
                      key={index}
                      className={`w-9 h-9 border-2 border-solid border-[#f9fff9] ${index > 0 ? "-ml-1.5" : ""}`}
                      style={{ zIndex: 3 - index }}
                    >
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        className="w-8 h-8 rounded-[999px] border-[1.5px] border-solid border-transparent"
                      />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-normal text-[#132e139e] text-[15px] tracking-[-0.07px] leading-5 whitespace-nowrap [font-family:'Public_Sans',Helvetica]">
                    Amina, Karim
                  </span>
                  <span className="font-normal text-[#132e139e] text-[15px] tracking-[-0.07px] leading-5 whitespace-nowrap [font-family:'Public_Sans',Helvetica]">
                    +12 others
                  </span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="border-b-[1.5px] border-[#496e4933] w-full justify-start bg-transparent p-0">
                  <TabsTrigger
                    value="overview"
                    className="px-8 py-3.5 data-[state=active]:border-b-[1.5px] data-[state=active]:border-[#006400] data-[state=active]:text-[#006400] data-[state=active]:shadow-none rounded-none"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="reports"
                    className="px-8 py-3.5 text-[#132e139e] data-[state=active]:shadow-none rounded-none"
                  >
                    Reports
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="px-8 py-3.5 text-[#132e139e] data-[state=active]:shadow-none rounded-none"
                  >
                    Settings
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Metric Cards */}
            <div className="flex flex-col items-start justify-center gap-8 py-3.5 w-full bg-[#f9fff9] z-[1]">
              <div className="flex flex-col items-start gap-5 w-full">
                <div className="flex items-center gap-8 w-full">
                  {metricCards.map((card, index) => (
                    <Card
                      key={index}
                      className="flex-1 bg-[#247e2417] rounded-[20px] border-[1.5px] border-transparent overflow-hidden"
                    >
                      <CardContent className="flex flex-col items-start gap-5 p-8">
                        <div className="flex items-center justify-between w-full">
                          <CardTitle className="flex-1 mt-[-1.00px] font-bold text-[#1a271a] text-[17px] tracking-[-0.09px] leading-6 [font-family:'Public_Sans',Helvetica]">
                            {card.title}
                          </CardTitle>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 p-0"
                              >
                                <MoreHorizontalIcon className="h-6 w-6" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Export Data</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="flex flex-col items-start gap-1 w-full">
                          <div className="font-bold text-[#1a271a] text-[34px] tracking-[-0.68px] leading-10 [font-family:'Public_Sans',Helvetica]">
                            {card.value}
                          </div>
                          <div className="font-medium text-[#006400] text-[13px] tracking-[0] leading-4 [font-family:'Public_Sans',Helvetica]">
                            {card.change}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="flex flex-col justify-center gap-8 py-3.5 w-full bg-[#f9fff9] z-0">
              <div className="flex flex-col gap-5 w-full">
                <div className="flex h-[400px] items-center gap-8 w-full">
                  {/* Horizontal Bar Chart */}
                  <Card className="flex-1 h-full bg-[#247e2417] rounded-[20px] border-[1.5px] border-transparent overflow-hidden">
                    <CardContent className="flex flex-col items-start gap-10 pt-8 pb-[52px] px-8 h-full">
                      <div className="flex flex-col items-start gap-5 w-full">
                        <div className="flex items-center justify-between w-full">
                          <CardTitle className="flex-1 mt-[-1.00px] font-bold text-[#1a271a] text-[17px] tracking-[-0.09px] leading-6 [font-family:'Public_Sans',Helvetica]">
                            Card title
                          </CardTitle>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 p-0"
                              >
                                <MoreHorizontalIcon className="h-6 w-6" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Export Data</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="flex items-baseline gap-2 w-full">
                          <div className="font-bold text-[#1a271a] text-[34px] tracking-[-0.68px] leading-10 whitespace-nowrap [font-family:'Public_Sans',Helvetica]">
                            12.4k
                          </div>
                          <div className="flex-1 font-medium text-[#006400] text-[13px] tracking-[0] leading-4 [font-family:'Public_Sans',Helvetica]">
                            +10.7% last mo
                          </div>
                        </div>
                      </div>

                      <div className="relative flex-1 w-full">
                        <div className="relative w-[495px] h-[220px] left-24">
                          <div className="flex flex-col w-[495px] h-48 items-start absolute top-0 left-0">
                            {barChartData.map((item, index) => (
                              <div
                                key={index}
                                className="relative flex-1 self-stretch w-full grow"
                              >
                                <div
                                  className="absolute h-[23px] top-[5px] left-0 bg-[#006400]"
                                  style={{ width: `${item.value}px` }}
                                />
                                <div className="top-2 absolute w-20 -left-24 font-normal text-[#132e139e] text-[13px] text-right tracking-[-0.07px] leading-4 [font-family:'Public_Sans',Helvetica]">
                                  {item.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="w-[495px] h-[220px] flex items-start justify-between absolute top-0 left-0">
                            {[0, 100, 200, 300, 400].map((value, index) => (
                              <div
                                key={index}
                                className="flex flex-col w-4 items-center justify-center gap-2 relative self-stretch"
                              >
                                <Separator
                                  orientation="vertical"
                                  className="self-stretch w-full flex-1 grow"
                                />
                                <div className="relative w-10 ml-[-12.00px] mr-[-12.00px] font-normal text-[#132e139e] text-[13px] text-center tracking-[-0.07px] leading-4 [font-family:'Public_Sans',Helvetica]">
                                  {value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Vertical Bar Chart */}
                  <Card className="flex-1 h-full bg-[#247e2417] rounded-[20px] border-[1.5px] border-transparent overflow-hidden">
                    <CardContent className="flex flex-col items-start gap-10 pt-8 pb-[52px] px-8 h-full">
                      <div className="flex flex-col items-start gap-5 w-full">
                        <div className="flex items-center justify-between w-full">
                          <CardTitle className="flex-1 mt-[-1.00px] font-bold text-[#1a271a] text-[17px] tracking-[-0.09px] leading-6 [font-family:'Public_Sans',Helvetica]">
                            Student Distribution by Field
                          </CardTitle>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 p-0"
                              >
                                <MoreHorizontalIcon className="h-6 w-6" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Export Data</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>

                      <div className="relative flex-1 w-full">
                        <div className="relative w-[592px] h-[252px]">
                          <div className="flex-col w-[592px] h-[252px] flex items-start justify-between absolute top-0 left-0">
                            {[...Array(5)].map((_, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 w-full"
                              >
                                <div className="w-10 mt-[-1.00px] font-normal text-[#132e139e] text-[13px] text-right tracking-[-0.07px] leading-4 [font-family:'Public_Sans',Helvetica]">
                                  N/A
                                </div>
                                <Separator className="h-[1.5px] flex-1" />
                              </div>
                            ))}
                          </div>

                          <div className="flex w-[543px] h-[252px] items-end absolute top-0 left-12">
                            {fieldDistributionData.map((field, index) => (
                              <div
                                key={index}
                                className="relative flex-1 self-stretch grow"
                              >
                                <div
                                  className="absolute w-[45px] top-0 left-[23px] bg-[#006400]"
                                  style={{
                                    height: `${field.value}px`,
                                    top: `${252 - field.value}px`,
                                  }}
                                />
                                <div className="absolute w-[91px] top-[259px] left-0 font-normal text-[#132e139e] text-[13px] text-center tracking-[-0.07px] leading-4 [font-family:'Public_Sans',Helvetica]">
                                  {field.field}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
