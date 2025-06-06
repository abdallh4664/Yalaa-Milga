import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    setIsLoginDisabled(
      !email || !password || !validateEmail(email) || password.length < 6
    );
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Email is required");
    } else if (!validateEmail(e.target.value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Password is required");
    } else if (e.target.value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = () => {
    // Implement login logic here
    console.log("Login clicked", { email, password, rememberMe });
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    console.log("Forgot password clicked");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5ef]">
      {/* Header with logo */}
      <header className="flex items-center justify-between px-12 py-6 w-full bg-[#f5f5ef] relative">
        <div className="flex items-center gap-1">
          <div className="relative w-8 h-8">
            <img
              className="absolute w-[27px] h-[27px] top-[3px] left-[3px]"
              alt="Yalaa Milga Logo"
              src="https://c.animaapp.com/mbhpb53vECL0nX/img/union.svg"
            />
          </div>
          <div className="[font-family:'Syne',Helvetica] font-extrabold text-[#204f0a] text-2xl tracking-[-0.96px] leading-6">
            YalaaMilga
          </div>
        </div>
        <Separator className="absolute w-full h-px bottom-0 left-0" />
      </header>

      <main className="flex flex-1 bg-[#f5f5ef]">
        {/* Hero section */}
        <section className="w-1/2 flex items-center justify-center">
          <h1 className="[font-family:'Cutive',Helvetica] font-normal text-[#1d221b] text-[120px] tracking-[-2.40px] leading-[1] max-w-[600px]">
            Welcome back to Yalaa Milga
          </h1>
        </section>

        {/* Right image */}
        <section className="w-1/2 h-full">
          <img
            className="w-full h-full object-cover"
            alt="Smiling student"
            src="https://c.animaapp.com/mbhpb53vECL0nX/img/a-smiling-student-with-short-black-hair-wearing-a-casual-blue-sh.png"
          />
        </section>
      </main>

      {/* Login section */}
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px]">
        <Card className="bg-white border-none shadow-lg rounded-2xl">
          <CardContent className="flex flex-col items-center space-y-6 p-8">
            {/* Login header */}
            <div className="text-center w-full">
              <h2 className="[font-family:'Cutive',Helvetica] font-normal text-[#1d221b] text-[28px] tracking-[-0.28px] leading-8 mb-3">
                Login
              </h2>
              <p className="[font-family:'Kumbh_Sans',Helvetica] font-medium text-[#1d221b] text-[15px] tracking-[0] leading-5">
                Please enter your email and password to continue.
              </p>
            </div>

            {/* Email input */}
            <div className="w-full">
              <Input
                className={`h-12 bg-[#dadaca66] rounded-[22px] border-2 ${
                  emailError ? "border-red-500" : "border-[#16340929]"
                } [font-family:'Kumbh_Sans',Helvetica] font-medium text-[15px] px-4 py-3 w-full`}
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
              )}
            </div>

            {/* Password input */}
            <div className="w-full">
              <Input
                type="password"
                className={`h-12 bg-[#dadaca66] rounded-[22px] border-2 ${
                  passwordError ? "border-red-500" : "border-[#16340929]"
                } [font-family:'Kumbh_Sans',Helvetica] font-medium text-[15px] px-4 py-3 w-full`}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              )}
            </div>

            {/* Login button */}
            <Button
              className={`w-full px-6 py-3 bg-[#204f0a] rounded-[22px] hover:bg-[#204f0a]/90 transition-colors duration-200 ${
                isLoginDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleLogin}
              disabled={isLoginDisabled}
            >
              <span className="[font-family:'Kumbh_Sans',Helvetica] font-semibold text-[#fbfff9] text-[15px]">
                Login
              </span>
            </Button>

            {/* Divider */}
            <div className="flex items-center w-full gap-2">
              <Separator className="flex-1" />
              <span className="[font-family:'Kumbh_Sans',Helvetica] font-medium text-[#1d221b9e] text-[13px] tracking-[0] leading-4 whitespace-nowrap">
                or continue with
              </span>
              <Separator className="flex-1" />
            </div>

            {/* Google login button */}
            <Button
              variant="outline"
              className="w-full p-3 bg-[#f5f5ef] rounded-[22px] border-2 border-[#16340929] relative flex items-center justify-center hover:bg-[#dadaca66] transition-colors duration-200"
            >
              <img
                className="w-5 h-5 absolute left-3"
                alt="Google"
                src="https://c.animaapp.com/mbhpb53vECL0nX/img/google.svg"
              />
              <span className="[font-family:'Kumbh_Sans',Helvetica] font-semibold text-[#1d221b] text-[15px] text-center">
                Google
              </span>
            </Button>

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="remember-me"
                  className="w-4 h-4 rounded-sm border-[#1d221b]"
                  checked={rememberMe}
                  onCheckedChange={setRememberMe}
                />
                <label
                  htmlFor="remember-me"
                  className="[font-family:'Kumbh_Sans',Helvetica] font-medium text-[#1d221b] text-[13px] tracking-[0] leading-4 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <button
                onClick={handleForgotPassword}
                className="[font-family:'Kumbh_Sans',Helvetica] font-medium text-[#1d221b] text-[13px] tracking-[0] leading-4 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Sign up section */}
        <div className="w-full mt-8 text-center">
          <p className="[font-family:'Kumbh_Sans',Helvetica] font-medium text-[#1d221b] text-xl tracking-[-0.12px] leading-8">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline hover:text-[#204f0a] transition-colors duration-200">
              Sign up
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};
