import { Container } from "../components/container";

const Left = () => {
  const LeftTop = () => {
    return (
      <div className="flex h-full flex-col gap-12">
        <p className="max-w-[560px] text-4xl font-semibold md:text-6xl xl:text-7xl">
          Where every pets finds comfort and joy!
        </p>
        <button className="max-w-[190px] rounded-md bg-[#111235] px-7 py-3 text-[14px] text-white transition-all duration-200 hover:bg-[#f4765b]">
          VIEW COLLECTION
        </button>
      </div>
    );
  };
  const BottomTop = () => {
    return (
      <div className="hidden flex-row items-end md:hidden xl:flex">
        <div className="flex flex-col gap-4 rounded-l-[5px] bg-[#f4765b] p-7">
          <h2 className="text-4xl font-semibold text-white">$2M</h2>
          <p className="max-w-[120px] text-[14px] text-white">
            Over $5 million in pet products sold worldwide.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-t-[5px] bg-white p-7">
          <h2 className="text-4xl font-semibold text-black">96%</h2>
          <p className="max-w-[150px] text-[14px] text-[#333333]">
            Our customers report satisfaction with our products.
          </p>
          <div className="flex">
            <img
              className="h-[35px] w-[25px] object-cover"
              src="images/person-1.jpg"
              alt=""
            />
            <img
              className="h-[35px] w-[25px] object-cover"
              src="images/person-2.jpg"
              alt=""
            />
            <img
              className="h-[35px] w-[25px] object-cover"
              src="images/person-3.jpg"
              alt=""
            />
            <img
              className="h-[35px] w-[25px] object-cover"
              src="images/person-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between gap-16">
      <LeftTop />
      <BottomTop />
    </div>
  );
};

const Right = () => {
  return (
    <div className="pb-16">
      <div className="flex items-end gap-4 lg:gap-8">
        <img
          className="h-[146px] w-[122px] rounded-md object-cover md:h-[295px] md:w-[267px] xl:h-[295px] xl:w-[240px]"
          src="images/hero-woman.jpg"
          alt=""
        />
        <img
          className="h-[272px] w-[217px] rounded-md object-cover text-[416px] md:h-[530px] md:w-[475px] xl:h-[530px] xl:w-fit"
          src="images/hero-guy.jpg"
          alt=""
        />
      </div>
      <div className="mt-8 hidden justify-end gap-2 md:hidden xl:flex">
        <div className="flex h-[102px] w-[83px] flex-col justify-between rounded-md bg-white p-2">
          <img className="w-[16px]" src="images/light.svg" alt="" />
          <p className="max-w-[100px] text-[12px] text-[#000000]">
            Best Seller Product
          </p>
        </div>
        <div className="flex gap-0.5">
          <img className="h-full w-[79px]" src="images/pet-bag.jpg" alt="" />
          <div className="rounded-br-md rounded-tr-md bg-white p-5 px-3">
            <p className="text-[16px] text-[#000000]">
              PetPedicure Nail Clippers
            </p>
            <p className="max-w-[220px] text-[12px] text-[#000000]">
              your solution to maintaining your pet's paw perfection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="flex w-full justify-center bg-[#FAEADA] pt-16">
      <Container>
        <div className="flex flex-col gap-16 md:flex-col xl:flex-row">
          <Left />
          <Right />
        </div>
      </Container>
    </section>
  );
};
export { Hero };
