import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        return value.trim() ? "" : "Full name is required";
      case "email":
        return /\S+@\S+\.\S+/.test(value) ? "" : "Valid email is required";
      case "password":
        return value.length >= 8 ? "" : "Password must be at least 8 characters";
      case "confirmPassword":
        return value === formData.password ? "" : "Passwords do not match";
      case "agreeTerms":
        return value ? "" : "You must agree to the Terms & Privacy Policy";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleCheckboxChange = (checked) => {
    setFormData({ ...formData, agreeTerms: checked });
    setErrors({ ...errors, agreeTerms: validateField("agreeTerms", checked) });
  };

  useEffect(() => {
    const formIsValid = Object.values(errors).every((error) => error === "") &&
      Object.values(formData).every((value) => value !== "" && value !== false);
    setIsFormValid(formIsValid);
  }, [formData, errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend
      alert("Form submitted successfully!");
    } else {
      // Validate all fields and show errors
      const newErrors = {};
      Object.keys(formData).forEach((key) => {
        newErrors[key] = validateField(key, formData[key]);
      });
      setErrors(newErrors);
    }
  };

  const getInputClassName = (fieldName) => {
    return `h-14 px-4 py-2 bg-white rounded-2xl border-[1.5px] border-solid 
      ${errors[fieldName] ? "border-red-500" : "border-[#132e139e]"} 
      font-['Outfit',Helvetica] text-[16px] text-[#1a271a] placeholder-[#132e139e]
      focus:outline-none focus:ring-2 focus:ring-green-500`;
  };

  return (
    <div className="flex items-center justify-center bg-white w-full min-h-screen">
      <div className="flex flex-col w-full max-w-[1440px] min-h-[900px] items-center px-12 bg-[#f9fff9]">
        {/* Header */}
        <header className="flex items-center justify-between py-[18px] w-full bg-[#f9fff9] z-[2]">
          <div className="flex items-center gap-1">
            <img
              className="w-7 h-7"
              alt="Logomark"
              src="https://c.animaapp.com/mbhp2cum2FJHND/img/logomark.svg"
            />
            <h1 className="font-['Sen',Helvetica] font-bold text-[#006400] text-[28px] tracking-[-1.12px] leading-7">
              Yalaa Milga
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center w-full py-12 z-[1]">
          {/* Hero Section */}
          <section className="flex flex-col items-center gap-[50px] py-24 w-full z-[1] bg-[#f9fff9]">
            <h2 className="font-['Outfit',Helvetica] font-semibold text-[80px] leading-[90px] text-[#1a271a] text-center max-w-[1200px]">
              Create your free account to unlock personalized scholarships.
            </h2>
            <div
              className="w-full h-[400px] rounded-[28px] border-[1.5px] border-solid border-transparent bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://c.animaapp.com/mbhp2cum2FJHND/img/a-cheerful-student-wearing-a-graduation-cap-and-holding-a-stack-.png)",
              }}
            />
          </section>

          {/* Signup Form Section */}
          <section className="flex flex-col items-center gap-8 w-full z-0 mt-12">
            <h3 className="font-['Domine',Helvetica] font-bold text-[36px] tracking-[-0.36px] leading-10 text-[#1a271a] text-center">
              Create Your Free Account
            </h3>

            <Card className="w-full max-w-[664px] border-none bg-transparent">
              <CardContent className="p-8 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name Field */}
                  <div className="space-y-2">
                    <label className="font-['Outfit',Helvetica] font-medium text-[#257e25] text-[14px] leading-4">
                      Full Name
                    </label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={getInputClassName("fullName")}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="font-['Outfit',Helvetica] font-medium text-[#257e25] text-[14px] leading-4">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={getInputClassName("email")}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="font-['Outfit',Helvetica] font-medium text-[#257e25] text-[14px] leading-4">
                      Password
                    </label>
                    <Input
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={getInputClassName("password")}
                      placeholder="Enter your password"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                  </div>

                  {/* Confirm Password Field */}
                  <div className="space-y-2">
                    <label className="font-['Outfit',Helvetica] font-medium text-[#257e25] text-[14px] leading-4">
                      Confirm Password
                    </label>
                    <Input
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={getInputClassName("confirmPassword")}
                      placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                  </div>

                  {/* Terms & Privacy Policy Checkbox */}
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeTerms}
                      onCheckedChange={handleCheckboxChange}
                      className={`w-5 h-5 rounded ${errors.agreeTerms ? "border-red-500" : "border-[#132e139e]"}`}
                    />
                    <label
                      htmlFor="terms"
                      className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#1a271a] text-[14px] leading-5"
                    >
                      I agree to the Terms & Privacy Policy
                    </label>
                  </div>
                  {errors.agreeTerms && <p className="text-red-500 text-sm">{errors.agreeTerms}</p>}

                  {/* Sign Up Button */}
                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full h-[50px] text-white rounded-lg text-[18px] font-semibold transition-colors duration-300
                      ${isFormValid 
                        ? "bg-[#006400] hover:bg-[#005000] cursor-pointer" 
                        : "bg-gray-400 cursor-not-allowed"}`}
                  >
                    Sign Up
                  </Button>
                </form>

                <div className="flex items-center justify-center gap-2 w-full">
                  <Separator className="flex-1 h-[1.5px]" />
                  <span className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#132e139e] text-[14px] leading-4">
                    or continue with
                  </span>
                  <Separator className="flex-1 h-[1.5px]" />
                </div>

                <Button
                  variant="outline"
                  className="flex items-center justify-center w-full p-3 bg-[#fbfdfb] rounded-lg border-[1.5px] border-solid border-[#496e4933] hover:bg-[#f0f8f0] transition-colors duration-300"
                >
                  <img
                    className="w-5 h-5 mr-2"
                    alt="Google"
                    src="https://c.animaapp.com/mbhp2cum2FJHND/img/google.svg"
                  />
                  <span className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#1a271a] text-[16px] leading-5">
                    Sign in with Google
                  </span>
                </Button>
              </CardContent>
            </Card>
          </section>
        </main>

        {/* Footer Spacer */}
        <div className="h-12 w-full bg-[#f9fff9]" />
      </div>
    </div>
  );
};
