import { Container } from "../components/container";

const Trusted = () => {
  return (
    <section className="flex w-full items-center justify-center bg-[#FDF7F1] py-24">
      <Container>
        <Content />
      </Container>
    </section>
  );
};

const Content = () => {
  const LOGO_ARRAY = [
    "images/company-image-one.svg",
    "images/company-image-two.svg",
    "images/company-image-three.svg",
    "images/company-image-four.svg",
    "images/company-image-five.svg",
    "images/company-image-six.svg",
  ];
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[18px]">Trusted By Companies</p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-6 lg:gap-0">
        {LOGO_ARRAY.map((logo) => (
          <img src={logo} alt="" />
        ))}
      </div>
    </div>
  );
};

export { Trusted };
