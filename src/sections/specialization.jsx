import { Container } from "../components/container";

const Specialization = () => {
  return (
    <section className="flex w-full justify-center bg-[#FDF7F1] py-24">
      <Container>
        <Content />
      </Container>
    </section>
  );
};

const Content = () => {
  const GRID_CARD = [
    {
      image: "images/nutrition-image.svg",
      heading: "Balanced Nutrition",
      description:
        "Formulated to provide a balanced diet with essential nutrients.",
    },
    {
      image: "images/options-image.svg",
      heading: "Variety of Options",
      description: "Pet food comes in various forms such as dry kibble.",
    },
    {
      image: "images/safety-image.svg",
      heading: "Safety Standards",
      description:
        "Food companies adhere to strict quality & safety standards.",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-0">
        {/* LEFT DIV */}
        <div className="flex flex-col justify-between gap-4 xl:mr-24 xl:gap-9">
          <p className="text-[14px] text-[#333333]">SPECIALIZATION</p>
          <p className="max-w-[500px] text-2xl text-[#333333] xl:text-4xl">
            Safety & Quality Standards
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-3 xl:gap-12">
          {GRID_CARD.map((item) => (
            <div className="flex flex-col">
              <img
                className="mb-2 h-[36px] w-[36px] xl:mb-6 xl:h-[39px] xl:w-[39px]"
                src={item.image}
                alt=""
              />
              <h2 className="mb-1 text-[16px] text-[#000000] xl:text-[18px]">
                {item.heading}
              </h2>
              <p className="text-[14px] text-[#333333] xl:max-w-[260px] xl:text-[16px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Specialization };
