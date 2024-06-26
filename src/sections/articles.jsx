import { Top } from "../components/top";
import { Container } from "../components/container";

const Articles = () => {
  return (
    <section className="flex w-full justify-center bg-[#FDF7F1] py-24">
      <Container>
        <Content />
      </Container>
    </section>
  );
};

const Content = () => {
  const CARD_DATA = [
    {
      image: "images/article-dog-image.jpg",
      heading:
        "The truth about grain-free diets for pets separating fact from fiction",
      description:
        "Delve into the debate surrounding grain-free pet foods, examining scientific evidence, expert opinions, and real-world experiences to provide clarity.",
      date: "MAY1, 2024",
    },
    {
      image: "images/article-food-image.jpg",
      heading:
        "7 indoor activities to keep your pet active during the winter months",
      description:
        "From interactive tosy and puzzle feeders to indoor agility courses and hide-and-seek games, explore creative ways to beat.",
      date: "MAY1, 2024",
    },
    {
      image: "images/article-dog-image-two.jpg",
      heading: "How to keep your pet happy and healthy a comprehensive guide",
      description:
        "Discover expert tips on selecting the right food for your pet's unique needs and learn how to create a balanced diet that promotes optimal health.",
      date: "MAY1, 2024",
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <Top title={"Latest Articles"} />
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {CARD_DATA.map((card) => (
          <div className="group flex cursor-pointer flex-col overflow-hidden rounded-md">
            <img
              className="transform transition duration-500 group-hover:scale-105"
              src={card.image}
              alt=""
            />

            {/* Bottom-Div */}
            <div className="flex flex-col gap-2 bg-white p-8">
              <h2 className="text-[18px] text-black">{card.heading}</h2>
              <p className="mb-8 text-[14px] text-[#333333]">
                {card.description}
              </p>
              <p className="text-[12px] text-[#333333]">{card.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Articles };
