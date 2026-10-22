import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mx-auto mt-10 w-full px-4 pb-8 pt-4 sm:mt-10">
      {/* Footer Links */}
      <nav className="flex flex-col
       items-center justify-center
       gap-3 text-center text-[15px]
       font-medium text-slate-400
       min-[375px]:text-[16px]
       min-[426px]:flex-row
       min-[426px]:gap-12">
        
        <a href="#google-play" className="transition-colors">
          Google Play Store APP
        </a>

        <a href="#app-store" className="transition-colors">
          App Store APP
        </a>

        <a href="#about" className="transition-colors">
          About MyPatientHUB
        </a>

        <a href="#about-us" className="transition-colors">
          About Us
        </a>

        <a href="#blog" className="transition-colors">
          Our Blog
        </a>
      </nav>

      {/* Social Media Icons */}
      <div className="mt-9 flex items-center justify-center gap-5 text-slate-400">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="transition-colors hover:text-[#1877F2]"
        >
          <FaFacebookF size={18} />
        </a>

        <a
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="transition-colors hover:text-[#1DA1F2]"
        >
          <FaTwitter size={18} />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-colors hover:text-[#E4405F]"
        >
          <FaInstagram size={18} />
        </a>

        <a
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
          className="transition-colors hover:text-[#BD081C]"
        >
          <FaPinterest size={18} />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-[#0A66C2]"
        >
          <FaLinkedin size={18} />
        </a>
      </div>

      {/* Copyright */}
      <p className="mb-8 pt-7 text-center text-[16px] text-slate-500">
        Copyright © 2022 MyPiHUB.
      </p>
    </footer>
  );
}