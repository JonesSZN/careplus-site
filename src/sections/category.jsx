import { Container } from "../components/container";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Content = () => {
  const CARDS = [
    {
      image: "images/dogbowl.png",
      heading: "Pet Food",
      description: "Healthy food",
    },
    {
      image: "images/dog.png",
      heading: "Dog Treats",
      description: "Tasty Canine Delights",
    },
    {
      image: "images/food.png",
      heading: "Litter Care",
      description: "Fresh Environment",
    },
    {
      image: "images/couch.png",
      heading: "Crates & Beds",
      description: "Cozy Essentials",
    },
    {
      image: "images/treats.png",
      heading: "Raw Dog Food",
      description: "Senior Dog Formula",
    },
    {
      image: "images/couch2.png",
      heading: "Outdoor Gear",
      description: "Pet-Friendly Bug",
    },
    {
      image: "images/nutrition.png",
      heading: "Puppy Food",
      description: "Nutrition Formula",
    },
    {
      image: "images/dietfood.png",
      heading: "Diet Dog Food",
      description: "Pure Dog Fare",
    },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {CARDS.map((card) => (
        <div className="group relative flex h-[106px] w-full cursor-pointer items-center justify-between gap-4 overflow-hidden rounded-full bg-white px-3 py-4">
          <div className="relative h-full w-1/3">
            <img
              className="absolute bottom-0 left-0 w-full -translate-x-1/4 translate-y-1/4 object-contain"
              src={card.image}
              alt=""
            />
          </div>
          <div className="flex w-2/3 items-center justify-between gap-2">
            <div className="w-full">
              <h2 className="text-[16px] text-[#000000] lg:text-[18px]">
                {card.heading}
              </h2>
              <p className="text-[12px] text-[#333333] lg:text-[14px]">
                {card.description}
              </p>
            </div>
            <div className="p-1">
              <ChevronRight className="size-5 shrink-0 rounded-full border border-gray-500/40 transition-all duration-500 group-hover:bg-[#252F4D] group-hover:text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Category = () => {
  return (
    <section className="flex w-full justify-center bg-[#FDF7F1] py-24">
      <Container>
        <p className="mb-8 text-[26px] lg:text-[36px]">Browse by Category</p>
        <Content />
      </Container>
    </section>
  );
};

export { Category };
