import {
  ChevronDownIcon,
  LayoutGridIcon,
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
import { Card, CardContent } from "../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

export const AdminMainDashboard = () => {
  // Scholarship data
  const scholarships = [
    { title: "STEM Excellence Award", deadline: "2023-12-01", status: "Open" },
    { title: "Art Innovators Grant", deadline: "2023-11-15", status: "Closed" },
    {
      title: "Global Leaders Fellowship",
      deadline: "2023-12-20",
      status: "Open",
    },
    {
      title: "Tech Pioneers Scholarship",
      deadline: "2023-11-30",
      status: "Open",
    },
    {
      title: "Health Sciences Grant",
      deadline: "2023-12-10",
      status: "Closed",
    },
  ];

  // Student data
  const students = [
    {
      name: "Elara Nyx",
      email: "elara.nyx@example.com",
      field: "Physics",
      status: "Active",
      statusColor: "bg-[#087b2e]",
    },
    {
      name: "Orion Vega",
      email: "orion.vega@example.com",
      field: "Art & Design",
      status: "Inactive",
      statusColor: "bg-[#9c5e15]",
    },
    {
      name: "Lyra Solstice",
      email: "lyra.solstice@example.com",
      field: "International Relations",
      status: "Active",
      statusColor: "bg-[#087b2e]",
    },
    {
      name: "Caelum Vesper",
      email: "caelum.vesper@example.com",
      field: "Computer Science",
      status: "Active",
      statusColor: "bg-[#087b2e]",
    },
    {
      name: "Nova Zenith",
      email: "nova.zenith@example.com",
      field: "Biology",
      status: "Inactive",
      statusColor: "bg-[#9c5e15]",
    },
  ];

  // Navigation items
  const navItems = [
    "Manage Scholarships",
    "Manage Students",
    "View KPIs",
    "Settings",
  ];

  // Team members
  const teamMembers = [
    {
      image:
        "https://c.animaapp.com/mbhqswz3OoxrDX/img/a-professional-looking-individual-with-short-dark-hair-wearing-a.png",
      fallback: "TM",
    },
    {
      image:
        "https://c.animaapp.com/mbhqswz3OoxrDX/img/a-professional-woman-with-shoulder-length-brown-hair-wearing-a-n.png",
      fallback: "TM",
    },
    {
      image:
        "https://c.animaapp.com/mbhqswz3OoxrDX/img/a-professional-looking-individual-with-short-black-hair-wearing-.png",
      fallback: "TM",
    },
    {
      image:
        "https://c.animaapp.com/mbhqswz3OoxrDX/img/a-professional-looking-individual-with-short-dark-hair-wearing-a-1.png",
      fallback: "TM",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col min-h-[900px] w-full bg-[#f9fff9]">
        {/* Header */}
        <header className="flex items-center justify-between p-3 bg-[#f9fff9] z-10">
          <div className="flex items-center gap-6">
            <MenuIcon className="w-6 h-6" />
            <div className="flex items-center h-8 gap-1">
              <h1 className="font-bold text-[#006400] text-[28px] tracking-[-1.12px] leading-7 whitespace-nowrap font-['Sen',Helvetica]">
                Yalaa Milga
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-end gap-6">
            <SearchIcon className="w-6 h-6" />
            <LayoutGridIcon className="w-6 h-6" />
            <Avatar className="w-10 h-10">
              <AvatarImage
                src="https://c.animaapp.com/mbhqswz3OoxrDX/img/a-professional-looking-individual-with-short-dark-hair-and-glass.png"
                alt="Profile"
              />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Main content */}
        <div className="flex gap-12 p-6">
          {/* Sidebar */}
          <aside className="w-[400px]">
            <nav className="py-6 bg-[#f9fff9]">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start px-4 py-2 rounded-lg font-medium text-[#1a271a] text-[15px]"
                >
                  {item}
                </Button>
              ))}
            </nav>
          </aside>

          {/* Main content area */}
          <main className="flex-1">
            {/* Dashboard header */}
            <div className="flex flex-col gap-6 py-6 bg-[#f9fff9]">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <h2 className="font-normal text-[#1a271a] text-[34px] tracking-[-0.85px] leading-10 whitespace-nowrap">
                      Admin Dashboard
                    </h2>
                    <ChevronDownIcon className="w-6 h-6" />
                  </div>

                  <Badge className="flex items-center gap-2 px-2 py-1 bg-[#247e2417] text-[#1a271a] rounded-lg border-[1.5px] border-transparent">
                    <div className="w-1.5 h-1.5 bg-[#087b2e] rounded-[3px]" />
                    <span className="font-medium text-center text-[15px]">
                      Active
                    </span>
                  </Badge>
                </div>

                <div className="flex items-start gap-3">
                  <Button className="px-4 py-2 bg-[#006400] text-[#f9fff9] rounded-lg">
                    Share
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="p-2 bg-[#f9fff9] rounded-lg border-[1.5px] border-[#496e4933]"
                      >
                        <MoreHorizontalIcon className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Team members */}
              <div className="flex items-center gap-3">
                <div className="flex items-start">
                  {teamMembers.map((member, index) => (
                    <Avatar
                      key={index}
                      className={`w-9 h-9 border-2 border-solid border-[#f9fff9] ${index > 0 ? "-ml-1.5" : ""}`}
                      style={{ zIndex: 4 - index }}
                    >
                      <AvatarImage
                        src={member.image}
                        className="w-8 h-8 rounded-[999px] border-[1.5px] border-solid border-transparent"
                      />
                      <AvatarFallback>{member.fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-normal text-[#132e139e] text-[15px] tracking-[-0.07px] leading-5 whitespace-nowrap">
                    +12 others
                  </span>
                </div>
              </div>
            </div>

            {/* Scholarships table */}
            <Card className="border-none bg-transparent mb-6">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-none">
                      <TableHead className="py-1">
                        <div className="flex items-center">
                          <span className="font-medium text-[#132e139e] text-[13px] leading-4 whitespace-nowrap">
                            Scholarship Title
                          </span>
                          <ChevronDownIcon className="w-6 h-6" />
                        </div>
                      </TableHead>
                      <TableHead className="py-1">
                        <div className="flex items-center">
                          <span className="font-medium text-[#132e139e] text-[13px] leading-4 whitespace-nowrap">
                            Deadline
                          </span>
                          <ChevronDownIcon className="w-6 h-6" />
                        </div>
                      </TableHead>
                      <TableHead className="py-1">
                        <div className="flex items-center">
                          <span className="font-medium text-[#132e139e] text-[13px] leading-4 whitespace-nowrap">
                            Status
                          </span>
                          <ChevronDownIcon className="w-6 h-6" />
                        </div>
                      </TableHead>
                      <TableHead className="py-1">
                        <div className="flex items-center">
                          <span className="font-medium text-[#132e139e] text-[13px] leading-4 whitespace-nowrap">
                            Actions
                          </span>
                          <ChevronDownIcon className="w-6 h-6" />
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scholarships.map((scholarship, index) => (
                      <TableRow
                        key={index}
                        className="border-t-[1.5px] border-[#496e4933]"
                      >
                        <TableCell className="py-4 font-normal text-[#1a271a] text-[15px] tracking-[-0.07px] leading-5">
                          {scholarship.title}
                        </TableCell>
                        <TableCell className="py-4 font-normal text-[#1a271a] text-[15px] tracking-[-0.07px] leading-5">
                          {scholarship.deadline}
                        </TableCell>
                        <TableCell className="py-4 font-normal text-[#1a271a] text-[15px] tracking-[-0.07px] leading-5">
                          {scholarship.status}
                        </TableCell>
                        <TableCell className="py-4 font-normal text-[#1a271a] text-[15px] tracking-[-0.07px] leading-5">
                          Edit/Delete
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Students table */}
            <Card className="border-none bg-transparent">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-none">
                      <TableHead className="py-1">
                        <div className="flex items-center">
                          <span className="font-medium text-[#132e139e] text-[13px] leading-4 whitespace-nowrap">
                            Student Name
                          </span>
                          <ChevronDownIcon className="w-6 h-6" />
                        </div>
                      </TableHead>
                      <TableHead className="py-1">
                        <div className="flex items-center">
                          <span className="font-medium text-[#132e139e] text-[13px] leading-4 whitespace-nowrap">
                            Email
                          </span>
                          <ChevronDownIcon className="w-6 h-6" />
                        </div>
                      </TableHead>
                      <TableHead className="py-1">
                        <div className="flex items-center">
                          <span className="font-medium text-[#132e139e] text-[13px] leading-4 whitespace-nowrap">
                            Field of Study
                          </span>
                          <ChevronDownIcon className="w-6 h-6" />
                        </div>
                      </TableHead>
                      <TableHead className="py-1">
                        <div className="flex items-center">
                          <span className="font-medium text-[#132e139e] text-[13px] leading-4 whitespace-nowrap">
                            Status
                          </span>
                          <ChevronDownIcon className="w-6 h-6" />
                        </div>
                      </TableHead>
                      <TableHead className="py-1">
                        <div className="flex items-center">
                          <span className="font-medium text-[#132e139e] text-[13px] leading-4 whitespace-nowrap">
                            Actions
                          </span>
                          <ChevronDownIcon className="w-6 h-6" />
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student, index) => (
                      <TableRow
                        key={index}
                        className="border-t-[1.5px] border-[#496e4933]"
                      >
                        <TableCell className="py-4 font-normal text-[#1a271a] text-[15px] tracking-[-0.07px] leading-5">
                          {student.name}
                        </TableCell>
                        <TableCell className="py-4 font-normal text-[#1a271a] text-[15px] tracking-[-0.07px] leading-5">
                          {student.email}
                        </TableCell>
                        <TableCell className="py-4 font-normal text-[#1a271a] text-[15px] tracking-[-0.07px] leading-5">
                          {student.field}
                        </TableCell>
                        <TableCell className="py-4 font-normal text-[#1a271a] text-[15px] tracking-[-0.07px] leading-5">
                          {student.status}
                        </TableCell>
                        <TableCell className="py-3 h-[52px]">
                          <div className="inline-flex items-center justify-center px-2 py-1 bg-[#247e2417] rounded-lg border-[1.5px] border-transparent gap-2">
                            <div
                              className={`w-1.5 h-1.5 ${student.statusColor} rounded-[3px]`}
                            />
                            <span className="font-medium text-center text-[#1a271a] text-[15px] leading-5 whitespace-nowrap">
                              Edit/Delete
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};
