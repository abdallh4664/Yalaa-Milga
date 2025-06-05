import { EditIcon, SettingsIcon, CheckIcon, ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";
import { Switch } from "../../components/ui/switch";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#f9fff9] border-b border-[#496e4933] z-10">
      <div className="max-w-[1200px] mx-auto px-12 py-4 flex items-center justify-between">
        <div className="font-bold text-[#006400] text-[28px] tracking-[-1.12px] leading-7 whitespace-nowrap [font-family:'Sen',Helvetica]">
          Yalaa Milga
        </div>
        <ul className="flex items-center space-x-8">
          <li className="font-medium text-[#1a271a] text-[15px] leading-5 [font-family:'Plus_Jakarta_Sans',Helvetica]">Profile</li>
          <li className="font-medium text-[#1a271a] text-[15px] leading-5 [font-family:'Plus_Jakarta_Sans',Helvetica] flex items-center">
            Saved Scholarships <ChevronDownIcon className="ml-1 w-4 h-4" />
          </li>
          <li className="font-medium text-[#1a271a] text-[15px] leading-5 [font-family:'Plus_Jakarta_Sans',Helvetica] flex items-center">
            Settings <ChevronDownIcon className="ml-1 w-4 h-4" />
          </li>
          <li className="font-medium text-[#1a271a] text-[15px] leading-5 [font-family:'Plus_Jakarta_Sans',Helvetica] flex items-center">
            Logout <ChevronDownIcon className="ml-1 w-4 h-4" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export const HelpSettingsPage = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState([
    {
      id: "email",
      title: "Email Notifications",
      description: "Receive email notifications",
      enabled: true,
    },
    {
      id: "push",
      title: "Push Notifications",
      description: "Receive push notifications",
      enabled: false,
    },
    {
      id: "privacy",
      title: "Privacy Settings",
      description: "Manage your privacy settings",
      enabled: true,
    },
    {
      id: "language",
      title: "Language",
      description: "Select your preferred language",
      enabled: false,
    },
  ]);

  // FAQ data
  const faqItems = [
    {
      id: "password",
      question: "How to change my password?",
      answer: "To change your password, go to the Account Settings section and enter your new password in the 'Change Password' field. Make sure to confirm your new password and click 'Save Changes'.",
    },
    {
      id: "support",
      question: "How to contact support?",
      answer: "You can contact our support team by clicking the 'Contact Support' button at the bottom of the Settings page. Alternatively, you can email us at support@example.com.",
    },
    {
      id: "notifications",
      question: "How to manage notifications?",
      answer: "To manage your notifications, go to the Notifications section in the Settings page. Here you can toggle on/off different types of notifications such as email and push notifications.",
    },
    {
      id: "language",
      question: "How to change language settings?",
      answer: "To change the language settings, go to the Notifications section and look for the 'Language' option. Toggle it on to access language preferences where you can select your desired language.",
    },
    {
      id: "privacy",
      question: "How to update privacy settings?",
      answer: "To update your privacy settings, navigate to the Notifications section and find the 'Privacy Settings' option. Toggle it on to access and modify your privacy preferences.",
    },
  ];

  const handleSaveChanges = () => {
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleToggle = (id) => {
    setNotificationSettings(
      notificationSettings.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  return (
    <div className="flex justify-center bg-white w-full">
      <Navbar />
      <div className="flex flex-col w-full max-w-[1200px] items-start px-12 bg-[#f9fff9] mt-[72px]">

        <div className="gap-12 self-stretch w-full flex items-start mt-8">
          {/* Sidebar */}
          <div className="flex flex-col w-[300px] items-start">
            <div className="flex flex-col items-start py-8 w-full bg-[#f9fff9]">
              <div className="flex items-center gap-4 px-5 py-2.5 w-full bg-[#00ad0029] rounded-lg">
                <SettingsIcon className="w-6 h-6" />
                <div className="font-medium text-[#006400] text-[15px] leading-5 whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  Settings
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-start flex-1">
            <div className="flex flex-col items-start py-8 w-full bg-[#f9fff9]">
              <h1 className="self-stretch mt-[-1.00px] font-bold text-[#1a271a] text-[28px] tracking-[-0.56px] leading-8 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Settings &amp; Help
              </h1>

              {/* Profile Section */}
              <Card className="w-full mt-8 p-6">
                <div className="flex items-end gap-10 w-full">
                  <div className="relative w-[84px] h-[84px]">
                    <div className="relative w-[94px] h-[86px]">
                      <div className="absolute w-[84px] h-[84px] top-0 left-0 rounded-[999px] border-[1.5px] border-solid border-transparent [background:url(https://c.animaapp.com/mbhqbxsfjqhy2B/img/a-young-adult-with-short-hair-sitting-at-a-desk--focused-on-a-la.png)_50%_50%_/_cover]" />
                      <div className="flex w-[39px] h-[39px] items-center justify-center p-2.5 absolute top-[46px] left-[54px] bg-[#006400] rounded-[99px] border-[1.5px] border-solid border-[#f9fff9]">
                        <EditIcon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-1 flex-1">
                    <label className="self-stretch mt-[-1.00px] font-medium text-[#1a271a] text-[13px] leading-4 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                      Username
                    </label>
                    <Input
                      className="px-3.5 py-2.5 bg-[#247e2417] rounded-lg border-[1.5px] border-solid border-transparent"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
              </Card>

              {/* Notifications Section */}
              <Card className="w-full mt-8 p-6">
                <h2 className="self-stretch mt-[-1.50px] font-bold text-[#1a271a] text-xl tracking-[-0.40px] leading-6 [font-family:'Plus_Jakarta_Sans',Helvetica] mb-4">
                  Notifications
                </h2>

                {notificationSettings.map((setting) => (
                  <div
                    key={setting.id}
                    className="flex items-center justify-between gap-5 py-5 w-full bg-[#f9fff9] border-t border-[#496e4933]"
                  >
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-bold text-[#1a271a] text-[17px] leading-6 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                        {setting.title}
                      </h3>
                      <p className="font-normal text-[#132e139e] text-[15px] leading-5 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                        {setting.description}
                      </p>
                    </div>
                    <Switch
                      checked={setting.enabled}
                      onCheckedChange={() => handleToggle(setting.id)}
                    />
                  </div>
                ))}
              </Card>

              {/* Account Settings Section */}
              <Card className="w-full mt-8 p-6">
                <h2 className="self-stretch mt-[-1.50px] font-bold text-[#1a271a] text-xl tracking-[-0.40px] leading-6 [font-family:'Plus_Jakarta_Sans',Helvetica] mb-4">
                  Account Settings
                </h2>

                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col items-start gap-1 w-full">
                    <label className="font-medium text-[#1a271a] text-[13px] leading-4 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                      New Password
                    </label>
                    <Input
                      className="px-3.5 py-2.5 bg-[#247e2417] rounded-lg border-[1.5px] border-solid border-transparent"
                      placeholder="Enter new password"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col items-start gap-1 w-full">
                    <label className="font-medium text-[#1a271a] text-[13px] leading-4 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                      Confirm New Password
                    </label>
                    <Input
                      className="px-3.5 py-2.5 bg-[#247e2417] rounded-lg border-[1.5px] border-solid border-transparent"
                      placeholder="Confirm new password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  {!passwordsMatch && (
                    <p className="text-red-500 text-sm">Passwords do not match</p>
                  )}
                </div>
              </Card>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-5 mt-8 w-full">
                <Button
                  variant="outline"
                  className="px-5 py-2.5 rounded-lg border-[1.5px] border-solid border-[#496e4933]"
                >
                  <span className="font-medium text-[#1a271a] text-[15px] leading-5 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                    Contact Support
                  </span>
                </Button>

                <div className="flex items-center gap-4">
                  {saveSuccess && (
                    <span className="text-green-500 flex items-center gap-2">
                      <CheckIcon size={16} /> Changes saved
                    </span>
                  )}
                  <Button
                    variant="outline"
                    className="px-5 py-2.5 rounded-lg border-[1.5px] border-solid border-[#496e4933]"
                    onClick={handleSaveChanges}
                  >
                    <span className="font-medium text-[#1a271a] text-[15px] leading-5 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                      Save Changes
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="flex flex-col items-start gap-8 py-[52px] w-full bg-[#f9fff9]">
              <h2 className="font-bold text-[#1a271a] text-4xl tracking-[-0.96px] leading-[52px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-t-[1.5px] border-[#496e4933] py-4"
                  >
                    <AccordionTrigger className="flex justify-between items-center w-full">
                      <span className="font-bold text-[#1a271a] text-[17px] leading-6 text-left [font-family:'Plus_Jakarta_Sans',Helvetica]">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-[#132e139e] text-[15px] leading-6 mt-2">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        <div className="h-12 w-full bg-[#f9fff9]" />
      </div>
    </div>
  );
};
