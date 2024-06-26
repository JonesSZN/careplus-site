import { Container } from "../components/container";
import { Check } from "lucide-react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Content = () => {
  const LeftImage = () => {
    return (
      <div className="lg:w-[50%]">
        <img
          className="h-full w-full"
          src="images/about-left-image.jpg"
          alt=""
        />
      </div>
    );
  };
  const RightContent = () => {
    const GRID_LIST = [
      "Product Quality",
      "Market Expansion",
      "Community Engagement",
      "Brand Awareness",
      "Ethical Sourcing",
    ];

    return (
      <div className="flex flex-col gap-8 lg:w-[50%]">
        <h1 className="text-3xl text-[#000000] lg:text-4xl">About CarePlus.</h1>
        <p className="text-[16px] text-[#333333]">
          Our journey began with a simple idea to create a place where pet
          owners could find everything they need to care for their furry
          companions, all in one convenient location. Since then, we've grown
          into a trusted destination.
        </p>

        {/* GRID-COLS-2 */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {GRID_LIST.map((text) => (
            <div className="flex items-center gap-2">
              <div className="group flex h-6 w-6 items-center justify-center rounded-full border border-black p-1">
                <Check />
              </div>

              <p className="text-[16px] text-[#333333] transition-all duration-300 group-hover:text-[#F4765B]">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="group mb-12 mt-2 flex cursor-pointer items-center gap-2">
          <p className="text-[14px] font-bold text-[#333333] transition-all duration-300 group-hover:text-[#F4765B]">
            About us
          </p>
          <div className="group flex h-6 w-6 items-center justify-center rounded-full border border-black p-1">
            <ArrowUpRight className="cursor-pointer text-black transition-all duration-300 group-hover:text-[#F4765B]" />
          </div>
        </div>

        <div className="flex items-center justify-between bg-white p-4 lg:p-6">
          <div className="flex items-center gap-6 lg:gap-16">
            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] font-bold text-[#333333] lg:text-4xl">
                $2M
              </h2>
              <p className="text-[10px] lg:text-[14px]">
                Pet products sold worldwide.
              </p>
            </div>

            {/* LINE */}
            <div className="h-8 w-[1px] bg-neutral-500/30"></div>

            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] font-bold text-[#333333] lg:text-4xl">
                4.8
              </h2>
              <p className="text-[10px] lg:text-[14px]">Our score rating</p>
            </div>
          </div>
          <div className="cursor-pointer rounded-md bg-[#f4765b] p-3 text-white transition-all duration-300 hover:bg-[#1C1D3F] lg:p-6">
            <ArrowRight className=" " />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
      <LeftImage />
      <RightContent />
    </div>
  );
};

const About = () => {
  return (
    <section className="flex w-full justify-center bg-[#FDF7F1] py-24">
      <Container>
        <Content />
      </Container>
    </section>
  );
};

export { About };
