import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, LockKeyhole, Check } from "lucide-react";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import Footer from "../../components/ui/Footer";

import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#f7f8fa] text-slate-700">
      {/* Welcome Banner */}
      <section
        className="relative mx-3 mt-4 h-95 overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat sm:h-102"
        style={{
          backgroundImage: "url('/backgroundimage.jpeg')",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#21152F]/50 backdrop-blur-[3px]" />

        {/* Welcome Text */}
        <div className="relative z-10 px-3 pt-16 text-center sm:px-4 sm:pt-18">
          <h1 className="mx-auto max-w-full
           text-[24px] font-bold leading-tight
           tracking-tight text-white
           min-[375px]:text-[26px] sm:text-[46px]">
            Welcome to MyPatientHUB!
            
          </h1>

          <p className="mt-3 text-[12px] leading-relaxed text-white min-[375px]:text-[13px] sm:text-[16.3px]">
            We provide smart healthcare services in your hands.
          </p>
        </div>
      </section>

      {/* Sign In Card */}
      <main className="relative z-20 mx-auto
       -mt-41.25 w-[calc(100%-32px)]
       max-w-103 rounded-xl bg-white
       px-4 pb-10 pt-5
       shadow-[0_12px_35px_rgba(25,45,80,0.10)]
       min-[375px]:px-5
       sm:-mt-46 sm:px-5 sm:pb-12">
        <h2 className="mb-7 text-center text-[19px] font-semibold text-slate-600 min-[375px]:text-[20px]">
          Sign in to MyPatientHUB
        </h2>

        {/* Social Sign In */}
        <div className="mb-8 flex justify-center gap-2">
          <button
            type="button"
            aria-label="Continue with Facebook"
            className="flex h-12.5 w-16
             shrink-0 items-center
             justify-center rounded-md
             border border-slate-100
             bg-white shadow-sm
             transition hover:bg-slate-50"
          >
            <FaFacebookF size={20} color="#1877F2" />
          </button>

          <button
            type="button"
            aria-label="Continue with Google"
            className="flex h-12.5 w-16
             shrink-0 items-center
             justify-center rounded-md
             border border-slate-100
             bg-white text-xl font-bold
             shadow-sm transition hover:bg-slate-50"
          >
            <FcGoogle size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-3">
          {/* Email */}
          <div className="flex h-9 min-w-0
           items-center gap-3 rounded-md
           border border-slate-200 px-3
           focus-within:border-blue-400">
            <Mail size={17} className="shrink-0 text-slate-400" />

            <Label htmlFor="signin-email" className="sr-only">
              Email or Phone number
            </Label>

            <Input
              id="signin-email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Phone number"
              autoComplete="username"
              className="h-full min-w-0 flex-1
               border-0 bg-transparent px-0
               text-[13px] shadow-none
               placeholder:text-[13px]
               placeholder:text-slate-400
               focus-visible:ring-0
               min-[375px]:text-sm
               min-[375px]:placeholder:text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex h-9 min-w-0
           items-center gap-3 rounded-md
           border border-slate-200 px-3
           focus-within:border-blue-400">
            <LockKeyhole size={17} className="shrink-0 text-slate-400" />

            <Label htmlFor="signin-password" className="sr-only">
              Password
            </Label>

            <Input
              id="signin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please enter your password"
              autoComplete="current-password"
              className="h-full min-w-0
               flex-1 border-0 bg-transparent
               px-0 text-[13px] shadow-none
               placeholder:text-[13px]
               placeholder:text-slate-400
               focus-visible:ring-0
               min-[375px]:text-sm
               min-[375px]:placeholder:text-sm"
            />
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            className="h-9 w-full cursor-pointer rounded-md
             bg-linear-to-r from-[#ed0a94] to-[#9416b9]
             text-[12px] font-bold text-white shadow-md
             transition-transform duration-200
             hover:scale-[1.02] active:scale-[0.99]"
          >
            SIGN IN
          </Button>

          {/* Forgot Password and Remember Me */}
          <div className="-mt-3 flex flex-wrap
           items-center justify-between gap-x-2
           gap-y-2 px-1 text-[12px]
           text-slate-500 min-[375px]:text-[13px]">
            <Link
              to="/authentication/forgot-password"
              className="shrink-0"
            >
              Forgot password?
            </Link>

            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="peer sr-only"
              />

              <span className="flex h-4 w-4 shrink-0
               items-center justify-center rounded-sm
               border border-slate-300 bg-white
               text-white peer-checked:border-black
               peer-checked:bg-black
               peer-focus-visible:ring-2
               peer-focus-visible:ring-gray-300">
                <Check size={12} strokeWidth={3} />
              </span>

              <span className="whitespace-nowrap">
                Remember me
              </span>
            </label>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 py-1 text-xs font-semibold text-slate-500">
            <div className="h-px flex-1 bg-slate-200" />
            <span>or</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Sign Up */}
          <Link
            to="/signup"
            className="flex h-9 w-full items-center
             justify-center rounded-md
             bg-linear-to-r from-[#20c3e8] to-[#2670f5]
             text-[12px] font-bold
             text-white shadow-md
             transition-transform duration-200
             hover:scale-[1.02] active:scale-[0.99]"
          >
            SIGN UP
          </Link>
        </form>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}