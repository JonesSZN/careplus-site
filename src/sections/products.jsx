import { Container } from "../components/container";
import { Top } from "../components/top";

const Content = () => {
  const CARDS = [
    {
      image: "images/bg-couch1.jpg",
      heading: "Adventure Harness",
      description: "$145.00 USD",
    },
    {
      image: "images/bg-nutrients.jpg",
      heading: "Woof Worthy Shampoo",
      description: "$110.00 USD",
    },
    {
      image: "images/bg-dogbowl.jpg",
      heading: "Pet Pedicure Nail Clippers",
      description: "$86.00 USD",
    },
    {
      image: "images/bg-biscuits.jpg",
      heading: "Treat Trove Treats",
      description: "$134.00 USD",
    },
    {
      image: "images/bg-dogfood.jpg",
      heading: "Chow Time Dog Food",
      description: "$120.00 USD",
    },
    {
      image: "images/bg-couch2.jpg",
      heading: "Snack Attack Treats",
      description: "$135.00 USD",
    },
    {
      image: "images/bg-snacks.jpg",
      heading: "Yum Yum Dog Biscuits",
      description: "$140.00 USD",
    },
    {
      image: "images/bg-mix.jpg",
      heading: "Meow Mix Dog Food",
      description: "$100.00 USD",
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <Top title={"Latest Products"} />
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {CARDS.map((card) => (
          <div className="flex flex-col gap-4">
            <img
              className="hover: transform rounded-md transition duration-300 hover:scale-105"
              src={card.image}
              alt=""
            />
            <div>
              <h2 className="text-[14px] text-[#000000] lg:text-[18px]">
                {card.heading}
              </h2>
              <p className="text-[12px] text-[#3333333] lg:text-[14px]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section className="flex w-full justify-center bg-[#FDF7F1] py-24">
      <Container>
        <Content />
      </Container>
    </section>
  );
};

export { Products };
