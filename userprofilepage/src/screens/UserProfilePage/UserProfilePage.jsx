import { PencilIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Switch } from "../../components/ui/switch";

export const UserProfilePage = () => {
  // Notification preferences data
  const notificationPreferences = [
    {
      id: "email",
      title: "Email Notifications",
      description: "Receive updates via email",
      enabled: true,
    },
    {
      id: "sms",
      title: "SMS Notifications",
      description: "Receive updates via SMS",
      enabled: false,
    },
    {
      id: "push",
      title: "Push Notifications",
      description: "Receive updates via push notifications",
      enabled: true,
    },
    {
      id: "newsletter",
      title: "Newsletter Subscriptions",
      description: "Receive our monthly newsletter",
      enabled: false,
    },
  ];

  // Study information fields
  const studyFields = [
    {
      id: "email",
      label: "Email",
      type: "input",
      placeholder: "Enter your email",
    },
    {
      id: "yearOfStudy",
      label: "Year of Study",
      type: "select",
      placeholder: "Select year",
    },
    {
      id: "language",
      label: "Language",
      type: "select",
      placeholder: "Select language",
    },
    {
      id: "empty",
      label: "",
      type: "input",
      placeholder: "",
    },
  ];

  return (
    <div className="flex flex-col items-start bg-white">
      <div className="flex flex-col min-h-[900px] items-start px-12 w-full bg-[#f9fff9]">
        {/* Header */}
        <header className="flex items-center justify-around gap-[303px] py-5 w-full bg-[#f9fff9] z-[2]">
          <div className="inline-flex h-8 items-center gap-1">
            <div className="[font-family:'Sen',Helvetica] font-bold text-[#006400] text-[28px] tracking-[-1.12px] leading-7">
              Yalaa Milga
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-12 w-full z-[1] flex items-start">
          <div className="flex flex-col items-start w-full">
            {/* Profile Section */}
            <section className="flex flex-col items-start py-8 w-full bg-[#f9fff9]">
              <h1 className="self-stretch mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-bold text-[#1a271a] text-[28px] tracking-[-0.56px] leading-8">
                User Profile
              </h1>

              <div className="flex max-w-[900px] items-end gap-10 py-8 w-full bg-[#f9fff9]">
                <div className="relative w-[84px] h-[84px]">
                  <div className="relative w-[94px] h-[86px]">
                    <div className="absolute w-[84px] h-[84px] top-0 left-0 rounded-[999px] border-[1.5px] border-solid border-transparent [background:url(https://c.animaapp.com/mbhpyg1cSLTn9v/img/a-young-adult-with-short-black-hair-smiling-warmly-while-wearing.png)_50%_50%_/_cover]" />
                    <Button
                      className="flex w-[39px] h-[39px] items-center justify-center p-2.5 absolute top-[46px] left-[54px] bg-[#006400] rounded-[99px] border-[1.5px] border-solid border-[#f9fff9]"
                      size="icon"
                      variant="default"
                    >
                      <PencilIcon className="w-5 h-5 text-white" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-1 flex-1">
                  <label className="self-stretch mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-medium text-[#1a271a] text-[13px] leading-4">
                    Name
                  </label>
                  <Input
                    className="bg-[#247e2417] border-transparent text-[#132e1366] text-[15px] tracking-[-0.07px]"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Notification Preferences Section */}
              <section className="flex flex-col max-w-[900px] items-start py-8 w-full bg-[#f9fff9] border-t-[1.5px] border-[#496e4933]">
                <h2 className="self-stretch mt-[-1.50px] [font-family:'Public_Sans',Helvetica] font-bold text-[#1a271a] text-xl tracking-[-0.40px] leading-6">
                  Notification Preferences
                </h2>

                {notificationPreferences.map((pref) => (
                  <div
                    key={pref.id}
                    className="flex items-start gap-5 py-5 w-full bg-[#f9fff9]"
                  >
                    <div className="flex-col gap-1.5 flex-1 flex items-start">
                      <h3 className="self-stretch mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-bold text-[#1a271a] text-[17px] tracking-[-0.09px] leading-6">
                        {pref.title}
                      </h3>
                      <p className="self-stretch [font-family:'Public_Sans',Helvetica] font-normal text-[#132e139e] text-[15px] tracking-[-0.07px] leading-5">
                        {pref.description}
                      </p>
                    </div>
                    <Switch
                      checked={pref.enabled}
                      className={
                        pref.enabled ? "bg-[#006400]" : "bg-[#496e4933]"
                      }
                      thumbClassName={`${pref.enabled ? "translate-x-[36px]" : "translate-x-[4px]"} bg-${pref.enabled ? "[#f9fff9]" : "[#000500]"}`}
                    />
                  </div>
                ))}
              </section>

              {/* Study Information Section */}
              <section className="flex flex-col max-w-[900px] items-center gap-5 py-8 w-full bg-[#f9fff9] border-t-[1.5px] border-[#496e4933]">
                <h2 className="self-stretch mt-[-1.50px] [font-family:'Public_Sans',Helvetica] font-bold text-[#1a271a] text-xl tracking-[-0.40px] leading-6">
                  Study Information
                </h2>

                <div className="flex items-start gap-4 w-full">
                  <div className="flex flex-col items-start gap-1 flex-1">
                    <label className="self-stretch mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-medium text-[#1a271a] text-[13px] leading-4">
                      Email
                    </label>
                    <Input
                      className="bg-[#247e2417] border-transparent text-[#132e1366] text-[15px] tracking-[-0.07px]"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-1 flex-1">
                    <label className="self-stretch mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-medium text-[#1a271a] text-[13px] leading-4">
                      Year of Study
                    </label>
                    <Select>
                      <SelectTrigger className="bg-[#247e2417] border-transparent text-[#132e1366] text-[15px] tracking-[-0.07px]">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Year 1</SelectItem>
                        <SelectItem value="2">Year 2</SelectItem>
                        <SelectItem value="3">Year 3</SelectItem>
                        <SelectItem value="4">Year 4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-start gap-4 w-full">
                  <div className="flex flex-col items-start gap-1 flex-1">
                    <label className="self-stretch mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-medium text-[#1a271a] text-[13px] leading-4">
                      Language
                    </label>
                    <Select>
                      <SelectTrigger className="bg-[#247e2417] border-transparent text-[#132e1366] text-[15px] tracking-[-0.07px]">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-start gap-4 w-full">
                  <div className="flex flex-col items-start gap-1 flex-1">
                    <label className="self-stretch mt-[-1.00px] [font-family:'Public_Sans',Helvetica] font-medium text-[#1a271a] text-[13px] leading-4">
                      {""}
                    </label>
                    <Input className="bg-[#247e2417] border-transparent" />
                  </div>
                </div>
              </section>

              {/* Action Buttons */}
              <div className="flex max-w-[900px] items-start gap-5 py-8 w-full bg-[#f9fff9] border-t-[1.5px] border-[#496e4933]">
                <Button
                  variant="outline"
                  className="px-5 py-2.5 border-[1.5px] border-[#496e4933] text-[#1a271a] font-medium"
                >
                  Delete Account
                </Button>
                <Button
                  variant="outline"
                  className="px-5 py-2.5 border-[1.5px] border-[#496e4933] text-[#1a271a] font-medium"
                >
                  Save Changes
                </Button>
              </div>
            </section>
          </div>
        </main>

        <div className="h-12 z-0 w-full bg-[#f9fff9]" />
      </div>
    </div>
  );
};
