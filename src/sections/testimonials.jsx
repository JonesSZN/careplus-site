import { Container } from "../components/container";
import { ArrowRight, ArrowLeft } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="flex w-full justify-center bg-[#F4765B] py-24">
      <Container>
        <Content />
      </Container>
    </section>
  );
};

const Content = () => {
  const LeftContent = () => {
    const PROFILE_IMAGES = [
      "images/person-1.jpg",
      "images/person-2.jpg",
      "images/person-3.jpg",
      "images/person-4.jpg",
    ];
    const STAR_IMAGES = [
      "images/yellow-star.svg",
      "images/yellow-star.svg",
      "images/yellow-star.svg",
      "images/yellow-star.svg",
      "images/silver-star.svg",
    ];
    return (
      <div className="flex flex-col gap-[60px]">
        {/* Top-Divs */}
        <div className="flex flex-col gap-4">
          <h2 className="max-w-[500px] text-3xl text-white">
            Hear our 6200 customers have to say about their experience
          </h2>
          <p className="max-w-[450px] text-[16px] text-white">
            See why our customers rave about us! Explore real reviews from pet
            lovers just like you. Join the conversation and share your
            experience with our top-rated products!
          </p>
        </div>
        {/* BOTTOM-DIVS */}

        <div className="flex flex-col gap-4">
          <div className="flex">
            {PROFILE_IMAGES.map((image) => (
              <img
                className="h-[32px] w-[32px] rounded-full object-cover"
                src={image}
                alt=""
              />
            ))}
          </div>

          {/* STARS */}
          <div className="flex items-center gap-2">
            {STAR_IMAGES.map((star) => (
              <img className="" src={star} alt="" />
            ))}
            <p className="text-[14px] text-white">4.6(6200 reviews)</p>
          </div>
        </div>
      </div>
    );
  };
  const RightContent = () => {
    return (
      <div className="relative mt-12 rounded-xl bg-white px-[50px] pb-[18px] pl-[18px] pr-[18px] pt-[50px] md:pb-[40px] md:pl-[50px] md:pr-[50px] md:pt-[80px] xl:pb-[40px] xl:pl-[50px] xl:pr-[50px] xl:pt-[80px]">
        <img
          className="absolute -top-8 left-6 h-[50px] w-[50px] rounded-full xl:left-14 xl:h-[80px] xl:w-[80px]"
          src="images/china-profile-image.jpg"
          alt=""
        />
        <div className="absolute -left-4 top-[50%] flex h-[32px] w-[32px] -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border border-neutral-500/10 bg-white text-black transition-all duration-300 hover:bg-[#1D2A4A] hover:text-white xl:h-[40px] xl:w-[40px]">
          <ArrowLeft />
        </div>
        <div className="- absolute -right-4 top-[50%] flex h-[32px] w-[32px] -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border border-neutral-500/10 bg-white text-black transition-all duration-300 hover:bg-[#1D2A4A] hover:text-white xl:h-[40px] xl:w-[40px]">
          <ArrowRight />
        </div>

        <p className="mb-6 max-w-[290px] text-[16px] text-[#333333] xl:max-w-[590px] xl:text-[20px]">
          “I can't thank Pet Paradise enough! Their products have truly
          transformed my pet's life. From their delicious treats to their cozy
          beds, everything is top-notch quality.”
        </p>
        <p className="text-[16px]">Theresa Webb</p>
        <p className="text-[12px] text-[#333333]">Texas, USA</p>
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row xl:flex-row xl:justify-between xl:gap-0">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export { Testimonials };
