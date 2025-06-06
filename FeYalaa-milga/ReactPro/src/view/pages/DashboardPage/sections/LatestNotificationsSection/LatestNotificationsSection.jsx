import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const LatestNotificationsSection = () => {
  // Data for notification cards
  const notifications = [
    {
      id: 1,
      title: "Application Received",
      date: "Oct 10, 2023",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-student-sitting-at-a-desk--focused-on-a-laptop-screen-displayi.png",
    },
    {
      id: 2,
      title: "Interview Scheduled",
      date: "Oct 12, 2023",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-student-dressed-in-business-attire-sitting-at-a-table-with-a-n.png",
    },
    {
      id: 3,
      title: "Final Decision",
      date: "Oct 15, 2023",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-student-with-curly-hair-jumping-in-excitement-while-holding-a-.png",
    },
    {
      id: 4,
      title: "New Scholarship Added",
      date: "Oct 20, 2023",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-group-of-students-celebrating-with-graduation-caps-in-the-air-.png",
    },
    {
      id: 5,
      title: "Profile Update Reminder",
      date: "Oct 25, 2023",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-young-woman-sitting-at-a-desk--focused-on-her-laptop-while-rev.png",
    },
    {
      id: 6,
      title: "Application Deadline",
      date: "Nov 1, 2023",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-close-up-of-a-calendar-page-with-a-red-circle-around-a-specifi.png",
    },
    {
      id: 7,
      title: "Feedback Available",
      date: "Nov 5, 2023",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-student-sitting-at-a-desk--reviewing-feedback-on-a-laptop-with.png",
    },
    {
      id: 8,
      title: "Scholarship Awarded",
      date: "Nov 10, 2023",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-student-joyfully-holding-a-scholarship-award-certificate-in-a-.png",
    },
    {
      id: 9,
      title: "New Message",
      date: "Nov 15, 2023",
      image:
        "https://c.animaapp.com/mbhpqda7dSDBGE/img/a-young-adult-sitting-at-a-desk--looking-at-a-smartphone-with-a-.png",
    },
  ];

  // Function to chunk array into groups of 3 for rows
  const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size),
    );
  };

  const notificationRows = chunkArray(notifications, 3);

  return (
    <section className="flex flex-col items-start gap-6 py-12 w-full bg-[#f9fff9]">
      <h2 className="self-stretch font-bold text-[#1a271a] text-5xl tracking-[-0.96px] leading-[52px] font-sans">
        Latest Notifications
      </h2>

      {notificationRows.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className={`flex items-start gap-6 self-stretch w-full ${rowIndex !== notificationRows.length - 1 ? "pb-2" : ""}`}
        >
          {row.map((notification) => (
            <div
              key={notification.id}
              className="flex flex-col items-start gap-4 flex-1"
            >
              <Card className="w-full border-[1.5px] border-solid border-transparent p-0 overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-0">
                  <div
                    className="w-full h-[300px] rounded-2xl bg-cover bg-center transition-transform duration-300 hover:scale-110"
                    style={{ backgroundImage: `url(${notification.image})` }}
                  />
                </CardContent>
              </Card>

              <div className="flex flex-col items-start gap-1 w-full">
                <h3 className="self-stretch font-bold text-[#1a271a] text-xl tracking-[-0.40px] leading-6 font-sans">
                  {notification.title}
                </h3>
                <p className="self-stretch font-normal text-[#1a271a] text-[17px] leading-6 font-sans">
                  {notification.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
