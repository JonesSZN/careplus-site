import { Container } from "../components/container";
import { X, Facebook, YoutubeIcon, Instagram, ArrowRight } from "lucide-react";

const Content = () => {
  const SOCIALS = [<X />, <Facebook />, <YoutubeIcon />, <Instagram />];
  return (
    <footer className="flex flex-col gap-8 xl:flex-row">
      {/* LINKS-LEFT */}
      <div className="order-2 flex flex-col gap-4 border-b border-b-neutral-500/30 pb-8 pr-[62px] xl:order-1 xl:border-b-0 xl:border-none xl:py-0 xl:pt-[60px]">
        <p className="text-[16px]">QUICK LINKS</p>
        <div className="grid grid-cols-2 gap-x-24 gap-y-8 xl:grid-cols-3 xl:gap-0">
          <div className="flex flex-col gap-1 text-[14px] text-[#333333]">
            <p className="cursor-pointer transition-all duration-300 hover:text-red-500">
              About us
            </p>
            <p className="cursor-pointer transition-all duration-300 hover:text-red-500">
              Categories
            </p>
            <p className="cursor-pointer transition-all duration-300 hover:text-red-500">
              Shop
            </p>
            <p className="cursor-pointer transition-all duration-300 hover:text-red-500">
              Blogs
            </p>
          </div>

          <div className="flex flex-col gap-1 text-[14px] text-[#333333]">
            <p className="cursor-pointer transition-all duration-300 hover:text-red-500">
              Reviews
            </p>
            <p className="cursor-pointer transition-all duration-300 hover:text-red-500">
              FAQ
            </p>
            <p className="cursor-pointer transition-all duration-300 hover:text-red-500">
              Contact Us
            </p>
          </div>

          <div className="flex flex-col gap-1 text-[14px] text-[#333333]">
            <p className="cursor-pointer transition-all duration-300 hover:text-red-500">
              Privacy Policy
            </p>
            <p className="cursor-pointer transition-all duration-300 hover:text-red-500">
              Return Policy
            </p>
            <p className="cursor-pointer whitespace-nowrap transition-all duration-300 hover:text-red-500">
              Terms & Conditions
            </p>
            <p className="cursor-pointer transition-all duration-300 hover:text-red-500">
              License
            </p>
          </div>
        </div>
      </div>

      {/* SOCIALS-MIDDLE */}
      <div className="order-1 flex flex-col items-center border-b border-b-neutral-500/30 py-8 xl:order-2 xl:border xl:border-b-0 xl:border-l-neutral-500/30 xl:border-r-neutral-500/30 xl:px-[90px] xl:py-[60px]">
        <img className="mb-4 w-[199px]" src="images/logo.svg" alt="" />
        <p className="mb-8 text-center text-[14px] text-[#333333]">
          Tailored solutions for every furry friend.
        </p>
        <div className="flex gap-4">
          {SOCIALS.map((social) => (
            <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#f4765b] text-white transition-all duration-300 hover:bg-[#111235]">
              {social}
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT-DIV */}
      <div className="order-3 flex flex-col pb-8 xl:order-3 xl:w-[30%] xl:pl-[80px] xl:pt-[60px]">
        <h2 className="mb-4 text-[16px]">SUBSCRIBE NEWSLETTER</h2>
        <div className="mb-6 flex items-center justify-between rounded-full bg-white">
          <input
            className="w-full rounded-full py-2 pl-4 placeholder-black outline-none"
            placeholder="Email address"
            type="text"
          />

          <button
            type="submit"
            className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#f4765b] text-white transition-all duration-300 hover:bg-[#111235]"
          >
            <ArrowRight />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <p className="text-[16px] text-[#333333]">
              Email: info@example.com
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-[16px] text-[#333333]">
              Contact: (229) 555-0109
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#F4ECE3]">
      <Container>
        <Content />
      </Container>
      <hr className="w-full border border-neutral-500/10" />
      <div className="flex justify-center py-6">
        <p className="text-[12px] text-[#333333]">
          © 2024 CarePlus. Designed by Nixar. Powered by Webflow.
        </p>
      </div>
    </section>
  );
};
export { Footer };
