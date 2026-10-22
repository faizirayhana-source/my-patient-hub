import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import Footer from "../../components/ui/Footer";

export default function SignUp() {
  const [isEmailMode, setIsEmailMode] = useState(false);
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [sliderValue, setSliderValue] = useState(0);

  const [isSignUpExpanded, setIsSignUpExpanded] = useState(false);
  const [isMethodExpanded, setIsMethodExpanded] = useState(false);

  const handleModeChange = () => {
    setIsEmailMode((previous) => !previous);
    setContact("");
    setPassword("");
    setVerificationCode("");
    setSliderValue(0);
    setIsMethodExpanded(false);
    setIsSignUpExpanded(false);
  };

  const handleSliderChange = (event) => {
    const value = Number(event.target.value);
    setSliderValue(value);
  };

  const handleSliderRelease = () => {
    if (sliderValue < 100) {
      setSliderValue(0);
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    setIsSignUpExpanded((previous) => !previous);

    if (sliderValue < 100) {
      alert(
        isEmailMode
          ? "Please slide to request the email confirmation code."
          : "Please slide to request the SMS code."
      );
      return;
    }

    if (!verificationCode.trim()) {
      alert("Please enter your verification code.");
      return;
    }

    alert("Connect your registration system to continue.");
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-700">

      {/* Welcome Banner */}
      <section
        className="relative mx-3 mt-4 h-95 overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat sm:h-102"
        style={{
          backgroundImage: "url('./public/image.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[#21152F]/50 backdrop-blur-[3px]" />

        <div className="relative z-10 px-4 pt-16 text-center sm:pt-18">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-[46px]">
            Welcome to MyPatientHUB!
          </h1>

          <p className="translate-y-2.5 text-xs text-white sm:text-[16.3px]">
            We provide smart healthcare services in your hands.
          </p>
        </div>
      </section>

      {/* Registration Card */}
      <main className="relative z-10 mx-auto
       -mt-47 mb-10 w-[calc(100%-24px)]
       max-w-105 rounded-xl bg-white
       px-5 pb-6 pt-5
       shadow-[0_12px_35px_rgba(0,0,0,0.09)]
       sm:px-4.75">
        <h2 className="text-center text-[20px] font-medium text-slate-600">
          Register with
        </h2>

        {/* Social Login */}
        <div className="mt-7 flex flex-row justify-center gap-2">
          <button
            type="button"
            aria-label="Continue with Facebook"
            className="flex h-12.5 w-16
             shrink-0 cursor-pointer
             items-center justify-center
             rounded-md border border-slate-100
             bg-white shadow-sm transition
             hover:bg-slate-50 active:scale-105"
          >
            <FaFacebookF size={20} color="#1877F2" />
          </button>

          <button
            type="button"
            aria-label="Continue with Google"
            className="flex h-12.5 w-16
             shrink-0 cursor-pointer
             items-center justify-center
             rounded-md border border-slate-100
             bg-white text-xl font-bold shadow-sm
             transition hover:bg-slate-50 active:scale-105"
          >
            <FcGoogle size={22} />
          </button>
        </div>

        {/* OR Divider */}
        <div className="my-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-linear-to-l from-gray-200 via-gray-100 to-transparent" />

          <span className="text-xs font-semibold text-gray-500">
            or
          </span>

          <span className="h-px flex-1 bg-linear-to-r from-gray-200 via-gray-100 to-transparent" />
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSignUp}>
          {/* Email or Phone Input */}
          <input
            type={isEmailMode ? "email" : "tel"}
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            placeholder={isEmailMode ? "Email address" : "Phone number"}
            aria-label={isEmailMode ? "Email address" : "Phone number"}
            autoComplete={isEmailMode ? "email" : "tel"}
            required
            
            className="mt-2 h-9 w-full rounded-md
             border border-gray-200 px-3
             text-[14px] text-slate-700
             outline-none transition-all
             duration-200 focus:border-sky-400
             focus:ring-2 focus:ring-sky-400/40"
          />

          {/* Password Input */}
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            aria-label="Password"
            autoComplete="new-password"
            required

            className="mt-3 h-9 w-full rounded-md
             border border-gray-200 px-3
             text-[14px] text-slate-700
             outline-none transition-all
             duration-200 focus:border-sky-400
             focus:ring-2 focus:ring-sky-400/40"
          />

          {/* SMS / Email Slider */}
          {sliderValue < 100 && (
            <div className="relative mt-3 flex h-11 items-center overflow-hidden rounded-full bg-[#eeeeee]">
              <div
                className="pointer-events-none
                 absolute left-0 top-0 h-full
                 rounded-full bg-sky-400
                 transition-[width] duration-300 ease-out"
                style={{
                  width: `${sliderValue}%`,
                }}
              />

              <span
                className={`pointer-events-none
                   absolute inset-0 flex items-center
                   justify-center pl-8 text-[12px]
                   font-semibold tracking-[1.5px]
                   transition-colors duration-200 ${
                  sliderValue > 0
                    ? "text-white"
                    : "text-slate-400"
                }`}
              >
                {isEmailMode
                  ? "Slide for Email confirmation"
                  : "Slide for SMS code"}
              </span>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
                onPointerUp={handleSliderRelease}
                onTouchEnd={handleSliderRelease}
                onKeyUp={handleSliderRelease}
                aria-label={
                  isEmailMode
                    ? "Slide for Email confirmation"
                    : "Slide for SMS code"
                }
                className="absolute inset-0 z-30 h-full w-full cursor-pointer opacity-0"
              />

              <div
                className="pointer-events-none
                 absolute top-0 z-10 flex h-10
                 w-10 items-center justify-center
                 rounded-full bg-sky-400
                 text-white shadow transition-[left]
                 duration-500 ease-out"
                style={{
                  left: `calc(${sliderValue}% - ${sliderValue * 0.4}px)`,
                }}
              >
                <ChevronRight size={20} />
              </div>
            </div>
          )}

          {/* Verification Code Input */}
          {sliderValue === 100 && (
            <div className="mt-3">
              <label
                htmlFor="verification-code"
                className="mt-6 block text-left text-[12px] text-slate-400"
              >
                {isEmailMode
                  ? "Email has been sent"
                  : "SMS has been sent to this number"}
              </label>

              <input
                id="verification-code"
                type="text"
                inputMode="numeric"
                value={verificationCode}
                onChange={(event) =>
                  setVerificationCode(event.target.value)
                }
                placeholder={
                  isEmailMode
                    ? "Enter Email Code"
                    : "Enter SMS code"
                }
                aria-label="Verification code"
                autoComplete="one-time-code"
                required
                className="h-9 w-full rounded-md
                 border border-gray-200 px-3
                 text-[14px] text-slate-700
                 outline-none transition-all
                 duration-200 placeholder:text-gray-400
                 focus:border-sky-400 focus:ring-2
                 focus:ring-sky-400/40"
              />
            </div>
          )}

          {/* Sign Up Button */}
          <button
            type="submit"
            className={`mt-6 h-9 w-full
               cursor-pointer rounded-md
               bg-linear-to-r from-[#ed0a94] to-[#9416b9]
               text-[12px] font-bold text-white
               shadow-md transition-transform
               duration-300 hover:scale-[1.03]
               active:scale-105 ${isSignUpExpanded
                ? "scale-105"
                : "scale-100"
            }`}
          >
            SIGN UP
          </button>

          {/* Terms and Privacy */}
          <p className="pt-1.5 text-center text-[13px] leading-4 text-gray-400">
            By clicking Sign Up; I agree to MyPiHUB Terms of Use and
            Privacy Policy
          </p>
        </form>

        {/* OR Divider */}
        <div className="my-2 flex items-center gap-3">
          <span className="h-px flex-1 bg-linear-to-l from-gray-200 via-gray-100 to-transparent" />

          <span className="text-xs font-semibold text-gray-500">
            or
          </span>

          <span className="h-px flex-1 bg-linear-to-r from-gray-200 via-gray-100 to-transparent" />
        </div>

        {/* Switch Registration Method */}
        <button
          type="button"
          onClick={handleModeChange}
          className={`mt-2 h-9 w-full
             cursor-pointer rounded-md
             bg-linear-to-r
             from-[#20c3e8] to-[#2670f5]
             text-[12px] font-bold text-white
             shadow-md transition-transform
             duration-500 hover:scale-[1.03]
             active:scale-105 ${
            isMethodExpanded
              ? "scale-105"
              : "scale-100"
          }`}
          onDoubleClick={() => setIsMethodExpanded(false)}
        >
          {isEmailMode
            ? "SIGN UP WITH NUMBER"
            : "SIGN UP WITH EMAIL"}
        </button>

        {/* Sign In */}
        <p className="cursor-pointer pt-7 text-center text-[14px] text-gray-500">
          Already member?{" "}
          <a
            href="/signin"
            className="font-semibold text-slate-700 hover:text-purple-600"
          >
            Sign in
          </a>
        </p>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}